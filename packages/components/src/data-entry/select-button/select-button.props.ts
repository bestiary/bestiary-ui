export type SelectButtonSize = "small" | "medium" | "large";

export interface SelectButtonProps {
    /**
     * An array of select options.
     * @default []
     */
    options?: any[];

    /**
     * Property name or getter function to use as the label of an option.
     */
    optionLabel?: string | ((option: any) => string);

    /**
     * Property name or getter function to use as the value of an option.
     */
    optionValue?: string | ((option: any) => any);

    /**
     * Property name or getter function to use as the disabled state of an option.
     */
    optionDisabled?: string | ((option: any) => boolean);

    /**
     * When specified, allows selecting multiple values.
     * @default false
     */
    multiple?: boolean;

    /**
     * Whether selection can be cleared.
     * @default true
     */
    unselectable?: boolean;

    /**
     * When present, it specifies that the component should be disabled.
     * @default false
     */
    disabled?: boolean;

    /**
     * Size of the buttons.
     * @default "medium"
     */
    size?: SelectButtonSize;

    fluid?: boolean;

    /**
     * Identifier of the focusable element.
     */
    tabindex?: number;

    /**
     * When present, it specifies that the component is in an invalid state.
     * @default false
     */
    invalid?: boolean;
}