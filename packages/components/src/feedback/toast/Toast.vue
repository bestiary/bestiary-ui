<script lang="ts">
let globalZIndex = 2000;
</script>

<script setup lang="ts">
import { computed, ref, watch, nextTick } from 'vue';
import type { ToastProps } from './toast.props';
import { useToast } from './toast.service';
import ToastMessage from './ToastMessage.vue';

defineOptions({ name: 'BToast' });

const props = withDefaults(defineProps<ToastProps>(), {
    position: 'top-right',
    mode: 'expanded',
    limit: 5,
    baseZIndex: 0,
    autoZIndex: true
});

const { messages, remove } = useToast();
const containerRef = ref<HTMLElement | null>(null);

const activeMessages = computed(() => {
    let filtered = messages.value.filter(msg =>
        props.group ? msg.group === props.group : !msg.group
    );

    if (props.limit && filtered.length > props.limit) {
        // Keep the latest `limit` messages
        filtered = filtered.slice(filtered.length - props.limit);
    }

    if (props.position.includes('bottom')) {
        return filtered.reverse();
    }
    return filtered;
});

const updateZIndex = () => {
    if (!containerRef.value) return;
    if (props.autoZIndex) {
        globalZIndex++;
        containerRef.value.style.zIndex = String(props.baseZIndex + globalZIndex);
    } else {
        containerRef.value.style.zIndex = String(props.baseZIndex);
    }
};

watch(activeMessages, async (newVal, oldVal) => {
    if (newVal.length > 0 && newVal.length > oldVal.length) {
        await nextTick();
        updateZIndex();
    }
});

const onClose = (id: string) => {
    remove(id);
};

defineSlots<{
    messageicon?: (props: { message: any }) => any;
    summary?: (props: { message: any }) => any;
    detail?: (props: { message: any }) => any;
    closeicon?: (props: Record<string, never>) => any;
}>();
</script>

<template>
    <Teleport to="body">
        <div
            v-if="activeMessages.length > 0"
            ref="containerRef"
            class="b-toast"
            :class="[
                `b-toast--${position}`,
                `b-toast--${mode}`
            ]"
        >
            <TransitionGroup name="b-toast-list" tag="div" class="b-toast__container">
                <ToastMessage
                    v-for="msg in activeMessages"
                    :key="msg.id"
                    :message="msg"
                    @close="onClose"
                >
                    <template #messageicon="slotProps"><slot name="messageicon" v-bind="slotProps" /></template>
                    <template #summary="slotProps"><slot name="summary" v-bind="slotProps" /></template>
                    <template #detail="slotProps"><slot name="detail" v-bind="slotProps" /></template>
                    <template #closeicon><slot name="closeicon" /></template>
                </ToastMessage>
            </TransitionGroup>
        </div>
    </Teleport>
</template>