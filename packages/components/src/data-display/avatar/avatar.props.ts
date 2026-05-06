import { Component } from "vue";

export type AvatarSize = "small" | "medium" | "large" | "xlarge";
export type AvatarShape = "square" | "circle";

export interface AvatarProps {
    /**
     * Size of the avatar.
     * @default "medium"
     */
    size?: AvatarSize;

    /**
     * Shape of the avatar.
     * @default "square"
     */
    shape?: AvatarShape;

    /**
     * Text label to be displayed inside the avatar.
     * @default undefined
     */
    label?: string;

    /**
     * Icon to be displayed inside the avatar. Can be a component or a string.
     * @default undefined
     */
    icon?: string | Component;

    /**
     * URL of the image to be displayed as the avatar.
     * @default undefined
     */
    image?: string;

    /**
     * Alternative text for the image
     * @default "avatar"
     */
    imageAlt?: string;
}