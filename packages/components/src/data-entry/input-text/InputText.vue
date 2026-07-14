<script setup lang="ts">
import { computed, ref } from 'vue';
import type { InputTextProps } from './input-text.props';

defineOptions({
    name: 'BInputText',
    inheritAttrs: true
});

const props = withDefaults(defineProps<InputTextProps>(), {
    size: 'medium',
    variant: 'outline',
    invalid: false,
    fluid: false,
    rounded: false,
    disabled: false,
    readonly: false
});

/**
 * Model for two-way binding.
 * Accepts string, number, or null/undefined for empty states.
 */
const model = defineModel<string | number | null | undefined>();

const inputRef = ref<HTMLInputElement | null>(null);

const classes = computed(() => [
    'b-input-text',
    `b-input-text--size-${props.size}`,
    `b-input-text--variant-${props.variant}`,
    {
        'b-input-text--invalid': props.invalid,
        'b-input-text--fluid': props.fluid,
        'b-input-text--rounded': props.rounded,
        'b-input-text--disabled': props.disabled,
        'b-input-text--readonly': props.readonly
    }
]);

// Expose methods and element for parent components
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
        :aria-invalid="invalid ? 'true' : undefined"
    />
</template>