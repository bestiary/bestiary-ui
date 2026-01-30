<template>
    <div class="home-view">
        <h1>Bestiary UI Playground</h1>
        <p>Select a component from the menu to see examples and test implementation.</p>
        
        <div class="stats">
            <Card title="Components">
                <p>Buttons, Cards, and more.</p>
            </Card>
            <Card title="Icons">
                <p>Icons from Heroicons.</p>
            </Card>
        </div>
    </div>
</template>

<script setup>
import Card from "@bestiary-ui/components/panel/card";
</script>

<style scoped>
.home-view {
    text-align: center;
    padding-top: 4rem;
}

.stats {
    display: flex;
    gap: 2rem;
    justify-content: center;
    margin-top: 3rem;
}

.stat-card {
    padding: 2rem;
    border: 1px solid var(--b-border-color);
    border-radius: 8px;
    width: 250px;
    background: var(--b-bg-surface);
}
</style>
