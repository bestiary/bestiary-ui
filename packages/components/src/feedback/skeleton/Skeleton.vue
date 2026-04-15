<script setup lang="ts">
import { computed } from "vue";
import { SkeletonProps } from "./skeleton.props";

defineOptions({
    name: "BSkeleton",
});

/**
 * Component slots documentation
 */
defineSlots<{
    /** Skeleton is a placeholder component and typically does not contain slots */
    default?: (props: {}) => any;
}>();

const props = withDefaults(defineProps<SkeletonProps>(), {
    shape: "rectangle",
    width: "100%",
    height: "1rem",
    animation: "wave"
});

const classes = computed(() => [
    "b-skeleton",
    `b-skeleton--shape-${props.shape}`,
    `b-skeleton--animation-${props.animation}`,
]);

const style = computed(() => {
    return {
        width: props.size ? props.size : props.width,
        height: props.size ? props.size : props.height,
        borderRadius: props.borderRadius || undefined
    };
});
</script>

<template>
    <div
        :class="classes"
        :style="style"
        aria-hidden="true"
    ></div>
</template>