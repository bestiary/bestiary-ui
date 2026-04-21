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
}>();
</script>