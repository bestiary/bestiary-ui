import { definePropType } from "../../utils/types";

export type CheckboxSize = "small" | "medium" | "large";
export type CheckboxVariant = "outline" | "filled";

export const checkboxProps = {
    value: {
        type: null,
        default: null
    },
    size: {
        type: definePropType<CheckboxSize>(String),
        default: "medium"
    },
    variant: {
        type: definePropType<CheckboxVariant>(String),
        default: "outline"
    },
    invalid: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    readonly: {
        type: Boolean,
        default: false
    },
    indeterminate: {
        type: Boolean,
        default: false
    }
} as const;