<script setup lang="ts">
import { computed, useSlots } from 'vue';
import type { BadgeProps } from './badge.props';

defineOptions({
    name: 'BBadge'
});

defineSlots<{
    /** Content to be displayed inside the badge. Overrides the value prop. */
    default?: (props: Record<string, never>) => any;
}>();

const props = withDefaults(defineProps<BadgeProps>(), {
    severity: 'primary',
    size: 'medium',
    rounded: false
});

const slots = useSlots();

const isDot = computed(() => {
    const hasValue = props.value !== undefined && props.value !== null && props.value !== '';
    return !hasValue && !slots.default;
});

const classes = computed(() => [
    'b-badge',
    `b-badge--severity-${props.severity}`,
    `b-badge--size-${props.size}`,
    {
        'b-badge--rounded': props.rounded,
        'b-badge--dot': isDot.value
    }
]);
</script>

<template>
    <span
        :class="classes"
        role="status"
        :aria-label="ariaLabel"
    >
        <span v-if="!isDot" :aria-hidden="!!ariaLabel">
            <slot>{{ value }}</slot>
        </span>
    </span>
</template>