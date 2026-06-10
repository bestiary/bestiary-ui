export type DividerAlign = 'left' | 'center' | 'right' | 'top' | 'bottom';
export type DividerLayout = 'horizontal' | 'vertical';
export type DividerType = 'solid' | 'dashed' | 'dotted' | 'double' | 'none';

export interface DividerProps {
    /**
     * Alignment of the content inside the divider.
     * For horizontal: 'left', 'center', 'right'.
     * For vertical: 'top', 'center', 'bottom'.
     * @default 'center'
     */
    align?: DividerAlign;

    /**
     * The orientation of the divider.
     * @default 'horizontal'
     */
    layout?: DividerLayout;

    /**
     * Border style of the divider line.
     * @default 'solid'
     */
    type?: DividerType;
}