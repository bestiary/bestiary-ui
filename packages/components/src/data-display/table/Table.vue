<script setup lang="ts">
import { computed, Fragment, type VNode, ref, onUnmounted, watch } from 'vue';
import type { DataTableFilterMeta, SortMeta, TableProps } from './table.props';
import type { ColumnProps } from './column.props';
import { FilterService } from './filter.service';
import BPaginator from '../../navigation/paginator/Paginator.vue';
import BButton from '../../general/button/Button.vue';

defineOptions({ name: 'BTable' });

const props = withDefaults(defineProps<TableProps>(), {
    value: () => [],
    size: 'medium',
    globalFilterFields: () => [],
    loading: false,
    stripedRows: false,
    rowHover: false,
    showGridlines: false,
    paginator: false,
    paginatorPosition: 'bottom',
    alwaysShowPaginator: true,
    rows: 10,
    first: 0,
    pageLinkSize: 5,
    sortMode: 'single',
    removableSort: false,
    metaKeySelection: false
});

const emit = defineEmits([
    'update:filters', 'filter', 'page', 'sort', 'update:first',
    'update:rows', 'update:sortField', 'update:sortOrder',
    'update:multiSortMeta', 'update:selection', 'row-select',
    'row-unselect', 'row-click'
]);

const d_filters = defineModel<DataTableFilterMeta>('filters', { default: () => ({}) });
const d_first = defineModel<number>('first', { default: 0 });
const d_rows = defineModel<number>('rows', { default: 10 });
const d_sortField = defineModel<string>('sortField');
const d_sortOrder = defineModel<number>('sortOrder');
const d_multiSortMeta = defineModel<SortMeta[]>('multiSortMeta', { default: () => [] });
const d_selection = defineModel<any | any[]>('selection');

const slots = defineSlots<any>();

/* --- Optimized Data Resolver --- */
const fieldCache = new Map<string, string[]>();
const resolveFieldData = (data: any, field: string | undefined): any => {
    if (!data || !field) return null;
    if (!field.includes('.')) return data[field];

    if (!fieldCache.has(field)) fieldCache.set(field, field.split('.'));
    const path = fieldCache.get(field)!;

    let obj = data;
    for (let i = 0, len = path.length; i < len; i++) {
        obj = obj[path[i]];
        if (obj == null) return null;
    }
    return obj;
};

/* --- Column Discovery --- */
interface ColumnSlotContext {
    props: ColumnProps;
    slots: Record<string, any>;
}

const columns = computed(() => {
    const children = slots.default ? slots.default({}) : [];
    const findColumns = (nodes: VNode[]): ColumnSlotContext[] => {
        return nodes.flatMap(node => {
            if (node.type === Fragment && Array.isArray(node.children)) return findColumns(node.children as VNode[]);

            const type = node.type as any;
            const name = type?.name || type?.__name;

            if (name === 'BColumn') {
                const rawProps = (node.props as any) || {};
                return {
                    props: { ...rawProps, sortable: rawProps.sortable === '' ? true : !!rawProps.sortable } as ColumnProps,
                    slots: (node.children as any) || {}
                };
            }
            return [];
        });
    };
    return findColumns(children).filter(col => !col.props.hidden);
});

/* --- Filter Menu Logic --- */
const activeFilterMenuField = ref<string | null>(null);

const toggleFilterMenu = (event: Event, field: string) => {
    event.stopPropagation();
    activeFilterMenuField.value = activeFilterMenuField.value === field ? null : field;
};

const clearColumnFilter = (field: string) => {
    const filter = d_filters.value[field];
    if (filter) {
        if ('constraints' in filter) filter.constraints.forEach((c: any) => c.value = null);
        else (filter as any).value = null;
    }
    filterCallback();
};

const handleOutsideClick = (event: MouseEvent) => {
    if (!activeFilterMenuField.value) return;
    const target = event.target as HTMLElement;
    if (target && document.body.contains(target) && !target.closest('.b-table__filter-menu-container')) {
        activeFilterMenuField.value = null;
    }
};

watch(activeFilterMenuField, (newVal) => {
    if (newVal) document.addEventListener('click', handleOutsideClick, { passive: true });
    else document.removeEventListener('click', handleOutsideClick);
});

onUnmounted(() => document.removeEventListener('click', handleOutsideClick));

/* --- Data Processing --- */
const filteredData = computed(() => FilterService.filter(props.value, d_filters.value, props.globalFilterFields, resolveFieldData));

