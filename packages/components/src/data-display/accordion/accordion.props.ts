import {Component, ComputedRef} from "vue";

export type AccordionValue = string | number | null | (string | number)[];

export interface AccordionProps {
    /**
     * Value of the active panel(s). Supports v-model.
     */
    value?: AccordionValue;
    /**
     * When enabled, multiple tabs can be activated at the same time.
     * @default false
     */
    multiple?: boolean;
    /**
     * When enabled, hidden tabs are not rendered until expanded.
     * @default false
     */
    lazy?: boolean;
    /**
     * Icon of a collapsed tab.
     */
    expandIcon?: string | Component;
    /**
     * Icon of an expanded tab.
     */
    collapseIcon?: string | Component;
}

export interface AccordionPanelProps {
    /**
     * Unique identifier for the panel.
     */
    value: string | number;
    /**
     * Whether the panel is disabled.
     * @default false
     */
    disabled?: boolean;
}

export interface AccordionContext {
    updateValue: (val: string | number) => void;
    isPanelActive: (val: string | number) => boolean;
    lazy: boolean;
    expandIcon?: string | Component;
    collapseIcon?: string | Component;
}

export interface AccordionPanelContext {
    value: string | number;
    disabled: boolean;
    isActive: ComputedRef<boolean>;
}