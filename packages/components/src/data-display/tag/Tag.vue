<script setup lang="ts">
import { computed } from "vue";
import type { TagProps } from "./tag.props";

defineOptions({
    name: "BTag"
});

/**
 * Component slots documentation
 */
const slots = defineSlots<{
    /** Default slot for custom content, overrides or appends to the value prop */
    default?: (props: {}) => any;
    /** Slot for a custom icon */
    icon?: (props: {}) => any;
}>();

const props = withDefaults(defineProps<TagProps>(), {
    severity: "primary",
    rounded: false,
});

const hasIcon = computed(() => !!props.icon || !!slots.icon);

const classes = computed(() => [
    "b-tag",
    `b-tag--severity-${props.severity}`,
    {
        "b-tag--rounded": props.rounded,
        "b-tag--has-icon": hasIcon.value
    }
]);
</script>

<template>
    <span :class="classes" role="status">
        <!-- Icon Section -->
        <span v-if="hasIcon" class="b-tag__icon-wrapper">
            <slot name="icon">
                <component :is="icon" class="b-tag__icon" aria-hidden="true" />
            </slot>
        </span>

        <!-- Label Section -->
        <span v-if="value || $slots.default" class="b-tag__label">
            <slot>{{ value }}</slot>
        </span>
    </span>
</template>