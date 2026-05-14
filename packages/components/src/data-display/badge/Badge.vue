<script setup lang="ts">
import {computed, useSlots} from "vue";
import { BadgeProps } from "./badge.props.ts";

defineOptions({
    name: "BBadge"
});

/**
 * Component slots documentation
 */
defineSlots<{
    /** Content to be displayed inside the badge. Overrides the value prop. */
    default?: (props: {}) => any;
}>();
const slots = useSlots();

const props = withDefaults(defineProps<BadgeProps>(), {
    severity: "primary",
    size: "medium",
    rounded: false
});

/**
 * Determine if the badge is in "dot" mode (no content)
 */
const isDot = computed(() => !props.value && !slots.default);

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
    <span :class="classes" role="status">
        <slot v-if="!isDot">
            {{ value }}
        </slot>
    </span>
</template>