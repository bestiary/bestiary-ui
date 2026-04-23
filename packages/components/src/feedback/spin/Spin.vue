<script setup lang="ts">
import { computed } from 'vue';
import type { SpinProps } from './spin.props';

defineOptions({ name: "BSpin" });

const props = withDefaults(defineProps<SpinProps>(), {
    strokeWidth: 2,
    animationDuration: "2s",
    fill: "none"
});

const style = computed(() => ({
    width: props.size,
    height: props.size,
    animationDuration: props.animationDuration
}));
</script>

<template>
    <div
        class="b-spin"
        role="progressbar"
        aria-busy="true"
        aria-live="polite"
        :style="style"
    >
        <svg class="b-spin__svg" viewBox="25 25 50 50">
            <circle
                class="b-spin__circle"
                cx="50"
                cy="50"
                r="20"
                :fill="fill"
                :stroke-width="strokeWidth"
                stroke-miterlimit="10"
            />
        </svg>
    </div>
</template>