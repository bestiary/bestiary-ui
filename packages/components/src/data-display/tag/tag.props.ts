import { definePropType } from "../../utils/types";
import {Component} from "vue";

export type TagSeverity = "primary" | "secondary" | "success" | "warn" | "danger" | "info" | "contrast";

export const tagProps = {
    value: {
        type: definePropType<any>(null),
        default: null
    },
    severity: {
        type: definePropType<TagSeverity>(String),
        default: "primary"
    },
    rounded: {
        type: Boolean,
        default: false
    },
    icon: {
        type: definePropType<Component>(Object),
        default: null
    },
} as const;