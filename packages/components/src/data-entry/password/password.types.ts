import {inputTextProps} from "@bestiary-ui/components";
import {Component, ExtractPropTypes} from "vue";
import {definePropType} from "@bestiary-ui/utils";

export type PasswordStrength = "weak" | "medium" | "strong" | "";
export type PasswordStrengthFn = (password: string) => PasswordStrength;

export const passwordProps = {
    ...inputTextProps,
    toggleMask: {
        type: Boolean,
        default: true
    },
    visibleIcon: {
        type: definePropType<Component>(Object),
        default: null
    },
    hiddenIcon: {
        type: definePropType<Component>(Object),
        default: null
    },
    feedback: {
        type: Boolean,
        default: false
    },
    promptLabel: {
        type: String,
        default: "Enter a password"
    },
    weakLabel: {
        type: String,
        default: "Weak"
    },
    mediumLabel: {
        type: String,
        default: "Medium"
    },
    strongLabel: {
        type: String,
        default: "Strong"
    },
    strengthMeter: {
        type: definePropType<PasswordStrengthFn>(Function),
        default: null
    }
} as const;

export type PasswordProps = ExtractPropTypes<typeof passwordProps>;