import {definePropType} from "@bestiary-ui/utils";

export type ButtonType = "secondary" | "success" | "warning" | "danger" | "info";
export type ButtonSize = "small" | "large" | "xlarge";
export type ButtonShape = "square" | "circle";

export const buttonProps = {
    type: {
        type: definePropType<ButtonType>(String),
    },
    size: {
        type: definePropType<ButtonSize>(String),
    },
    shape: {
        type: definePropType<ButtonShape>(String),
    },
    disabled: {
        type: Boolean,
    }
} as const;
