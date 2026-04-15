<template>
    <div class="playground-app">
        <!-- Sidebar -->
        <aside class="sidebar border-r">
            <div class="sidebar-header p-4">
                <h3 class="m-0">Bestiary UI</h3>
                <span>v0.0.3</span>
            </div>

            <nav class="p-2 flex flex-col gap-1 custom-scrollbar">
                <router-link to="/" class="nav-link">Home</router-link>

                <template v-for="(group, title) in menuGroups" :key="title">
                    <div class="nav-group-title mt-4 px-2 uppercase font-bold">
                        {{ title }}
                    </div>
                    <router-link
                        v-for="route in group"
                        :key="route.path"
                        :to="route.path"
                        class="nav-link"
                    >
                        {{ route.meta?.title || route.name }}
                    </router-link>
                </template>
            </nav>
        </aside>

        <!-- Main Content -->
        <main class="main-content">
            <header class="top-bar border-b px-6">
                <div class="flex justify-between items-center block-full">
                    <div class="flex items-center gap-2">
                        <span>Page /</span>
                        <span class="font-bold">{{ $route.name }}</span>
                    </div>

                    <div class="flex items-center gap-4">
                        <BButton severity="secondary" size="small" @click="toggleTheme">
                            {{ isDark ? '🌙' : '☀️' }}
                        </BButton>
                    </div>
                </div>
            </header>

            <div class="content-area p-8">
                <router-view />
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";

const isDark = ref(false);
const router = useRouter();

const menuGroups = computed(() => {
    const groups: Record<string, any[]> = {};
    router.getRoutes().forEach(route => {
        const category = (route.meta?.category as string) || null;
        if (category) {
            if (!groups[category]) groups[category] = [];
            groups[category].push(route);
        }
    });
    return groups;
});

const toggleTheme = () => {
    isDark.value = !isDark.value;
    document.documentElement.setAttribute("data-color-mode", isDark.value ? "dark" : "light");
};

onMounted(() => {
    document.documentElement.setAttribute("data-theme", "forest");
    document.documentElement.setAttribute("data-essence", "leaf");

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        isDark.value = true;
        document.documentElement.setAttribute("data-color-mode", "dark");
    }
});
</script>

<style>
.playground-app {
    display: flex;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
}
.sidebar {
    width: 260px;
    display: flex;
    flex-direction: column;
    z-index: 10;
    background-color: var(--b-surface-section);
}
.custom-scrollbar {
    overflow-y: auto;
}
.main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
.content-area {
    flex: 1;
    overflow-y: auto;
    background-color: var(--b-surface-ground);
}
.top-bar {
    height: 64px;
    flex-shrink: 0;
    background-color: var(--b-surface-section);
}
.nav-link {
    padding: 10px 12px;
    border-radius: 8px;
    text-decoration: none;
    color: var(--b-text-primary);
    font-size: 14px;
    transition: all 0.2s ease;
}
.nav-link:hover {
    background: var(--b-primary-overlay);
    color: var(--b-primary-subtle-text);
}
.router-link-active {
    background: var(--b-primary-solid-background);
    color: var(--b-primary-solid-text);
}
.section {
    margin-bottom: 2rem;
    background: var(--b-surface-section);
    padding: 1.5rem;
    border-radius: var(--b-radius-container);
    border: 1px solid var(--b-border-default);
}
</style>