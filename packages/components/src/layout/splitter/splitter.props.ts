export type SplitterLayout = "horizontal" | "vertical";

export interface SplitterProps {
    /**
     * Orientation of the splitter panels.
     * @default "horizontal"
     */
    layout?: SplitterLayout;

    /**
     * Size of the gutter (resizer bar) in pixels.
     * @default 4
     */
    gutterSize?: number;
}