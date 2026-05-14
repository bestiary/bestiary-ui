<script setup lang="ts">
import { BBadge } from "./badge";
import type { OverlayBadgeProps } from './overlayBadge.props';

defineOptions({
    name: 'BOverlayBadge',
    inheritAttrs: true
});

defineSlots<{
    /** The content that the badge will overlay (e.g., an Icon or Button) */
    default?: (props: {}) => any;
    /** Custom content to be displayed inside the badge */
    value?: (props: {}) => any;
}>();

const props = withDefaults(defineProps<OverlayBadgeProps>(), {
    severity: "primary",
    size: "medium",
    rounded: false
});
</script>

<template>
    <div class="b-overlay-badge">
        <slot />
        <BBadge
            v-bind="props"
        >
            <template v-if="$slots.value" #default>
                <slot name="value" />
            </template>
        </BBadge>
    </div>
</template>