const sortedData = computed(() => {
    let data = [...filteredData.value];
    const compare = (a: any, b: any, field: string, order: number) => {
        const v1 = resolveFieldData(a, field);
        const v2 = resolveFieldData(b, field);
        return (v1 < v2 ? -1 : v1 > v2 ? 1 : 0) * order;
    };

    if (props.sortMode === 'single' && d_sortField.value) {
        data.sort((a, b) => compare(a, b, d_sortField.value!, d_sortOrder.value || 1));
    } else if (props.sortMode === 'multiple' && d_multiSortMeta.value.length) {
        data.sort((a, b) => {
            for (const meta of d_multiSortMeta.value) {
                const res = compare(a, b, meta.field, meta.order);
                if (res !== 0) return res;
            }
            return 0;
        });
    }
    return data;
});

const dataToRender = computed(() => props.paginator ? sortedData.value.slice(d_first.value, d_first.value + d_rows.value) : sortedData.value);
const totalRecordsCount = computed(() => props.totalRecords ?? filteredData.value.length);

/* --- SELECTION LOGIC --- */
const computedSelectionMode = computed(() => {
    if (props.selectionMode) return props.selectionMode;
    const selCol = columns.value.find(c => c.props.selectionMode);
    return selCol ? selCol.props.selectionMode : null;
});

const isSelected = (row: any) => {
    if (d_selection.value == null) return false;

    if (computedSelectionMode.value === 'multiple' || Array.isArray(d_selection.value)) {
        return (d_selection.value as any[]).some(selectedRow =>
            props.dataKey ? selectedRow[props.dataKey] === row[props.dataKey] : selectedRow === row
        );
    }

    return props.dataKey
        ? d_selection.value[props.dataKey] === row[props.dataKey]
        : d_selection.value === row;
};

const allSelected = computed(() => {
    if (!dataToRender.value.length || !Array.isArray(d_selection.value)) return false;
    return dataToRender.value.every(row => isSelected(row));
});

const toggleAll = () => {
    if (computedSelectionMode.value !== 'multiple') return;

    let selection = Array.isArray(d_selection.value) ? [...d_selection.value] : [];

    if (allSelected.value) {
        dataToRender.value.forEach(row => {
            selection = selection.filter(r => props.dataKey ? r[props.dataKey] !== row[props.dataKey] : r !== row);
        });
    } else {
        dataToRender.value.forEach(row => {
            if (!isSelected(row)) selection.push(row);
        });
    }

    d_selection.value = selection;
};

const onRowClick = (row: any, event: MouseEvent) => {
    emit('row-click', { originalEvent: event, data: row });

    if (!computedSelectionMode.value) return;

    const target = event.target as HTMLElement;
    // Ігноруємо кліки по активних елементах всередині рядка (окрім наших чекбоксів/радіо)
    if (!target.closest('.b-table__checkbox') && !target.closest('.b-table__radio')) {
        if (['BUTTON', 'INPUT', 'A', 'SELECT', 'TEXTAREA'].includes(target.tagName)) {
            return;
        }
    }

    const selected = isSelected(row);
    const metaKey = event.metaKey || event.ctrlKey;
    const mode = computedSelectionMode.value;

    if (mode === 'multiple') {
        let selection = Array.isArray(d_selection.value) ? [...d_selection.value] : [];

        if (props.metaKeySelection) {
            if (metaKey) {
                if (selected) {
                    selection = selection.filter(r => props.dataKey ? r[props.dataKey] !== row[props.dataKey] : r !== row);
                    emit('row-unselect', { originalEvent: event, data: row });
                } else {
                    selection.push(row);
                    emit('row-select', { originalEvent: event, data: row });
                }
            } else {
                selection = [row];
                emit('row-select', { originalEvent: event, data: row });
            }
        } else {
            if (selected) {
                selection = selection.filter(r => props.dataKey ? r[props.dataKey] !== row[props.dataKey] : r !== row);
                emit('row-unselect', { originalEvent: event, data: row });
            } else {
                selection.push(row);
                emit('row-select', { originalEvent: event, data: row });
            }
        }
        d_selection.value = selection;
    }
    else if (mode === 'single') {
        if (selected && props.metaKeySelection && metaKey) {
            d_selection.value = null;
            emit('row-unselect', { originalEvent: event, data: row });
        } else {
            d_selection.value = row;
            emit('row-select', { originalEvent: event, data: row });
        }
    }
};

/* --- Helpers & Handlers --- */
const paginatorProps = computed(() => ({
    totalRecords: totalRecordsCount.value,
    rowsPerPageOptions: props.rowsPerPageOptions,
    template: props.paginatorTemplate || props.template,
    currentPageReportTemplate: props.currentPageReportTemplate,
    alwaysShow: props.alwaysShowPaginator,
    pageLinkSize: props.pageLinkSize
}));

const filterCallback = () => { d_first.value = 0; emit('filter', { filters: d_filters.value }); };

