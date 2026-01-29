<template>
    <div class="view-content">
        <h2>Icons</h2>
        
        <div class="section">
            <h3>Different Sizes & Styles</h3>
            <div class="row">
                <div class="icon-item">
                    <BeakerSolid class="icon-md text-primary" />
                    <span>24 Solid</span>
                </div>
                <div class="icon-item">
                    <BeakerOutline class="icon-md text-warning" />
                    <span>24 Outline</span>
                </div>
                <div class="icon-item">
                    <BeakerSolid class="icon-sm text-success" />
                    <span>20 Solid</span>
                </div>
                <div class="icon-item">
                    <BeakerSolid class="text-danger" size="16" />
                    <span>16 Solid</span>
                </div>
            </div>
        </div>

        <div class="section">
            <h3>Responsive Coloring</h3>
            <div class="row">
                <AcademicCapSolid class="icon-lg" />
                <FireSolid class="icon-lg text-danger" />
                <StarSolid class="icon-lg text-warning" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { BeakerSolid, BeakerOutline, AcademicCapSolid, StarSolid, FireSolid } from '@bestiary-ui/icons';
</script>

<style scoped>
.icon-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    color: var(--b-text-muted);
}
</style>
