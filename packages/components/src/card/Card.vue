<template>
    <div :class="[
        'b-card',
        `b-card--shadow-${shadow}`
    ]">
        <div v-if="$slots.header || header" class="b-card__header">
            <slot name="header">
                {{ header }}
            </slot>
        </div>
        
        <div class="b-card__body" :style="bodyStyle">
            <slot />
        </div>

        <div v-if="$slots.footer" class="b-card__footer">
            <slot name="footer" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { cardProps } from './card.types'
import './card.css'

defineOptions({
    name: 'BCard'
})

defineProps(cardProps)
</script>
