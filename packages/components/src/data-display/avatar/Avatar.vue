<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type {AvatarProps} from './avatar.props';

defineOptions({
    name: 'BAvatar'
});

const props = withDefaults(defineProps<AvatarProps>(), {
    size: 'medium',
    shape: 'square',
    imageAlt: 'avatar'
});

const emit = defineEmits<{
    /** Emitted when the image fails to load */
    (e: 'error', event: Event): void
}>();

defineSlots<{
    /** Default slot to override avatar content */
    default?: (props: Record<string, never>) => any;
}>();

const isImageError = ref(false);

const displayLabel = computed(() => props.label?.substring(0, 2));

const isImageVisible = computed(() => !!props.image && !isImageError.value);
const isStringIcon = computed(() => typeof props.icon === 'string');

const rootRole = computed(() => isImageVisible.value ? undefined : 'img');
const rootAriaLabel = computed(() => {
    if (props.ariaLabel) return props.ariaLabel;
    if (isImageVisible.value) return undefined;
    return props.label || 'avatar';
});

const classes = computed(() => [
    'b-avatar',
    `b-avatar--size-${props.size}`,
    `b-avatar--shape-${props.shape}`,
]);

watch(() => props.image, () => {
    isImageError.value = false;
});

function handleImageError(event: Event) {
    isImageError.value = true;
    emit('error', event);
}
</script>

<template>
    <div :class="classes" :role="rootRole" :aria-label="rootAriaLabel">
        <slot>
            <img
                v-if="isImageVisible"
                class="b-avatar__image"
                :src="image"
                :alt="imageAlt"
                @error="handleImageError"
            />

            <!-- String Icon (e.g. FontAwesome, PrimeIcons) -->
            <span
                v-else-if="icon && isStringIcon"
                :class="['b-avatar__icon', icon]"
                aria-hidden="true"
            ></span>

            <!-- Vue Component Icon -->
            <component
                v-else-if="icon && !isStringIcon"
                :is="icon"
                class="b-avatar__icon"
                aria-hidden="true"
            />

            <!-- Text Label -->
            <span v-else-if="displayLabel" class="b-avatar__label" aria-hidden="true">
                {{ displayLabel }}
            </span>
        </slot>
    </div>
</template>