<script setup lang="ts">
</script>
<template>
    <div class="app-layout">
        <aside class="sidebar">
            <div class="logo">Bestiary UI</div>
            <nav class="nav-menu">
                <router-link to="/" class="nav-item">Home</router-link>
                <div class="nav-group">General</div>
                <router-link to="/buttons" class="nav-item">Buttons</router-link>
                <router-link to="/badges" class="nav-item">Badges</router-link>
                <div class="nav-group">Data Entry</div>
                <router-link to="/input" class="nav-item">Input</router-link>
                <router-link to="/textarea" class="nav-item">Textarea</router-link>
                <div class="nav-group">Feedback</div>
                <router-link to="/message" class="nav-item">Message</router-link>
                <div class="nav-group">Panel</div>
                <router-link to="/cards" class="nav-item">Cards</router-link>
                <router-link to="/divider" class="nav-item">Divider</router-link>
                <router-link to="/splitter" class="nav-item">Splitter</router-link>
                <div class="nav-group">Icons</div>
                <router-link to="/icons" class="nav-item">Icons</router-link>
            </nav>
        </aside>

        <main class="main-content">
            <router-view />
        </main>
    </div>
</template>

<style>
:root {
    --sidebar-width: 240px;
}

body {
    margin: 0;
    font-family: var(--b-font-family);
    background-color: var(--b-bg-base);
    color: var(--b-text-main);
}

.app-layout {
    display: flex;
    min-height: 100vh;
}

.sidebar {
    width: var(--sidebar-width);
    border-right: 1px solid var(--b-border-color);
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100vh;
    background: var(--b-bg-surface);
}

.logo {
    padding: 2rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--b-color-primary);
    border-bottom: 1px solid var(--b-border-color);
}

.nav-menu {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.nav-group {
    padding: 1rem 0.5rem 0.5rem;
    font-size: 0.75rem;
    text-transform: uppercase;
    color: var(--b-text-muted);
    letter-spacing: 0.05em;
}

.nav-item {
    padding: 0.75rem 1rem;
    color: var(--b-text-main);
    text-decoration: none;
    border-radius: 6px;
    transition: background 0.2s;
}

.nav-item:hover {
    background: var(--b-color-primary-muted);
}

.nav-item.router-link-active {
    background: var(--b-color-primary);
    color: var(--b-text-on-primary);
}

.main-content {
    flex: 1;
    margin-left: var(--sidebar-width);
    padding: 2rem 4rem;
}

.view-content h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: var(--b-color-primary);
}

.section {
    margin-bottom: 3rem;
}

.row {
    display: flex;
    gap: 1.5rem;
    align-items: center;
}

/* Global utility classes for icons in views */
.icon-xs { width: 16px; height: 16px; }
.icon-sm { width: 20px; height: 20px; }
.icon-md { width: 24px; height: 24px; }
.icon-lg { width: 48px; height: 48px; }

.text-primary { color: var(--b-color-primary); }
.text-success { color: var(--b-color-success); }
.text-warning { color: var(--b-color-warning); }
.text-danger { color: var(--b-color-error); }
</style>
