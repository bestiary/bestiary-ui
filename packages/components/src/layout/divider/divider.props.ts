export type DividerAlign = "left" | "center" | "right" | "top" | "bottom";
export type DividerLayout = "horizontal" | "vertical";
export type DividerType = "solid" | "dashed" | "dotted" | "double";


export interface DividerProps {
    /**
     * Location of the divider's signature
     * @default "left"
     */
    align?: DividerAlign;

    /**
     * Divider direction
     * @default "horizontal"
     */
    layout?: DividerLayout;

    /**
     * Style of divider line
     * @default "solid"
     */
    type?: DividerType;
}