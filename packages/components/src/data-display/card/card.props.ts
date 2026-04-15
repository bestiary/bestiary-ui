import { CSSProperties } from 'vue'
import { definePropType } from '@bestiary-ui/utils'

export type CardType = 'info'
export type CardSize = 'sm' | 'lg' | 'none'
export type CardShadow = 'always' | 'hover' | 'never'

export const cardProps = {
    type: {
        type: definePropType<CardType>(String),
    },
    size: {
        type: definePropType<CardSize>(String),
    },
    shadow: {
        type: definePropType<CardShadow>(String),
    },
    header: String,
    title: String,
    subtitle: String,
    bodyStyle: {
        type: definePropType<CSSProperties>(Object),
        default: () => ({})
    }
} as const;