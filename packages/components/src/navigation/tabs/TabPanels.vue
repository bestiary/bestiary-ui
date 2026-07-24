<script setup lang="ts">
defineOptions({ name: 'BTabPanels' });
defineSlots<{ default?: (props: Record<string, never>) => any; }>();
</script>

<template>
    <div class="b-tabpanels">
        <slot />
    </div>
</template>