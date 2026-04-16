<template>
    <div class="view-content">
        <section>
            <h4 class="mb-3">Basic</h4>
            <div class="section flex justify-center">
                <BTextarea v-model="value"/>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Rows & Cols</h4>
            <div class="section flex justify-center">
                <BTextarea v-model="value" :rows="10" :cols="60"/>
            </div>
        </section>

        <section>
            <h4 class="mb-3">Auto resize</h4>
            <div class="section flex justify-center">
                <BTextarea v-model="value" autoresize/>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Sizes</h4>
            <div class="section flex justify-center items-end gap-2">
                <BTextarea v-model="value1" size="small" placeholder="Small" :rows="3"/>
                <BTextarea v-model="value2" size="medium" placeholder="Normal" :rows="3"/>
                <BTextarea v-model="value3" size="large" placeholder="Large" :rows="3"/>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Fluid</h4>
            <div class="section">
                <BTextarea v-model="value" placeholder="Fluid" :rows="3" fluid/>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Filled</h4>
            <div class="section flex justify-center">
                <BTextarea v-model="value" placeholder="Filled" filled/>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Disabled</h4>
            <div class="section flex justify-center">
                <BTextarea v-model="value" placeholder="Disabled" disabled/>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Invalid</h4>
            <div class="section flex justify-center">
                <BTextarea v-model="value" placeholder="Invalid" invalid/>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import {BTextarea} from "@bestiary-ui/components";
import {ref} from "vue";

const value = ref("");
const value1 = ref("");
const value2 = ref("");
const value3 = ref("");
</script>
