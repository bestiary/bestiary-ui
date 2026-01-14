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
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@bestiary-ui/components/button'
import Card from '@bestiary-ui/components/card'
</script>

<style>
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
