import { Component } from "vue";

export interface CalendarDay {
    day: number;
    month: number;
    year: number;
    otherMonth: boolean;
}

export type DatePickerSelectionMode = "single" | "multiple" | "range";
export type DatePickerViewMode = "date" | "month" | "year";

export interface DatePickerProps {
    /**
     * Value of the component.
     */
    modelValue?: any;
    /**
     * Selection mode of the datepicker.
     * @default "single"
     */
    selectionMode?: DatePickerSelectionMode;
    /**
     * Format of the date.
     * @default "mm/dd/yy"
     */
    dateFormat?: string;
    /**
     * Whether to display the calendar as an overlay or inline.
     * @default false
     */
    inline?: boolean;
    /**
     * Whether to display the time picker.
     * @default false
     */
    showTime?: boolean;
    /**
     * Whether to show seconds in time picker.
     * @default false
     */
    showSeconds?: boolean;
    /**
     * Min date that can be selected.
     */
    minDate?: Date;
    /**
     * Max date that can be selected.
     */
    maxDate?: Date;
    /**
     * Whether the month and year can be manipulated with keyboard or only via UI.
     * @default true
     */
    manualInput?: boolean;
    /**
     * Whether to show the week number.
     * @default false
     */
    showWeek?: boolean;
    /**
     * Whether the component is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * Placeholder text for the input.
     */
    placeholder?: string;
    /**
     * Whether to display an icon.
     * @default false
     */
    showIcon?: boolean;
    /**
     * Display mode of the icon.
     * @default "button"
     */
    iconDisplay?: "button" | "input";
    /**
     * Whether to show the overlay on input focus.
     * @default true
     */
    showOnFocus?: boolean;
    /**
     * Icon to display.
     */
    icon?: string | Component;

    fluid: boolean;
}