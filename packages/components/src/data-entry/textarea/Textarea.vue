<script setup lang="ts">
import {textareaProps} from "./textarea.types.ts";
import {computed, nextTick, onMounted, ref, watch} from "vue";
import "./textarea.css";

defineOptions({
    name: "BTextarea",
    inheritAttrs: false
});

const props = defineProps(textareaProps);
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

const resize = () => {
     if (!props.autoresize || !textareaRef.value) return;

     const el = textareaRef.value;
     el.style.height = "auto";
     el.style.height = `${el.scrollHeight}px`;
};

const handleInput = () => {
    resize();
};

watch(() => model.value, () => {
   nextTick(resize);
});

onMounted(() => {
   if (props.autoresize) {
       resize();
   }
});
</script>

<template>
<textarea
    :class="classes"
    ref="textareaRef"
    v-model="model"
    v-bind="$attrs"
    :rows="rows"
    :cols="cols"
    :disabled="disabled"
    :aria-invalid="invalid"
    @input="handleInput"
></textarea>
</template>