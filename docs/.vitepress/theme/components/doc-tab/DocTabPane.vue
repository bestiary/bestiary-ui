<template>
    <div v-if="activeTab === id" class="b-doc-tab-pane">
        <slot />
    </div>
</template>

<script setup>
import { inject } from 'vue'

defineProps({
    id: { type: String, required: true }
})

const activeTab = inject('activeTab')
</script>