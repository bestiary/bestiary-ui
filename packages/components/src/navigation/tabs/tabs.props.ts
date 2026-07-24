import type { InjectionKey, Ref } from 'vue';

/* --- Props Interfaces --- */
export interface TabsProps {
    /** Value of the active tab. Supports v-model:value. */
    value?: string | number;
    /** When enabled, hidden tabs are not rendered at all. @default false */
    lazy?: boolean;
    /** Defines how the active tab is scrolled into view. @default 'nearest' */
    scrollStrategy?: 'center' | 'nearest' | ((content: HTMLElement, activeTab: HTMLElement) => void);
}

export interface TabListProps {
    /** Whether to display navigation buttons when the tablist overflows. @default true */
    showNavigators?: boolean;
}

export interface TabProps {
    /** Unique value of the tab. */
    value: string | number;
    /** Whether the tab is disabled. @default false */
    disabled?: boolean;
    /** Render as a different HTML tag. @default 'button' */
    as?: string;
}

export interface TabPanelProps {
    /** Value of the tab this panel is associated with. */
    value: string | number;
    /** Render as a different HTML tag. @default 'div' */
    as?: string;
}

/* --- Context Service --- */
export interface TabsContext {
    activeValue: Ref<string | number | undefined>;
    lazy: Ref<boolean>;
    tabsId: string;
    selectTab: (value: string | number) => void;
    registerTab: (value: string | number, element: HTMLElement) => void;
    unregisterTab: (value: string | number) => void;
}

export const TabsInjectionKey: InjectionKey<TabsContext> = Symbol('BTabsContext');