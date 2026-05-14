import { Component } from "vue";

export type TagSeverity = "primary" | "secondary" | "success" | "info" | "warn" | "danger" | "contrast";

export interface TagProps {
    /**
     * Value to be displayed inside the tag.
     */
    value?: string | number;

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
     * Icon to display next to the value. Can be a component or a string name.
     */
    icon?: string | Component;
}