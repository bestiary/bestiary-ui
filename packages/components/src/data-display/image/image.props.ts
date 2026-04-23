import { HTMLAttributes } from "vue";

export interface ImageProps {
    /**
     * Source of the image.
     */
    src?: string;
    /**
     * Aditional source set of the image.
     */
    srcset?: string;
    /**
     * Alternate text of the image.
     */
    alt?: string;
    /**
     * Width of the image.
     */
    width?: string | number;
    /**
     * Height of the image.
     */
    height?: string | number;
    /**
     * Whether to display an overlay on hover and show the preview on click.
     * @default false
     */
    preview?: boolean;
    /**
     * Aditional style of the image element.
     */
    imageStyle?: any;
    /**
     * Aditional class of the image element.
     */
    imageClass?: any;
    /**
     * Aditional attributes to pass to the image element.
     */
    imageAttributes?: HTMLAttributes;
}