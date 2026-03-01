<script setup lang="ts">
import {ref} from "vue";
import { BRating } from "@bestiary-ui/components";

const value = ref(0);
</script>

<template>
    <div class="view-content">
        <div class="section">
            <h2>Basic</h2>
            <BRating v-model="value" allowHalf />
        </div>

        <div class="section">
            <h2>Template</h2>
            <BRating v-model="value">
                <template #onicon>
                    <img src="https://primefaces.org/cdn/primevue/images/rating/custom-onicon.png" height="24" width="24" />
                </template>
                <template #officon>
                    <img src="https://primefaces.org/cdn/primevue/images/rating/custom-officon.png" height="24" width="24" />
                </template>
            </BRating>
        </div>

        <div class="section">
            <h2>Readonly</h2>
            <BRating v-model="value" readonly />
        </div>

        <div class="section">
            <h2>Readonly</h2>
            <BRating v-model="value" disabled />
        </div>
    </div>
</template>

<style scoped>

</style>