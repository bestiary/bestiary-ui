<script setup lang="ts">
import type { ColumnProps } from './column.props';

defineOptions({
    name: 'BColumn',
    render: () => null
});

defineProps<ColumnProps>();

defineSlots<{
    header?: (props: Record<string, never>) => any;
    body?: (props: { data: any, column: ColumnProps, index: number }) => any;
    filter?: (props: { filterModel: any, filterCallback: () => void }) => any;
    filterclear?: (props: { filterCallback: () => void }) => any;
    filterapply?: (props: { filterCallback: () => void }) => any;
    filterfooter?: (props: Record<string, never>) => any;
}>();
</script>