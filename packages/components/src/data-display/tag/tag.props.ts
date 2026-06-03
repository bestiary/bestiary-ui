import type { Component } from 'vue';

export type TagSeverity = 'primary' | 'secondary' | 'info' | 'success' | 'warn' | 'danger' | 'contrast';

export interface TagProps {
    /**
     * Value to be displayed inside the tag.
     */
    value?: string | number;

    /**
     * Severity level of the tag. Affects the color scheme.
     * @default 'primary'
     */
    severity?: TagSeverity;

    /**
     * Whether the tag has fully rounded corners (pill shape).
     * @default false
     */
    rounded?: boolean;

    /**
     * Icon to display next to the value. Can be a Vue component or a string class name.
     */
    icon?: string | Component;

    /**
     * Accessible label for screen readers. Useful when tag contains only an icon or ambiguous text.
     */
    ariaLabel?: string;
}