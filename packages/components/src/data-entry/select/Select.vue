<script setup lang="ts">
import { ref, computed, nextTick, onUnmounted } from 'vue';
import type { SelectProps } from './select.props';

defineOptions({ name: 'BSelect' });

const props = withDefaults(defineProps<SelectProps>(), {
    options: () => [],
    filter: false,
    filterMatchMode: 'contains',
    showClear: false,
    size: 'medium',
    invalid: false,
    disabled: false,
    variant: 'outlined',
    fluid: false,
    loading: false,
    multiple: false,
    emptyMessage: 'No available options',
    emptyFilterMessage: 'No results found',
    appendTo: 'body'
});

const emit = defineEmits(['update:modelValue', 'change', 'focus', 'blur', 'clear', 'show', 'hide']);
const modelValue = defineModel<any>();

defineSlots<{
    value?: (props: { value: any, placeholder: string | undefined }) => any;
    option?: (props: { option: any, index: number }) => any;
    optiongroup?: (props: { option: any, index: number }) => any;
    empty?: (props: Record<string, never>) => any;
    emptyfilter?: (props: Record<string, never>) => any;
    header?: (props: Record<string, never>) => any;
    footer?: (props: Record<string, never>) => any;
    dropdownicon?: (props: Record<string, never>) => any;
    clearicon?: (props: Record<string, never>) => any;
    filtericon?: (props: Record<string, never>) => any;
}>();

/* --- Refs --- */
const containerRef = ref<HTMLElement | null>(null);
const overlayRef = ref<HTMLElement | null>(null);
const filterInputRef = ref<HTMLInputElement | null>(null);
const listRef = ref<HTMLElement | null>(null);

/* --- State --- */
const overlayVisible = ref(false);
const focused = ref(false);
const filterValue = ref('');
const focusedOptionIndex = ref(-1);

/* --- Helpers for Data Resolving --- */
const resolveFieldData = (data: any, field: string | ((d: any) => any) | undefined): any => {
    if (!data) return null;
    if (typeof field === 'function') return field(data);
    if (typeof field === 'string') {
        if (!field.includes('.')) return data[field];
        return field.split('.').reduce((obj, key) => (obj ? obj[key] : null), data);
    }
    return data;
};

const getOptionLabel = (option: any) => resolveFieldData(option, props.optionLabel) ?? String(option);
const getOptionValue = (option: any) => props.optionValue ? resolveFieldData(option, props.optionValue) : option;
const isOptionDisabled = (option: any) => resolveFieldData(option, props.optionDisabled) === true;

/* --- Computed Data --- */
const isGrouped = computed(() => !!props.optionGroupChildren);

const flatOptions = computed(() => {
    if (!isGrouped.value) return props.options;
    let flat: any[] = [];
    props.options.forEach(group => {
        flat.push({ isGroup: true, ...group });
        const children = resolveFieldData(group, props.optionGroupChildren) || [];
        flat = flat.concat(children.map((child: any) => ({ isGroup: false, ...child })));
    });
    return flat;
});

const visibleOptions = computed(() => {
    if (!props.filter || !filterValue.value) return flatOptions.value;

    const query = filterValue.value.toLowerCase();
    const filterFields = props.filterFields?.length ? props.filterFields : [props.optionLabel as string];

    return flatOptions.value.filter(opt => {
        if (opt.isGroup) return true; // Keep groups, we can refine this to hide empty groups later

        return filterFields.some(field => {
            const val = String(resolveFieldData(opt, field) ?? '').toLowerCase();
            if (props.filterMatchMode === 'startsWith') return val.startsWith(query);
            if (props.filterMatchMode === 'endsWith') return val.endsWith(query);
            return val.includes(query);
        });
    });
});

/* --- Selection Logic --- */
const isSelected = (option: any) => {
    const val = getOptionValue(option);
    if (props.multiple) {
        return Array.isArray(modelValue.value) && modelValue.value.some(v =>
            props.dataKey ? v[props.dataKey] === val[props.dataKey] : v === val
        );
    }
    return props.dataKey && modelValue.value && val
        ? modelValue.value[props.dataKey] === val[props.dataKey]
        : modelValue.value === val;
};

const onOptionSelect = (event: Event, option: any, index: number) => {
    if (option.isGroup || isOptionDisabled(option)) return;

    const val = getOptionValue(option);

    if (props.multiple) {
        let newValue = Array.isArray(modelValue.value) ? [...modelValue.value] : [];
        if (isSelected(option)) {
            newValue = newValue.filter(v => props.dataKey ? v[props.dataKey] !== val[props.dataKey] : v !== val);
        } else {
            newValue.push(val);
        }
        modelValue.value = newValue;
    } else {
        modelValue.value = val;
        hideOverlay();
    }

    emit('change', { originalEvent: event, value: modelValue.value });
    focusedOptionIndex.value = index;
};

