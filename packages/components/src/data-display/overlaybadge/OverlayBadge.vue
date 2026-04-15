<template>
    <div class="b-overlay-badge">
        <slot />

        <BBadge
            v-bind="props"
            class="b-overlay-badge__badge"
        >
            <template v-if="$slots.value" #default>
                <slot name="value" />
            </template>
        </BBadge>
    </div>
</template>

<script setup lang="ts">
import { BBadge } from "../badge";
import { OverlayBadgeProps } from './overlayBadge.props.ts';

defineOptions({
    name: 'BOverlayBadge'
});

/**
 * Component slots documentation
 */
defineSlots<{
    /** The content that the badge will overlay (e.g., an Icon or Button) */
    default?: (props: {}) => any;
    /** Custom content to be displayed inside the badge. Overrides the value prop. */
    value?: (props: {}) => any;
}>();

// We inherit defaults from the Badge component logic if needed,
// but defineProps is required to pass them to BBadge.
const props = defineProps<OverlayBadgeProps>();
</script>