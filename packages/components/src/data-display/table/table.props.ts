import { definePropType } from "../../utils/types";

export type TableSize = "small" | "medium" | "large";

export const tableProps = {
    value: {
        type: Array as () => any[],
        default: () => []
    },
    dataKey: {
        type: String,
        default: null
    },
    loading: {
        type: Boolean,
        default: false
    },
    stripedRows: {
        type: Boolean,
        default: false
    },
    rowHover: {
        type: Boolean,
        default: false
    },
    showGridlines: {
        type: Boolean,
        default: false
    },
    size: {
        type: definePropType<TableSize>(String),
        default: "medium"
    },
    tableStyle: {
        type: definePropType<string>(String),
        default: null
    },
    tableClass: {
        type: definePropType<string>(String),
        default: null
    }
} as const;