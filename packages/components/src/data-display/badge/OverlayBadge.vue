<script setup lang="ts">
import { BBadge } from './badge';
import type { OverlayBadgeProps } from './overlay-badge.props';

defineOptions({
    name: 'BOverlayBadge',
    inheritAttrs: true
});

defineSlots<{
    /** The content that the badge will overlay (e.g., an Icon or Button) */
    default?: (props: Record<string, never>) => any;
    /** Custom content to be displayed inside the badge itself */
    value?: (props: Record<string, never>) => any;
}>();

const props = withDefaults(defineProps<OverlayBadgeProps>(), {
    severity: 'primary',
    size: 'medium',
    rounded: false
});
</script>

<template>
    <div class="b-overlay-badge">
        <slot />

        <BBadge v-bind="props">
            <template v-if="$slots.value" #default>
                <slot name="value" />
            </template>
        </BBadge>
    </div>
</template>