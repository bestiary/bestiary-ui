<script setup lang="ts">
import { computed, onMounted } from "vue";
import { RatingProps } from "./rating.props";

defineOptions({ name: "BRating" });

/**
 * Component slots documentation
 */
const slots = defineSlots<{
    /** Custom icon for active stars */
    onicon?: (props: {}) => any;
    /** Custom icon for inactive stars */
    officon?: (props: {}) => any;
}>();

const props = withDefaults(defineProps<RatingProps>(), {
    stars: 5,
    invalid: false,
    disabled: false,
    readonly: false,
    allowHalf: false
});

/**
 * Model for v-model binding. Supports decimal values if allowHalf is true.
 */
const model = defineModel<number>();

// Initialize with defaultValue if model is empty
onMounted(() => {
    if (model.value === undefined && props.defaultValue !== undefined) {
        model.value = props.defaultValue;
    }
});

const classes = computed(() => [
    "b-rating",
    {
        "b-rating--readonly": props.readonly,
        "b-rating--disabled": props.disabled,
        "b-rating--invalid": props.invalid
    }
]);

/**
 * Calculates the fill percentage for a specific star based on the current value.
 * @param index - The 1-based index of the star.
 */
const getStarFill = (index: number) => {
    const val = model.value || 0;
    if (val >= index) return 100;
    if (val > index - 1) return (val - (index - 1)) * 100;
    return 0;
};

/**
 * Processes clicks on stars, handling half-star logic and value resetting.
 */
const handlePointerMove = (event: MouseEvent, index: number) => {
    if (props.readonly || props.disabled) return;

    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const width = rect.width;

    let newValue = index;
    if (props.allowHalf) {
        // If clicked in the left half of the star, it counts as .5
        newValue = x < width / 2 ? index - 0.5 : index;
    }

    if (model.value === newValue) {
        model.value = 0; // Reset if clicking the same value
    } else {
        model.value = newValue;
    }
};
</script>

<template>
    <div :class="classes">
        <div
            v-for="i in stars"
            :key="i"
            class="b-rating__option"
            @click="handlePointerMove($event, i)"
        >
            <!-- Background Icon (Off) -->
            <div class="b-rating__icon-wrap b-rating__icon-wrap--off">
                <slot name="officon">
                    <component :is="offIcon" v-if="offIcon" />
                    <!-- Default Outline Star SVG -->
                    <svg v-else viewBox="0 0 24 24">
                        <path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66L12,15.39M22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" />
                    </svg>
                </slot>
            </div>

            <!-- Active Icon (On) with partial width fill -->
            <div
                class="b-rating__icon-wrap b-rating__icon-wrap--on"
                :style="{ width: getStarFill(i) + '%' }"
            >
                <slot name="onicon">
                    <component :is="onIcon" v-if="onIcon" />
                    <!-- Default Solid Star SVG -->
                    <svg v-else viewBox="0 0 24 24">
                        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                    </svg>
                </slot>
            </div>
        </div>
    </div>
</template>