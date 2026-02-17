<template>
    <div class="playground-app b-bg-base b-text-main">
        <!-- Sidebar -->
        <aside class="sidebar b-bg-surface b-border-r b-border-color">
            <div class="sidebar-header b-p-4">
                <h3 class="b-text-h4 b-m-0">Bestiary UI</h3>
            </div>

            <nav class="b-p-2 b-flex b-flex-col b-gap-1">
                <router-link to="/" class="nav-link">Home</router-link>
                <div class="nav-group-title b-mt-4 b-px-2 b-text-xxs b-uppercase b-text-muted">General</div>
                <router-link to="/buttons" class="nav-link">Button</router-link>

                <div class="nav-group-title b-mt-4 b-px-2 b-text-xxs b-uppercase b-text-muted">Data Entry</div>
                <router-link to="/input" class="nav-link">Input</router-link>
                <router-link to="/textarea" class="nav-link">Textarea</router-link>

                <div class="nav-group-title b-mt-4 b-px-2 b-text-xxs b-uppercase b-text-muted">Data Display</div>
                <router-link to="/badges" class="nav-link">Badge</router-link>
                <router-link to="/cards" class="nav-link">Cards</router-link>

                <div class="nav-group-title b-mt-4 b-px-2 b-text-xxs b-uppercase b-text-muted">Feedback</div>

                <div class="nav-group-title b-mt-4 b-px-2 b-text-xxs b-uppercase b-text-muted">Layout</div>
                <router-link to="/divider" class="nav-link">Divider</router-link>
                <router-link to="/splitter" class="nav-link">Splitter</router-link>

                <div class="nav-group-title b-mt-4 b-px-2 b-text-xxs b-uppercase b-text-muted">Navigation</div>
                <router-link to="/message" class="nav-link">Message</router-link>

                <div class="nav-group-title b-mt-4 b-px-2 b-text-xxs b-uppercase b-text-muted">Style</div>
                <router-link to="/tokens" class="nav-link">Design Tokens</router-link>
            </nav>
        </aside>

        <!-- Main Content -->
        <main class="main-content">
            <header class="top-bar b-bg-surface b-border-b b-border-color b-px-6">
                <div class="b-flex b-justify-between b-items-center b-h-full">
                    <span class="b-font-bold">{{ $route.name }}</span>
                    <BButton severity="secondary" size="small" @click="toggleTheme">
                        {{ isDark ? '🌙 Dark' : '☀️ Light' }}
                    </BButton>
                </div>
            </header>

            <div class="content-area b-p-8">
                <router-view />
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { BButton } from "@bestiary-ui/components";

const isDark = ref(false);

const toggleTheme = () => {
    isDark.value = !isDark.value;
    document.documentElement.setAttribute("data-theme", isDark.value ? "dark" : "light");
};

onMounted(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        isDark.value = true;
        document.documentElement.setAttribute("data-theme", "dark");
    }
});
</script>

<style>
.playground-app {
    display: flex;
    height: 100vh;
    width: 100vw;
}
.sidebar {
    width: 240px;
    display: flex;
    flex-direction: column;
}
.main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
}
.top-bar {
    height: 60px;
    flex-shrink: 0;
}
.nav-link {
    padding: 8px 12px;
    border-radius: 6px;
    text-decoration: none;
    color: var(--b-text-main);
    font-size: 14px;
}
.nav-link:hover { background: var(--b-state-hover); }
.router-link-active {
    background: var(--b-color-primary-muted) !important;
    color: var(--b-color-primary) !important;
    font-weight: 600;
}

.section {
    margin-top: 2rem;
}
</style>