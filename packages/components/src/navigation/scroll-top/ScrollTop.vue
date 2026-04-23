<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue';
import type { ScrollTopProps } from './scroll-top.props';

defineOptions({ name: "BScrollTop" });

const props = withDefaults(defineProps<ScrollTopProps>(), {
    target: "window",
    threshold: 400,
    behavior: "smooth"
});

const visible = ref(false);
const elementRef = ref<HTMLElement | null>(null);
let scrollTarget: HTMLElement | Window | null = null;

const classes = computed(() => [
    "b-scrolltop",
    `b-scrolltop--target-${props.target}`
]);

const getActualTarget = (el: HTMLElement | null): HTMLElement | Window => {
    if (!el) return window;

    let parent = el.parentElement;
    while (parent) {
        const style = window.getComputedStyle(parent);
        if (style.overflowY === 'auto' || style.overflowY === 'scroll') {
            return parent;
        }
        parent = parent.parentElement;
    }
    return window;
};

const onScroll = () => {
    let scrollTop = 0;
    if (scrollTarget === window) {
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    } else if (scrollTarget instanceof HTMLElement) {
        scrollTop = scrollTarget.scrollTop;
    }
    visible.value = scrollTop > props.threshold;
};

const onClick = () => {
    const scrollOptions: ScrollToOptions = { top: 0, behavior: props.behavior };
    if (scrollTarget === window) {
        window.scrollTo(scrollOptions);
    } else if (scrollTarget instanceof HTMLElement) {
        scrollTarget.scrollTo(scrollOptions);
    }
};

onMounted(async () => {
    await nextTick();
    scrollTarget = props.target === 'window'
        ? (document.documentElement.scrollHeight > window.innerHeight ? window : getActualTarget(elementRef.value))
        : getActualTarget(elementRef.value);

    if (scrollTarget === window) {
        window.addEventListener('scroll', onScroll, true);
    } else {
        scrollTarget.addEventListener('scroll', onScroll);
    }

    onScroll();
});

onUnmounted(() => {
    if (scrollTarget === window) {
        window.removeEventListener('scroll', onScroll, true);
    } else {
        scrollTarget?.removeEventListener('scroll', onScroll);
    }
});
</script>

<template>
    <transition name="b-scrolltop--fade">
        <button
            v-show="visible"
            ref="elementRef"
            type="button"
            :class="classes"
            @click="onClick"
        >
            <slot name="icon">
                <svg class="b-scrolltop__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <path d="M18 15l-6-6-6 6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </slot>
        </button>
    </transition>
</template>