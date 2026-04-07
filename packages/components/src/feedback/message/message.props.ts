import {definePropType} from "@bestiary-ui/utils";
import {Component} from "vue";

export type MessageSeverity = "secondary" | "success" | "error" | "warn" | "info" | "contrast";
export type MessageSize = "small" | "medium" | "large" | "xlarge";
export type MessageVariant = "outline" | "solid" | "simple";

export const messageProps = {
    severity: {
        type: definePropType<MessageSeverity>(String),
        default: "info"
    },
    closable: {
        type: Boolean,
        default: false
    },
    size: {
        type: definePropType<MessageSize>(String),
        default: "medium"
    },
    variant: {
        type: definePropType<MessageVariant>(String),
        default: "solid"
    },
    life: {
        type: Number,
        default: null
    },
    icon: {
        type: definePropType<Component>(Object),
        default: null
    },
    closeIcon: {
        type: definePropType<Component>(Object),
        default: null
    },
} as const;