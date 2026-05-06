<script setup lang="ts">
import {computed, ref, watch} from "vue";
import type {AvatarProps} from "./avatar.props";

defineOptions({
    name: "BAvatar"
});

const props = withDefaults(defineProps<AvatarProps>(), {
    size: "medium",
    shape: "square",
    label: undefined,
    icon: undefined,
    image: undefined,
    imageAlt: "avatar"
});

const emit = defineEmits<{
    error: [event: Event]
}>();

const isImageError = ref(false);

const displayLabel = computed(() => props.label?.substring(0, 3));

watch(() => props.image, () => {
    isImageError.value = false;
});

const classes = computed(() => [
    "b-avatar",
    `b-avatar--size-${props.size}`,
    `b-avatar--shape-${props.shape}`,
]);

function handleImageError(event: Event) {
    isImageError.value = true;
    emit("error", event);
}
</script>

<template>
    <div :class="classes" role="img" :aria-label="label || 'avatar'">
        <slot>
            <img
                v-if="image && !isImageError"
                class="b-avatar__image"
                :src="image"
                :alt="imageAlt || ''"
                @error="handleImageError"
            />
            <component
                v-else-if="icon"
                :is="icon"
                class="b-avatar__icon"
                aria-hidden="true"
            />
            <span v-else-if="displayLabel" class="b-avatar__label">
                {{ displayLabel }}
            </span>
        </slot>
    </div>
</template>