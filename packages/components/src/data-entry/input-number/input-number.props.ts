export type InputNumberMode = 'decimal' | 'currency';
export type InputNumberButtonLayout = 'stacked' | 'horizontal' | 'vertical';
export type InputNumberCurrencyDisplay = 'symbol' | 'code' | 'name';
export type InputNumberSize = 'small' | 'medium' | 'large';
export type InputNumberVariant = 'outline' | 'filled';

export interface InputNumberProps {
    /** Whether to format the value. @default true */
    format?: boolean;

    /** Displays spinner buttons. @default false */
    showButtons?: boolean;

    /** Layout of the buttons. @default 'stacked' */
    buttonLayout?: InputNumberButtonLayout;

    /** Locale to be used in formatting (e.g., 'en-US', 'uk-UA'). Defaults to browser locale. */
    locale?: string;

    /** Defines the behavior of the component. @default 'decimal' */
    mode?: InputNumberMode;

    /** Text to display before the value. */
    prefix?: string;

    /** Text to display after the value. */
    suffix?: string;

    /** The currency to use in currency formatting (ISO 4217, e.g. 'USD', 'UAH'). */
    currency?: string;

    /** How to display the currency. @default 'symbol' */
    currencyDisplay?: InputNumberCurrencyDisplay;

    /** Whether to use grouping separators (thousands). @default true */
    useGrouping?: boolean;

    /** The minimum number of fraction digits to use. */
    minFractionDigits?: number;

    /** The maximum number of fraction digits to use. */
    maxFractionDigits?: number;

    /** Minimum boundary value. */
    min?: number;

    /** Maximum boundary value. */
    max?: number;

    /** Step factor to increment/decrement the value. @default 1 */
    step?: number;

    /** When enabled, a clear icon is displayed to clear the value. @default false */
    showClear?: boolean;

    /** Defines the size of the component. @default 'medium' */
    size?: InputNumberSize;

    /** Indicates invalid state. @default false */
    invalid?: boolean;

    /** Indicates disabled state. @default false */
    disabled?: boolean;

    /** Specifies the input variant. @default 'outline' */
    variant?: InputNumberVariant;

    /** Indicates read-only state. @default false */
    readonly?: boolean;

    /** Placeholder text for the input. */
    placeholder?: string;

    /** Spans 100% width of the container. @default false */
    fluid?: boolean;

    /** Defines a string value that labels the component for screen readers. */
    ariaLabel?: string;
}