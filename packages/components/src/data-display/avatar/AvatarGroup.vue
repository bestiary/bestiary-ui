<script setup lang="ts">

/**
 * BAvatarGroup - A wrapper to display multiple BAvatar components
 * in a stacked or horizontal list.
 */
defineOptions({
    name: "BAvatarGroup"
});

defineSlots<{
    /**
     * Default slot for nesting BAvatar components
     */
    default?: (props: {}) => any;
}>();
</script>

<template>
    <div class="b-avatar-group" role="group">
        <slot />
    </div>
</template>