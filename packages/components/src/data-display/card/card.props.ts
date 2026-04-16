import { CSSProperties } from "vue";

export type CardSize = "small" | "medium" | "large" | "none";
export type CardShadow = "always" | "hover" | "never";

export interface CardProps {
    /**
     * Size of the card padding and spacing.
     * @default "medium"
     */
    size?: CardSize;

    /**
     * Shadow display mode.
     * @default "always"
     */
    shadow?: CardShadow;

    /**
     * Title text of the card. Overridden by 'title' slot.
     */
    title?: string;

    /**
     * Subtitle text of the card. Overridden by 'subtitle' slot.
     */
    subtitle?: string;

    /**
     * Inline style for the card body section.
     */
    bodyStyle?: CSSProperties;
}