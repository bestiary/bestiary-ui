<template>
    <div class="view-content">
        <h2>Textarea</h2>

        <div class="section">
            <h4>Basic</h4>
            <div class="b-flex b-gap-2">
                <BTextarea v-model="value"/>
            </div>
        </div>

        <div class="section">
            <h4>Rows & Cols</h4>
            <div class="b-flex b-gap-2">
                <BTextarea v-model="value" :rows="10" :cols="60"/>
            </div>
        </div>

        <div class="section">
            <h4>Auto resize</h4>
            <div class="b-flex b-gap-2">
                <BTextarea v-model="value" autoresize />
            </div>
        </div>

        <div class="section">
            <h4>Sizes</h4>
            <div class="b-flex b-flex-col b-align-items-start b-gap-2">
                <BTextarea v-model="value1" size="small" placeholder="Small" :rows="3" />
                <BTextarea v-model="value2" size="medium" placeholder="Normal" :rows="3" />
                <BTextarea v-model="value3" size="large" placeholder="Large" :rows="3" />
            </div>
        </div>

        <div class="section">
            <h4>Fluid</h4>
            <div class="b-flex b-flex-col b-align-items-start b-gap-2">
                <BTextarea v-model="value" placeholder="Fluid" :rows="3" fluid />
            </div>
        </div>

        <div class="section">
            <h4>Filled</h4>
            <div class="b-flex b-flex-col b-align-items-start b-gap-2">
                <BTextarea v-model="value" placeholder="Filled" filled />
            </div>
        </div>

        <div class="section">
            <h4>Disabled</h4>
            <div class="b-flex b-flex-col b-align-items-start b-gap-2">
                <BTextarea v-model="value" placeholder="Disabled" disabled />
            </div>
        </div>

        <div class="section">
            <h4>Invalid</h4>
            <div class="b-flex b-flex-col b-align-items-start b-gap-2">
                <BTextarea v-model="value" placeholder="Invalid" invalid />
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { BTextarea } from "@bestiary-ui/components";
import {ref} from "vue";

const value = ref("");
const value1 = ref("");
const value2 = ref("");
const value3 = ref("");
</script>
