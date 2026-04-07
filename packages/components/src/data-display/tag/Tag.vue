<script setup lang="ts">
import {computed} from "vue";
import {tagProps} from "./tag.props.ts";

defineOptions({
    name: "BTag"
});

const props = defineProps(tagProps);

const classes = computed(() => [
    "b-tag",
    `b-tag--severity-${props.severity}`,
    {
        "b-tag--rounded": props.rounded,
    }
]);
</script>

<template>
<span :class="classes">
    <component :is="icon" v-if="icon" />
    <span class="b-tag__lable">{{ value }}</span>
</span>
</template>

<style scoped>

</style>