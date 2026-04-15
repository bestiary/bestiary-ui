export type SkeletonShape = "circle" | "rectangle";
export type SkeletonAnimation = "none" | "wave";

export interface SkeletonProps {
    /**
     * Shape of the skeleton.
     * @default "rectangle"
     */
    shape?: SkeletonShape;

    /**
     * Shorthand for both width and height. If set, it overrides width and height props.
     */
    size?: string;

    /**
     * Width of the skeleton.
     * @default "100%"
     */
    width?: string;

    /**
     * Height of the skeleton.
     * @default "1rem"
     */
    height?: string;

    /**
     * Border radius of the skeleton.
     */
    borderRadius?: string;

    /**
     * Animation effect of the skeleton.
     * @default "wave"
     */
    animation?: SkeletonAnimation;
}