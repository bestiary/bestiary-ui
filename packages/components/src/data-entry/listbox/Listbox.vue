<script setup lang="ts">
import { ref, computed } from 'vue';
import type { ListboxProps } from './listbox.props';

defineOptions({ name: 'BListbox' });

const props = withDefaults(defineProps<ListboxProps>(), {
    options: () => [],
    scrollHeight: '14rem',
    filter: false,
    filterMatchMode: 'contains',
    multiple: false,
    metaKeySelection: false,
    checkmark: false,
    checkbox: false,
    showToggleAll: true,
    striped: false,
    invalid: false,
    disabled: false,
    fluid: false,
    emptyMessage: 'No available options',
    emptyFilterMessage: 'No results found'
});

const modelValue = defineModel<any>();
const emit = defineEmits(['change', 'filter']);

defineSlots<{
    option?: (props: { option: any, index: number }) => any;
    optiongroup?: (props: { option: any, index: number }) => any;
    empty?: (props: Record<string, never>) => any;
    emptyfilter?: (props: Record<string, never>) => any;
    filtericon?: (props: Record<string, never>) => any;
    header?: (props: Record<string, never>) => any;
}>();

/* --- State --- */
const filterValue = ref('');
const focusedOptionIndex = ref(-1);

/* --- Helpers for Data Resolving --- */
const fieldCache = new Map<string, string[]>();

