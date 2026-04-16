<script setup lang="ts">
import { ref, computed, onMounted, Fragment, type VNode } from "vue";
import { SplitterProps } from "./splitter.props";

defineOptions({ name: "BSplitter" });

/**
 * Component slots documentation
 */
const slots = defineSlots<{
    /** Default slot expected to contain BSplitterPanel components */
    default?: (props: {}) => any;
}>();

const props = withDefaults(defineProps<SplitterProps>(), {
    layout: "horizontal",
    gutterSize: 4,
});

const containerRef = ref<HTMLElement | null>(null);
const panels = ref<VNode[]>([]);
const panelSizes = ref<number[]>([]);
const dragging = ref(false);
const currentGutterIndex = ref(-1);

const startPos = ref(0);
const startSizes = ref<number[]>([]);

const style = computed(() => ({
    "--b-splitter-gutter-size": `${props.gutterSize}px`
}));

const classes = computed(() => [
    "b-splitter",
    `b-splitter--${props.layout}`,
    { "b-splitter--dragging": dragging.value }
]);

/**
 * Extracts and flattens BSplitterPanel components from the default slot.
 * Handles potential Fragments and provides strict type checking.
 */
const getPanels = (): VNode[] => {
    const children = (slots.default ? slots.default({}) : []) as VNode[];

    return children
        .flatMap((child: VNode): VNode | VNode[] => {
            return child.type === Fragment ? (child.children as VNode[]) : child;
        })
        .filter((child: VNode): child is VNode => {
            const node = child as any;
            return node?.type?.name === "BSplitterPanel";
        });
};

onMounted(() => {
    panels.value = getPanels();
    const count = panels.value.length;
    // Calculate initial sizes based on props or equal distribution
    panelSizes.value = panels.value.map(p => (p.props?.size as number) || (100 / count));
});

/**
 * Calculates the flex-basis style for a panel, accounting for gutter offsets
 */
const getPanelStyle = (index: number) => {
    const size = panelSizes.value[index];
    const gutterCount = panels.value.length - 1;
    const gutterOffset = (gutterCount * props.gutterSize) / panels.value.length;

    return {
        flexBasis: `calc(${size}% - ${gutterOffset}px)`
    };
};

/**
 * Initializes the dragging process on pointer down
 */
const onGutterPointerDown = (event: PointerEvent, index: number) => {
    const gutterElement = event.currentTarget as HTMLElement;
    gutterElement.setPointerCapture(event.pointerId);

    dragging.value = true;
    currentGutterIndex.value = index;
    startPos.value = props.layout === "horizontal" ? event.pageX : event.pageY;
    startSizes.value = [...panelSizes.value];

    gutterElement.addEventListener("pointermove", onPointerMove);
    gutterElement.addEventListener("pointerup", onPointerUp, { once: true });
    gutterElement.addEventListener("pointercancel", onPointerUp, { once: true });
};

/**
 * Handles pointer movement to update panel sizes dynamically
 */
const onPointerMove = (event: PointerEvent) => {
    if (!dragging.value || !containerRef.value) return;

    const currentPos = props.layout === "horizontal" ? event.pageX : event.pageY;
    const delta = currentPos - startPos.value;

    const containerSize = props.layout === "horizontal"
        ? containerRef.value.offsetWidth
        : containerRef.value.offsetHeight;

    if (containerSize <= 0) return;

    const deltaPercent = (delta / containerSize) * 100;

    const idx = currentGutterIndex.value;
    const newSizePrev = startSizes.value[idx] + deltaPercent;
    const newSizeNext = startSizes.value[idx + 1] - deltaPercent;

    const minSizePrev = (panels.value[idx].props?.minSize as number) || 0;
    const minSizeNext = (panels.value[idx + 1].props?.minSize as number) || 0;

    // Boundary check for minimum sizes
    if (newSizePrev >= minSizePrev && newSizeNext >= minSizeNext) {
        panelSizes.value[idx] = newSizePrev;
        panelSizes.value[idx + 1] = newSizeNext;
    }
};

/**
 * Cleans up listeners and state after dragging ends
 */
const onPointerUp = (event: PointerEvent) => {
    const gutterElement = event.currentTarget as HTMLElement;

    gutterElement.releasePointerCapture(event.pointerId);

    dragging.value = false;
    currentGutterIndex.value = -1;

    gutterElement.removeEventListener("pointermove", onPointerMove);
};
</script>

<template>
    <div
        ref="containerRef"
        :class="classes"
        :style="style"
    >
        <template v-for="(panel, index) in panels" :key="index">
            <!-- Render the Panel component with calculated styles -->
            <component :is="panel" :style="getPanelStyle(index)" />

            <!-- Render the Gutter between panels -->
            <div
                v-if="index !== panels.length - 1"
                class="b-splitter__gutter"
                @pointerdown="onGutterPointerDown($event, index)"
            >
                <div class="b-splitter__gutter-handle"></div>
            </div>
        </template>
    </div>
</template>