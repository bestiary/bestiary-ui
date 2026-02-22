<template>
    <input
        ref="inputRef"
        v-model="model"
        :class="classes"
        v-bind="$attrs"
        :disabled="disabled"
        :readonly="readonly"
    />
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { inputTextProps } from "./input-text.types";
import "./input-text.css";

defineOptions({
    name: "BInputText",
    inheritAttrs: true // Тепер атрибути падають на корінь (input)
});

const props = defineProps(inputTextProps);
const model = defineModel<string | number>();
const inputRef = ref<HTMLInputElement>();

const classes = computed(() => [
    "b-input-text",
    `b-input-text--size-${props.size}`,
    `b-input-text--variant-${props.variant}`,
    {
        "b-input-text--invalid": props.invalid,
        "b-input-text--fluid": props.fluid,
        "b-input-text--rounded": props.rounded
    }
]);

defineExpose({
    input: inputRef,
    focus: () => inputRef.value?.focus(),
    blur: () => inputRef.value?.blur()
});
</script>