<script setup lang="ts">
import { computed, Fragment, type VNode, ref, onMounted, onUnmounted } from 'vue';
import type { DataTableFilterMeta, SortMeta, TableProps } from './table.props';
import type { ColumnProps } from './column.props';
import { FilterService } from "./filter.service";
import BPaginator from '../../navigation/paginator/Paginator.vue';
import BButton from '../../general/button/Button.vue';

defineOptions({ name: "BTable" });

/**
 * Component slots documentation
 */
const slots = defineSlots<{
    /** Default slot expected to contain BColumn components */
    default?: (props: {}) => any;

    /** Custom content for the table header */
    header?: (props: {}) => any;

    /** Custom content for the table footer */
    footer?: (props: {}) => any;

    /** Custom content when no data is available */
    empty?: (props: {}) => any;

    /** Custom content for the loading overlay */
    loading?: (props: {}) => any;

    /** Custom content at the start of the paginator */
    paginatorstart?: (props: {}) => any;

    /** Custom content at the end of the paginator */
    paginatorend?: (props: {}) => any;

    /** Headless container for the paginator */
    paginatorcontainer?: (props: {
        first: number;
        last: number;
        rows: number;
        page: number;
        pageCount: number;
        totalRecords: number;
        firstPageCallback: () => void;
        lastPageCallback: () => void;
        prevPageCallback: () => void;
        nextPageCallback: () => void;
        rowChangeCallback: (value: number) => void;
    }) => any;

    /** Custom content for the filter clear button in menu mode */
    filterclear?: (props: { field: string | undefined; filterCallback: () => void }) => any;

    /** Custom content for the filter apply button in menu mode */
    filterapply?: (props: { field: string | undefined; filterCallback: () => void }) => any;
}>();

const props = withDefaults(defineProps<TableProps>(), {
    value: () => [],
    size: "medium",
    filterDisplay: undefined,
    globalFilterFields: () => [],
    loading: false,
    stripedRows: false,
    rowHover: false,
    showGridlines: false,
    paginator: false,
    paginatorPosition: "bottom",
    alwaysShowPaginator: true,
    rows: 10,
    first: 0,
    pageLinkSize: 5,
    sortMode: "single",
    removableSort: false,
});

const emit = defineEmits(['update:filters', 'filter', 'page', 'sort', 'update:first', 'update:rows', 'update:sortField', 'update:sortOrder', 'update:multiSortMeta']);

const d_filters = defineModel<DataTableFilterMeta>('filters', { default: () => ({}) });
const d_first = defineModel<number>('first', { default: 0 });
const d_rows = defineModel<number>('rows', { default: 10 });
const d_sortField = defineModel<string>('sortField');
const d_sortOrder = defineModel<number>('sortOrder');
const d_multiSortMeta = defineModel<SortMeta[]>('multiSortMeta', { default: () => [] });

/* --- 1. OPTIMIZED HELPERS --- */

const fieldCache: Record<string, string[]> = {};
const resolveFieldData = (data: any, field: string | undefined): any => {
    if (!data || !field) return null;
    if (!field.includes('.')) return data[field];

    // Cache the split path to improve performance during large loops
    if (!fieldCache[field]) fieldCache[field] = field.split('.');
    return fieldCache[field].reduce((obj, key) => (obj && obj[key] !== undefined ? obj[key] : null), data);
};

/* --- 2. FILTER MENU LOGIC --- */

const activeFilterMenuField = ref<string | null>(null);

