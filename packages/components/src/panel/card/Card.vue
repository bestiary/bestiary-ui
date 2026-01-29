<template>
    <div :class="classes">
        <div v-if="$slots.header" class="b-card__header-media">
            <slot name="header"/>
        </div>

        <div class="b-card__body">
            <div v-if="$slots.title || title || $slots.subtitle || subtitle" class="b-card__title-group">
                <div v-if="$slots.title || title" class="b-card__title">
                    <slot name="title">{{ title }}</slot>
                </div>
                <div v-if="$slots.subtitle || subtitle" class="b-card__subtitle">
                    <slot name="subtitle">{{ subtitle }}</slot>
                </div>
            </div>

            <div class="b-card__content">
                <slot name="content">
                    <slot/>
                </slot>
            </div>
        </div>

        <div v-if="$slots.footer" class="b-card__footer">
            <slot name="footer"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import {cardProps} from "./card.types.ts";
import "./card.css";
import {computed} from "vue";

defineOptions({name: 'BCard'})
const props = defineProps(cardProps)

const classes = computed(() => {
    return [
        'b-card',
        {
            [`b-card--type-${props.type}`]: props.type,
            [`b-card--size-${props.size}`]: props.size,
            [`b-card--shadow-${props.shadow}`]: props.shadow,
        }
    ]
});
</script>