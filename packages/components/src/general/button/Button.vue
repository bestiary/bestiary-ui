<template>
    <button
        :type="type"
        :class="classes"
        :disabled="disabled || loading"
        :aria-busy="loading"
        :aria-live="loading ? 'polite' : 'off'">

            <!-- Loading logic -->
            <slot name="loadingicon" :class="'b-button__loading-icon'" v-if="loading">
                <component
                    :is="loadingIcon"
                    v-if="loadingIcon"
                    class="b-button__loading-icon"
                />
                <svg v-else class="b-button__loading-icon" viewBox="0 0 24 24" fill="none">
                    <circle class="b-button__loading-icon__circle" cx="12" cy="12" r="10" stroke="transparent" stroke-width="4"></circle>
                    <path class="b-button__loading-icon__path" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            </slot>

            <!-- Icon -->
            <template v-else-if="icon || $slots.icon">
                <slot name="icon" :class="'b-button__icon'">
                    <component :is="icon" class="b-button__icon"/>
                </slot>
            </template>

            <!-- Text label -->
            <span v-if="$slots.default || label" class="b-button__label">
                <slot :class="'b-button__label'">{{ label }}</slot>
            </span>

            <!-- Badge -->
            <BBadge
                v-if="badge"
                :severity="badgeSeverity"
                shape="circle"
                size="small"
                class="b-button__badge"
            >
                {{ badge }}
            </BBadge>

    </button>
</template>

<script setup lang="ts">
import {computed} from "vue";
import {buttonProps} from "./button.types.ts";
import {BBadge} from "../../data-display/badge";
import "./button.css";

defineOptions({
    name: "BButton"
});

const slots = defineSlots();
const props = defineProps(buttonProps);

const classes = computed(() => {
    const hasIcon = !!props.icon || !!slots.icon;
    const hasContent = !!slots.default || !!props.label;

    return [
        "b-button",
        `b-button--severity-${props.severity}`,
        `b-button--variant-${props.variant}`,
        `b-button--size-${props.size}`,
        {
            "b-button--rounded": props.rounded,
            "b-button--loading": props.loading,
            "b-button--raised": props.raised,
            "b-button--icon-only": (hasIcon || props.loading) && !hasContent && !props.badge,
            [`b-button--icon-${props.iconPos}`]: hasIcon && hasContent,
            [`b-button--badge-${props.badgePos}`]: props.badge,
        }
    ];
});
</script>
