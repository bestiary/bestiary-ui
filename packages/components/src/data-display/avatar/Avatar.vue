<script setup lang="ts">
import {computed} from "vue";
import {AvatarProps} from "./avatar.props";

defineOptions({
    name: "BAvatar"
});

const props = withDefaults(defineProps<AvatarProps>(), {
    size: "medium",
    shape: "square",
    label: undefined,
    icon: undefined,
    image: undefined
});

const classes = computed(() => [
    "b-avatar",
    `b-avatar--size-${props.size}`,
    `b-avatar--shape-${props.shape}`,
]);
</script>

<template>
    <div :class="classes">
        <span v-if="label" class="b-avatar__label">{{ label }}</span>
        <component v-if="icon" class="b-avatar__icon" :is="icon"/>
        <img v-if="image" class="b-avatar__image" :src="image" alt="avatar"/>
    </div>
</template>