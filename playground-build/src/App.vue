<template>
    <div class="container">
        <h1>Bestiary UI Playground</h1>

        <div class="section">
            <h2>Buttons</h2>
            <div class="row">
                <Button>Default</Button>
                <Button type="primary">Primary</Button>
                <Button type="success">Success</Button>
                <Button type="warning">Warning</Button>
                <Button type="danger">Danger</Button>
            </div>

            <div class="row">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
            </div>

            <div class="row">
                <Button disabled>Disabled</Button>
                <Button type="primary" disabled>Disabled Primary</Button>
            </div>
        </div>

        <div class="section">
            <h2>Cards</h2>
            <div class="row">
                <Card header="Simple Card" style="width: 300px">
                    This is a simple card body.
                </Card>

                <Card header="Hover Shadow" shadow="hover" style="width: 300px">
                    Hover over me to see the shadow effect.
                </Card>
            </div>

            <div class="row">
                <Card style="width: 300px">
                    <template #header>
                        <h3>Custom Slot Header</h3>
                    </template>
                    Content with header and footer slots.
                    <template #footer>
                        Footer Content
                    </template>
                </Card>
            </div>
            <div class="section">
                <h2>Icons (Build Verification)</h2>
                <div class="row">
                    <BeakerIcon24Solid class="icon-md text-primary"/>
                    <BeakerIcon24Outline class="icon-md text-warning"/>
                    <BeakerIcon20Solid class="icon-sm text-success"/>
                    <BeakerIcon16Solid class="icon-xs text-danger"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '@bestiary-ui/components/button'
import Card from '@bestiary-ui/components/card'
import {BeakerIcon as BeakerIcon24Solid} from '@bestiary-ui/icons/24/solid'
import {BeakerIcon as BeakerIcon24Outline} from '@bestiary-ui/icons/24/outline'
import {BeakerIcon as BeakerIcon20Solid} from '@bestiary-ui/icons/20/solid'
import {BeakerIcon as BeakerIcon16Solid} from '@bestiary-ui/icons/16/solid'
</script>

<style>
.icon-xs {
    width: 16px;
    height: 16px;
}

.icon-sm {
    width: 20px;
    height: 20px;
}

.icon-md {
    width: 24px;
    height: 24px;
}

.text-primary {
    color: var(--b-primary-color);
}

.text-success {
    color: var(--b-success-color);
}

.text-warning {
    color: var(--b-warning-color);
}

.text-danger {
    color: var(--b-danger-color);
}

.container {
    padding: 2rem;
    font-family: var(--b-font-family);
    background-color: var(--b-bg-color);
    color: var(--b-text-color);
    min-height: 100vh;
}

.section {
    margin-bottom: 2rem;
}

.row {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    align-items: center;
}
</style>
