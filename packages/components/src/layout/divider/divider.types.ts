import {definePropType} from "@bestiary-ui/utils";

export type DividerAlign = "left" | "center" | "right" | "top" | "bottom";
export type DividerLayout = "horizontal" | "vertical";
export type DividerType = "solid" | "dashed" | "dotted" | "double";


export const dividerProps = {
    align: {
        type: definePropType<DividerAlign>(String),
        default: "left",
    },
    layout: {
        type: definePropType<DividerLayout>(String),
        default: "horizontal",
    },
    type: {
        type: definePropType<DividerType>(String),
        default: "solid",
    }
} as const;