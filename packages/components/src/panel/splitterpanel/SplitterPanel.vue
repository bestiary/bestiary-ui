<template>
    <div :class="classes" :style="panelStyle">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { computed, useSlots, VNode, Slots } from "vue";
import { splitterPanelProps } from "./splitterpanel.types";

defineOptions({ 
    name: "BSplitterPanel",
    __BESTIARY_SPLITTER_PANEL__: true
});

const props = defineProps(splitterPanelProps);

const slots = useSlots() as Slots;
const isNested = computed(() => {
    if (!slots.default) return false;
    return (slots.default({}) as VNode[]).some((vnode: VNode) => (vnode.type as any)?.name === "BSplitter");
});

const panelStyle = computed(() => ({
    flexBasis: props.size ? `${props.size}%` : undefined
}));

const classes = computed(() => {
    return [
        "b-splitter-panel",
        {
            ["b-splitter-panel--nested"]: isNested.value,
        }
    ]
});
</script>