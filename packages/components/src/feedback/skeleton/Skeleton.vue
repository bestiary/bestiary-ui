<script setup lang="ts">

import { skeletonProps } from "./skeleton.props.ts";
import {computed} from "vue";

defineOptions({
    name: "BSkeleton",
});

const props = defineProps(skeletonProps);

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
<div :class="classes" :style="style"></div>
</template>