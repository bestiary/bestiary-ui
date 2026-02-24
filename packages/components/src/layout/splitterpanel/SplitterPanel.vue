<template>
    <div :class="classes" :style="panelStyle">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { computed, useSlots, VNode } from "vue";
import { splitterPanelProps } from "./splitterpanel.types.ts";

defineOptions({ name: "BSplitterPanel" });

const props = defineProps(splitterPanelProps);
const slots = useSlots();

const isNested = computed(() => {
    const children = slots.default?.() || [];
    return children.some((vnode: VNode) => {
        const type = vnode.type as any;
        return type.name === "BSplitter";
    });
});

const panelStyle = computed(() => ({
    flexBasis: props.size ? `${props.size}%` : undefined
}));

const classes = computed(() => [
    "b-splitter-panel",
    {
        "b-splitter-panel--nested": isNested.value,
    }
]);
</script>