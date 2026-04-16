<template>
    <div class="view-content">
        <section>
            <h4 class="mb-3">Basic</h4>
            <div class="section flex justify-center">
                <BInputText type="text" v-model="value1"/>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Forms</h4>
            <div class="section flex flex-col gap-4">
                <BInputText name="username" type="text" placeholder="Username" fluid/>
                <BInputText name="email" type="text" placeholder="Email" fluid/>
                <BButton type="submit" severity="secondary" label="Submit" fluid/>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Sizes</h4>
            <div class="section flex justify-center items-center gap-4">
                <BInputText v-model="value1" type="text" size="small" placeholder="Small"/>
                <BInputText v-model="value2" type="text" size="medium" placeholder="Medium"/>
                <BInputText v-model="value3" type="text" size="large" placeholder="Large"/>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Fluid</h4>
            <div class="section">
                <BInputText type="text" fluid/>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Help Text</h4>
            <div class="section flex flex-col gap-2">
                <label for="username">Username</label>
                <BInputText id="username" v-model="value1" aria-describedby="username-help"/>
                <BMessage size="small" severity="secondary" variant="simple">Enter your username to reset your
                    password.
                </BMessage>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Filled</h4>
            <div class="section flex justify-center">
                <BInputText type="text" v-model="value1" variant="filled"/>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Disabled</h4>
            <div class="section flex justify-center">
                <BInputText type="text" v-model="value1" disabled/>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Invalid</h4>
            <div class="section flex justify-center gap-2">
                <BInputText v-model="value1" :invalid="!value1" placeholder="Name"/>
                <BInputText v-model="value2" :invalid="!value2" variant="filled" placeholder="Email"/>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const value1 = ref("");
const value2 = ref("");
const value3 = ref("");
</script>
