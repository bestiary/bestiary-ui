import { Component } from 'vue';

export type AvatarSize = 'small' | 'medium' | 'large' | 'xlarge';
export type AvatarShape = 'square' | 'circle';

export interface AvatarProps {
    /**
     * The size of the avatar.
     * @default 'medium'
     */
    size?: AvatarSize;

    /**
     * The shape of the avatar.
     * @default 'square'
     */
    shape?: AvatarShape;

    /**
     * Text label (e.g., initials) to display.
     * Truncated to 2 characters.
     */
    label?: string;

    /**
     * Icon component or string class to display.
     */
    icon?: string | Component;

    /**
     * Source URL of the avatar image.
     */
    image?: string;

    /**
     * Accessible description for the image.
     * @default 'avatar'
     */
    imageAlt?: string;

    /**
     * Accessible description for the wrapper (used when image is not present).
     */
    ariaLabel?: string;
}