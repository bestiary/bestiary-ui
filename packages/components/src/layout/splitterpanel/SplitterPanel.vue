<template>
    <div :class="classes" :style="panelStyle">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { computed, Fragment, type VNode } from "vue";
import { SplitterPanelProps } from "./splitterpanel.props";

defineOptions({ name: "BSplitterPanel" });

/**
 * Component slots documentation
 */
const slots = defineSlots<{
    /** Content of the panel, can include another BSplitter for nested layouts */
    default?: (props: {}) => any;
}>();

const props = withDefaults(defineProps<SplitterPanelProps>(), {
    size: undefined,
    minSize: 0
});

/**
 * Determines if the panel contains another BSplitter component.
 * Used to apply specific styles for nested layouts (e.g., removing borders).
 */
const isNested = computed(() => {
    const children = (slots.default ? slots.default({}) : []) as VNode[];

    const flattened = children.flatMap((node: VNode): VNode | VNode[] =>
        node.type === Fragment ? (node.children as VNode[]) : node
    );

    return flattened.some((vnode: VNode) => {
        const type = vnode.type as any;
        return type && type.name === "BSplitter";
    });
});

/**
 * Dynamic styles for the panel.
 * flex-basis is used to set the initial width/height in the flex container.
 */
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