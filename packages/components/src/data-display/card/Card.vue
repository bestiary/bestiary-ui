<template>
    <div :class="classes">
        <div v-if="$slots.header" class="b-card__header">
            <slot name="header"/>
        </div>

        <div class="b-card__body">
            <div v-if="$slots.title || $slots.subtitle" class="b-card__title-group">
                <div v-if="$slots.title" class="b-card__title">
                    <slot name="title" />
                </div>
                <div v-if="$slots.subtitle" class="b-card__subtitle">
                    <slot name="subtitle" />
                </div>
            </div>

            <div class="b-card__content">
                <slot name="content">
                    <slot/>
                </slot>
            </div>

            <div v-if="$slots.footer" class="b-card__footer">
                <slot name="footer"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import "./card.css";
import {computed} from "vue";

defineOptions({name: "BCard"})

const classes = computed(() => {
    return [
        "b-card"
    ];
});
</script>