const getColumnSortOrder = (field: string | undefined) => {
    if (!field) return 0;
    return props.sortMode === 'single'
        ? (d_sortField.value === field ? (d_sortOrder.value || 0) : 0)
        : (d_multiSortMeta.value.find(m => m.field === field)?.order || 0);
};

const getAriaSort = (field: string | undefined) => {
    const order = getColumnSortOrder(field);
    return order === 1 ? 'ascending' : order === -1 ? 'descending' : 'none';
};

const onSort = (event: Event, column: ColumnProps) => {
    const target = event.target as HTMLElement;
    if (target.closest('.b-table__filter-menu-container') || target.closest('.b-table__checkbox')) return;
    if (!column.sortable || !column.field) return;

    const field = column.field;
    const currentOrder = getColumnSortOrder(field);
    let newOrder = currentOrder === 0 ? 1 : currentOrder === 1 ? -1 : props.removableSort ? 0 : 1;

    if (props.sortMode === 'single') {
        d_sortField.value = newOrder === 0 ? undefined : field;
        d_sortOrder.value = newOrder === 0 ? undefined : newOrder;
    } else {
        const mouseEvent = event as MouseEvent;
        let meta = [...d_multiSortMeta.value];
        const index = meta.findIndex(m => m.field === field);
        if (!mouseEvent.metaKey && !mouseEvent.ctrlKey) {
            meta = newOrder === 0 ? [] : [{ field, order: newOrder }];
        } else {
            if (index !== -1) {
                if (newOrder === 0) meta.splice(index, 1);
                else meta[index].order = newOrder;
            } else if (newOrder !== 0) {
                meta.push({ field, order: newOrder });
            }
        }
        d_multiSortMeta.value = meta;
    }
    emit('sort', { field, order: newOrder });
};

const onPage = (event: any) => {
    d_first.value = event.first;
    d_rows.value = event.rows;
    emit('page', event);
};
</script>

