import { Component } from "vue";

export type TagSeverity = "primary" | "secondary" | "success" | "warn" | "danger" | "info" | "contrast";

export interface TagProps {
    /**
     * Value to be displayed inside the tag.
     */
    value?: any;

    /**
     * Severity level of the tag. Affects the color scheme.
     * @default "primary"
     */
    severity?: TagSeverity;

    /**
     * Whether the tag has fully rounded corners.
     * @default false
     */
    rounded?: boolean;

    /**
     * Icon to display next to the value. Can be a component or a string.
     */
    icon?: string | Component;
}