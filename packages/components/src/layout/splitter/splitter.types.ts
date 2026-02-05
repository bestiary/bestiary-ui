import {definePropType} from "@bestiary-ui/utils";

export type SplitterLayout = "horizontal" | "vertical";

export const splitterProps = {
    layout: {
        type: definePropType<SplitterLayout>(String),
        default: "horizontal"
    },
    gutterSize: {
        type: Number,
        default: 4
    }
} as const;