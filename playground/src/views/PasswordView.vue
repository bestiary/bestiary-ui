<template>
    <div class="view-content">

        <section>
            <h4 class="mb-3">Basic</h4>
            <div class="section flex justify-center">
                <BPassword v-model="value" :feedback="false"/>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Feedback</h4>
            <div class="section flex justify-center">
                <BPassword placeholder="Password" v-model="value" :feedback="true"/>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Toggle Mask</h4>
            <div class="section flex justify-center">
                <BPassword placeholder="Password" v-model="value" :feedback="true" :toggleMask="true"/>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Template</h4>
            <div class="section flex justify-center">
                <BPassword v-model="value" :feedback="true">
                    <template #header>
                        <div class="b-font-semibold b-text-xm b-mb-4">Reset Password</div>
                    </template>
                    <template #footer>
                        <ul class="b-pl-2 b-my-0 b-leading-normal b-text-sm">
                            <li>At least one lowercase</li>
                            <li>At least one uppercase</li>
                            <li>At least one numeric</li>
                            <li>Minimum 8 characters</li>
                        </ul>
                    </template>
                </BPassword>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Invalid</h4>
            <div class="section flex justify-center">
                <BPassword placeholder="Password" v-model="value" :invalid="value === ''"/>
            </div>
        </section>

    </div>
</template>

<script setup>
import {ref} from "vue";

const value = ref("");
</script>
