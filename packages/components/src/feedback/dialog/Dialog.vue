<script lang="ts">
let globalZIndex = 1000;
let openModalsCount = 0;
</script>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue';
import type { DialogProps } from './dialog.props';

defineOptions({ name: 'BDialog' });

const props = withDefaults(defineProps<DialogProps>(), {
    visible: false,
    modal: true,
    closable: true,
    dismissableMask: false,
    closeOnEscape: true,
    showHeader: true,
    blockScroll: true,
    position: 'center',
    maximizable: false,
    appendTo: 'body',
    closeButtonAriaLabel: 'Close',
    maximizeButtonAriaLabel: 'Maximize',
    draggable: true,
    baseZIndex: 0,
    autoZIndex: true
});

const isVisible = defineModel<boolean>('visible', { default: false });
const emit = defineEmits(['update:visible', 'show', 'hide', 'maximize', 'unmaximize', 'dragend']);

defineSlots<{
    header?: (props: Record<string, never>) => any;
    default?: (props: Record<string, never>) => any;
    footer?: (props: Record<string, never>) => any;
    container?: (props: { closeCallback: () => void }) => any;
    closeicon?: (props: Record<string, never>) => any;
    maximizeicon?: (props: { maximized: boolean }) => any;
}>();

const isMaximized = ref(false);
const dialogRef = ref<HTMLElement | null>(null);
const maskRef = ref<HTMLElement | null>(null);

let focusedElementBeforeOpen: HTMLElement | null = null;

/* --- Z-Index Management --- */
const updateZIndex = () => {
    if (!maskRef.value) return;
    if (props.autoZIndex) {
        globalZIndex++;
        maskRef.value.style.zIndex = String(props.baseZIndex + globalZIndex);
    } else {
        maskRef.value.style.zIndex = String(props.baseZIndex);
    }
};

/* --- Breakpoints Logic --- */
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 0);
const updateWidth = () => { windowWidth.value = window.innerWidth; };

onMounted(() => { window.addEventListener('resize', updateWidth, { passive: true }); });
onUnmounted(() => { window.removeEventListener('resize', updateWidth); });

const responsiveStyle = computed(() => {
    if (!props.breakpoints) return {};
    const bps = Object.keys(props.breakpoints)
        .map(bp => parseInt(bp))
        .sort((a, b) => a - b); // Від меншого до більшого екрану

    for (const bp of bps) {
        if (windowWidth.value <= bp) {
            return { width: props.breakpoints[`${bp}px`] };
        }
    }
    return {};
});

/* --- Dragging Logic --- */
const dragOffset = ref({ x: 0, y: 0 });
let isDragging = false;
let startX = 0, startY = 0;
let initialX = 0, initialY = 0;

const onDragStart = (e: PointerEvent) => {
    if (!props.draggable || isMaximized.value) return;

    // Ігноруємо кліки по кнопках всередині хедера
    const target = e.target as HTMLElement;
    if (target.closest('button')) return;

    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    initialX = dragOffset.value.x;
    initialY = dragOffset.value.y;

    window.addEventListener('pointermove', onDrag);
    window.addEventListener('pointerup', onDragEnd);
};

const onDrag = (e: PointerEvent) => {
    if (!isDragging) return;
    e.preventDefault(); // Запобігає виділенню тексту
    dragOffset.value = {
        x: initialX + (e.clientX - startX),
        y: initialY + (e.clientY - startY)
    };
};

const onDragEnd = (e: PointerEvent) => {
    isDragging = false;
    window.removeEventListener('pointermove', onDrag);
    window.removeEventListener('pointerup', onDragEnd);
    emit('dragend', e);
};

/* --- Visibility & Controls --- */
const close = () => {
    isVisible.value = false;
    emit('hide');
};

const toggleMaximize = () => {
    isMaximized.value = !isMaximized.value;
    if (isMaximized.value) {
        dragOffset.value = { x: 0, y: 0 }; // Скидаємо позицію при максімізації
    }
    emit(isMaximized.value ? 'maximize' : 'unmaximize');
};

const onMaskClick = (event: MouseEvent) => {
    if (props.dismissableMask && event.target === event.currentTarget) {
        close();
    }
};

const onKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && props.closeOnEscape && isVisible.value) {
        close();
    }
};

/* --- Safe Scroll Lock ---
 * Як це працює "під капотом":
 * Використовує глобальний лічильник openModalsCount. Якщо відкрито 3 діалоги,
 * overflow: hidden зніметься лише тоді, коли закриється останній (лічильник дійде до 0).
 */
