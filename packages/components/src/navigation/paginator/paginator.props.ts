export interface PaginatorState {
    first: number;
    rows: number;
    page: number;
    pageCount: number;
}

export type PaginatorTemplate = string | Record<string, string>;

export interface PaginatorProps {
    /** Total number of records. @default 0 */
    totalRecords?: number;
    /** Number of rows to display per page. @default 10 */
    rows?: number;
    /** Index of the first record to display. Supports v-model:first. @default 0 */
    first?: number;
    /** Number of page links to display in the sequence. @default 5 */
    pageLinkSize?: number;
    /** Options for rows per page dropdown */
    rowsPerPageOptions?: number[];
    /** Template of the paginator, space-separated components names or responsive object. */
    template?: PaginatorTemplate;
    /** Template for CurrentPageReport. */
    currentPageReportTemplate?: string;
    /** Whether to show the "First Page" and "Last Page" buttons. @default true */
    showFirstLastIcon?: boolean;
    /** Whether to show the "Previous Page" and "Next Page" buttons. @default true */
    showPrevNextIcon?: boolean;
    /** Whether to hide the paginator if there is only one page. @default false */
    alwaysShow?: boolean;
}