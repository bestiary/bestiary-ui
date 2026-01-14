<template>
    <div class="view-content">
        <h2>Icons</h2>
        
        <div class="section">
            <h3>Different Sizes & Styles</h3>
            <div class="row">
                <div class="icon-item">
                    <BeakerIcon24Solid class="icon-md text-primary" />
                    <span>24 Solid</span>
                </div>
                <div class="icon-item">
                    <BeakerIcon24Outline class="icon-md text-warning" />
                    <span>24 Outline</span>
                </div>
                <div class="icon-item">
                    <BeakerIcon20Solid class="icon-sm text-success" />
                    <span>20 Solid</span>
                </div>
                <div class="icon-item">
                    <BeakerIcon16Solid class="icon-xs text-danger" />
                    <span>16 Solid</span>
                </div>
            </div>
        </div>

        <div class="section">
            <h3>Responsive Coloring</h3>
            <div class="row">
                <AcademicCapIcon24Solid class="icon-lg" />
                <FireIcon24Solid class="icon-lg text-danger" />
                <StarIcon24Solid class="icon-lg text-warning" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { BeakerIcon as BeakerIcon24Solid } from '@bestiary-ui/icons/24/solid'
import { BeakerIcon as BeakerIcon24Outline } from '@bestiary-ui/icons/24/outline'
import { BeakerIcon as BeakerIcon20Solid } from '@bestiary-ui/icons/20/solid'
import { BeakerIcon as BeakerIcon16Solid } from '@bestiary-ui/icons/16/solid'
import { AcademicCapIcon as AcademicCapIcon24Solid } from '@bestiary-ui/icons/24/solid'
import { FireIcon as FireIcon24Solid } from '@bestiary-ui/icons/24/solid'
import { StarIcon as StarIcon24Solid } from '@bestiary-ui/icons/24/solid'
</script>

<style scoped>
.icon-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    color: var(--b-text-color-light);
}
</style>
