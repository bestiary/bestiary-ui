<template>
    <div class="b-overlay-badge">
        <slot />

        <BBadge
            v-bind="$props"
            class="b-overlay-badge__badge"
        >
            <template v-if="$slots.value" #default>
                <slot name="value" />
            </template>
        </BBadge>
    </div>
</template>

<script setup lang="ts">
import { BBadge } from "../badge";
import { overlayBadgeProps } from './overlayBadge.types.ts';
import './overlay-badge.css';

defineOptions({ name: 'BOverlayBadge' });
defineProps(overlayBadgeProps);
</script>