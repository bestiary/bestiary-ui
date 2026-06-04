import type { StyleValue, ImgHTMLAttributes } from 'vue';

export interface ImageProps {
    /** Source of the image. */
    src?: string;

    /** Additional source set of the image. */
    srcset?: string;

    /** Alternate text of the image. */
    alt?: string;

    /** Width of the image container. */
    width?: string | number;

    /** Height of the image container. */
    height?: string | number;

    /** Whether to display an overlay on hover and show the preview on click. @default false */
    preview?: boolean;

    /** Additional style of the actual `img` element. */
    imageStyle?: StyleValue;

    /** Additional class of the actual `img` element. */
    imageClass?: any;

    /** Additional attributes to pass to the `img` element. */
    imageAttributes?: ImgHTMLAttributes;
}