<script setup lang="ts">
import { computed } from "vue";
import { avatarProps } from "./avatar.types.ts";
import "./avatar.css";

const props = defineProps(avatarProps);

const classes = computed(() => [
    "b-avatar",
    `b-avatar--size-${props.size}`,
    `b-avatar--shape-${props.shape}`,
]);
</script>

<template>
<div :class="classes">
    <span v-if="label" class="b-avatar__label">{{ label }}</span>
    <component v-if="icon" class="b-avatar__icon" :is="icon" />
    <img v-if="image" class="b-avatar__image" :src="image" alt="avatar" />
</div>
</template>

<style scoped>

</style>