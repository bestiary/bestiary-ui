<script setup lang="ts">
import { computed } from 'vue';
import type { ButtonProps } from './button.props';
import { BBadge } from '../../data-display/badge';

defineOptions({
    name: 'BButton'
});

const slots = defineSlots<{
    /** Primary content of the button (text label) */
    default?: (props: Record<string, never>) => any;
    /** Custom loading indicator content */
    'loading-icon'?: (props: Record<string, never>) => any;
    /** Content for the icon slot */
    icon?: (props: Record<string, never>) => any;
}>();

const props = withDefaults(defineProps<ButtonProps>(), {
    severity: 'primary',
    variant: 'default',
    type: 'button',
    size: 'medium',
    raised: false,
    iconPos: 'left',
    badgePos: 'right',
    badgeSeverity: 'primary',
    rounded: false,
    disabled: false,
    loading: false
});

const isIconOnly = computed(() => {
    const hasIcon = !!props.icon || !!slots.icon;
    const hasContent = !!slots.default || !!props.label;
    return (hasIcon || props.loading) && !hasContent && !props.badge;
});

const isStringIcon = computed(() => typeof props.icon === 'string');
const isStringLoadingIcon = computed(() => typeof props.loadingIcon === 'string');

const componentTag = computed(() => {
    if (props.to) return 'router-link';
    if (props.href) return 'a';
    return 'button';
});

const linkProps = computed(() => {
    if (props.to) return { to: props.to, target: props.target };
    if (props.href) return { href: props.href, target: props.target };
    return { type: props.type };
});

const isDisabled = computed(() => props.disabled || props.loading);

const classes = computed(() => [
    'b-button',
    `b-button--severity-${props.severity}`,
    `b-button--variant-${props.variant}`,
    `b-button--size-${props.size}`,
    {
        [`b-button--icon-${props.iconPos}`]: !!props.icon || !!slots.icon || props.loading,
        [`b-button--badge-${props.badgePos}`]: !!props.badge,
        'b-button--rounded': props.rounded,
        'b-button--loading': props.loading,
        'b-button--raised': props.raised,
        'b-button--icon-only': isIconOnly.value,
        'b-button--disabled': isDisabled.value
    }
]);

const onClick = (event: Event) => {
    if (isDisabled.value) {
        event.preventDefault();
        event.stopPropagation();
    }
};
</script>

<template>
    <component
        :is="componentTag"
        v-bind="linkProps"
        :class="classes"
        :disabled="componentTag === 'button' ? isDisabled : undefined"
        :aria-disabled="isDisabled"
        :aria-busy="loading"
        :aria-label="isIconOnly ? (ariaLabel || label) : ariaLabel"
        @click="onClick"
    >
        <!-- Icon / Loading Section -->
        <span v-if="loading || icon || $slots.icon" class="b-button__icon-wrapper">
            <slot v-if="loading" name="loading-icon">
                <span v-if="loadingIcon && isStringLoadingIcon" :class="['b-button__loading-icon', loadingIcon]" aria-hidden="true"></span>
                <component v-else-if="loadingIcon" :is="loadingIcon" class="b-button__loading-icon" aria-hidden="true" />

                <svg v-else class="b-button__loading-icon" viewBox="0 0 24 24" width="1em" height="1em" fill="none" aria-hidden="true">
                    <circle class="b-button__loading-icon__circle" cx="12" cy="12" r="10" stroke="transparent" stroke-width="4"></circle>
                    <path class="b-button__loading-icon__path" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            </slot>

            <slot v-else name="icon">
                <span v-if="isStringIcon" :class="['b-button__icon', icon]" aria-hidden="true"></span>
                <component v-else-if="icon" :is="icon" class="b-button__icon" aria-hidden="true" />
            </slot>
        </span>

        <!-- Label Section -->
        <span v-if="$slots.default || label" class="b-button__label">
            <slot>{{ label }}</slot>
        </span>

        <!-- Badge Section -->
        <BBadge
            v-if="badge"
            :severity="badgeSeverity"
            rounded
            size="small"
            class="b-button__badge"
        >
            {{ badge }}
        </BBadge>
    </component>
</template>
