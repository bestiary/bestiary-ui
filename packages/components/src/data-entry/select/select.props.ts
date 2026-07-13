export type SelectVariant = 'outlined' | 'filled';
export type SelectSize = 'small' | 'medium' | 'large';
export type SelectFilterMatchMode = 'startsWith' | 'contains' | 'endsWith';

export interface SelectProps {
    /**
     * Value of the component. Supports v-model.
     */
    modelValue?: any;

    /**
     * An array of select items to display as the available options.
     */
    options?: any[];

    /**
     * Property name or getter function to use as the label of an option.
     */
    optionLabel?: string | ((option: any) => string);

    /**
     * Property name or getter function to use as the value of an option.
     * Defaults to the option itself when not defined.
     */
    optionValue?: string | ((option: any) => any);

    /**
     * Property name or getter function to use as the disabled flag of an option.
     */
    optionDisabled?: string | ((option: any) => boolean);

    /**
     * Property name to use as the label of an option group.
     */
    optionGroupLabel?: string | ((option: any) => string);

    /**
     * Property name that refers to the children options of option group.
     */
    optionGroupChildren?: string | ((option: any) => any[]);

    /**
     * When specified, displays a filter input at header.
     * @default false
     */
    filter?: boolean;

    /**
     * Placeholder text to show when filter input is empty.
     */
    filterPlaceholder?: string;

    /**
     * Fields used when filtering the options, defaults to optionLabel.
     */
    filterFields?: string[];

    /**
     * Defines the filtering algorithm to use when searching the options.
     * @default 'contains'
     */
    filterMatchMode?: SelectFilterMatchMode;

    /**
     * When enabled, a clear icon is displayed to clear the value.
     * @default false
     */
    showClear?: boolean;

    /**
     * Default text to display when no option is selected.
     */
    placeholder?: string;

    /**
     * Defines the size of the component.
     * @default 'medium'
     */
    size?: SelectSize;

    /**
     * When present, it specifies that the component should have invalid state style.
     * @default false
     */
    invalid?: boolean;

    /**
     * When present, it specifies that the component should be disabled.
     * @default false
     */
    disabled?: boolean;

    /**
     * Specifies the input variant of the component.
     * @default 'outlined'
     */
    variant?: SelectVariant;

    /**
     * A property to uniquely identify an option.
     */
    dataKey?: string;

    /**
     * Spans 100% width of the container when enabled.
     * @default false
     */
    fluid?: boolean;

    /**
     * Whether the select is in loading state.
     * @default false
     */
    loading?: boolean;

    /**
     * When specified, allows selecting multiple values.
     * @default false
     */
    multiple?: boolean;

    /**
     * Text to display when there are no options available.
     * @default 'No available options'
     */
    emptyMessage?: string;

    /**
     * Text to display when filtering does not return any results.
     * @default 'No results found'
     */
    emptyFilterMessage?: string;

    /**
     * A valid query selector or an HTMLElement to specify where the overlay gets attached.
     * @default 'body'
     */
    appendTo?: string | HTMLElement;
}