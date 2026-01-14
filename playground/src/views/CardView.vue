<template>
    <div class="view-content">
        <h2>Cards</h2>
        
        <div class="section">
            <div class="row flex-wrap">
                <Card header="Simple Card" style="width: 300px">
                    This is a simple card body.
                </Card>

                <Card header="Hover Shadow" shadow="hover" style="width: 300px">
                    Hover over me to see the shadow effect.
                </Card>
            </div>
        </div>

        <div class="section">
            <h3>Slots</h3>
            <div class="row">
                <Card style="width: 400px">
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
import Card from '@bestiary-ui/components/card'
</script>

<style scoped>
.flex-wrap {
    flex-wrap: wrap;
}
</style>
