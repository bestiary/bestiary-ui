export type CheckboxSize = "small" | "medium" | "large";
export type CheckboxVariant = "outline" | "filled";

export interface CheckboxProps {
    /**
     * Value associated with the checkbox when used in a group or array.
     * @default null
     */
    value?: any;

    /**
     * Size of the checkbox component.
     * @default "medium"
     */
    size?: CheckboxSize;

    /**
     * Visual style variant of the checkbox.
     * @default "outline"
     */
    variant?: CheckboxVariant;

    /**
     * Indicates if the checkbox is in an invalid state.
     * @default false
     */
    invalid?: boolean;

    /**
     * Whether the checkbox is disabled.
     * @default false
     */
    disabled?: boolean;

    /**
     * Whether the checkbox is read-only.
     * @default false
     */
    readonly?: boolean;

    /**
     * Whether the checkbox is in an indeterminate state (neither checked nor unchecked).
     * @default false
     */
    indeterminate?: boolean;
}