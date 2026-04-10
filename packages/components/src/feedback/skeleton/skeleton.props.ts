import { definePropType } from "../../utils/types";

export type SkeletonShape = "circle" | "rectangle";
export type SkeletonAnimation = "none" | "wave";

export const skeletonProps = {
    shape: {
        type: definePropType<SkeletonShape>(String),
        default: "rectangle"
    },
    size: {
        type: String,
        default: null
    },
    width: {
        type: String,
        default: "100%"
    },
    height: {
        type: String,
        default: "1rem"
    },
    borderRadius: {
        type: String,
        default: null
    },
    animation: {
        type: definePropType<SkeletonAnimation>(String),
        default: "wave"
    }
} as const;