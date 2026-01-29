<template>
    <span :class="classes">
        <slot>
            {{value}}
        </slot>
    </span>
</template>

<script setup lang="ts">
import {computed} from "vue";
import {badgeProps} from "./badge.types.ts";
import "./badge.css"

defineOptions({name: 'BBadge'});
const props = defineProps(badgeProps);

const classes = computed(() => {
    return [
        'b-badge',
        {
            [`b-badge--type-${props.type}`]: props.type,
            [`b-badge--size-${props.size}`]: props.size,
            [`b-badge--shape-${props.shape}`]: props.shape,
        }
    ];
});
</script>