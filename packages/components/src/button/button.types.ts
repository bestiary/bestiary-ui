export type ButtonType = 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'
export type ButtonShape = 'rectangle' | 'square' | 'circle'

export interface ButtonProps {
    type?: ButtonType
    size?: ButtonSize
    shape?: ButtonShape
    disabled?: boolean
}
