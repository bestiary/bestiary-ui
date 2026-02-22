<template>
    <div class="view-content">
        <h2>Input Text</h2>

        <div class="section">
            <h4>Basic</h4>
            <div class="b-flex b-gap-2">
                <BInputText type="text" v-model="value1" />
            </div>
        </div>

        <div class="section">
            <h4>Forms</h4>
            <div class="b-flex b-flex-col b-gap-2 b-align-items-center">
                <div class="flex flex-col gap-1">
                    <BInputText name="username" type="text" placeholder="Username" fluid/>
                </div>
                <div class="flex flex-col gap-1">
                    <BInputText name="email" type="text" placeholder="Email" fluid/>
                </div>
                <BButton type="submit" severity="secondary" label="Submit" fluid/>
            </div>
        </div>

        <div class="section">
            <h4>Sizes</h4>
            <div class="b-flex b-gap-2 b-align-items-start">
                <BInputText v-model="value1" type="text" size="small" placeholder="Small" />
                <BInputText v-model="value2" type="text" size="medium" placeholder="Normal" />
                <BInputText v-model="value3" type="text" size="large" placeholder="Large" />
            </div>
        </div>

        <div class="section">
            <h4>Fluid</h4>
            <div class="b-flex b-gap-2">
                <BInputText type="text" fluid />
            </div>
        </div>

        <div class="section">
            <h4>Help Text</h4>
            <div class="b-flex b-flex-col b-gap-2">
                <label for="username">Username</label>
                <BInputText id="username" v-model="value1" aria-describedby="username-help" />
                <BMessage size="small" severity="secondary" variant="simple">Enter your username to reset your password.</BMessage>
            </div>
        </div>

        <div class="section">
            <h4>Filled</h4>
            <div class="b-flex b-gap-2">
                <BInputText type="text" v-model="value1" variant="filled" />
            </div>
        </div>

        <div class="section">
            <h4>Disabled</h4>
            <div class="b-flex b-gap-2">
                <BInputText type="text" v-model="value1" disabled />
            </div>
        </div>

        <div class="section">
            <h4>Invalid</h4>
            <div class="b-flex b-gap-2">
                <BInputText v-model="value1" :invalid="!value1" placeholder="Name" />
                <BInputText v-model="value2" :invalid="!value2" variant="filled" placeholder="Name" />
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import {BInputText, BMessage, BButton} from "@bestiary-ui/components";
import {ref} from "vue";

const value1 = ref("");
const value2 = ref("");
const value3 = ref("");

</script>
