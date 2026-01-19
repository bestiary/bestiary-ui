import {definePropType} from "@bestiary-ui/utils";

export type Severity = "secondary" | "info" | "success" | "warn" | "danger" | "contrast";
export type Size = "sm" | "md" | "lg";

export const badgeProps = {
    value: {
        type: String || Number,
        default: null
    },
    severity: {
        type: definePropType<Severity>(String),
        default: null
    },
    size: {
        type: definePropType<Size>(String),
        default: null
    }
} as const