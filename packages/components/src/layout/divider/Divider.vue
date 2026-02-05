<template>
<div :class="classes">
    <div v-if="$slots.default" class="b-divider__content">
        <slot />
    </div>
</div>
</template>

<script setup lang="ts">
import {dividerProps} from "./divider.types.ts";
import {computed} from "vue";
import "./divider.css";

const props = defineProps(dividerProps);

const classes = computed(() => {
    return [
        "b-divider",
        {
            [`b-divider--align-${props.align}`]: props.align,
            [`b-divider--layout-${props.layout}`]: props.layout,
            [`b-divider--type-${props.type}`]: props.type,
        }
    ]

});

</script>