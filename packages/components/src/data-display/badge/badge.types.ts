import {definePropType} from "@bestiary-ui/utils";
import {PropType} from "vue";

export type BadgeType = "secondary" | "info" | "success" | "warn" | "danger" | "contrast";
export type BadgeSize = "small" | "large" | "xlarge";
export type BadgeShape = "circle";

export const badgeProps = {
    value: {
        type: [String, Number] as PropType<string | number>
    },
    type: {
        type: definePropType<BadgeType>(String),
    },
    size: {
        type: definePropType<BadgeSize>(String),
    },
    shape: {
        type: definePropType<BadgeShape>(String),
    }
} as const;