const resolveFieldData = (data: any, field: string | ((d: any) => any) | undefined): any => {
    if (!data || !field) return null;
    if (typeof field === 'function') return field(data);
    if (typeof field === 'string') {
        if (!field.includes('.')) return data[field];
        if (!fieldCache.has(field)) fieldCache.set(field, field.split('.'));
        const path = fieldCache.get(field)!;
        let obj = data;
        for (let i = 0, len = path.length; i < len; i++) {
            obj = obj[path[i]];
            if (obj == null) return null;
        }
        return obj;
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
        if (opt.isGroup) return true; // Groups are kept, ideally we should hide empty groups

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

const onOptionSelect = (event: MouseEvent | KeyboardEvent, option: any, index: number) => {
    if (props.disabled || option.isGroup || isOptionDisabled(option)) return;

    const val = getOptionValue(option);

    if (props.multiple) {
        let newValue = Array.isArray(modelValue.value) ? [...modelValue.value] : [];
        const selected = isSelected(option);

        if (props.metaKeySelection) {
            const metaKey = event.metaKey || event.ctrlKey;
            if (metaKey) {
                if (selected) newValue = newValue.filter(v => props.dataKey ? v[props.dataKey] !== val[props.dataKey] : v !== val);
                else newValue.push(val);
            } else {
                newValue = [val];
            }
        } else {
            if (selected) newValue = newValue.filter(v => props.dataKey ? v[props.dataKey] !== val[props.dataKey] : v !== val);
            else newValue.push(val);
        }
        modelValue.value = newValue;
    } else {
        modelValue.value = val;
    }

    focusedOptionIndex.value = index;
    emit('change', { originalEvent: event, value: modelValue.value });
};

/* --- Select All Logic --- */
const selectableOptions = computed(() => visibleOptions.value.filter(o => !o.isGroup && !isOptionDisabled(o)));
const allSelected = computed(() => {
    if (!props.multiple || !modelValue.value || modelValue.value.length === 0) return false;
    return selectableOptions.value.every(opt => isSelected(opt));
});

const onToggleAll = (event: MouseEvent) => {
    if (props.disabled) return;

    if (allSelected.value) {
        modelValue.value = [];
    } else {
        modelValue.value = selectableOptions.value.map(opt => getOptionValue(opt));
    }
    emit('change', { originalEvent: event, value: modelValue.value });
};

/* --- Filtering --- */
const onFilterChange = (event: Event) => {
    emit('filter', { originalEvent: event, value: filterValue.value });
};

/* --- Keyboard Navigation --- */
const onKeyDown = (event: KeyboardEvent) => {
    if (props.disabled) return;

    const opts = visibleOptions.value;
    if (!opts.length) return;

    let nextIndex = -1;

    switch (event.key) {
        case 'ArrowDown':
            event.preventDefault();
            nextIndex = findNextOption(focusedOptionIndex.value, 1, opts);
            break;
        case 'ArrowUp':
            event.preventDefault();
            nextIndex = findNextOption(focusedOptionIndex.value, -1, opts);
            break;
        case 'Home':
            event.preventDefault();
            nextIndex = findNextOption(-1, 1, opts);
            break;
        case 'End':
            event.preventDefault();
            nextIndex = findNextOption(opts.length, -1, opts);
            break;
        case 'Enter':
        case ' ':
            event.preventDefault();
            if (focusedOptionIndex.value !== -1) {
                onOptionSelect(event, opts[focusedOptionIndex.value], focusedOptionIndex.value);
            }
            break;
    }

    if (nextIndex !== -1) {
        focusedOptionIndex.value = nextIndex;
        scrollToFocused();
    }
};

const findNextOption = (currentIndex: number, direction: 1 | -1, opts: any[]): number => {
    let nextIndex = currentIndex + direction;
    while (nextIndex >= 0 && nextIndex < opts.length) {
        if (!opts[nextIndex].isGroup && !isOptionDisabled(opts[nextIndex])) {
            return nextIndex;
        }
        nextIndex += direction;
    }
    return currentIndex; // Return current if boundary hit
};

const listRef = ref<HTMLElement | null>(null);
const scrollToFocused = () => {
    if (!listRef.value) return;
    const items = listRef.value.querySelectorAll('.b-listbox__item');
    const el = items[focusedOptionIndex.value] as HTMLElement;
    if (el) el.scrollIntoView({ block: 'nearest' });
};

/* --- Computed Classes --- */
const containerClasses = computed(() => [
    'b-listbox',
    {
        'b-listbox--fluid': props.fluid,
        'b-listbox--disabled': props.disabled,
        'b-listbox--invalid': props.invalid,
        'b-listbox--striped': props.striped
    }
]);
</script>

<template>
    <div :class="containerClasses" :aria-invalid="invalid ? 'true' : undefined">
        <!-- Header (Filter & Select All) -->
        <div v-if="filter || (checkbox && multiple && showToggleAll) || $slots.header" class="b-listbox__header">
            <slot name="header" />

            <div v-if="checkbox && multiple && showToggleAll" class="b-listbox__header-checkbox" @click="onToggleAll">
                <div class="b-listbox__checkbox" :class="{ 'b-listbox__checkbox--checked': allSelected }">
                    <svg v-if="allSelected" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
            </div>

            <div v-if="filter" class="b-listbox__filter-container">
                <input
                    type="text"
                    class="b-listbox__filter-input"
                    v-model="filterValue"
                    :placeholder="filterPlaceholder"
                    :disabled="disabled"
                    role="searchbox"
                    @input="onFilterChange"
                />
                <span class="b-listbox__filter-icon">
                    <slot name="filtericon">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                    </slot>
                </span>
            </div>
        </div>

        <!-- List Container -->
        <div class="b-listbox__list-wrapper" :style="[{ maxHeight: scrollHeight }, listStyle]">
            <ul
                ref="listRef"
                class="b-listbox__list"
                role="listbox"
                :aria-multiselectable="multiple"
                tabindex="0"
                @keydown="onKeyDown"
                @focus="focusedOptionIndex === -1 && (focusedOptionIndex = findNextOption(-1, 1, visibleOptions))"
            >
                <template v-if="visibleOptions.length > 0">
                    <li
                        v-for="(option, index) in visibleOptions"
                        :key="getOptionValue(option) + index"
                        class="b-listbox__item"
                        :class="{
                            'b-listbox__item--group': option.isGroup,
                            'b-listbox__item--selected': !option.isGroup && isSelected(option),
                            'b-listbox__item--focused': focusedOptionIndex === index,
                            'b-listbox__item--disabled': isOptionDisabled(option)
                        }"
                        :role="option.isGroup ? 'group' : 'option'"
                        :aria-selected="!option.isGroup ? isSelected(option) : undefined"
                        :aria-disabled="isOptionDisabled(option)"
                        @click="onOptionSelect($event, option, index)"
                    >
                        <!-- Group Header -->
                        <template v-if="option.isGroup">
                            <slot name="optiongroup" :option="option" :index="index">
                                {{ resolveFieldData(option, optionGroupLabel) }}
                            </slot>
                        </template>

                        <!-- Option Item -->
                        <template v-else>
                            <div v-if="checkbox && multiple" class="b-listbox__checkbox" :class="{ 'b-listbox__checkbox--checked': isSelected(option) }">
                                <svg v-if="isSelected(option)" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>
                            </div>

                            <span class="b-listbox__item-label">
                                <slot name="option" :option="option" :index="index">
                                    {{ getOptionLabel(option) }}
                                </slot>
                            </span>

                            <div v-if="checkmark && isSelected(option)" class="b-listbox__checkmark">
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>
                            </div>
                        </template>
                    </li>
                </template>

                <!-- Empty States -->
                <li v-else class="b-listbox__empty">
                    <slot v-if="filterValue" name="emptyfilter">{{ emptyFilterMessage }}</slot>
                    <slot v-else name="empty">{{ emptyMessage }}</slot>
                </li>
            </ul>
        </div>
    </div>
</template>