export type CheckboxSize = "small" | "medium" | "large";
export type CheckboxVariant = "outline" | "filled";

export interface CheckboxProps {
    /**
     * Unique identifier of the inner input element.
     */
    inputId?: string;
    /**
     * Name of the inner input element.
     */
    name?: string;
    /**
     * Value of the checkbox when used in a group (array model).
     */
    value?: any;
    /**
     * When present, it specifies that the component should be checked.
     * Often used for boolean-only state.
     * @default false
     */
    binary?: boolean;
    /**
     * Value in checked state.
     * @default true
     */
    trueValue?: any;
    /**
     * Value in unchecked state.
     * @default false
     */
    falseValue?: any;
    /**
     * Size of the checkbox.
     * @default "medium"
     */
    size?: CheckboxSize;
    /**
     * Visual style variant.
     * @default "outline"
     */
    variant?: CheckboxVariant;
    /**
     * Whether the checkbox is disabled.
     */
    disabled?: boolean;
    /**
     * Whether the checkbox is read-only.
     */
    readonly?: boolean;
    /**
     * Whether the checkbox is invalid.
     */
    invalid?: boolean;
    /**
     * Whether the checkbox is in an indeterminate state.
     */
    indeterminate?: boolean;
}