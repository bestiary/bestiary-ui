<template>
    <span class="b-badge" :class="classes">
        <slot>
            {{value}}}
        </slot>
    </span>
</template>

<script setup lang="ts">
import {computed} from "vue";
import {badgeProps} from "./badge.types";
import "./badge.css"

defineOptions({name: 'BBadge'});
defineProps(badgeProps);

const classes = computed(() => {
    return [
        'b-badge',
    ]
});
</script>