const manageBodyScroll = (disable: boolean) => {
    if (disable) {
        if (openModalsCount === 0) document.body.style.overflow = 'hidden';
        openModalsCount++;
    } else {
        openModalsCount--;
        if (openModalsCount <= 0) {
            openModalsCount = 0;
            document.body.style.overflow = '';
        }
    }
};

/* --- A11y Focus Management --- */
const trapFocus = () => {
    focusedElementBeforeOpen = document.activeElement as HTMLElement;
    if (dialogRef.value) {
        dialogRef.value.focus();
    }
};

const restoreFocus = () => {
    if (focusedElementBeforeOpen && focusedElementBeforeOpen.focus) {
        focusedElementBeforeOpen.focus();
        focusedElementBeforeOpen = null;
    }
};

watch(isVisible, async (val) => {
    if (val) {
        emit('show');
        if (props.modal && props.blockScroll) manageBodyScroll(true);
        document.addEventListener('keydown', onKeydown);

        await nextTick();
        updateZIndex();
        trapFocus();
    } else {
        if (props.modal && props.blockScroll) manageBodyScroll(false);
        document.removeEventListener('keydown', onKeydown);
        restoreFocus();

        // Плавне скидання позиції після завершення анімації закриття
        setTimeout(() => { dragOffset.value = { x: 0, y: 0 }; }, 300);
    }
});

onUnmounted(() => {
    if (isVisible.value && props.modal && props.blockScroll) manageBodyScroll(false);
    document.removeEventListener('keydown', onKeydown);
    window.removeEventListener('pointermove', onDrag);
    window.removeEventListener('pointerup', onDragEnd);
});

/* --- Computed Classes & Styles --- */
const maskClasses = computed(() => [
    'b-dialog-mask',
    `b-dialog-mask--${props.position}`,
    { 'b-dialog-mask--modal': props.modal }
]);

const dialogClasses = computed(() => [
    'b-dialog',
    { 'b-dialog--maximized': isMaximized.value }
]);

const dialogDynamicStyle = computed(() => {
    const baseStyle = typeof props.style === 'string'
        ? props.style
        : { ...(props.style || {}), ...responsiveStyle.value };

    if (!isMaximized.value && (dragOffset.value.x !== 0 || dragOffset.value.y !== 0)) {
        return [
            baseStyle,
            { transform: `translate(${dragOffset.value.x}px, ${dragOffset.value.y}px)` }
        ];
    }

    return baseStyle;
});
</script>

<template>
    <Teleport :to="appendTo">
        <Transition name="b-dialog-fade">
            <div
                v-if="isVisible"
                ref="maskRef"
                :class="maskClasses"
                @click="onMaskClick"
            >
                <slot v-if="$slots.container" name="container" :closeCallback="close" />

                <div
                    v-else
                    ref="dialogRef"
                    :class="dialogClasses"
                    :style="dialogDynamicStyle"
                    role="dialog"
                    aria-modal="true"
                    :aria-labelledby="header ? 'b-dialog-title' : undefined"
                    tabindex="-1"
                    @click.stop
                >
                    <!-- Header -->
                    <div
                        v-if="showHeader"
                        class="b-dialog__header"
                        :class="{ 'b-dialog__header--draggable': draggable && !isMaximized }"
                        @pointerdown="onDragStart"
                    >
                        <div class="b-dialog__title" id="b-dialog-title">
                            <slot name="header">{{ header }}</slot>
                        </div>

                        <div class="b-dialog__header-actions">
                            <button
                                v-if="maximizable"
                                type="button"
                                class="b-dialog__header-action"
                                :aria-label="maximizeButtonAriaLabel"
                                @click="toggleMaximize"
                            >
                                <slot name="maximizeicon" :maximized="isMaximized">
                                    <svg v-if="isMaximized" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="1em" height="1em" aria-hidden="true"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/></svg>
                                    <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="1em" height="1em" aria-hidden="true"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                                </slot>
                            </button>

                            <button
                                v-if="closable"
                                type="button"
                                class="b-dialog__header-action"
                                :aria-label="closeButtonAriaLabel"
                                @click="close"
                            >
                                <slot name="closeicon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="1em" height="1em" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12"/></svg>
                                </slot>
                            </button>
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="b-dialog__content" :class="contentClass" :style="contentStyle">
                        <slot />
                    </div>

                    <!-- Footer -->
                    <div v-if="$slots.footer || footer" class="b-dialog__footer">
                        <slot name="footer">{{ footer }}</slot>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>