const clearValue = (event: Event) => {
    event.stopPropagation();
    modelValue.value = props.multiple ? [] : null;
    emit('change', { originalEvent: event, value: modelValue.value });
    emit('clear');
};

/* --- Overlay & Positioning --- */
const calculatePosition = () => {
    if (!containerRef.value || !overlayRef.value) return;

    const containerRect = containerRef.value.getBoundingClientRect();
    const overlayHeight = overlayRef.value.offsetHeight;
    const viewportHeight = window.innerHeight;

    let top = containerRect.bottom + window.scrollY;
    const left = containerRect.left + window.scrollX;

    // Якщо знизу немає місця, відкриваємо вгору
    if (containerRect.bottom + overlayHeight > viewportHeight && containerRect.top > overlayHeight) {
        top = containerRect.top + window.scrollY - overlayHeight;
        overlayRef.value.style.transformOrigin = 'bottom center';
    } else {
        overlayRef.value.style.transformOrigin = 'top center';
    }

    overlayRef.value.style.top = `${top}px`;
    overlayRef.value.style.left = `${left}px`;
    overlayRef.value.style.width = `${containerRect.width}px`;
};

const showOverlay = async () => {
    if (props.disabled || props.loading) return;
    overlayVisible.value = true;
    emit('show');

    await nextTick();
    calculatePosition();

    if (props.filter && filterInputRef.value) {
        filterInputRef.value.focus();
    }

    // Add outside click listener
    document.addEventListener('click', onOutsideClick, { passive: true });
    window.addEventListener('resize', calculatePosition, { passive: true });
    window.addEventListener('scroll', calculatePosition, { passive: true, capture: true });
};

const hideOverlay = () => {
    overlayVisible.value = false;
    filterValue.value = '';
    emit('hide');

    document.removeEventListener('click', onOutsideClick);
    window.removeEventListener('resize', calculatePosition);
    window.removeEventListener('scroll', calculatePosition, { capture: true });
};

const toggleOverlay = () => {
    overlayVisible.value ? hideOverlay() : showOverlay();
};

const onOutsideClick = (event: MouseEvent) => {
    if (!overlayRef.value || !containerRef.value) return;
    const target = event.target as Node;
    if (!containerRef.value.contains(target) && !overlayRef.value.contains(target)) {
        hideOverlay();
    }
};

/* --- A11y & Keyboard Navigation --- */
const onFocus = (e: FocusEvent) => { focused.value = true; emit('focus', e); };
const onBlur = (e: FocusEvent) => { focused.value = false; emit('blur', e); };

const onKeyDown = (event: KeyboardEvent) => {
    if (props.disabled) return;

    switch (event.key) {
        case 'ArrowDown':
            event.preventDefault();
            if (!overlayVisible.value) showOverlay();
            else navigate(1);
            break;
        case 'ArrowUp':
            event.preventDefault();
            if (!overlayVisible.value) showOverlay();
            else navigate(-1);
            break;
        case 'Enter':
        case ' ':
            event.preventDefault();
            if (!overlayVisible.value) {
                showOverlay();
            } else if (focusedOptionIndex.value !== -1) {
                onOptionSelect(event, visibleOptions.value[focusedOptionIndex.value], focusedOptionIndex.value);
            }
            break;
        case 'Escape':
            event.preventDefault();
            hideOverlay();
            if (containerRef.value) containerRef.value.focus();
            break;
    }
};

const navigate = (direction: number) => {
    const opts = visibleOptions.value;
    let nextIndex = focusedOptionIndex.value + direction;

    while (nextIndex >= 0 && nextIndex < opts.length) {
        if (!opts[nextIndex].isGroup && !isOptionDisabled(opts[nextIndex])) {
            focusedOptionIndex.value = nextIndex;
            scrollToOption(nextIndex);
            return;
        }
        nextIndex += direction;
    }
};

const scrollToOption = (index: number) => {
    if (!listRef.value) return;
    const element = listRef.value.children[index] as HTMLElement;
    if (element) {
        element.scrollIntoView({ block: 'nearest' });
    }
};

/* --- Cleanup --- */
onUnmounted(() => {
    document.removeEventListener('click', onOutsideClick);
    window.removeEventListener('resize', calculatePosition);
    window.removeEventListener('scroll', calculatePosition, { capture: true });
});

/* --- Computed Classes --- */
const containerClasses = computed(() => [
    'b-select',
    `b-select--size-${props.size}`,
    `b-select--variant-${props.variant}`,
    {
        'b-select--fluid': props.fluid,
        'b-select--disabled': props.disabled,
        'b-select--invalid': props.invalid,
        'b-select--focus': focused.value,
        'b-select--open': overlayVisible.value,
        'b-select--loading': props.loading,
        'b-select--clearable': props.showClear && modelValue.value != null && (!props.multiple || modelValue.value.length > 0)
    }
]);

