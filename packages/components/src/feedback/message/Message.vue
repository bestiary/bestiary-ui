<script setup lang="ts">
import { computed, h, onMounted, ref } from "vue";
import { MessageProps } from "./message.props";

defineOptions({
    name: "BMessage"
});

/**
 * Component emits documentation
 */
const emit = defineEmits<{
    /** Triggered when the message is closed manually or via 'life' timeout */
    (e: "close", event?: MouseEvent): void;
    /** Triggered specifically when the 'life' timeout expires */
    (e: "life-end"): void;
}>();

/**
 * Component slots documentation
 */
defineSlots<{
    /** Default slot for the message text/content */
    default?: (props: {}) => any;
    /** Slot for a custom severity icon */
    icon?: (props: {}) => any;
    /** Slot for a custom close button icon */
    closeicon?: (props: {}) => any;
}>();

const props = withDefaults(defineProps<MessageProps>(), {
    severity: "info",
    closable: false,
    size: "medium",
    variant: "solid",
    life: null
});

const visible = ref(true);

onMounted(() => {
    if (props.life) {
        setTimeout(() => {
            visible.value = false;
            emit("life-end");
            emit("close");
        }, props.life);
    }
});

const handleClose = (event: MouseEvent) => {
    visible.value = false;
    emit("close", event);
};

const classes = computed(() => [
    "b-message",
    `b-message--severity-${props.severity}`,
    `b-message--size-${props.size}`,
    `b-message--variant-${props.variant}`,
    {
        "b-message--closable": props.closable,
    }
]);

/** Default SVG close icon used when no custom icon is provided */
const DefaultCloseIcon = () => h("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [
    h("path", {
        d: "M6 18L18 6M6 6L18 18",
        stroke: "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })
]);
</script>

<template>
    <transition name="b-message--fade" appear>
        <div v-if="visible" :class="classes" role="alert" aria-live="polite">
            <div class="b-message__content">

                <!-- Severity Icon Section -->
                <div v-if="$slots.icon || icon" class="b-message__icon">
                    <slot name="icon">
                        <component :is="icon" />
                    </slot>
                </div>

                <!-- Text Content Section -->
                <div class="b-message__text">
                    <slot />
                </div>

                <!-- Close Button Section -->
                <button
                    v-if="closable"
                    type="button"
                    class="b-message__close-button"
                    aria-label="Close"
                    @click="handleClose"
                >
                    <slot name="closeicon">
                        <component :is="closeIcon || DefaultCloseIcon" />
                    </slot>
                </button>

            </div>
        </div>
    </transition>
</template>