import { Component } from "vue";

export type ScrollTopTarget = "window" | "parent";

export interface ScrollTopProps {
    /**
     * Target element to scroll.
     * @default "window"
     */
    target?: ScrollTopTarget;
    /**
     * Distance from top in pixels to show the component.
     * @default 400
     */
    threshold?: number;
    /**
     * Icon component to display.
     */
    icon?: string | Component;
    /**
     * Scroll behavior.
     * @default "smooth"
     */
    behavior?: ScrollBehavior;
}