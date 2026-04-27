import { Component } from "vue";

export interface BreadcrumbItem {
    /**
     * Text of the item.
     */
    label?: string;
    /**
     * Icon of the item.
     */
    icon?: string | Component;
    /**
     * External link to navigate to.
     */
    url?: string;
    /**
     * Internal route object for router-link.
     */
    to?: string | object;
    /**
     * Target attribute of the anchor element.
     */
    target?: string;
    /**
     * Whether the item is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * Whether the item is visible.
     * @default true
     */
    visible?: boolean;
    /**
     * Custom data associated with the item.
     */
    [key: string]: any;
}

export interface BreadcrumbProps {
    /**
     * An array of menuitems.
     * @default []
     */
    model?: BreadcrumbItem[];
    /**
     * Configuration for the home item.
     */
    home?: BreadcrumbItem;
    /**
     * Custom separator between items.
     * @default "/"
     */
    separator?: string;
}