<script setup lang="ts">
import { computed } from 'vue';
import type { SelectButtonProps } from './select-button.props';

defineOptions({ name: "BSelectButton" });

const props = withDefaults(defineProps<SelectButtonProps>(), {
    options: () => [],
    multiple: false,
    unselectable: true,
    disabled: false,
    size: "medium",
    tabindex: 0,
    invalid: false,
    fluid: false,
});

/**
 * Model for v-model binding. Supports single value or an array.
 */
const model = defineModel<any>();

const emit = defineEmits<{
    /** Triggered when an option is selected/unselected */
    (e: 'change', event: { originalEvent: Event, value: any }): void;
}>();

/* --- Helpers --- */

const getOptionLabel = (option: any) => {
    if (typeof props.optionLabel === 'function') return props.optionLabel(option);
    if (props.optionLabel && typeof option === 'object') return option[props.optionLabel];
    return option;
};

const getOptionValue = (option: any) => {
    if (typeof props.optionValue === 'function') return props.optionValue(option);
    if (props.optionValue && typeof option === 'object') return option[props.optionValue];
    return option;
};

const isOptionDisabled = (option: any) => {
    if (props.disabled) return true;
    if (typeof props.optionDisabled === 'function') return props.optionDisabled(option);
    if (props.optionDisabled && typeof option === 'object') return option[props.optionDisabled];
    return false;
};

const isSelected = (option: any) => {
    const value = getOptionValue(option);
    if (props.multiple) {
        return Array.isArray(model.value) && model.value.includes(value);
    }
    return model.value === value;
};

/* --- Actions --- */

const onOptionClick = (event: Event, option: any) => {
    if (isOptionDisabled(option)) return;

    const value = getOptionValue(option);
    const selected = isSelected(option);

    if (selected && !props.unselectable) return;

    let newValue;

    if (props.multiple) {
        const currentModel = Array.isArray(model.value) ? [...model.value] : [];
        if (selected) {
            newValue = currentModel.filter(val => val !== value);
        } else {
            newValue = [...currentModel, value];
        }
    } else {
        newValue = selected ? null : value;
    }

    model.value = newValue;
    emit('change', { originalEvent: event, value: newValue });
};

const classes = computed(() => [
    "b-select-button",
    `b-select-button--size-${props.size}`,
    {
        "b-select-button--disabled": props.disabled,
        "b-select-button--invalid": props.invalid,
        "b-select-button--fluid": props.fluid,
    }
]);
</script>

<template>
    <div :class="classes" role="group">
        <button
            v-for="(option, index) in options"
            :key="index"
            type="button"
            class="b-select-button__item"
            :class="{ 'is-selected': isSelected(option) }"
            :disabled="isOptionDisabled(option)"
            :tabindex="isOptionDisabled(option) ? -1 : tabindex"
            :aria-pressed="isSelected(option)"
            @click="onOptionClick($event, option)"
        >
            <slot name="option" :option="option" :index="index">
                <span class="b-select-button__label">
                    {{ getOptionLabel(option) }}
                </span>
            </slot>
        </button>
    </div>
</template>