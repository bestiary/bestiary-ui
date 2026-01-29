<template>
    <div :class="classes" :style="panelStyle">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from "vue";
import { splitterPanelProps } from "./splitterpanel.types";

defineOptions({ name: "BSplitterPanel" });

const props = defineProps(splitterPanelProps);

const slots = useSlots();
const isNested = computed(() => slots.default?.().some(vnode => (vnode.type as any).name === "BSplitter"));

const panelStyle = computed(() => ({
    flexBasis: props.size ? `${props.size}%` : undefined
}));

const classes = computed(() => {
    return [
        "b-splitter-panel",
        {
            ["b-splitter-panel--nested"]: isNested,
        }
    ]
});
</script>