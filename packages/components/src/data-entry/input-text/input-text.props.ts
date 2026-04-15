export type InputTextSize = "small" | "medium" | "large";
export type InputTextVariant = "outline" | "filled";

export interface InputTextProps {
    /**
     * Size of the input component.
     * @default "medium"
     */
    size?: InputTextSize;

    /**
     * Visual style variant of the input.
     * @default "outline"
     */
    variant?: InputTextVariant;

    /**
     * Indicates if the input is in an invalid state.
     * @default false
     */
    invalid?: boolean;

    /**
     * Whether the input should span the full width of its container.
     * @default false
     */
    fluid?: boolean;

    /**
     * Whether the input should have fully rounded corners.
     * @default false
     */
    rounded?: boolean;

    /**
     * Whether the input is disabled.
     * @default false
     */
    disabled?: boolean;

    /**
     * Whether the input is read-only.
     * @default false
     */
    readonly?: boolean;
}