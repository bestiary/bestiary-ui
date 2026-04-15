<script setup lang="ts">
import { computed, ref } from "vue";
import { InputTextProps } from "./input-text.props";

defineOptions({
    name: "BInputText",
    inheritAttrs: true
});

const props = withDefaults(defineProps<InputTextProps>(), {
    size: "medium",
    variant: "outline",
    invalid: false,
    fluid: false,
    rounded: false,
    disabled: false,
    readonly: false
});

/**
 * Model for v-model binding. Supports string or number.
 */
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
    /** Reference to the underlying HTML input element */
    input: inputRef,
    /** Programmatically focus the input */
    focus: () => inputRef.value?.focus(),
    /** Programmatically blur the input */
    blur: () => inputRef.value?.blur()
});
</script>

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