<template>
    <button :class="classes" :disabled="disabled">
        <slot/>
    </button>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import type {ButtonProps} from './button.types'
import './button.css'

defineOptions({
    name: 'BButton'
})

const props = withDefaults(defineProps<ButtonProps>(), {
    type: 'primary',
    size: 'md',
    shape: 'rectangle',
    disabled: false
})

const classes = computed(() => {
    return [
        'b-button',
        `b-button--${props.type}`,
        `b-button--${props.size}`,
        `b-button--${props.shape}`,
    ]
})
</script>
