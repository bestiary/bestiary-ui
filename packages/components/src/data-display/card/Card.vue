<script setup lang="ts">
import { computed } from "vue";
import { CardProps } from "./card.props";

defineOptions({ name: "BCard" });

/**
 * Component slots documentation
 */
const slots = defineSlots<{
    /** Content to be placed at the top of the card */
    header?: (props: {}) => any;
    /** Title content */
    title?: (props: {}) => any;
    /** Subtitle content */
    subtitle?: (props: {}) => any;
    /** Primary content of the card */
    default?: (props: {}) => any;
    /** Alias for the default slot */
    content?: (props: {}) => any;
    /** Content to be placed at the bottom of the card */
    footer?: (props: {}) => any;
}>();

const props = withDefaults(defineProps<CardProps>(), {
    size: "medium",
    shadow: "always"
});

const classes = computed(() => [
    "b-card",
    `b-card--size-${props.size}`,
    `b-card--shadow-${props.shadow}`
]);
</script>

<template>
    <div :class="classes">
        <!-- Header Section -->
        <div v-if="$slots.header" class="b-card__header">
            <slot name="header" />
        </div>

        <div class="b-card__body" :style="bodyStyle">
            <!-- Title Group -->
            <div v-if="$slots.title || title || $slots.subtitle || subtitle" class="b-card__title-group">
                <div v-if="$slots.title || title" class="b-card__title">
                    <slot name="title">{{ title }}</slot>
                </div>
                <div v-if="$slots.subtitle || subtitle" class="b-card__subtitle">
                    <slot name="subtitle">{{ subtitle }}</slot>
                </div>
            </div>

            <!-- Content Section -->
            <div class="b-card__content">
                <slot name="content">
                    <slot />
                </slot>
            </div>

            <!-- Footer Section -->
            <div v-if="$slots.footer" class="b-card__footer">
                <slot name="footer" />
            </div>
        </div>
    </div>
</template>