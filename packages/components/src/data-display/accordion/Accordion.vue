<script setup lang="ts">
import {provide, computed} from 'vue';
import { AccordionProps, AccordionValue, AccordionContext } from './accordion.props';

defineOptions({name: 'BAccordion'});

const props = withDefaults(defineProps<AccordionProps>(), {
    multiple: false,
    lazy: false
});

const modelValue = defineModel<AccordionValue>('value');

const updateValue = (val: string | number) => {
    if (props.multiple) {
        const current = Array.isArray(modelValue.value) ? [...modelValue.value] : [];
        const index = current.indexOf(val);
        if (index > -1) {
            current.splice(index, 1);
        } else {
            current.push(val);
        }
        modelValue.value = current;
    } else {
        modelValue.value = modelValue.value === val ? null : val;
    }
};

const isPanelActive = (val: string | number) => {
    if (props.multiple && Array.isArray(modelValue.value)) {
        return modelValue.value.includes(val);
    }
    return modelValue.value === val;
};

provide<AccordionContext>('BAccordion', {
    isPanelActive,
    updateValue,
    lazy: props.lazy,
    expandIcon: props.expandIcon,
    collapseIcon: props.collapseIcon
});

const classes = computed(() => [
    'b-accordion',
    { 'b-accordion--multiple': props.multiple }
]);
</script>

<template>
    <div :class="classes">
        <slot/>
    </div>
</template>