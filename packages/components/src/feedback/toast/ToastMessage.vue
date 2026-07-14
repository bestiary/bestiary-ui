<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import type { ToastMessageOptions } from './toast.props';

const props = defineProps<{
    message: ToastMessageOptions;
}>();

const emit = defineEmits(['close']);

const timeout = ref<ReturnType<typeof setTimeout> | null>(null);

const startTimer = () => {
    if (props.message.sticky) return;
    const life = props.message.life ?? 3000;
    timeout.value = setTimeout(() => {
        close();
    }, life);
};

const clearTimer = () => {
    if (timeout.value) {
        clearTimeout(timeout.value);
        timeout.value = null;
    }
};

const close = () => {
    clearTimer();
    emit('close', props.message.id);
};

const onMouseEnter = () => clearTimer();
const onMouseLeave = () => startTimer();

onMounted(() => startTimer());
onUnmounted(() => clearTimer());

const getIcon = (severity?: string) => {
    switch (severity) {
        case 'success': return 'M20 6L9 17l-5-5';
        case 'warn':    return 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z';
        case 'error':   return 'M18 6L6 18M6 6l12 12';
        default:        return 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'; // info
    }
};
</script>

<template>
    <div
        class="b-toast-message"
        :class="[`b-toast-message--severity-${message.severity || 'info'}`, message.styleClass]"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
    >
        <div class="b-toast-message__content" :class="message.contentClass" :style="message.contentStyle">
            <!-- Icon -->
            <div class="b-toast-message__icon">
                <slot name="messageicon" :message="message">
                    <svg viewBox="0 0 24 24" width="1.5em" height="1.5em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path :d="getIcon(message.severity)" />
                    </svg>
                </slot>
            </div>

            <!-- Text -->
            <div class="b-toast-message__text">
                <span class="b-toast-message__summary">
                    <slot name="summary" :message="message">{{ message.summary }}</slot>
                </span>
                <div v-if="message.detail" class="b-toast-message__detail">
                    <slot name="detail" :message="message">{{ message.detail }}</slot>
                </div>
            </div>

            <!-- Close Button -->
            <button
                type="button"
                class="b-toast-message__close"
                aria-label="Close"
                @click="close"
            >
                <slot name="closeicon">
                    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </slot>
            </button>
        </div>
    </div>
</template>