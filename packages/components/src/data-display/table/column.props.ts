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
     * Property name to use in filtering.
     */
    filterField?: string;
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
    /**
     * Type of the column data (text, numeric, date, boolean).
     * @default "text"
     */
    dataType?: string;
    /**
     * Whether to display the filter menu icon.
     * @default true
     */
    showFilterMenu?: boolean;
    /**
     * Inline style of the filter menu popover.
     */
    filterMenuStyle?: CSSProperties | string;
    /**
     * Whether to display the filter match modes in the filter menu.
     * @default true
     */
    showFilterMatchModes?: boolean;
}