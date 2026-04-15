<script setup lang="ts">
import { computed, ref } from "vue";
import { CheckboxProps } from "./checkbox.props";

defineOptions({
    name: "BCheckbox",
    inheritAttrs: false
});

const props = withDefaults(defineProps<CheckboxProps>(), {
    size: "medium",
    variant: "outline",
    invalid: false,
    disabled: false,
    readonly: false,
    indeterminate: false
});

/**
 * Model for v-model binding. Supports boolean or array of values.
 */
const model = defineModel<any>();
const inputRef = ref<HTMLInputElement>();

/**
 * Internal state to determine if the checkbox is visually checked.
 */
const isChecked = computed(() => {
    if (props.indeterminate) return false;
    if (Array.isArray(model.value)) {
        return model.value.includes(props.value);
    }
    return model.value === true || model.value === props.value;
});

const classes = computed(() => [
    "b-checkbox",
    `b-checkbox--size-${props.size}`,
    `b-checkbox--variant-${props.variant}`,
    {
        "b-checkbox--invalid": props.invalid,
        "b-checkbox--disabled": props.disabled,
        "b-checkbox--readonly": props.readonly,
        "b-checkbox--indeterminate": props.indeterminate,
        "b-checkbox--checked": isChecked.value
    }
]);

defineExpose({
    /** Reference to the underlying HTML input element */
    input: inputRef,
    /** Programmatically focus the checkbox */
    focus: () => inputRef.value?.focus(),
    /** Programmatically blur the checkbox */
    blur: () => inputRef.value?.blur()
});
</script>

<template>
    <div :class="classes">
        <input
            ref="inputRef"
            v-model="model"
            type="checkbox"
            class="b-checkbox__input"
            v-bind="$attrs"
            :value="value"
            :disabled="disabled"
            :readonly="readonly"
        />
        <div class="b-checkbox__box">
            <!-- Indeterminate Icon -->
            <svg v-if="indeterminate" class="b-checkbox__icon" viewBox="0 0 24 24">
                <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            </svg>
            <!-- Checked Icon -->
            <svg v-else class="b-checkbox__icon" viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </div>
</template>