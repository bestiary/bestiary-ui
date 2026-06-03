<script setup lang="ts">
import { computed } from 'vue';
import type { TagProps } from './tag.props';

defineOptions({
    name: 'BTag'
});

const slots = defineSlots<{
    /** Default slot for custom content, overrides or appends to the value prop */
    default?: (props: Record<string, never>) => any;
    /** Slot for a custom icon */
    icon?: (props: Record<string, never>) => any;
}>();

const props = withDefaults(defineProps<TagProps>(), {
    severity: 'primary',
    rounded: false,
});

const hasIcon = computed(() => !!props.icon || !!slots.icon);
const isStringIcon = computed(() => typeof props.icon === 'string');

const classes = computed(() => [
    'b-tag',
    `b-tag--severity-${props.severity}`,
    {
        'b-tag--rounded': props.rounded,
        'b-tag--has-icon': hasIcon.value
    }
]);
</script>

<template>
    <span :class="classes" role="status" :aria-label="ariaLabel">
        <!-- Icon Section -->
        <slot v-if="hasIcon" name="icon">
            <span
                v-if="isStringIcon"
                :class="['b-tag__icon', icon]"
                aria-hidden="true"
            ></span>
            <component
                v-else-if="icon"
                :is="icon"
                class="b-tag__icon"
                aria-hidden="true"
            />
        </slot>

        <!-- Label Section -->
        <span v-if="value || $slots.default" class="b-tag__label">
            <slot>{{ value }}</slot>
        </span>
    </span>
</template>