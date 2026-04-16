<script setup lang="ts">
import { inject, provide, computed } from 'vue';
import { AccordionContext, AccordionPanelProps, AccordionPanelContext } from './accordion.props';

defineOptions({ name: 'BAccordionPanel' });

const props = withDefaults(defineProps<AccordionPanelProps>(), {
    disabled: false
});

const root = inject<AccordionContext>('BAccordion');

if (!root) {
    console.error('[Bestiary UI] BAccordionPanel must be used inside BAccordion');
}

const isActive = computed(() => root ? root.isPanelActive(props.value) : false);

provide<AccordionPanelContext>('BAccordionPanel', {
    value: props.value,
    disabled: props.disabled,
    isActive
});

const classes = computed(() => [
    'b-accordion-panel',
    {
        'is-active': isActive.value,
        'is-disabled': props.disabled
    }
]);
</script>

<template>
    <div :class="classes">
        <slot />
    </div>
</template>