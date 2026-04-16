<script setup lang="ts">
import { inject, computed } from 'vue';
import { AccordionContext, AccordionPanelContext } from './accordion.props';

defineOptions({ name: 'BAccordionHeader' });

const root = inject<AccordionContext>('BAccordion');
const panel = inject<AccordionPanelContext>('BAccordionPanel');

const toggle = () => {
    if (root && panel && !panel.disabled) {
        root.updateValue(panel.value);
    }
};

const ariaControls = computed(() => panel ? `b-accordion-content-${panel.value}` : undefined);
const id = computed(() => panel ? `b-accordion-header-${panel.value}` : undefined);
const active = computed(() => panel?.isActive.value ?? false);

const dynamicIcon = computed(() => {
    return active.value ? root?.collapseIcon : root?.expandIcon;
});
</script>

<template>
    <button
        v-if="panel"
        :id="id"
        type="button"
        class="b-accordion-header"
        :aria-expanded="active"
        :aria-controls="ariaControls"
        :disabled="panel.disabled"
        @click="toggle"
    >
        <span class="b-accordion-header__content">
            <slot />
        </span>

        <div class="b-accordion-header__toggle-icon">
            <slot name="icon" :active="active">
                <component
                    :is="dynamicIcon"
                    v-if="dynamicIcon"
                    class="b-accordion-toggle-icon"
                />

                <svg
                    v-else
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    :class="['b-accordion-toggle-svg', { 'is-rotated': active }]"
                >
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </slot>
        </div>
    </button>
</template>