<script setup lang="ts">
import { computed, ref } from "vue";
import type { CheckboxProps } from "./checkbox.props";

defineOptions({
    name: "BCheckbox",
    inheritAttrs: false
});

const props = withDefaults(defineProps<CheckboxProps>(), {
    binary: false,
    trueValue: true,
    falseValue: false,
    size: "medium",
    variant: "outline",
    disabled: false,
    readonly: false,
    invalid: false
});

const model = defineModel<any>();
const indeterminate = defineModel<boolean>('indeterminate', { default: false });
const inputRef = ref<HTMLInputElement>();

/**
 * PrimeVue Logic:
 * 1. If binary is true, we compare with trueValue.
 * 2. If model is an array, we check if props.value is inside.
 * 3. Fallback to strict equality.
 */
const isChecked = computed(() => {
    if (props.binary) return model.value === props.trueValue;
    if (Array.isArray(model.value)) return model.value.includes(props.value);
    if (props.value !== undefined && props.value !== null) return model.value === props.value;
    return model.value === props.trueValue;
});

const classes = computed(() => [
    "b-checkbox",
    `b-checkbox--size-${props.size}`,
    `b-checkbox--variant-${props.variant}`,
    {
        "b-checkbox--invalid": props.invalid,
        "b-checkbox--disabled": props.disabled,
        "b-checkbox--readonly": props.readonly,
        "b-checkbox--indeterminate": indeterminate.value,
        "b-checkbox--checked": isChecked.value || indeterminate.value
    }
]);

const onChange = () => {
    if (props.disabled || props.readonly) return;

    if (indeterminate.value) {
        indeterminate.value = false;
    }

    let newValue;

    if (props.binary) {
        // Toggle between trueValue and falseValue
        newValue = isChecked.value ? props.falseValue : props.trueValue;
    } else if (props.value !== undefined && props.value !== null) {
        const currentModel = Array.isArray(model.value) ? [...model.value] : [];
        const index = currentModel.indexOf(props.value);

        if (index === -1) {
            currentModel.push(props.value);
        } else {
            currentModel.splice(index, 1);
        }
        newValue = currentModel;
    } else {
        newValue = isChecked.value ? props.falseValue : props.trueValue;
    }

    model.value = newValue;
};

defineExpose({
    input: inputRef,
    focus: () => inputRef.value?.focus(),
    blur: () => inputRef.value?.blur()
});

const emit = defineEmits(['update:indeterminate']);
</script>

<template>
    <div :class="classes">
        <input
            :id="inputId"
            :name="name"
            ref="inputRef"
            type="checkbox"
            class="b-checkbox__input"
            v-bind="$attrs"
            :value="value"
            :checked="isChecked"
            :disabled="disabled"
            :readonly="readonly"
            .indeterminate="indeterminate"
            @change="onChange"
        />
        <div class="b-checkbox__box">
            <svg v-if="indeterminate" class="b-checkbox__icon" viewBox="0 0 24 24">
                <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
            </svg>
            <svg v-else class="b-checkbox__icon" viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </div>
</template>