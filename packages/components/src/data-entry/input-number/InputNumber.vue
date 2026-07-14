<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import type { InputNumberProps } from './input-number.props';

defineOptions({
    name: 'BInputNumber',
    inheritAttrs: false
});

const props = withDefaults(defineProps<InputNumberProps>(), {
    format: true,
    showButtons: false,
    buttonLayout: 'stacked',
    mode: 'decimal',
    currencyDisplay: 'symbol',
    useGrouping: true,
    step: 1,
    showClear: false,
    size: 'medium',
    invalid: false,
    disabled: false,
    variant: 'outline',
    readonly: false,
    fluid: false
});

const model = defineModel<number | null | undefined>();
const emit = defineEmits(['focus', 'blur', 'clear']);

defineSlots<{
    incrementicon?: (props: Record<string, never>) => any;
    decrementicon?: (props: Record<string, never>) => any;
    clearicon?: (props: Record<string, never>) => any;
}>();

const inputRef = ref<HTMLInputElement | null>(null);
const isFocused = ref(false);
const displayValue = ref('');

/* --- Formatter --- */
const numberFormatter = computed(() => {
    const options: Intl.NumberFormatOptions = {
        style: props.mode,
        useGrouping: props.useGrouping,
    };

    if (props.mode === 'currency' && props.currency) {
        options.currency = props.currency;
        options.currencyDisplay = props.currencyDisplay;
    }

    if (props.minFractionDigits !== undefined) options.minimumFractionDigits = props.minFractionDigits;
    if (props.maxFractionDigits !== undefined) options.maximumFractionDigits = props.maxFractionDigits;

    return new Intl.NumberFormat(props.locale, options);
});

// To parse raw numbers back, we need to know the locale's decimal separator
const decimalSeparator = computed(() => {
    return new Intl.NumberFormat(props.locale).format(1.1).replace(/1/g, '');
});

/* --- Display Logic --- */
const formatValue = (val: number | null | undefined): string => {
    if (val == null) return '';
    let formatted = props.format ? numberFormatter.value.format(val) : String(val);

    if (props.prefix) formatted = props.prefix + formatted;
    if (props.suffix) formatted = formatted + props.suffix;

    return formatted;
};

// Returns a clean string for editing (strips currency, grouping, etc.)
const getEditValue = (val: number | null | undefined): string => {
    if (val == null) return '';
    return String(val).replace('.', decimalSeparator.value);
};


const updateDisplay = () => {
    if (isFocused.value && document.activeElement === inputRef.value) return;
    displayValue.value = isFocused.value ? getEditValue(model.value) : formatValue(model.value);
};

watch(model, updateDisplay);
onMounted(updateDisplay);

/* --- Interaction Logic --- */
const parseInput = (text: string): number | null => {
    if (!text.trim()) return null;

    // Convert locale separator to dot, strip currency symbols, spaces, letters
    const normalizedText = text
        .replace(new RegExp(`\\${decimalSeparator.value}`, 'g'), '.')
        .replace(/[^\d.-]/g, '');

    const parsed = parseFloat(normalizedText);
    if (isNaN(parsed)) return null;

    let finalValue = parsed;
    if (props.min !== undefined && finalValue < props.min) finalValue = props.min;
    if (props.max !== undefined && finalValue > props.max) finalValue = props.max;

    return finalValue;
};

const onInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    displayValue.value = target.value;
};

const onFocus = (event: FocusEvent) => {
    if (props.disabled || props.readonly) return;
    isFocused.value = true;
    displayValue.value = getEditValue(model.value);
    emit('focus', event);
};

const onBlur = (event: FocusEvent) => {
    if (props.disabled || props.readonly) return;
    isFocused.value = false;
    model.value = parseInput(displayValue.value);
    displayValue.value = formatValue(model.value);
    emit('blur', event);
};

const stepValue = (direction: 1 | -1) => {
    if (props.disabled || props.readonly) return;

    let val = model.value != null ? model.value : 0;
    val += props.step * direction;

    // Floating point math fix
    val = Math.round(val * 10000000000) / 10000000000;

    if (props.min !== undefined && val < props.min) val = props.min;
    if (props.max !== undefined && val > props.max) val = props.max;

    model.value = val;
    displayValue.value = isFocused.value ? getEditValue(model.value) : formatValue(model.value);
};

