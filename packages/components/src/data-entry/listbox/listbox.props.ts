export type ListboxFilterMatchMode = 'startsWith' | 'contains' | 'endsWith';

export interface ListboxProps {
    /**
     * Value of the component. Supports v-model.
     */
    modelValue?: any;

    /**
     * An array of objects to display as the available options.
     * @default []
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
     * Height of the viewport, a scrollbar is defined if height of list exceeds this value.
     * @default '14rem'
     */
    scrollHeight?: string;

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
     * Defines the filtering algorithm to use when searching the options.
     * @default 'contains'
     */
    filterMatchMode?: ListboxFilterMatchMode;

    /**
     * Fields used when filtering the options, defaults to optionLabel.
     */
    filterFields?: string[];

    /**
     * When specified, allows selecting multiple values.
     * @default false
     */
    multiple?: boolean;

    /**
     * Requires Ctrl/Cmd key to select multiple items. Works only if multiple is true.
     * @default false
     */
    metaKeySelection?: boolean;

    /**
     * Whether the selected option will be shown with a check mark.
     * @default false
     */
    checkmark?: boolean;

    /**
     * When specified, allows selecting items with checkboxes.
     * @default false
     */
    checkbox?: boolean;

    /**
     * Whether the header checkbox to toggle all items is shown in multiple mode.
     * @default true
     */
    showToggleAll?: boolean;

    /**
     * Whether to display rows with alternating colors.
     * @default false
     */
    striped?: boolean;

    /**
     * Indicates invalid state. Applies error styling.
     * @default false
     */
    invalid?: boolean;

    /**
     * When specified, disables the component.
     * @default false
     */
    disabled?: boolean;

    /**
     * Spans 100% width of the container when enabled.
     * @default false
     */
    fluid?: boolean;

    /**
     * A property to uniquely identify an option.
     */
    dataKey?: string;

    /**
     * Inline style of inner list element.
     */
    listStyle?: any;

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
}