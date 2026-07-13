import type { CSSProperties } from 'vue';

export type DialogPosition = 'center' | 'top' | 'bottom' | 'left' | 'right' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright';

export interface DialogProps {
    /** Title text of the dialog. Overridden by the 'header' slot. */
    header?: string;

    /** Text for the footer section. Overridden by the 'footer' slot. */
    footer?: string;

    /** Specifies the visibility of the dialog. Supports v-model:visible. */
    visible?: boolean;

    /** Defines if background should be blocked. @default true */
    modal?: boolean;

    /** Inline style of the content section. */
    contentStyle?: CSSProperties | string;

    /** Style class of the content section. */
    contentClass?: any;

    /** Adds a close icon to the header to hide the dialog. @default true */
    closable?: boolean;

    /** Specifies if clicking the modal background should hide the dialog. @default false */
    dismissableMask?: boolean;

    /** Specifies if pressing escape key should hide the dialog. @default true */
    closeOnEscape?: boolean;

    /** Whether to show the header section. @default true */
    showHeader?: boolean;

    /** Whether background scroll should be blocked when dialog is visible. @default true */
    blockScroll?: boolean;

    /** Position of the dialog. @default 'center' */
    position?: DialogPosition;

    /** Whether the dialog can be displayed full screen. @default false */
    maximizable?: boolean;

    /** A valid query selector or an HTMLElement to specify where the dialog gets attached. @default 'body' */
    appendTo?: string | HTMLElement;

    /** Aria label for the close button. @default 'Close' */
    closeButtonAriaLabel?: string;

    /** Aria label for the maximize button. @default 'Maximize' */
    maximizeButtonAriaLabel?: string;

    /** Inline style of the dynamic dialog (useful for setting width). */
    style?: CSSProperties | string;

    /** Object literal to define widths per screen size (e.g. { '960px': '75vw', '641px': '100vw' }). */
    breakpoints?: Record<string, string>;

    /** Enables dragging to change the position using header. @default true */
    draggable?: boolean;

    /** Base zIndex value to use in layering. @default 0 */
    baseZIndex?: number;

    /** Whether to automatically manage layering. @default true */
    autoZIndex?: boolean;
}