<template>
    <div class="view-content">
        <h2>Buttons</h2>
        
        <div class="section">
            <h3>Types</h3>
            <div class="row">
                <Button>Default</Button>
                <Button type="secondary">Secondary</Button>
                <Button type="success">Success</Button>
                <Button type="warning">Warning</Button>
                <Button type="danger">Danger</Button>
                <Button type="info">Info</Button>
            </div>
        </div>

        <div class="section">
            <h3>Sizes</h3>
            <div class="row">
                <Button size="small">Small</Button>
                <Button>Standard</Button>
                <Button size="large">Large</Button>
                <Button size="xlarge">Extra large</Button>
            </div>
        </div>

        <div class="section">
            <h3>States</h3>
            <div class="row">
                <Button disabled>Disabled</Button>
            </div>
        </div>

        <div class="section">
            <h3>With Icon</h3>
            <div class="row">
                <Button size="small"><PlusIcon/>Left</Button>
                <Button size="small">Right<PlusIcon/></Button>
            </div>
        </div>

        <div class="section">
            <h3>Shape</h3>
            <div class="row">
                <Button shape="square"><PlusIcon/></Button>
                <Button shape="circle"><PlusIcon/></Button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '@bestiary-ui/components/button/button'
import { PlusIcon } from "@bestiary-ui/icons/24/solid";
</script>
