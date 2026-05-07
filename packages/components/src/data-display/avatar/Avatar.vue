<script setup lang="ts">
import {computed, ref, watch} from "vue";
import type {AvatarProps} from "./avatar.props";

/**
 * BAvatar - A flexible component for displaying user profile pictures,
 * initials, or icons with fallback support.
 */
defineOptions({
    name: "BAvatar"
});

const props = withDefaults(defineProps<AvatarProps>(), {
    size: "medium",
    shape: "square",
    imageAlt: "avatar"
});

const emit = defineEmits<{
    /** Emitted when the image fails to load */
    (e: 'error', event: Event): void
}>();

const isImageError = ref(false);

/**
 * Truncates label to 2 characters for visual consistency
 */
const displayLabel = computed(() => props.label?.substring(0, 2));

/**
 * Resets error state if the image source changes
 */
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
                :alt="imageAlt"
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