const onKeyDown = (event: KeyboardEvent) => {
    if (props.disabled || props.readonly) return;
    if (event.key === 'ArrowUp') {
        event.preventDefault();
        stepValue(1);
    } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        stepValue(-1);
    }
};

const clearValue = () => {
    if (props.disabled || props.readonly) return;
    model.value = null;
    displayValue.value = '';
    emit('clear');
    inputRef.value?.focus();
};

/* --- Computed Classes --- */
const containerClasses = computed(() => [
    'b-input-number',
    `b-input-number--size-${props.size}`,
    `b-input-number--variant-${props.variant}`,
    {
        [`b-input-number--layout-${props.buttonLayout}`]: props.showButtons,
        'b-input-number--fluid': props.fluid,
        'b-input-number--invalid': props.invalid,
        'b-input-number--disabled': props.disabled,
        'b-input-number--readonly': props.readonly,
        'b-input-number--focus': isFocused.value
    }
]);

defineExpose({
    input: inputRef,
    focus: () => inputRef.value?.focus(),
    blur: () => inputRef.value?.blur()
});
</script>

<template>
    <div :class="containerClasses">
        <!-- Horizontal Left Button -->
        <button
            v-if="showButtons && buttonLayout === 'horizontal'"
            type="button"
            class="b-input-number__button b-input-number__button--decrement"
            :disabled="disabled || readonly || (min !== undefined && model !== null && model !== undefined && model <= min)"
            tabindex="-1"
            aria-label="Decrease value"
            @mousedown.prevent
            @click="stepValue(-1)"
        >
            <slot name="decrementicon">
                <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14"/></svg>
            </slot>
        </button>

        <div class="b-input-number__input-wrapper">
            <input
                ref="inputRef"
                type="text"
                inputmode="decimal"
                class="b-input-number__input"
                :value="displayValue"
                :placeholder="placeholder"
                :disabled="disabled"
                :readonly="readonly"
                :aria-invalid="invalid ? 'true' : undefined"
                :aria-label="ariaLabel"
                role="spinbutton"
                :aria-valuemin="min"
                :aria-valuemax="max"
                :aria-valuenow="model ?? undefined"
                :aria-valuetext="!isFocused ? displayValue : undefined"
                v-bind="$attrs"
                @input="onInput"
                @focus="onFocus"
                @blur="onBlur"
                @keydown="onKeyDown"
            />

            <!-- Clear Icon -->
            <span v-if="showClear && model != null" class="b-input-number__clear" @mousedown.prevent @click="clearValue">
                <slot name="clearicon">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </slot>
            </span>

            <!-- Stacked Buttons -->
            <div v-if="showButtons && buttonLayout === 'stacked'" class="b-input-number__stacked-group">
                <button
                    type="button"
                    class="b-input-number__button b-input-number__button--increment"
                    :disabled="disabled || readonly || (max !== undefined && model !== null && model !== undefined && model >= max)"
                    tabindex="-1"
                    aria-label="Increase value"
                    @mousedown.prevent
                    @click="stepValue(1)"
                >
                    <slot name="incrementicon">
                        <svg viewBox="0 0 24 24" width="0.8em" height="0.8em" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 15l-6-6-6 6"/></svg>
                    </slot>
                </button>
                <button
                    type="button"
                    class="b-input-number__button b-input-number__button--decrement"
                    :disabled="disabled || readonly || (min !== undefined && model !== null && model !== undefined && model <= min)"
                    tabindex="-1"
                    aria-label="Decrease value"
                    @mousedown.prevent
                    @click="stepValue(-1)"
                >
                    <slot name="decrementicon">
                        <svg viewBox="0 0 24 24" width="0.8em" height="0.8em" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
                    </slot>
                </button>
            </div>
        </div>

        <!-- Horizontal/Vertical Right/Bottom Button -->
        <button
            v-if="showButtons && (buttonLayout === 'horizontal' || buttonLayout === 'vertical')"
            type="button"
            class="b-input-number__button b-input-number__button--increment"
            :disabled="disabled || readonly || (max !== undefined && model !== null && model !== undefined && model >= max)"
            tabindex="-1"
            aria-label="Increase value"
            @mousedown.prevent
            @click="stepValue(1)"
        >
            <slot name="incrementicon">
                <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>
            </slot>
        </button>
    </div>
</template>