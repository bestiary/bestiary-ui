import { Component } from "vue";

export interface RatingProps {
    /**
     * The initial value of the rating if v-model is not set.
     * @default null
     */
    defaultValue?: number;

    /**
     * Name of the input element for form identification.
     * @default null
     */
    name?: string;

    /**
     * Indicates if the rating is in an invalid state.
     * @default false
     */
    invalid?: boolean;

    /**
     * Whether the rating component is disabled.
     * @default false
     */
    disabled?: boolean;

    /**
     * Whether the rating is in a read-only state.
     * @default false
     */
    readonly?: boolean;

    /**
     * Total number of stars to display.
     * @default 5
     */
    stars?: number;

    /**
     * Whether to allow half-star ratings.
     * @default false
     */
    allowHalf?: boolean;

    /**
     * Icon component to display for an active (filled) star.
     */
    onIcon?: string | Component;

    /**
     * Icon component to display for an inactive (empty) star.
     */
    offIcon?: string | Component;
}