<template>
    <div :class="[ 'b-table', `b-table--size-${size}`, { 'b-table--striped': stripedRows, 'b-table--hover': rowHover, 'b-table--gridlines': showGridlines, 'b-table--loading': loading }]">
        <div v-if="$slots.header" class="b-table__header"><slot name="header" /></div>

        <BPaginator
            v-if="paginator && (paginatorPosition === 'top' || paginatorPosition === 'both')"
            v-model:first="d_first" v-model:rows="d_rows" v-bind="paginatorProps" @page="onPage"
        >
            <template #start><slot name="paginatorstart"/></template>
            <template #end><slot name="paginatorend"/></template>
            <template v-if="$slots.paginatorcontainer" #container="slotProps"><slot name="paginatorcontainer" v-bind="slotProps"/></template>
        </BPaginator>

        <div class="b-table__wrapper">
            <table :class="['b-table__el', tableClass]" :style="tableStyle" role="table">
                <thead class="b-table__thead">
                <tr class="b-table__tr">
                    <th v-for="col in columns" :key="col.props.field || col.props.header || Math.random()"
                        :class="['b-table__th', { 'b-table__th--sortable': col.props.sortable }]"
                        :style="col.props.style"
                        role="columnheader"
                        :aria-sort="col.props.sortable ? getAriaSort(col.props.field) : undefined"
                        :tabindex="col.props.sortable ? 0 : undefined"
                        @click="col.props.sortable ? onSort($event, col.props) : null"
                        @keydown.enter.prevent="col.props.sortable ? onSort($event, col.props) : null"
                    >
                        <div class="b-table__th-content">
                            <!-- SELECTION ALL CHECKBOX -->
                            <div v-if="col.props.selectionMode === 'multiple'"
                                 class="b-table__checkbox"
                                 :class="{ 'b-table__checkbox--checked': allSelected }"
                                 @click.stop="toggleAll">
                                <svg v-if="allSelected" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>
                            </div>

                            <div v-else class="b-table__header-label">
                                <component :is="col.slots.header" v-if="col.slots?.header" />
                                <template v-else>{{ col.props.header }}</template>
                            </div>

                            <!-- SORT ICON -->
                            <div v-if="col.props.sortable" class="b-table__sort-icon-group" aria-hidden="true">
                                <svg v-if="getColumnSortOrder(col.props.field) >= 0" class="b-table__sort-icon b-table__sort-icon--up" :class="{ 'b-table__sort-icon--active': getColumnSortOrder(col.props.field) === 1 }" viewBox="0 0 24 12"><path d="M12 2l10 10H2L12 2z"/></svg>
                                <svg v-if="getColumnSortOrder(col.props.field) <= 0" class="b-table__sort-icon b-table__sort-icon--down" :class="{ 'b-table__sort-icon--active': getColumnSortOrder(col.props.field) === -1 }" viewBox="0 0 24 12"><path d="M12 10L2 0h20L12 10z"/></svg>
                            </div>

                            <!-- FILTER MENU -->
                            <div v-if="filterDisplay === 'menu' && col.slots.filter" class="b-table__filter-menu-container">
                                <button type="button"
                                        class="b-table__filter-menu-button"
                                        :class="{ 'b-table__filter-menu-button--active': activeFilterMenuField === (col.props.filterField || col.props.field) }"
                                        aria-haspopup="true"
                                        :aria-expanded="activeFilterMenuField === (col.props.filterField || col.props.field)"
                                        @click="toggleFilterMenu($event, col.props.filterField || col.props.field!)">
                                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M3 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v2c0 .5-.2 1-.6 1.4L15 13v7a1 1 0 0 1-1.4.9l-4-2c-.4-.2-.6-.6-.6-.9v-5L3.6 7.4A2 2 0 0 1 3 6V4z"/></svg>
                                </button>

                                <div v-if="activeFilterMenuField === (col.props.filterField || col.props.field)" class="b-table__filter-popover" @click.stop>
                                    <div class="b-table__filter-popover-content">
                                        <component :is="col.slots.filter" :filterModel="d_filters[col.props.filterField || col.props.field!]" :filterCallback="filterCallback" />
                                    </div>
                                    <div class="b-table__filter-popover-footer">
                                        <slot name="filterclear" :field="col.props.field" :filterCallback="() => clearColumnFilter(col.props.field ?? '')">
                                            <BButton label="Clear" size="small" variant="text" severity="secondary" @click="clearColumnFilter(col.props.field ?? '')" />
                                        </slot>
                                        <slot name="filterapply" :field="col.props.field" :filterCallback="filterCallback">
                                            <BButton label="Apply" size="small" @click="filterCallback(); activeFilterMenuField = null;" />
                                        </slot>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </th>
                </tr>
                <tr v-if="filterDisplay === 'row'" class="b-table__tr b-table__tr--filter">
                    <td v-for="(col, i) in columns" :key="i" class="b-table__td b-table__td--filter">
                        <component :is="col.slots.filter" v-if="col.slots.filter" :filterModel="d_filters[col.props.filterField || col.props.field!]" :filterCallback="filterCallback" />
                    </td>
                </tr>
                </thead>
                <tbody class="b-table__tbody">
                <template v-if="dataToRender.length">
                    <tr v-for="(row, rowIndex) in dataToRender" :key="dataKey ? row[dataKey] : rowIndex"
                        :class="[
                            'b-table__tr',
                            rowClass?.(row),
                            { 'b-table__tr--selected': isSelected(row), 'b-table__tr--selectable': computedSelectionMode }
                        ]"
                        :style="rowStyle?.(row)"
                        :aria-selected="isSelected(row) ? 'true' : undefined"
                        @click="onRowClick(row, $event)">

                        <td v-for="(col, colIndex) in columns" :key="colIndex" class="b-table__td" :style="col.props.style">

                            <!-- SELECTION ROW CHECKBOX/RADIO -->
                            <template v-if="col.props.selectionMode === 'multiple'">
                                <div class="b-table__checkbox" :class="{ 'b-table__checkbox--checked': isSelected(row) }">
                                    <svg v-if="isSelected(row)" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>
                                </div>
                            </template>

                            <template v-else-if="col.props.selectionMode === 'single'">
                                <div class="b-table__radio" :class="{ 'b-table__radio--checked': isSelected(row) }">
                                    <div v-if="isSelected(row)" class="b-table__radio-inner"></div>
                                </div>
                            </template>

                            <!-- STANDARD CONTENT -->
                            <template v-else>
                                <component :is="col.slots.body" v-if="col.slots?.body" :data="row" :index="rowIndex" :column="col.props" />
                                <template v-else>{{ resolveFieldData(row, col.props.field) }}</template>
                            </template>

                        </td>
                    </tr>
                </template>
                <tr v-else class="b-table__tr b-table__tr--empty">
                    <td :colspan="columns.length" class="b-table__td">
                        <slot name="empty">No records found</slot>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

        <BPaginator
            v-if="paginator && (paginatorPosition === 'bottom' || paginatorPosition === 'both')"
            v-model:first="d_first" v-model:rows="d_rows" v-bind="paginatorProps" @page="onPage"
        >
            <template #start><slot name="paginatorstart"/></template>
            <template #end><slot name="paginatorend"/></template>
            <template v-if="$slots.paginatorcontainer" #container="slotProps"><slot name="paginatorcontainer" v-bind="slotProps"/></template>
        </BPaginator>

        <div v-if="$slots.footer" class="b-table__footer"><slot name="footer" /></div>
        <div v-if="loading" class="b-table__loading-overlay"><slot name="loading"><div class="b-table__loading-spinner"></div></slot></div>
    </div>
</template>