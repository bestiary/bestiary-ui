export type ToastSeverity = 'success' | 'info' | 'warn' | 'error' | 'secondary' | 'contrast';
export type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right' | 'center';
export type ToastMode = 'stacked' | 'expanded';

export interface ToastMessageOptions {
    /** Unique identifier of the message. Auto-generated if not provided. */
    id?: string;
    /** Severity of the message. @default 'info' */
    severity?: ToastSeverity;
    /** Summary content of the message. */
    summary?: string;
    /** Detail content of the message. */
    detail?: string;
    /** Whether the message should not be removed automatically. @default false */
    sticky?: boolean;
    /** Delay in milliseconds to close the message automatically. @default 3000 */
    life?: number;
    /** Key of the Toast component to display the message in. */
    group?: string;
    /** Custom CSS class for the message. */
    styleClass?: any;
    /** Custom style for the message. */
    contentStyle?: any;
    /** Custom CSS class for the content. */
    contentClass?: any;
}

export interface ToastProps {
    /** Unique identifier of a message group. */
    group?: string;
    /** Position of the toast in viewport. @default 'top-right' */
    position?: ToastPosition;
    /** Display mode of the toast. @default 'expanded' */
    mode?: ToastMode;
    /** Maximum number of visible toasts in the stack. @default 5 */
    limit?: number;
    /** Base zIndex value to use in layering. @default 0 */
    baseZIndex?: number;
    /** Whether to automatically manage layering. @default true */
    autoZIndex?: boolean;
}