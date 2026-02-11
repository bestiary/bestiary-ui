<template>
    <div class="view-content">
        <h2>Buttons</h2>
        
        <div class="section">
            <h3>Types</h3>
            <div class="row">
                <Button>Default</Button>
                <Button type="secondary">Secondary</Button>
                <Button type="success">Success</Button>
                <Button type="warn">Warning</Button>
                <Button type="danger">Danger</Button>
                <Button type="info">Info</Button>
            </div>
        </div>

        <div class="section">
            <h3>Sizes</h3>
            <div class="row">
                <Button :icon="PlusSolid" size="small">Small</Button>
                <Button :icon="PlusSolid" size="medium">Standard</Button>
                <Button :icon="PlusSolid" size="large">Large</Button>
                <Button :icon="PlusSolid" size="xlarge">Extra large</Button>
            </div>
        </div>

        <div class="section">
            <h3>States</h3>
            <div class="row">
                <Button disabled>Disabled</Button>
                <Button loading>Loading</Button>
            </div>
        </div>

        <div class="section">
            <h3>With Icon</h3>
            <div class="row">
                <Button :icon="PlusSolid" iconPos="top">Top</Button>
                <Button :icon="PlusSolid" iconPos="bottom">Bottom</Button>
                <Button :icon="PlusSolid" iconPos="left">Left</Button>
                <Button :icon="PlusSolid" iconPos="right">Right</Button>
                <Button :icon="PlusSolid"></Button>
            </div>
        </div>

        <div class="section">
            <h3>With Badge</h3>
            <div class="row">
                <Button badge="1" badgeType="secondary" badgePos="top">Top</Button>
                <Button badge="2" badgeType="secondary" badgePos="bottom">Bottom</Button>
                <Button badge="3" badgeType="secondary" badgePos="left">Left</Button>
                <Button badge="4" badgeType="secondary" badgePos="right">Right</Button>
                <Button :icon="PlusSolid" badge="5" badgeType="secondary">Icon & Badge</Button>
            </div>
        </div>

        <div class="section">
            <h3>Rounded</h3>
            <div class="row">
                <Button rounded>Rounded</Button>
                <Button :icon="PlusSolid" rounded></Button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '@bestiary-ui/components/general/button'
import { PlusSolid } from "@bestiary-ui/icons";
</script>