const toggleFilterMenu = (event: MouseEvent, field: string) => {
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

onMounted(() => document.addEventListener('click', handleOutsideClick));
onUnmounted(() => document.removeEventListener('click', handleOutsideClick));

/* --- 3. DATA PROCESSING --- */

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

/* --- 4. COLUMN DISCOVERY --- */

interface ColumnSlotContext {
    props: ColumnProps;
    slots: Record<string, any>;
}

const columns = computed(() => {
    const children = slots.default ? slots.default({}) : [];
    const findColumns = (nodes: VNode[]): ColumnSlotContext[] => {
        return nodes.flatMap(node => {
            if (node.type === Fragment && Array.isArray(node.children)) return findColumns(node.children as VNode[]);
            if ((node.type as any)?.name === 'BColumn') {
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

/* --- 5. PAGINATOR PROPS HELPER --- */

const paginatorProps = computed(() => ({
    totalRecords: totalRecordsCount.value,
    rowsPerPageOptions: props.rowsPerPageOptions,
    template: props.paginatorTemplate || props.template,
    currentPageReportTemplate: props.currentPageReportTemplate,
    alwaysShow: props.alwaysShowPaginator,
    pageLinkSize: props.pageLinkSize
}));

/* --- 6. HANDLERS --- */

const filterCallback = () => { d_first.value = 0; emit('filter', { filters: d_filters.value }); };

const getColumnSortOrder = (field: string | undefined) => {
    if (!field) return 0;
    return props.sortMode === 'single'
        ? (d_sortField.value === field ? (d_sortOrder.value || 0) : 0)
        : (d_multiSortMeta.value.find(m => m.field === field)?.order || 0);
};

const onSort = (event: MouseEvent, column: ColumnProps) => {
    const target = event.target as HTMLElement;
    if (target.closest('.b-table__filter-menu-container')) return;
    if (!column.sortable || !column.field) return;

    const field = column.field;
    const currentOrder = getColumnSortOrder(field);
    let newOrder = currentOrder === 0 ? 1 : currentOrder === 1 ? -1 : props.removableSort ? 0 : 1;

    if (props.sortMode === 'single') {
        d_sortField.value = newOrder === 0 ? undefined : field;
        d_sortOrder.value = newOrder === 0 ? undefined : newOrder;
    } else {
        let meta = [...d_multiSortMeta.value];
        const index = meta.findIndex(m => m.field === field);
        if (!event.metaKey && !event.ctrlKey) {
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

        <!-- REUSABLE PAGINATOR BLOCK -->
        <BPaginator
            v-if="paginator && (paginatorPosition === 'top' || paginatorPosition === 'both')"
            v-model:first="d_first" v-model:rows="d_rows" v-bind="paginatorProps" @page="onPage"
        >
            <template #start><slot name="paginatorstart"/></template>
            <template #end><slot name="paginatorend"/></template>
            <template v-if="$slots.paginatorcontainer" #container="slotProps"><slot name="paginatorcontainer" v-bind="slotProps"/></template>
        </BPaginator>

        <div class="b-table__wrapper">
            <table :class="['b-table__el', tableClass]" :style="tableStyle">
                <thead class="b-table__thead">
                <tr class="b-table__tr">
                    <th v-for="col in columns" :key="col.props.field || col.props.header"
                        :class="['b-table__th', { 'is-sortable': col.props.sortable }]"
                        :style="col.props.style" @click="onSort($event, col.props)"
                    >
                        <div class="b-table__th-content">
                            <div class="b-table__header-label">
                                <component :is="col.slots.header" v-if="col.slots?.header" />
                                <template v-else>{{ col.props.header }}</template>
                            </div>

                            <!-- Sorting Icons (Large) -->
                            <div v-if="col.props.sortable" class="b-table__sort-icon-group">
                                <svg v-if="getColumnSortOrder(col.props.field) >= 0" class="b-table__sort-icon is-up" :class="{ 'is-active': getColumnSortOrder(col.props.field) === 1 }" viewBox="0 0 24 12"><path d="M12 2l10 10H2L12 2z"/></svg>
                                <svg v-if="getColumnSortOrder(col.props.field) <= 0" class="b-table__sort-icon is-down" :class="{ 'is-active': getColumnSortOrder(col.props.field) === -1 }" viewBox="0 0 24 12"><path d="M12 10L2 0h20L12 10z"/></svg>
                            </div>

                            <!-- Filter Menu -->
                            <div v-if="filterDisplay === 'menu' && col.slots.filter" class="b-table__filter-menu-container">
                                <button type="button" class="b-table__filter-menu-button" :class="{ 'is-active': activeFilterMenuField === (col.props.filterField || col.props.field) }" @click="toggleFilterMenu($event, col.props.filterField || col.props.field!)">
                                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M3 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v2c0 .5-.2 1-.6 1.4L15 13v7a1 1 0 0 1-1.4.9l-4-2c-.4-.2-.6-.6-.6-.9v-5L3.6 7.4A2 2 0 0 1 3 6V4z"/></svg>
                                </button>
                                <div v-if="activeFilterMenuField === (col.props.filterField || col.props.field)" class="b-table__filter-popover">
                                    <div class="b-table__filter-popover-content">
                                        <component :is="col.slots.filter" :filterModel="d_filters[col.props.filterField || col.props.field!]" :filterCallback="filterCallback" />
                                    </div>
                                    <div class="b-table__filter-popover-footer">
                                        <slot
                                            name="filterclear"
                                            :field="col.props.field"
                                            :filterCallback="() => clearColumnFilter(col.props.field ?? '')"
                                        >
                                            <BButton
                                                label="Clear"
                                                size="small"
                                                variant="text"
                                                severity="secondary"
                                                @click="clearColumnFilter(col.props.field ?? '')"
                                            />
                                        </slot>

                                        <slot
                                            name="filterapply"
                                            :field="col.props.field"
                                            :filterCallback="filterCallback"
                                        >
                                            <BButton
                                                label="Apply"
                                                size="small"
                                                @click="filterCallback(); activeFilterMenuField = null;"
                                            />
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
                        :class="['b-table__tr', rowClass?.(row)]" :style="rowStyle?.(row)">
                        <td v-for="(col, colIndex) in columns" :key="colIndex" class="b-table__td" :style="col.props.style">
                            <component :is="col.slots.body" v-if="col.slots?.body" :data="row" :index="rowIndex" :column="col.props" />
                            <template v-else>{{ resolveFieldData(row, col.props.field) }}</template>
                        </td>
                    </tr>
                </template>
                <tr v-else-if="$slots.empty" class="b-table__tr b-table__tr--empty"><td :colspan="columns.length" class="b-table__td"><slot name="empty"/></td></tr>
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