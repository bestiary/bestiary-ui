import type { Component } from 'vue';

export interface CalendarDay {
    day: number;
    month: number;
    year: number;
    otherMonth: boolean;
}

export type DatePickerSelectionMode = 'single' | 'multiple' | 'range';
export type DatePickerViewMode = 'date' | 'month' | 'year';
export type DatePickerSize = 'small' | 'medium' | 'large';
export type DatePickerVariant = 'outline' | 'filled';

export interface DatePickerProps {
    /** Value of the component. Supports Date, Date[] or string depending on configuration. */
    modelValue?: any;

    /** Selection mode of the datepicker. @default 'single' */
    selectionMode?: DatePickerSelectionMode;

    /** Format of the date. Tokens: dd, mm, yy, etc. @default 'mm/dd/yy' */
    dateFormat?: string;

    /** Whether to display the calendar as an inline block instead of an overlay. @default false */
    inline?: boolean;

    /** Min date that can be selected. */
    minDate?: Date;

    /** Max date that can be selected. */
    maxDate?: Date;

    /** Whether to allow entering the date manually via typing. @default true */
    manualInput?: boolean;

    /** Whether the component is disabled. @default false */
    disabled?: boolean;

    /** Placeholder text for the input. */
    placeholder?: string;

    /** Whether to display an icon next to/inside the input. @default false */
    showIcon?: boolean;

    /** Display mode of the icon. @default 'button' */
    iconDisplay?: 'button' | 'input';

    /** Whether to show the overlay on input focus. @default true */
    showOnFocus?: boolean;

    /** Icon string class or Vue component to display. */
    icon?: string | Component;

    /** Spans 100% width of the container. @default false */
    fluid?: boolean;

    /** Specifies the component size. @default 'medium' */
    size?: DatePickerSize;

    /** Visual style variant of the input. @default 'outline' */
    variant?: DatePickerVariant;

    /** Indicates invalid state. Applies error styling. @default false */
    invalid?: boolean;

    /** A valid query selector or HTMLElement to specify where the overlay gets attached. @default 'body' */
    appendTo?: string | HTMLElement;
}