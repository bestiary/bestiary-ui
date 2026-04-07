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
            <!-- Icon -->
            <svg v-if="indeterminate" class="b-checkbox__icon" viewBox="0 0 24 24">
                <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            </svg>
            <svg v-else class="b-checkbox__icon" viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { checkboxProps } from "./checkbox.props.ts";

defineOptions({
    name: "BCheckbox",
    inheritAttrs: false
});

const props = defineProps(checkboxProps);
const model = defineModel<any>();
const inputRef = ref<HTMLInputElement>();

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

const isChecked = computed(() => {
    if (props.indeterminate) return false;
    if (Array.isArray(model.value)) {
        return model.value.includes(props.value);
    }
    return model.value === true || model.value === props.value;
});

defineExpose({
    input: inputRef,
    focus: () => inputRef.value?.focus(),
    blur: () => inputRef.value?.blur()
});
</script>