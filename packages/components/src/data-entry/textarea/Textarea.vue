<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from "vue";
import { TextareaProps } from "./textarea.props";

defineOptions({
    name: "BTextarea",
    inheritAttrs: false
});

/**
 * Component slots documentation
 */
defineSlots<{
    /** Default slot is typically not used for textarea elements */
    default?: (props: {}) => any;
}>();

const props = withDefaults(defineProps<TextareaProps>(), {
    rows: 5,
    cols: 30,
    autoresize: false,
    fluid: false,
    filled: false,
    disabled: false,
    invalid: false,
    size: "medium"
});

/**
 * Model for v-model binding. Supports string or number.
 */
const model = defineModel<string | number>();

const textareaRef = ref<HTMLTextAreaElement>();

const classes = computed(() => [
    "b-textarea",
    `b-textarea--size-${props.size}`,
    {
        "b-textarea--fluid": props.fluid,
        "b-textarea--filled": props.filled,
        "b-textarea--invalid": props.invalid,
        "b-textarea--autoresize": props.autoresize,
        "b-textarea--disabled": props.disabled
    }
]);

/**
 * Calculates and applies the height of the textarea based on scrollHeight
 * when autoresize is enabled.
 */
const resize = () => {
    if (!props.autoresize || !textareaRef.value) return;

    const el = textareaRef.value;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
};

/**
 * Handles the input event to trigger resize logic.
 */
const handleInput = () => {
    resize();
};

// Re-calculate height when model value changes externally
watch(() => model.value, () => {
    nextTick(resize);
});

onMounted(() => {
    if (props.autoresize) {
        resize();
    }
});

defineExpose({
    /** Reference to the underlying HTML textarea element */
    textarea: textareaRef,
    /** Programmatically focus the textarea */
    focus: () => textareaRef.value?.focus(),
    /** Programmatically blur the textarea */
    blur: () => textareaRef.value?.blur()
});
</script>

<template>
    <textarea
        ref="textareaRef"
        v-model="model"
        :class="classes"
        v-bind="$attrs"
        :rows="rows"
        :cols="cols"
        :disabled="disabled"
        :aria-invalid="invalid"
        @input="handleInput"
    ></textarea>
</template>