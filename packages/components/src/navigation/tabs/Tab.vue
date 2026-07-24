<script setup lang="ts">
import { computed, inject, ref, onMounted, onUnmounted } from 'vue';
import { TabsInjectionKey, type TabProps } from './tabs.props';

defineOptions({ name: 'BTab' });

const props = withDefaults(defineProps<TabProps>(), {
    disabled: false,
    as: 'button'
});

const context = inject(TabsInjectionKey);
if (!context) throw new Error('BTab must be used inside BTabs');

const tabRef = ref<HTMLElement | null>(null);
const isActive = computed(() => context.activeValue.value === props.value);

const onClick = () => {
    if (!props.disabled) context.selectTab(props.value);
};

const classes = computed(() => [
    'b-tab',
    {
        'b-tab--active': isActive.value,
        'b-tab--disabled': props.disabled
    }
]);

onMounted(() => {
    if (tabRef.value) context.registerTab(props.value, tabRef.value);
});

onUnmounted(() => {
    context.unregisterTab(props.value);
});

defineSlots<{ default?: (props: Record<string, never>) => any; }>();
</script>

<template>
    <component
        :is="as"
        ref="tabRef"
        :class="classes"
        role="tab"
        :aria-selected="isActive"
        :aria-controls="`${context.tabsId}-panel-${value}`"
        :id="`${context.tabsId}-tab-${value}`"
        :tabindex="isActive ? 0 : -1"
        :disabled="disabled"
        :data-tab-value="value"
        @click="onClick"
        @focus="!disabled && context.selectTab(value)"
    >
        <slot />
    </component>
</template>