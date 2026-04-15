import { Component } from "vue";
import { InputTextProps } from "../input-text/input-text.props";

export type PasswordStrength = "weak" | "medium" | "strong" | "";
export type PasswordStrengthFn = (password: string) => PasswordStrength;

export interface PasswordProps extends InputTextProps {
    /**
     * Whether to display an icon to toggle the visibility of the password.
     * @default false
     */
    toggleMask?: boolean;

    /**
     * Icon component to display when the password is visible.
     */
    visibleIcon?: string | Component;

    /**
     * Icon component to display when the password is hidden.
     */
    hiddenIcon?: string | Component;

    /**
     * Whether to show a strength indicator feedback panel.
     * @default false
     */
    feedback?: boolean;

    /**
     * Label for the prompt text in the feedback panel.
     * @default "Enter a password"
     */
    promptLabel?: string;

    /**
     * Label for weak strength.
     * @default "Weak"
     */
    weakLabel?: string;

    /**
     * Label for medium strength.
     * @default "Medium"
     */
    mediumLabel?: string;

    /**
     * Label for strong strength.
     * @default "Strong"
     */
    strongLabel?: string;

    /**
     * Custom function to determine password strength.
     */
    strengthMeter?: PasswordStrengthFn;
}