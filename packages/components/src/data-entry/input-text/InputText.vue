<template>
    <div :class="classes">
        <div class="b-input-text__wrapper" @click="focusInput">
            <!-- Left slot) -->
            <div v-if="$slots.prefix" class="b-input-text__prefix">
                <slot name="prefix" />
            </div>

            <!-- Native input -->
            <input
                ref="inputRef"
                v-model="model"
                class="b-input-text__inner"
                v-bind="$attrs"
                :disabled="disabled"
                :readonly="readonly"
            />

            <!-- Right slot -->
            <div v-if="$slots.suffix" class="b-input-text__suffix">
                <slot name="suffix" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, useSlots } from "vue";
import { inputTextProps } from "./input-text.types";
import "./input-text.css";

defineOptions({
    name: "BInputText",
    inheritAttrs: false
});

const props = defineProps(inputTextProps);
const slots = useSlots();
const model = defineModel<string | number>();
const inputRef = ref<HTMLInputElement>();

const classes = computed(() => [
    "b-input-text",
    `b-input-text--size-${props.size}`,
    `b-input-text--variant-${props.variant}`,
    {
        "b-input-text--invalid": props.invalid,
        "b-input-text--fluid": props.fluid,
        "b-input-text--rounded": props.rounded,
        "b-input-text--disabled": props.disabled,
        "b-input-text--has-prefix": !!slots.prefix,
        "b-input-text--has-suffix": !!slots.suffix
    }
]);

const focusInput = () => {
    if (!props.disabled) {
        inputRef.value?.focus();
    }
};
</script>