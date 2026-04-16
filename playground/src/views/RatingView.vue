<script setup lang="ts">
import {ref} from "vue";
const value = ref(0);
</script>

<template>
    <div class="view-content">
        <section>
            <h4 class="mb-3">Basic</h4>
            <div class="section flex justify-center">
                <BRating v-model="value" allowHalf />
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Template</h4>
            <div class="section flex justify-center">
                <BRating v-model="value">
                    <template #onicon>
                        <img src="https://primefaces.org/cdn/primevue/images/rating/custom-onicon.png" height="24" width="24" />
                    </template>
                    <template #officon>
                        <img src="https://primefaces.org/cdn/primevue/images/rating/custom-officon.png" height="24" width="24" />
                    </template>
                </BRating>
            </div>
        </section>

        <section class="mt-8">
            <h2 class="mb-3">Readonly</h2>
            <div class="section flex justify-center">
                <BRating v-model="value" readonly />
            </div>
        </section>

        <section class="mt-8">
            <h2 class="mb-3">Disabled</h2>
            <div class="section flex justify-center">
                <BRating v-model="value" disabled />
            </div>
        </section>
    </div>
</template>