import {definePropType} from "@bestiary-ui/utils";
import {Component} from "vue";

export type AvatarSize = "small" | "medium" | "large" | "xlarge";
export type AvatarShape = "square" | "circle";

export const avatarProps = {
    size: {
        type: definePropType<AvatarSize>(String),
        default: "medium"
    },
    shape: {
        type: definePropType<AvatarShape>(String),
        default: "square"
    },
    label: {
        type: String,
        default: null
    },
    icon: {
        type: definePropType<Component>(Object),
        default: null
    },
    image: {
        type: String,
        default: null
    }
} as const;