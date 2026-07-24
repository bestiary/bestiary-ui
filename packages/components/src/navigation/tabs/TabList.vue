<script setup lang="ts">
import { ref, inject, onMounted, onUnmounted, watch, nextTick } from 'vue';
import { TabsInjectionKey, type TabListProps } from './tabs.props';

defineOptions({ name: 'BTabList' });

withDefaults(defineProps<TabListProps>(), {
    showNavigators: true
});

const context = inject(TabsInjectionKey);
if (!context) throw new Error('BTabList must be used inside BTabs');

const contentRef = ref<HTMLElement | null>(null);
const listRef = ref<HTMLElement | null>(null);

const canScrollLeft = ref(false);
const canScrollRight = ref(false);

const barStyle = ref({ left: '0px', width: '0px' });

/* --- Scroll & Navigators Logic --- */
const updateScrollState = () => {
    if (!contentRef.value) return;
    const { scrollLeft, scrollWidth, clientWidth } = contentRef.value;
    // Округлення для уникнення багів з дробовими пікселями
    canScrollLeft.value = Math.ceil(scrollLeft) > 0;
    canScrollRight.value = Math.ceil(scrollLeft + clientWidth) < scrollWidth;
};

const scroll = (direction: 'left' | 'right') => {
    if (!contentRef.value) return;
    const amount = contentRef.value.clientWidth * 0.8;
    contentRef.value.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth'
    });
};

/* --- Active Bar Logic --- */
const updateActiveBar = async () => {
    await nextTick();
    if (!listRef.value || context.activeValue.value === undefined) return;

    // Шукаємо активний таб всередині listRef
    const activeTab = listRef.value.querySelector(`[data-tab-value="${context.activeValue.value}"]`) as HTMLElement;
    if (activeTab) {
        barStyle.value = {
            left: `${activeTab.offsetLeft}px`,
            width: `${activeTab.offsetWidth}px`
        };

        // Scroll active tab into view
        activeTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    }
};

/* --- Keyboard Navigation --- */
const onKeydown = (event: KeyboardEvent) => {
    if (!listRef.value) return;
    const tabs = Array.from(listRef.value.querySelectorAll('[role="tab"]:not([disabled])')) as HTMLElement[];
    if (!tabs.length) return;

    const currentIndex = tabs.findIndex(tab => tab === document.activeElement);
    if (currentIndex === -1) return;

    let nextIndex = currentIndex;
    if (event.key === 'ArrowRight') nextIndex = (currentIndex + 1) % tabs.length;
    else if (event.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = tabs.length - 1;
    else return;

    event.preventDefault();
    tabs[nextIndex].focus();
};

/* --- Observers --- */
let resizeObserver: ResizeObserver | null = null;

onMounted(() => {
    updateActiveBar();
    updateScrollState();

    if (contentRef.value) {
        resizeObserver = new ResizeObserver(() => {
            updateScrollState();
            updateActiveBar();
        });
        resizeObserver.observe(contentRef.value);
    }
});

onUnmounted(() => {
    if (resizeObserver) resizeObserver.disconnect();
});

watch(() => context.activeValue.value, updateActiveBar);

defineSlots<{ default?: (props: Record<string, never>) => any; }>();
</script>

<template>
    <div class="b-tablist">
        <!-- Prev Button -->
        <button
            v-if="showNavigators && canScrollLeft"
            type="button"
            class="b-tablist__nav-btn b-tablist__nav-btn--prev"
            aria-label="Scroll left"
            tabindex="-1"
            @click="scroll('left')"
        >
            <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
        </button>

        <!-- Content & Tabs -->
        <div ref="contentRef" class="b-tablist__content" @scroll.passive="updateScrollState">
            <div ref="listRef" class="b-tablist__list" role="tablist" @keydown="onKeydown">
                <slot />
                <span class="b-tablist__active-bar" :style="barStyle" aria-hidden="true"></span>
            </div>
        </div>

        <!-- Next Button -->
        <button
            v-if="showNavigators && canScrollRight"
            type="button"
            class="b-tablist__nav-btn b-tablist__nav-btn--next"
            aria-label="Scroll right"
            tabindex="-1"
            @click="scroll('right')"
        >
            <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>
    </div>
</template>