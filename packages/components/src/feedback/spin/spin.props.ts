export interface SpinProps {
    /**
     * Width of the spinner stroke.
     * @default 2
     */
    strokeWidth?: string | number;

    /**
     * Duration of the rotation animation.
     * @default "2s"
     */
    animationDuration?: string;

    /**
     * Background fill color of the circle.
     * @default "none"
     */
    fill?: string;

    /**
     * Diameter of the spinner (e.g. '50px').
     */
    size?: string;
}