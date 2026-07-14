export type InputTextSize = 'small' | 'medium' | 'large';
export type InputTextVariant = 'outline' | 'filled';

export interface InputTextProps {
    /**
     * Size of the input component. Affects height, padding, and font-size.
     * @default 'medium'
     */
    size?: InputTextSize;

    /**
     * Visual style variant of the input.
     * @default 'outline'
     */
    variant?: InputTextVariant;

    /**
     * Indicates if the input is in an invalid state (e.g., validation failed).
     * Applies error styling and aria-invalid.
     * @default false
     */
    invalid?: boolean;

    /**
     * Whether the input should span the full width (100%) of its container.
     * @default false
     */
    fluid?: boolean;

    /**
     * Whether the input should have fully rounded corners (pill shape).
     * @default false
     */
    rounded?: boolean;

    /**
     * Whether the input is disabled. Prevents interaction and focus.
     * @default false
     */
    disabled?: boolean;

    /**
     * Whether the input is read-only. Allows focus and text selection, but prevents editing.
     * @default false
     */
    readonly?: boolean;
}