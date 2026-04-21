import type {PaginatorProps} from "../../navigation/paginator/paginator.props";

export type TableSize = "small" | "medium" | "large";
export type PaginatorPosition = "top" | "bottom" | "both";
export type SortMode = "single" | "multiple";

export interface SortMeta {
    field: string;
    order: number; // 1: ASC, -1: DESC
}

export interface TableProps extends PaginatorProps {
    /**
     * An array of objects to display.
     * @default []
     */
    value?: any[];
    /**
     * Unique identifier of a row.
     */
    dataKey?: string;
    /**
     * Whether the data is being loaded.
     * @default false
     */
    loading?: boolean;
    /**
     * Whether to display alternating colors for rows.
     * @default false
     */
    stripedRows?: boolean;
    /**
     * Whether to highlight a row on hover.
     * @default false
     */
    rowHover?: boolean;
    /**
     * Whether to display grid lines between cells.
     * @default false
     */
    showGridlines?: boolean;
    /**
     * Size of the table cells.
     * @default "medium"
     */
    size?: TableSize;
    /**
     * Inline style of the table element.
     */
    tableStyle?: any;
    /**
     * Style class of the table element.
     */
    tableClass?: any;
    /**
     * Function that receives the row data and returns a style class for the row.
     */
    rowClass?: (data: any) => any;
    /**
     * Function that receives the row data and returns an inline style for the row.
     */
    rowStyle?: (data: any) => any;
    /**
     * Whether to enable pagination.
     * @default false
     */
    paginator?: boolean;
    /**
     * Position of the paginator.
     * @default "bottom"
     */
    paginatorPosition?: PaginatorPosition;
    /**
     * Whether to show it even there is only one page.
     * @default true
     */
    alwaysShowPaginator?: boolean;
    /**
     * Alias for 'template' to match DataTable API
     */
    paginatorTemplate?: any;

    /* --- Sorting --- */
    /**
     * Defines whether releasing the control key or clicking without it resets multi-sort.
     * @default "single"
     */
    sortMode?: SortMode;
    /**
     * Default sort field.
     */
    sortField?: string;
    /**
     * Default sort order (1: ASC, -1: DESC).
     */
    sortOrder?: number;
    /**
     * Metadata to define multi-column sorting.
     */
    multiSortMeta?: SortMeta[];
    /**
     * Whether the third click resets the sorting.
     * @default false
     */
    removableSort?: boolean;
}