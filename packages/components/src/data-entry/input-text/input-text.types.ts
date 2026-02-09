import {definePropType} from "@bestiary-ui/utils";

export type InputTextSize = "small" | "medium" | "large";
export type InputTextVariant = "outline" | "filled";

export const inputTextProps = {
    modelValue: {
        type: definePropType<string| number>([String, Number]),
        default: ""
    },
    size: {
        type: definePropType<InputTextSize>(String),
        default: "medium"
    },
    variant: {
        type: definePropType<InputTextVariant>(String),
        default: "outline"
    },
    invalid: {
        type: Boolean,
        default: false
    },
    fluid: {
        type: Boolean,
        default: false
    },
    rounded: {
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
    label: {
        type: String,
        default: null
    }
} as const;