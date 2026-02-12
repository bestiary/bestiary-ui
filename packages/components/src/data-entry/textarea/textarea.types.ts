import {definePropType} from "@bestiary-ui/utils";

export type TextareaSize = "small" | "medium" | "large";

export const textareaProps = {
    rows: {
        type: Number,
        default: 5
    },
    cols: {
        type: Number,
        default: 30
    },
    autoresize: {
        type: Boolean,
        default: false
    },
    fluid: {
        type: Boolean,
        default: false
    },
    filled: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    invalid: {
        type: Boolean,
        default: false
    },
    size: {
        type: definePropType<TextareaSize>(String),
        default: "medium"
    }
} as const;