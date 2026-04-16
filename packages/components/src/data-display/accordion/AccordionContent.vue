<script setup lang="ts">
import { inject, computed } from 'vue';
import { AccordionContext, AccordionPanelContext } from './accordion.props';

defineOptions({ name: 'BAccordionContent' });

const root = inject<AccordionContext>('BAccordion');
const panel = inject<AccordionPanelContext>('BAccordionPanel');

const id = computed(() => panel ? `b-accordion-content-${panel.value}` : undefined);
const ariaLabelledby = computed(() => panel ? `b-accordion-header-${panel.value}` : undefined);

const shouldRender = computed(() => {
    if (!root || !panel) return false;
    if (!root.lazy) return true;
    return panel.isActive.value;
});
</script>

<template>
    <transition name="b-accordion-slide">
        <div
            v-if="shouldRender"
            v-show="panel?.isActive.value"
            :id="id"
            class="b-accordion-content"
            role="region"
            :aria-labelledby="ariaLabelledby"
        >
            <div class="b-accordion-content__inner">
                <slot />
            </div>
        </div>
    </transition>
</template>