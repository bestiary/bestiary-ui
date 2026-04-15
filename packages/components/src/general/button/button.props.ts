import { Component } from "vue";

export type ButtonSeverity = "primary" | "secondary" | "success" | "warn" | "danger" | "info" | "contrast";
export type ButtonVariant = "outline" | "default" | "text" | "link";
export type ButtonSize = "small" | "medium" | "large" | "xlarge";
export type ButtonIconPos = "top" | "left" | "bottom" | "right";
export type ButtonBadgePos = "top" | "left" | "bottom" | "right";
export type ButtonBadgeSeverity = "primary" | "secondary" | "info" | "success" | "warn" | "danger" | "contrast";
export type ButtonType = "button" | "submit" | "reset";

export interface ButtonProps {
    /**
     * Severity level of the button. Affects the color scheme.
     * @default "primary"
     */
    severity?: ButtonSeverity;

    /**
     * Visual style variant of the button.
     * @default "default"
     */
    variant?: ButtonVariant;

    /**
     * Size of the button.
     * @default "medium"
     */
    size?: ButtonSize;

    /**
     * Whether the button should have a shadow (elevation).
     * @default false
     */
    raised?: boolean;

    /**
     * The icon to display. Can be a string (icon name) or a component.
     */
    icon?: string | Component;

    /**
     * Position of the icon relative to the label.
     * @default "left"
     */
    iconPos?: ButtonIconPos;

    /**
     * Text or number content inside the badge.
     */
    badge?: string | number;

    /**
     * Position of the badge.
     * @default "right"
     */
    badgePos?: ButtonBadgePos;

    /**
     * Color scheme of the badge.
     * @default "primary"
     */
    badgeSeverity?: ButtonBadgeSeverity;

    /**
     * Custom loading icon component.
     */
    loadingIcon?: string | Component;

    /**
     * The text label of the button.
     */
    label?: string;

    /**
     * Whether the button has fully rounded corners.
     * @default false
     */
    rounded?: boolean;

    /**
     * HTML type attribute for the button element.
     * @default "button"
     */
    type?: ButtonType;

    /**
     * Whether the button is disabled.
     * @default false
     */
    disabled?: boolean;

    /**
     * Whether the button is in a loading state. Disables the button and shows a spinner.
     * @default false
     */
    loading?: boolean;
}