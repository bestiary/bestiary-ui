<script setup lang="ts">

import { skeletonProps } from "./skeleton.props.ts";
import {computed} from "vue";

defineOptions({
    name: "BSkeleton",
});

const props = defineProps(skeletonProps);

const classes = computed(() => [
    "b-skeleton"
]);

const style = computed(() => [
    `width: ${props.width}`,
    `height: ${props.height}`,
]);
</script>

<template>
<div :class="classes" :style="style"></div>
</template>

<style scoped>

</style>