<script setup lang="ts">
import { computed, inject, ref, watch } from 'vue';
import { TabsInjectionKey, type TabPanelProps } from './tabs.props';

defineOptions({ name: 'BTabPanel' });

const props = withDefaults(defineProps<TabPanelProps>(), {
    as: 'div'
});

const context = inject(TabsInjectionKey);
if (!context) throw new Error('BTabPanel must be used inside BTabs');

const isActive = computed(() => context.activeValue.value === props.value);
const hasBeenActive = ref(isActive.value);

watch(isActive, (val) => {
    if (val) hasBeenActive.value = true;
});

const shouldRender = computed(() => {
    return !context.lazy.value || hasBeenActive.value;
});

defineSlots<{ default?: (props: Record<string, never>) => any; }>();
</script>

<template>
    <component
        :is="as"
        v-if="shouldRender"
        v-show="isActive"
        class="b-tabpanel"
        role="tabpanel"
        :id="`${context.tabsId}-panel-${value}`"
        :aria-labelledby="`${context.tabsId}-tab-${value}`"
        :tabindex="0"
    >
        <slot />
    </component>
</template>