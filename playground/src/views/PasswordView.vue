<template>
    <div class="view-content">
        <h2>Password</h2>

        <div class="section">
            <h4>Basic</h4>
            <div class="b-flex b-gap-2">
                <BPassword v-model="value" :feedback="false"/>
            </div>
        </div>

        <div class="section">
            <h4>Feedback</h4>
            <div class="b-flex b-flex-col b-gap-2">
                <BPassword placeholder="Password" v-model="value" :feedback="true"/>
            </div>
        </div>

        <div class="section">
            <h4>Toggle Mask</h4>
            <div class="b-flex b-flex-col b-gap-2">
                <BPassword placeholder="Password" v-model="value" :feedback="true" :toggleMask="true"/>
            </div>
        </div>

        <div class="section">
            <h4>Template</h4>
            <div class="b-flex b-flex-col">
                <BPassword v-model="value" :feedback="true">
                    <template #header>
                        <div class="b-font-semibold b-text-xm b-mb-4">Reset Password</div>
                    </template>
                    <template #footer>
                        <BDivider />
                        <ul class="b-pl-2 b-my-0 b-leading-normal b-text-sm">
                            <li>At least one lowercase</li>
                            <li>At least one uppercase</li>
                            <li>At least one numeric</li>
                            <li>Minimum 8 characters</li>
                        </ul>
                    </template>
                </BPassword>
            </div>
        </div>

        <div class="section">
            <h4>Invalid</h4>
            <div class="b-flex b-flex-col">
                <BPassword placeholder="Password" v-model="value" :invalid="!value"/>
            </div>
        </div>

    </div>
</template>

<script setup>
import { BPassword, BDivider } from "@bestiary-ui/components";
import {ref} from "vue";

const value = ref("");
</script>
