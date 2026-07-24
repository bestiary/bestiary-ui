<script setup lang="ts">
import { provide, computed } from 'vue';
import { TabsInjectionKey, type TabsProps } from './tabs.props';

defineOptions({ name: 'BTabs' });

const props = withDefaults(defineProps<TabsProps>(), {
    lazy: false,
    scrollStrategy: 'nearest'
});

const emit = defineEmits(['update:value', 'change']);
const activeValue = defineModel<string | number>('value');

// Унікальний ID для зв'язування aria-controls та aria-labelledby
const tabsId = `b-tabs-${Math.random().toString(36).substring(2, 9)}`;

// Реєстр DOM-вузлів табів для клавіатурної навігації та позиціонування
const tabElements = new Map<string | number, HTMLElement>();

const selectTab = (value: string | number) => {
    if (activeValue.value !== value) {
        activeValue.value = value;
        emit('change', value);
    }
};

const registerTab = (value: string | number, element: HTMLElement) => {
    tabElements.set(value, element);
};

const unregisterTab = (value: string | number) => {
    tabElements.delete(value);
};

provide(TabsInjectionKey, {
    activeValue,
    lazy: computed(() => props.lazy),
    tabsId,
    selectTab,
    registerTab,
    unregisterTab
});

defineSlots<{
    default?: (props: Record<string, never>) => any;
}>();
</script>

<template>
    <div class="b-tabs" :id="tabsId">
        <slot />
    </div>
</template>