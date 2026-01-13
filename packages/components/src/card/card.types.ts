import { definePropType } from '@bestiary-ui/utils'

export type CardShadow = 'always' | 'hover' | 'never'

export const cardProps = {
    shadow: {
        type: definePropType<CardShadow>(String),
        default: 'always'
    },
    header: {
        type: String,
        default: ''
    },
    bodyStyle: {
        type: definePropType<Record<string, string>>(Object),
        default: () => ({})
    }
} as const
