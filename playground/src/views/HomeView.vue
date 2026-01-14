<template>
    <div class="home-view">
        <h1>Bestiary UI Playground</h1>
        <p>Select a component from the menu to see examples and test implementation.</p>
        
        <div class="stats">
            <div class="stat-card">
                <h3>Components</h3>
                <p>Buttons, Cards, and more.</p>
            </div>
            <div class="stat-card">
                <h3>Icons</h3>
                <p>300+ icons from Heroicons.</p>
            </div>
        </div>
    </div>
</template>

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
    background: var(--b-bg-color-alt);
}
</style>
