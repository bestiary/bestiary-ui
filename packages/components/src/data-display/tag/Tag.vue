<script setup lang="ts">
import { computed } from "vue";
import { TagProps } from "./tag.props";

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

const classes = computed(() => [
    "b-tag",
    `b-tag--severity-${props.severity}`,
    {
        "b-tag--rounded": props.rounded,
    }
]);
</script>

<template>
    <span :class="classes">
        <!-- Icon Section -->
        <slot name="icon">
            <component
                :is="icon"
                v-if="icon"
                class="b-tag__icon"
            />
        </slot>

        <!-- Label Section -->
        <span v-if="value || $slots.default" class="b-tag__label">
            <slot>{{ value }}</slot>
        </span>
    </span>
</template>