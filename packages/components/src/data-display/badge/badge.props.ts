export type BadgeSeverity = "primary" | "secondary" | "info" | "success" | "warn" | "danger" | "contrast";
export type BadgeSize = "small" | "medium" | "large" | "xlarge";

export interface BadgeProps {
    /**
     * Value to be displayed inside the badge.
     */
    value?: string | number;

    /**
     * Severity level of the badge. Affects the color scheme.
     * @default "primary"
     */
    severity?: BadgeSeverity;

    /**
     * Size of the badge.
     * @default "medium"
     */
    size?: BadgeSize;

    /**
     * Whether the badge has fully rounded corners.
     * @default false
     */
    rounded?: boolean;
}