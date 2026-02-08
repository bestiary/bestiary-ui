import {definePropType} from "@bestiary-ui/utils";
import {Component} from "vue";

export type ButtonSeverity = "primary" | "secondary" | "success" | "warning" | "danger" | "info";
export type ButtonSize = "small" | "medium" | "large" | "xlarge";
export type ButtonIconPos = "top" | "left" | "bottom" | "right";
export type ButtonBadgePos = "top" | "left" | "bottom" | "right";
export type ButtonBadgeSeverity = "primary" | "secondary" | "info" | "success" | "warn" | "danger" | "contrast";
export type ButtonType = "button" | "submit" | "reset";

export const buttonProps = {
    severity: {
        type: definePropType<ButtonSeverity>(String),
        default: "primary"
    },
    size: {
        type: definePropType<ButtonSize>(String),
        default: "medium"
    },
    icon: {
        type: definePropType<Component>(Object),
        default: null
    },
    iconPos: {
        type: definePropType<ButtonIconPos>(String),
        default: "left"
    },
    badge: {
        type: definePropType<string | number>([String, Number]),
        default: null
    },
    badgePos: {
        type: definePropType<ButtonBadgePos>(String),
        default: "right"
    },
    badgeSeverity: {
        type: definePropType<ButtonBadgeSeverity>(String),
        default: "primary"
    },
    loadingIcon: {
        type: definePropType<Component>(Object),
        default: null
    },
    label: {
        type: String,
        default: null
    },
    rounded: {
        type: Boolean,
        default: false
    },
    type: {
        type: definePropType<ButtonType>(String),
        default: "button"
    },
    disabled: {
        type: Boolean,
        default: false
    },
    loading: {
        type: Boolean,
        default: false
    }
} as const;
