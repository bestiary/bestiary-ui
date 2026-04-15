<script setup lang="ts">
import { computed } from "vue";
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

const props = withDefaults(defineProps<BadgeProps>(), {
    severity: "primary",
    size: "medium",
    rounded: false
});

const classes = computed(() => {
    return [
        'b-badge',
        `b-badge--severity-${props.severity}`,
        `b-badge--size-${props.size}`,
        {
            'b-badge--rounded': props.rounded
        }
    ];
});
</script>

<template>
    <span :class="classes">
        <slot>
            {{ value }}
        </slot>
    </span>
</template>