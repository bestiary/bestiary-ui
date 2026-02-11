<template>
    <div class="view-content">
        <h2>Input Text</h2>

        <div class="section">
            <h4>Basic</h4>
            <div class="b-flex b-gap-2">
                <BInputText v-model="name" placeholder="Search"/>
            </div>
        </div>

        <div class="section">
            <h4>Sizes</h4>
            <div class="b-flex b-gap-2">
                <BInputText v-model="value1" type="text" size="small" placeholder="Small"/>
                <BInputText v-model="value2" type="text" placeholder="Normal"/>
                <BInputText v-model="value3" type="text" size="large" placeholder="Large"/>
            </div>
        </div>

        <div class="section">
            <h4>Fluid</h4>
            <div class="b-flex b-gap-2">
                <BInputText type="text" v-model="value1" fluid />
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
                <BInputText type="text" v-model="name" placeholder="Name" invalid />
            </div>
        </div>

        <div class="section">
            <h4>Icon</h4>
            <BInputText v-model="name" placeholder="Search..." rounded>
                <template #prefix>
                    <MagnifyingGlassSolid />
                </template>
            </BInputText>
        </div>

        <div class="section">
            <h4>Label</h4>
            <BInputText v-model="name" placeholder="Search..." label="Search by name" rounded>
                <template #prefix>
                    <MagnifyingGlassSolid />
                </template>
            </BInputText>
        </div>

        <div class="section">
            <h4>Password</h4>
            <div class="b-flex b-gap-2">
                <BPassword v-model="value2" feedback/>

                <BPassword v-model="value3" feedback>
                    <template #header>
                        <div class="font-semibold text-xm mb-4">Reset Password</div>
                    </template>
                    <template #footer>
                        <ul class="pl-2 my-0 leading-normal text-sm">
                            <li>At least one lowercase</li>
                            <li>At least one uppercase</li>
                            <li>At least one numeric</li>
                            <li>Minimum 8 characters</li>
                        </ul>
                    </template>
                </BPassword>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import {BInputText, BPassword, BDivider} from "@bestiary-ui/components";
import {MagnifyingGlassSolid} from "@bestiary-ui/icons";
import {ref} from "vue";

const name = ref("");
const value1 = ref("");
const value2 = ref("");
const value3 = ref("");

</script>
