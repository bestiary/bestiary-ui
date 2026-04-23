<script setup lang="ts">
import { computed } from 'vue';
import type { ProgressProps } from './progress.props';

defineOptions({ name: "BProgress" });

const props = withDefaults(defineProps<ProgressProps>(), {
    value: 0,
    mode: "determinate",
    type: "linear",
    showValue: true,
    severity: "primary",
    strokeWidth: 4
});

/**
 * Component slots documentation
 */
defineSlots<{
    /** Custom content for the progress label */
    default?: (props: { value: number }) => any;
}>();

const isIndeterminate = computed(() => props.mode === 'indeterminate');
const progressValue = computed(() => Math.min(Math.max(props.value, 0), 100));

/* --- Circular Logic --- */
const radius = 18; // Fixed radius for SVG internal coordination
const circumference = 2 * Math.PI * radius;
const dashOffset = computed(() => circumference - (progressValue.value / 100) * circumference);

const classes = computed(() => [
    "b-progress",
    `b-progress--${props.type}`,
    `b-progress--severity-${props.severity}`,
    {
        "b-progress--indeterminate": isIndeterminate.value
    }
]);

const style = computed(() => ({
    width: props.type === 'circular' ? props.size : undefined,
    height: props.type === 'circular' ? props.size : undefined
}));
</script>

<template>
    <div
        :class="classes"
        :style="style"
        role="progressbar"
        :aria-valuemin="0"
        :aria-valuemax="100"
        :aria-valuenow="isIndeterminate ? undefined : progressValue"
    >
        <!-- LINEAR TYPE -->
        <template v-if="type === 'linear'">
            <div class="b-progress__track">
                <div
                    class="b-progress__value"
                    :style="{ width: isIndeterminate ? undefined : `${progressValue}%` }"
                >
                    <span v-if="showValue && !isIndeterminate" class="b-progress__label">
                        <slot :value="progressValue">{{ progressValue }}%</slot>
                    </span>
                </div>
            </div>
        </template>

        <!-- CIRCULAR TYPE -->
        <template v-else>
            <svg class="b-progress__svg" viewBox="0 0 40 40">
                <!-- Background circle -->
                <circle
                    class="b-progress__circle-track"
                    cx="20" cy="20" :r="radius"
                    fill="none"
                    :stroke-width="strokeWidth"
                />
                <!-- Progress circle -->
                <circle
                    class="b-progress__circle-value"
                    cx="20" cy="20" :r="radius"
                    fill="none"
                    :stroke-width="strokeWidth"
                    stroke-linecap="round"
                    :stroke-dasharray="circumference"
                    :stroke-dashoffset="isIndeterminate ? undefined : dashOffset"
                />
            </svg>
            <div v-if="showValue && !isIndeterminate" class="b-progress__label">
                <slot :value="progressValue">{{ progressValue }}%</slot>
            </div>
        </template>
    </div>
</template>