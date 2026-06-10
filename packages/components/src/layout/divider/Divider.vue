<script setup lang="ts">
import { computed } from 'vue';
import type { DividerProps } from './divider.props';

defineOptions({ name: 'BDivider' });

const slots = defineSlots<{
    /** Content to be displayed within the divider line */
    default?: (props: Record<string, never>) => any;
}>();

const props = withDefaults(defineProps<DividerProps>(), {
    align: 'center',
    layout: 'horizontal',
    type: 'solid'
});

const classes = computed(() => [
    'b-divider',
    `b-divider--layout-${props.layout}`,
    `b-divider--align-${props.align}`,
    `b-divider--type-${props.type}`,
    {
        'b-divider--with-content': !!slots.default
    }
]);

const ariaOrientation = computed(() =>
    props.layout === 'vertical' ? 'vertical' : 'horizontal'
);
</script>

<template>
    <div
        :class="classes"
        role="separator"
        :aria-orientation="ariaOrientation"
    >
        <div v-if="$slots.default" class="b-divider__content">
            <slot />
        </div>
    </div>
</template>