<script setup lang="ts">

defineOptions({
    name: 'BAvatarGroup'
});

defineSlots<{
    /** Default slot for nesting BAvatar components */
    default?: (props: Record<string, never>) => any;
}>();
</script>

<template>
    <div class="b-avatar-group" role="group">
        <slot />
    </div>
</template>