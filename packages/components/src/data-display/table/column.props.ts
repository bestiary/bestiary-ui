import type { CSSProperties } from "vue";

export interface ColumnProps {
    /**
     * Property of a row data to display.
     */
    field?: string;
    /**
     * Header content of the column.
     */
    header?: string;
    /**
     * Whether the column is sortable.
     * @default false
     */
    sortable?: boolean;
    /**
     * Inline style of the column.
     */
    style?: CSSProperties | string;
    /**
     * Style class of the column.
     */
    class?: any;
    /**
     * Whether the column is hidden.
     * @default false
     */
    hidden?: boolean;
}