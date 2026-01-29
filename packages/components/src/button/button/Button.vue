<template>
    <button :class="classes" :disabled="disabled">
        <slot/>
    </button>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {buttonProps} from './button.types.ts'
import './button.css'

defineOptions({
    name: 'BButton'
})

const props = defineProps(buttonProps);

const classes = computed(() => {
    return [
        'b-button',
        {
            [`b-button--type-${props.type}`]: props.type,
            [`b-button--size-${props.size}`]: props.size,
            [`b-button--shape-${props.shape}`]: props.shape,
        }
    ]
});
</script>
