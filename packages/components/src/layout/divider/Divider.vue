<script setup lang="ts">
import {computed} from "vue";
import {DividerProps} from "./divider.props";

defineOptions({
    name: "BDivider"
});

const slots = defineSlots<{
    /** Primary content of the divider (text label) */
    default?: (props: {}) => any;
}>();

const props = withDefaults(defineProps<DividerProps>(), {
    align: "left",
    layout: "horizontal",
    type: "solid"
});

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

<template>
    <div :class="classes">
        <div v-if="$slots.default" class="b-divider__content">
            <slot/>
        </div>
    </div>
</template>