<template>
    <div class="icon-gallery">
        <div class="controls">
            <input
                v-model="search"
                placeholder="Search icons..."
                class="search-input"
            />

            <div class="filters">
                <button
                    v-for="t in ['all', 'solid', 'outline']"
                    :key="t"
                    class="filter-btn"
                    :class="{ active: type === t }"
                    @click="type = t"
                >
                    {{ t.toUpperCase() }}
                </button>
            </div>
        </div>

        <div class="grid">
            <div v-for="icon in filteredIcons" :key="icon.name" class="icon-card">
                <div class="icon-preview" :id="'icon-' + icon.name">
                    <component :is="AllIcons[icon.name]" size="32" />
                </div>

                <span class="icon-name">{{ icon.name }}</span>

                <div class="actions">
                    <button class="copy-btn" @click="copyName(icon.name)">Name</button>
                    <button class="copy-btn" @click="copySvg('icon-' + icon.name)">SVG</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import * as AllIcons from "@bestiary-ui/icons";
import metadata from "../../../../icons/generated/metadata.json";

const search = ref("");
const type = ref("all");

const filteredIcons = computed(() => {
    return metadata.filter(i => {
        const matchesSearch = i.name.toLowerCase().includes(search.value.toLowerCase());
        const matchesType = type.value === "all" || i.type.toLowerCase() === type.value;
        return matchesSearch && matchesType;
    });
});

const copyName = (name) => {
    navigator.clipboard.writeText(`import { ${name} } from "@bestiary-ui/icons"`);
    alert("Import statement copied!");
};

const copySvg = (id) => {
    const container = document.getElementById(id);
    if (container) {
        const svg = container.innerHTML;
        navigator.clipboard.writeText(svg);
        alert("SVG code copied!");
    }
};
</script>

<style scoped>
.icon-gallery {
    margin-top: 2rem;
}

.controls {
    position: sticky;
    top: var(--vp-nav-height);
    z-index: 10;
    background: var(--vp-c-bg);
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-bottom: 1px solid var(--vp-c-divider);
    margin-bottom: 2rem;
}

.search-input {
    width: 100%;
    padding: 0.8rem 1rem;
    border-radius: 10px;
    border: 1px solid var(--vp-c-divider);
    background: var(--vp-c-bg-soft);
    color: var(--vp-c-text-1);
    transition: all 0.2s;
    outline: none;
}

.search-input:focus {
    border-color: #7dae78;
    box-shadow: 0 0 0 3px rgba(125, 174, 120, 0.2);
}

.filters {
    display: flex;
    gap: 0.5rem;
}

.filter-btn {
    padding: 0.4rem 1rem;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 600;
    background: var(--vp-c-bg-soft);
    border: 1px solid var(--vp-c-divider);
    cursor: pointer;
    transition: all 0.2s;
    color: var(--vp-c-text-2);
}

.filter-btn:hover {
    border-color: #7dae78;
    color: var(--vp-c-text-1);
}

.filter-btn.active {
    background: #7dae78;
    color: white;
    border-color: #7dae78;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: 1.5rem;
}

.icon-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 1rem;
    border-radius: 12px;
    background: var(--vp-c-bg-soft);
    border: 1px solid var(--vp-c-divider);
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: default;
}

.icon-card:hover {
    background: var(--vp-c-bg);
    border-color: #7dae78;
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(125, 174, 120, 0.2);
}

.icon-preview {
    margin-bottom: 1rem;
    color: var(--vp-c-text-1);
    transition: transform 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
}

.icon-card:hover .icon-preview {
    transform: scale(1.1);
    color: #7dae78;
}

.icon-name {
    font-size: 11px;
    font-family: var(--vp-font-family-mono);
    color: var(--vp-c-text-2);
    text-align: center;
    word-break: break-all;
    height: 32px;
    display: flex;
    align-items: center;
}

.actions {
    margin-top: 1rem;
    display: flex;
    gap: 4px;
    width: 100%;
}

.copy-btn {
    flex: 1;
    padding: 4px 0;
    font-size: 10px;
    border-radius: 4px;
    background: transparent;
    border: 1px solid #7dae78;
    color: #7dae78;
    font-weight: bold;
    cursor: pointer;
}

.copy-btn:hover {
    background: #7dae78;
    color: white;
    border-color: #7dae78;
}

@media (max-width: 640px) {
    .grid {
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    }
}
</style>