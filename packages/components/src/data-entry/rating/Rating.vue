<script setup lang="ts">
import { computed, onMounted } from "vue";
import { ratingProps } from "./rating.props";

defineOptions({ name: "BRating" });

const props = defineProps(ratingProps);

// Модель для v-model
const model = defineModel<number>();

// Ініціалізація defaultValue, якщо модель порожня
onMounted(() => {
    if (model.value === undefined && props.defaultValue !== null) {
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

// Розрахунок заповнення конкретної зірки
const getStarFill = (index: number) => {
    const val = model.value || 0;
    if (val >= index) return 100;
    if (val > index - 1) return (val - (index - 1)) * 100;
    return 0;
};

const handlePointerMove = (event: MouseEvent, index: number) => {
    if (props.readonly || props.disabled) return;

    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const width = rect.width;

    let newValue = index;
    if (props.allowHalf) {
        // Якщо клікнули в лівій половині зірки — це .5
        newValue = x < width / 2 ? index - 0.5 : index;
    }

    if (model.value === newValue) {
        model.value = 0;
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
            <!-- Фонова іконка (Off) -->
            <div class="b-rating__icon-wrap b-rating__icon-wrap--off">
                <slot name="officon">
                    <component :is="offIcon" v-if="offIcon" />
                    <!-- Default Outline Star -->
                    <svg v-else viewBox="0 0 24 24">
                        <path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66L12,15.39M22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" />
                    </svg>
                </slot>
            </div>

            <!-- Активна іконка (On) -->
            <div
                class="b-rating__icon-wrap b-rating__icon-wrap--on"
                :style="{ width: getStarFill(i) + '%' }"
            >
                <slot name="onicon">
                    <component :is="onIcon" v-if="onIcon" />
                    <!-- Default Solid Star -->
                    <svg v-else viewBox="0 0 24 24">
                        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                    </svg>
                </slot>
            </div>
        </div>
    </div>
</template>