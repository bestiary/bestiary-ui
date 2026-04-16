export interface PaginatorState {
    /** First record index */
    first: number;
    /** Number of rows per page */
    rows: number;
    /** Current page index */
    page: number;
    /** Total number of pages */
    pageCount: number;
}

export type PaginatorTemplate = string | Record<string, string>;

export interface PaginatorProps {
    /**
     * Total number of records.
     * @default 0
     */
    totalRecords?: number;

    /**
     * Number of rows to display per page.
     * @default 0
     */
    rows?: number;

    /**
     * Index of the first record to display.
     * Supports v-model:first.
     * @default 0
     */
    first?: number;

    /**
     * Number of page links to display in the sequence.
     * @default 5
     */
    pageLinkSize?: number;

    /** Options for rows per page dropdown */
    rowsPerPageOptions?: number[];

    /**
     * Template of the paginator, space-separated components names.
     * @default "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
     */
    template?: PaginatorTemplate;

    /**
     * Template for CurrentPageReport. Available placeholders:
     * {first}, {last}, {rows}, {totalRecords}, {currentPage}, {totalPages}
     * @default "({currentPage} of {totalPages})"
     */
    currentPageReportTemplate?: string;

    /**
     * Whether to show the "First Page" and "Last Page" buttons.
     * @default true
     */
    showFirstLastIcon?: boolean;

    /**
     * Whether to show the "Previous Page" and "Next Page" buttons.
     * @default true
     */
    showPrevNextIcon?: boolean;

    /**
     * Whether to hide the paginator if there is only one page.
     * @default false
     */
    alwaysShow?: boolean;
}