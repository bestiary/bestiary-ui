import {definePropType} from "@bestiary-ui/utils";

export type BadgeSeverity = "primary" | "secondary" | "info" | "success" | "warn" | "danger" | "contrast";
export type BadgeSize = "small" | "medium" | "large" | "xlarge";

export const badgeProps = {
    value: {
        type: definePropType<string | number>([String, Number]),
        default: null
    },
    severity: {
        type: definePropType<BadgeSeverity>(String),
        default: "primary"
    },
    size: {
        type: definePropType<BadgeSize>(String),
        default: "medium"
    },
    rounded: {
        type: Boolean,
        default: false
    }
} as const;