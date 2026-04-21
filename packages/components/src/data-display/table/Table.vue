<script setup lang="ts">
import { computed, Fragment, type VNode, useSlots } from 'vue';
import type { SortMeta, TableProps } from './table.props';
import type { ColumnProps } from './column.props';
import BPaginator from '../../navigation/paginator/Paginator.vue';

defineOptions({ name: "BTable" });

const slots = useSlots();
const props = withDefaults(defineProps<TableProps>(), {
    value: () => [],
    size: "medium",
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

const emit = defineEmits(['page', 'sort', 'update:first', 'update:rows', 'update:sortField', 'update:sortOrder', 'update:multiSortMeta']);

const d_first = defineModel<number>('first', { default: 0 });
const d_rows = defineModel<number>('rows', { default: 10 });
const d_sortField = defineModel<string>('sortField');
const d_sortOrder = defineModel<number>('sortOrder');
const d_multiSortMeta = defineModel<SortMeta[]>('multiSortMeta', { default: () => [] });

/* --- 1. HELPERS --- */

const resolveFieldData = (data: any, field: string | undefined): any => {
    if (!data || !field) return null;
    if (field.indexOf('.') === -1) return data[field];
    let fields = field.split('.');
    let value = data;
    for (const f of fields) {
        if (value == null) return null;
        value = value[f];
    }
    return value;
};

/* --- 2. COLUMNS DISCOVERY --- */

interface ColumnSlotContext {
    props: ColumnProps;
    slots: { header?: any; body?: any; };
}

const columns = computed(() => {
    const children = slots.default ? slots.default({}) : [];
    const findColumns = (nodes: VNode[]): ColumnSlotContext[] => {
        return nodes.flatMap(node => {
            if (node.type === Fragment && Array.isArray(node.children)) {
                return findColumns(node.children as VNode[]);
            }
            if ((node.type as any)?.name === 'BColumn') {
                const rawProps = (node.props as any) || {};

                return {
                    props: {
                        ...rawProps,
                        sortable: rawProps.sortable === '' ? true : !!rawProps.sortable,
                        hidden: rawProps.hidden === '' ? true : !!rawProps.hidden,
                    } as ColumnProps,
                    slots: (node.children as any) || {}
                };
            }
            return [];
        });
    };
    return findColumns(children).filter(col => !col.props.hidden);
});

/* --- 3. SORTING LOGIC --- */

const getColumnSortOrder = (field: string | undefined) => {
    if (!field) return 0;
    if (props.sortMode === 'single') {
        return d_sortField.value === field ? (d_sortOrder.value || 0) : 0;
    } else {
        const meta = d_multiSortMeta.value.find(m => m.field === field);
        return meta ? meta.order : 0;
    }
};

const onSort = (event: MouseEvent, column: ColumnProps) => {
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
    emit('sort', { field, order: newOrder, multiSortMeta: d_multiSortMeta.value });
};

const sortedData = computed(() => {
    if (!props.value) return [];
    let data = [...props.value];

    const compare = (a: any, b: any, field: string, order: number) => {
        const v1 = resolveFieldData(a, field);
        const v2 = resolveFieldData(b, field);
        let result = (v1 < v2) ? -1 : (v1 > v2) ? 1 : 0;
        return result * order;
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

/* --- 4. PAGINATION & RENDER DATA --- */

const dataToRender = computed(() => {
    const data = sortedData.value;
    if (!props.paginator) return data;
    return data.slice(d_first.value, d_first.value + d_rows.value);
});

const totalRecordsCount = computed(() => props.totalRecords ?? props.value?.length ?? 0);

const onPage = (event: any) => {
    d_first.value = event.first;
    d_rows.value = event.rows;
    emit('page', event);
};

/* --- 5. VISUAL LOGIC --- */

const getRowClass = (row: any) => ["b-table__tr", props.rowClass ? props.rowClass(row) : null];
const getRowStyle = (row: any) => props.rowStyle ? props.rowStyle(row) : null;
const currentPaginatorTemplate = computed(() => props.paginatorTemplate || props.template);

const classes = computed(() => [
    "b-table",
    `b-table--size-${props.size}`,
    {
        "b-table--striped": props.stripedRows,
        "b-table--hover": props.rowHover,
        "b-table--gridlines": props.showGridlines,
        "b-table--loading": props.loading
    }
]);
</script>

<template>
    <div :class="classes">
        <div v-if="$slots.header" class="b-table__header">
            <slot name="header" />
        </div>

        <BPaginator
            v-if="paginator && (paginatorPosition === 'top' || paginatorPosition === 'both')"
            v-model:first="d_first"
            v-model:rows="d_rows"
            :totalRecords="totalRecordsCount"
            :rowsPerPageOptions="rowsPerPageOptions"
            :template="currentPaginatorTemplate"
            :currentPageReportTemplate="currentPageReportTemplate"
            :alwaysShow="alwaysShowPaginator"
            @page="onPage"
        >
            <template #start><slot name="paginatorstart" /></template>
            <template #end><slot name="paginatorend" /></template>
            <template v-if="$slots.paginatorcontainer" #container="slotProps">
                <slot name="paginatorcontainer" v-bind="slotProps" />
            </template>
        </BPaginator>

        <div class="b-table__wrapper">
            <table :class="['b-table__el', tableClass]" :style="tableStyle">
                <thead class="b-table__thead">
                <tr class="b-table__tr">
                    <th
                        v-for="(col, i) in columns" :key="i"
                        :class="['b-table__th', { 'is-sortable': col.props.sortable }]"
                        :style="col.props.style"
                        @click="onSort($event, col.props)"
                    >
                        <div class="b-table__th-content">
                            <component :is="col.slots.header" v-if="col.slots?.header" />
                            <template v-else>{{ col.props.header }}</template>

                            <div v-if="col.props.sortable" class="b-table__sort-icon-group">
                                <svg
                                    v-if="getColumnSortOrder(col.props.field) >= 0"
                                    class="b-table__sort-icon is-up"
                                    :class="{ 'is-active': getColumnSortOrder(col.props.field) === 1 }"
                                    viewBox="0 0 24 12"
                                    preserveAspectRatio="xMidYMid meet"
                                >
                                    <path d="M12 2l10 10H2L12 2z"/>
                                </svg>
                                <svg
                                    v-if="getColumnSortOrder(col.props.field) <= 0"
                                    class="b-table__sort-icon is-down"
                                    :class="{ 'is-active': getColumnSortOrder(col.props.field) === -1 }"
                                    viewBox="0 0 24 12"
                                    preserveAspectRatio="xMidYMid meet"
                                >
                                    <path d="M12 10L2 0h20L12 10z"/>
                                </svg>
                            </div>
                        </div>
                    </th>
                </tr>
                </thead>
                <tbody class="b-table__tbody">
                <template v-if="dataToRender.length">
                    <tr v-for="(row, rowIndex) in dataToRender" :key="dataKey ? row[dataKey] : rowIndex" :class="getRowClass(row)" :style="getRowStyle(row)">
                        <td v-for="(col, colIndex) in columns" :key="colIndex" class="b-table__td" :style="col.props.style">
                            <component
                                :is="col.slots.body"
                                v-if="col.slots?.body"
                                :data="row"
                                :index="rowIndex"
                                :column="col.props"
                            />
                            <template v-else>
                                {{ resolveFieldData(row, col.props.field) }}
                            </template>
                        </td>
                    </tr>
                </template>
                <tr v-else-if="$slots.empty" class="b-table__tr b-table__tr--empty">
                    <td :colspan="columns.length" class="b-table__td">
                        <slot name="empty" />
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

        <BPaginator
            v-if="paginator && (paginatorPosition === 'bottom' || paginatorPosition === 'both')"
            v-model:first="d_first"
            v-model:rows="d_rows"
            :totalRecords="totalRecordsCount"
            :rowsPerPageOptions="rowsPerPageOptions"
            :template="currentPaginatorTemplate"
            :currentPageReportTemplate="currentPageReportTemplate"
            :alwaysShow="alwaysShowPaginator"
            @page="onPage"
        >
            <template #start><slot name="paginatorstart" /></template>
            <template #end><slot name="paginatorend" /></template>
            <template v-if="$slots.paginatorcontainer" #container="slotProps">
                <slot name="paginatorcontainer" v-bind="slotProps" />
            </template>
        </BPaginator>

        <div v-if="$slots.footer" class="b-table__footer">
            <slot name="footer" />
        </div>

        <div v-if="loading" class="b-table__loading-overlay">
            <slot name="loading"><div class="b-table__loading-spinner"></div></slot>
        </div>
    </div>
</template>