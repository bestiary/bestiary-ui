export type ProgressMode = "determinate" | "indeterminate";
export type ProgressType = "linear" | "circular";
export type ProgressSeverity = "primary" | "secondary" | "success" | "info" | "warn" | "danger" | "contrast";

export interface ProgressProps {
    /**
     * Value of the progress.
     * @default 0
     */
    value?: number;

    /**
     * Defines the operation mode.
     * @default "determinate"
     */
    mode?: ProgressMode;

    /**
     * Type of the progress bar.
     * @default "linear"
     */
    type?: ProgressType;

    /**
     * Whether to display the value text inside/near the progress bar.
     * @default true
     */
    showValue?: boolean;

    /**
     * Severity level of the progress bar.
     * @default "primary"
     */
    severity?: ProgressSeverity;

    /**
     * Width of the stroke in circular mode.
     * @default 4
     */
    strokeWidth?: number;

    /**
     * Diameter of the circle in circular mode (e.g. '100px').
     */
    size?: string;
}