<script setup lang="ts">

import { BRating } from "@bestiary-ui/components";
import {ref} from "vue";

const value = ref(0);
</script>

<template>
    <div class="view-content">
        <h2>Badges</h2>

        <div class="section">
            <h2>Basic</h2>
            <BRating v-model="value" />
        </div>
    </div>
</template>

<style scoped>

</style>