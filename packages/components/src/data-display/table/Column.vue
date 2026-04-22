<script setup lang="ts">
import type { ColumnProps } from "./column.props";

defineOptions({
    name: "BColumn",
    render: () => null
});

defineProps<ColumnProps>();

/**
 * Component slots documentation
 */
defineSlots<{
    /** Custom content for the column header */
    header?: (props: {}) => any;
    /** Custom content for the cell body */
    body?: (props: { data: any, column: ColumnProps, index: number }) => any;
    /** Custom content for the filter UI */
    filter?: (props: { filterModel: any, filterCallback: () => void }) => any;
    /** Custom content for the filter clear button */
    filterclear?: (props: { filterCallback: () => void }) => any;
    /** Custom content for the filter apply button */
    filterapply?: (props: { filterCallback: () => void }) => any;
    /** Custom content for the filter menu footer */
    filterfooter?: (props: {}) => any;
}>();
</script>