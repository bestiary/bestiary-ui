import {definePropType} from "@bestiary-ui/utils";

export const columnProps = {
    field: {
        type: String,
        default: null
    },
    header: {
        type: String,
        default: null
    },
    sortable: {
        type: Boolean,
        default: false
    },
    style: {
        type: definePropType<object | string>([Object, String]),
        default: null
    },
    class: {
        type: definePropType<object | string>([Object, String]),
        default: null
    },
    hidden: {
        type: Boolean,
        default: false
    }
} as const;