const displayValueText = computed(() => {
    if (props.multiple) {
        if (!modelValue.value || !modelValue.value.length) return props.placeholder || '';
        return modelValue.value.map((v: any) => {
            const opt = props.options.find(o => getOptionValue(o) === v);
            return opt ? getOptionLabel(opt) : v;
        }).join(', ');
    } else {
        if (modelValue.value == null) return props.placeholder || '';
        const opt = props.options.find(o => getOptionValue(o) === modelValue.value);
        return opt ? getOptionLabel(opt) : String(modelValue.value);
    }
});
</script>

<template>
    <div
        ref="containerRef"
        :class="containerClasses"
        tabindex="0"
        role="combobox"
        aria-haspopup="listbox"
        :aria-expanded="overlayVisible"
        @click="toggleOverlay"
        @focus="onFocus"
        @blur="onBlur"
        @keydown="onKeyDown"
    >
        <!-- Label / Value -->
        <div class="b-select__label">
            <slot name="value" :value="modelValue" :placeholder="placeholder">
                <span :class="{'b-select__placeholder': modelValue == null || (multiple && !modelValue.length)}">
                    {{ displayValueText }}
                </span>
            </slot>
        </div>

        <!-- Icons -->
        <div class="b-select__tools">
            <span v-if="props.showClear && modelValue != null && (!props.multiple || modelValue.length > 0)" class="b-select__clear" @click="clearValue">
                <slot name="clearicon">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </slot>
            </span>

            <span v-if="loading" class="b-select__loading">
                <svg class="b-select__spinner" viewBox="0 0 24 24" width="14" height="14" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" stroke-opacity="0.3"></circle><path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            </span>
            <span v-else class="b-select__icon">
                <slot name="dropdownicon">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
                </slot>
            </span>
        </div>

        <!-- Dropdown Overlay -->
        <Teleport :to="appendTo">
            <Transition name="b-select-fade">
                <div v-if="overlayVisible" ref="overlayRef" class="b-select__overlay" @mousedown.prevent>
                    <!-- Header Slot -->
                    <div v-if="$slots.header" class="b-select__header">
                        <slot name="header" />
                    </div>

                    <!-- Filter Input -->
                    <div v-if="filter" class="b-select__filter-container">
                        <input
                            ref="filterInputRef"
                            type="text"
                            class="b-select__filter-input"
                            v-model="filterValue"
                            :placeholder="filterPlaceholder"
                            role="searchbox"
                            @keydown.down.prevent="navigate(1)"
                            @keydown.up.prevent="navigate(-1)"
                            @keydown.enter.prevent="onKeyDown"
                            @keydown.esc.prevent="onKeyDown"
                        />
                        <span class="b-select__filter-icon">
                            <slot name="filtericon">
                                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                            </slot>
                        </span>
                    </div>

                    <!-- Options List -->
                    <div class="b-select__list-wrapper">
                        <ul ref="listRef" class="b-select__list" role="listbox" :aria-multiselectable="multiple">
                            <template v-if="visibleOptions.length > 0">
                                <li
                                    v-for="(option, index) in visibleOptions"
                                    :key="getOptionValue(option) + index"
                                    class="b-select__item"
                                    :class="{
                                        'b-select__item--group': option.isGroup,
                                        'b-select__item--selected': !option.isGroup && isSelected(option),
                                        'b-select__item--focused': focusedOptionIndex === index,
                                        'b-select__item--disabled': isOptionDisabled(option)
                                    }"
                                    :role="option.isGroup ? 'group' : 'option'"
                                    :aria-selected="!option.isGroup ? isSelected(option) : undefined"
                                    :aria-disabled="isOptionDisabled(option)"
                                    @click="onOptionSelect($event, option, index)"
                                    @mouseenter="!option.isGroup && !isOptionDisabled(option) && (focusedOptionIndex = index)"
                                >
                                    <!-- Group Header -->
                                    <template v-if="option.isGroup">
                                        <slot name="optiongroup" :option="option" :index="index">
                                            {{ resolveFieldData(option, optionGroupLabel) }}
                                        </slot>
                                    </template>

                                    <!-- Option Item -->
                                    <template v-else>
                                        <div v-if="multiple" class="b-select__checkbox">
                                            <svg v-if="isSelected(option)" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>
                                        </div>
                                        <slot name="option" :option="option" :index="index">
                                            {{ getOptionLabel(option) }}
                                        </slot>
                                    </template>
                                </li>
                            </template>

                            <!-- Empty States -->
                            <li v-else class="b-select__empty">
                                <slot v-if="filterValue" name="emptyfilter">{{ emptyFilterMessage }}</slot>
                                <slot v-else name="empty">{{ emptyMessage }}</slot>
                            </li>
                        </ul>
                    </div>

                    <!-- Footer Slot -->
                    <div v-if="$slots.footer" class="b-select__footer">
                        <slot name="footer" />
                    </div>
                </div>
            </Transition>
        </Teleport>
    </div>
</template>