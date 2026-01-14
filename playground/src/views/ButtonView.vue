<template>
    <div class="view-content">
        <h2>Buttons</h2>
        
        <div class="section">
            <h3>Types</h3>
            <div class="row">
                <Button>Default</Button>
                <Button type="primary">Primary</Button>
                <Button type="success">Success</Button>
                <Button type="warning">Warning</Button>
                <Button type="danger">Danger</Button>
            </div>
        </div>

        <div class="section">
            <h3>Sizes</h3>
            <div class="row">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
            </div>
        </div>

        <div class="section">
            <h3>States</h3>
            <div class="row">
                <Button disabled>Disabled</Button>
                <Button type="primary" disabled>Disabled Primary</Button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '@bestiary-ui/components/button'
</script>
