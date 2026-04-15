import { Component } from "vue";

export type MessageSeverity = "secondary" | "success" | "error" | "warn" | "info" | "contrast";
export type MessageSize = "small" | "medium" | "large" | "xlarge";
export type MessageVariant = "outline" | "solid" | "simple";

export interface MessageProps {
    /**
     * Severity level of the message. Affects background and border colors.
     * @default "info"
     */
    severity?: MessageSeverity;

    /**
     * Whether the message can be closed by the user.
     * @default false
     */
    closable?: boolean;

    /**
     * Size of the message component.
     * @default "medium"
     */
    size?: MessageSize;

    /**
     * Visual style variant of the message.
     * @default "solid"
     */
    variant?: MessageVariant;

    /**
     * Duration in milliseconds to display the message before automatically hiding it.
     * @default null
     */
    life?: number | null;

    /**
     * Custom icon component to be displayed at the start of the message.
     */
    icon?: string | Component;

    /**
     * Custom icon component for the close button.
     */
    closeIcon?: string | Component;
}