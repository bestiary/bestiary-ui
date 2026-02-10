<script setup lang="ts">
import {computed, defineEmits, h, onMounted, ref} from "vue";
import {messageProps} from "./message.types.ts";
import "./message.css";

defineOptions({
    name: "BMessage"
});

const props = defineProps(messageProps);
const emits = defineEmits(["close", "life-end"]);
const slots = defineSlots();

const visible = ref(true);

onMounted(() => {
    if(props.life) {
        setTimeout(() => {
           visible.value = false;
           emits("life-end");
           emits("close");
        }, props.life);
    }
});

const handleClose = (event: MouseEvent) => {
    visible.value = false;
    emits("close", event);
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

const DefaultCloseIcon = () => h("svg", {width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg"}, [
    h("path", {d: "M6 18L18 6M6 6L18 18", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round"})
]);
</script>

<template>
    <transition name="b-message--fade">
        <div v-if="visible" :class="classes" role="alert" aria-live="polite">
            <div class="b-message__content">

                <div v-if="$slots.icon || icon" class="b-message__icon">
                    <slot name="icon">
                        <component :is="icon"/>
                    </slot>
                </div>

                <div class="b-message__text">
                    <slot/>
                </div>

                <button
                    v-if="closable"
                    type="button"
                    class="b-message__close-button"
                    @click="handleClose"
                >
                    <slot name="closeIcon">
                        <component :is="closeIcon || DefaultCloseIcon" />
                    </slot>
                </button>
            </div>
        </div>
    </transition>
</template>