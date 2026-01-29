<template>
    <div
        ref="containerRef"
        :class="classes"
        :style="style"
    >
        <template v-for="(panel, index) in panels" :key="index">
            <component :is="panel" :style="getPanelStyle(index)" />

            <div
                v-if="index !== panels.length - 1"
                class="b-splitter__gutter"
                role="separator"
                :aria-orientation="layout"
                :aria-valuenow="Math.round(panelSizes[index] || 0)"
                :aria-valuemin="0"
                :aria-valuemax="100"
                @pointerdown="onGutterPointerDown($event, index)"
            >
                <div class="b-splitter__gutter-handle"></div>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, useSlots, VNode, Slots } from "vue";
import { splitterProps } from "./splitter.types";
import "./splitter.css";

defineOptions({ name: "BSplitter" });
const props = defineProps(splitterProps);

const containerRef = ref<HTMLElement | null>(null);
const slots = useSlots() as Slots;

const panels = computed(() => {
    if (!slots.default) return [];
    // Filter by the custom marker added to SplitterPanel
    return (slots.default() as VNode[]).filter((child: any) => child.type?.__BESTIARY_SPLITTER_PANEL__);
});

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

// Initialize and react to panel count changes
watch(() => panels.value.length, (count) => {
    if (count > 0 && panelSizes.value.length !== count) {
        panelSizes.value = panels.value.map(p => (p.props?.size as number) || (100 / count));
    }
}, { immediate: true });

const getPanelStyle = (index: number) => {
    const size = panelSizes.value[index] || 0;
    const gutterCount = panels.value.length - 1;
    const gutterOffset = (gutterCount * props.gutterSize) / panels.value.length;

    return {
        flexBasis: `calc(${size}% - ${gutterOffset}px)`
    };
};

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

    if (newSizePrev >= minSizePrev && newSizeNext >= minSizeNext) {
        panelSizes.value[idx] = newSizePrev;
        panelSizes.value[idx + 1] = newSizeNext;
    }
};

const onPointerUp = (event: PointerEvent) => {
    const gutterElement = event.currentTarget as HTMLElement;

    gutterElement.releasePointerCapture(event.pointerId);

    dragging.value = false;
    currentGutterIndex.value = -1;

    gutterElement.removeEventListener("pointermove", onPointerMove);
};
</script>