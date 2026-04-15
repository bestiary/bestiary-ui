<script setup lang="ts">
defineOptions({
    name: "BAvatarGroup"
});

/**
 * Component slots documentation
 */
defineSlots<{
    /** Default slot to nest BAvatar components */
    default?: (props: {}) => any;
}>();
</script>

<template>
    <div class="b-avatar-group">
        <slot />
    </div>
</template>