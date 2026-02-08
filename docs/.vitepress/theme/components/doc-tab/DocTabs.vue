<template>
    <div class="b-doc-tabs">
        <div class="b-doc-tabs__header">
            <button
                v-for="tab in tabs"
                :key="tab.id"
                :class="['b-doc-tabs__nav-item', { active: activeTab === tab.id }]"
                @click="activeTab = tab.id"
            >
                {{ tab.label }}
            </button>
        </div>

        <!-- Контент -->
        <div class="b-doc-tabs__content">
            <slot :activeTab="activeTab" />
        </div>
    </div>
</template>

<script setup>
import { ref, provide } from 'vue'

const props = defineProps({
    tabs: {
        type: Array,
        required: true,
    },
    initialTab: {
        type: String,
        default: ''
    }
})

const activeTab = ref(props.initialTab || props.tabs[0].id)
provide('activeTab', activeTab)
</script>

<style scoped>

.b-doc-tabs__header {
    display: flex;
    gap: 2rem;
    border-bottom: 1px solid var(--vp-c-divider);
    margin-bottom: 2rem;
    overflow-x: auto;
}

.b-doc-tabs__nav-item {
    padding: 0.8rem 0;
    font-size: 13px;
    font-weight: 600;
    color: var(--vp-c-text-2);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-bottom: 2px solid transparent;
    transition: all 0.2s;
    cursor: pointer;
    white-space: nowrap;
}

.b-doc-tabs__nav-item:hover {
    color: var(--vp-c-text-1);
}

.b-doc-tabs__nav-item.active {
    color: #7dae78;
    border-bottom-color: #7dae78;
}

.b-doc-tabs__content {
    min-height: 200px;
}
</style>