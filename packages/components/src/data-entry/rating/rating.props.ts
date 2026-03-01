import {definePropType} from "@bestiary-ui/utils";
import {Component} from "vue";

export const ratingProps = {
    defaultValue: {
        type: Number,
        default: null
    },
    name: {
        type: String,
        default: null
    },
    invalid: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    readonly: {
        type: Boolean,
        default: false
    },
    stars: {
        type: Number,
        default: 5
    },
    allowHalf: {
        type: Boolean,
        default: false
    },
    onIcon: {
        type: definePropType<Component>(Object),
        default: null
    },
    offIcon: {
        type: definePropType<Component>(Object),
        default: null
    }
} as const;