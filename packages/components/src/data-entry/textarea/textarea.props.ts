export type TextareaSize = "small" | "medium" | "large";

export interface TextareaProps {
    /**
     * Number of visible text lines.
     * @default 5
     */
    rows?: number;

    /**
     * Specifies the visible width of the text area.
     * @default 30
     */
    cols?: number;

    /**
     * Whether the height should automatically adjust based on content.
     * @default false
     */
    autoresize?: boolean;

    /**
     * Whether the textarea should span the full width of its container.
     * @default false
     */
    fluid?: boolean;

    /**
     * Whether to use a filled background style variant.
     * @default false
     */
    filled?: boolean;

    /**
     * Whether the textarea is disabled.
     * @default false
     */
    disabled?: boolean;

    /**
     * Indicates if the textarea is in an invalid state.
     * @default false
     */
    invalid?: boolean;

    /**
     * Size of the textarea component.
     * @default "medium"
     */
    size?: TextareaSize;
}