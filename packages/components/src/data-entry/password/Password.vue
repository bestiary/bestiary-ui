<script setup lang="ts">
import {passwordProps} from "./password.types.ts";
import {computed, h, ref} from "vue";
import "./password.css";

defineOptions({
    name: "BPassword",
    inheritAttrs: false,
});

const props = defineProps(passwordProps);
const model = defineModel<string>({default: ""});
const inputRef = ref<HTMLInputElement>();
const isPasswordVisible = ref<boolean>(false);
const overlayVisible = ref<boolean>(false);

const onFocus = () => {
    overlayVisible.value = true;
};

const onBlur = () => {
    overlayVisible.value = false;
};

const DefaultVisibleIcon = () => h('svg', { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, [
    h('path', { d: 'M2.03555 12.3224C1.96647 12.1151 1.9664 11.8907 2.03536 11.6834C3.42372 7.50972 7.36079 4.5 12.0008 4.5C16.6387 4.5 20.5742 7.50692 21.9643 11.6776C22.0334 11.8849 22.0335 12.1093 21.9645 12.3166C20.5761 16.4903 16.6391 19.5 11.9991 19.5C7.36119 19.5 3.42564 16.4931 2.03555 12.3224Z', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }),
    h('path', { d: 'M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
]);

const DefaultHiddenIcon = () => h('svg', { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, [
    h('path', { d: 'M3.97993 8.22257C3.05683 9.31382 2.35242 10.596 1.93436 12.0015C3.22565 16.338 7.24311 19.5 11.9991 19.5C12.9917 19.5 13.9521 19.3623 14.8623 19.1049M6.22763 6.22763C7.88389 5.13558 9.86771 4.5 12 4.5C16.756 4.5 20.7734 7.66205 22.0647 11.9985C21.3528 14.3919 19.8106 16.4277 17.772 17.772M6.22763 6.22763L3 3M6.22763 6.22763L9.87868 9.87868M17.772 17.772L21 21M17.772 17.772L14.1213 14.1213M14.1213 14.1213C14.6642 13.5784 15 12.8284 15 12C15 10.3431 13.6569 9 12 9C11.1716 9 10.4216 9.33579 9.87868 9.87868M14.1213 14.1213L9.87868 9.87868', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
]);


const classes = computed(() => [
    "b-password",
    `b-password--size-${props.size}`,
    `b-password--variant-${props.variant}`,
    {
        "b-password--invalid": props.invalid,
        "b-password--fluid": props.fluid,
        "b-password--disabled": props.disabled
    }
]);

const toggleVisibility = () => {
    if (!props.disabled) isPasswordVisible.value = !isPasswordVisible.value;
};

const focusInput = () => {
    if (!props.disabled) inputRef.value?.focus();
};

const internalStrength = (val: string): "weak" | "medium" | "strong" | "" => {
    if (!val || val.length === 0) return "";
    if (val.length < 6) return "weak";
    if (val.length < 10 || !/[A-Z]/.test(val) || !/[0-9]/.test(val)) return "medium";
    return "strong";
};

const strength = computed(() => {
    const val = model.value;
    if (typeof props.strengthMeter === 'function') {
        return props.strengthMeter(val);
    }
    return internalStrength(val);
});

const strengthLabel = computed(() => {
    if (!model.value) return props.promptLabel;
    const s = strength.value;
    if (s === "weak") return props.weakLabel;
    if (s === "medium") return props.mediumLabel;
    if (s === "strong") return props.strongLabel;
    return props.promptLabel;
});
</script>

<template>
    <div :class="classes">
        <div class="b-password__wrapper" @click="focusInput">
            <input
                ref="inputRef"
                v-model="model"
                :type="isPasswordVisible ? 'text' : 'password'"
                class="b-password__inner"
                v-bind="$attrs"
                :disabled="disabled"
                :readonly="readonly"
                @focus="onFocus"
                @blur="onBlur"
            />

            <!-- Toggle Mask Icon -->
            <div
                v-if="toggleMask"
                class="b-password__toggle"
                @click.stop="toggleVisibility"
            >
                <component :is="isPasswordVisible
                    ? (hiddenIcon || DefaultHiddenIcon)
                    : (visibleIcon || DefaultVisibleIcon)"
                />
            </div>

            <transition name="b-password--fade">
                <div v-if="overlayVisible && feedback" class="b-password__panel">
                    <!-- Header -->
                    <div v-if="$slots.header" class="b-password__header">
                        <slot name="header" />
                    </div>

                    <!-- Default Meter -->
                    <div class="b-password__meter-content">
                        <div class="b-password__meter">
                            <div :class="['b-password__meter-fill', `is-${strength}`]"></div>
                        </div>
                        <span class="b-password__strength-text">{{ strengthLabel }}</span>
                    </div>

                    <!-- Footer -->
                    <div v-if="$slots.footer" class="b-password__footer">
                        <slot name="footer" :strength="strength" />
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>