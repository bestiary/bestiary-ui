<template>
    <div :class="classes">
        <!-- Global Header -->
        <div v-if="$slots.header" class="b-data-table__header">
            <slot name="header" />
        </div>

        <div class="b-data-table__wrapper">
            <table :style="tableStyle" :class="tableClass">
                <thead>
                <tr>
                    <th v-for="(col, i) in columns" :key="i" :style="col.props?.style">
                        <component :is="col.children.header" v-if="col.children?.header" />
                        <template v-else>{{ col.props?.header }}</template>
                    </th>
                </tr>
                </thead>
                <tbody>
                <template v-if="value && value.length">
                    <tr v-for="(row, rowIndex) in value" :key="dataKey ? row[dataKey] : rowIndex">
                        <td v-for="(col, colIndex) in columns" :key="colIndex">
                            <!-- Body Slot (Scoped) -->
                            <component
                                :is="col.children.body"
                                v-if="col.children?.body"
                                :data="row"
                                :index="rowIndex"
                                :column="col.props"
                            />
                            <template v-else>
                                {{ row[col.props?.field] }}
                            </template>
                        </td>
                    </tr>
                </template>
                <!-- Empty State -->
                <tr v-else-if="$slots.empty">
                    <td :colspan="columns.length">
                        <slot name="empty" />
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

        <!-- Global Footer -->
        <div v-if="$slots.footer" class="b-data-table__footer">
            <slot name="footer" />
        </div>

        <!-- Loading Overlay -->
        <div v-if="loading" class="b-data-table__loading">
            <!-- Тут можна вставити свій BProgress чи Spinner -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, useSlots, VNode } from 'vue';
import { tableProps } from './table.props.ts';
import "./table.css";

defineOptions({ name: "BTable" });
const props = defineProps(tableProps);
const slots = useSlots();

const columns = computed(() => {
    const children = slots.default?.() || [];
    const flatColumns: any[] = [];

    const findColumns = (nodes: VNode[]) => {
        nodes.forEach(node => {
            if (node.type && (node.type as any).name === 'BColumn') {
                flatColumns.push(node);
            } else if (node.children && Array.isArray(node.children)) {
                findColumns(node.children as VNode[]);
            }
        });
    };

    findColumns(children);
    return flatColumns;
});

const classes = computed(() => [
    "b-data-table",
    `b-data-table--size-${props.size}`,
    {
        "b-data-table--striped": props.stripedRows,
        "b-data-table--hover": props.rowHover,
        "b-data-table--gridlines": props.showGridlines,
        "b-data-table--loading": props.loading
    }
]);
</script>