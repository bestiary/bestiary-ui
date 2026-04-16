import {CSSProperties} from "vue";

export type CardType = "info";
export type CardSize = "sm" | "lg" | "none";
export type CardShadow = "always" | "hover" | "never";

export interface cardProps {
    type?: CardType;
    size?: CardSize;
    shadow?: CardShadow;
    header?: String;
    title?: String;
    subtitle?: String;
    bodyStyle?: CSSProperties;
}