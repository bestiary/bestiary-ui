<template>
    <div class="view-content">
        <h2>Message</h2>

        <div class="section">
            <h4>Basic</h4>
            <div class="b-flex b-gap-2">
                <BMessage>Message Content</BMessage>
            </div>
        </div>

        <div class="section">
            <h4>Severity</h4>
            <div class="b-flex b-gap-2 b-flex-wrap">
                <BMessage severity="success">Success Message</BMessage>
                <BMessage severity="info">Info Message</BMessage>
                <BMessage severity="warn">Warn Message</BMessage>
                <BMessage severity="error">Error Message</BMessage>
                <BMessage severity="secondary">Secondary Message</BMessage>
                <BMessage severity="contrast">Contrast Message</BMessage>
            </div>
        </div>

        <div class="section">
            <h4>Icon</h4>
            <div class="b-flex b-gap-2">
                <BMessage severity="info" :icon="PaperAirplaneOutline">Info Message</BMessage>
                <BMessage severity="success">
                    <template #icon>
                        <HandRaisedOutline />
                    </template>
                    <span class="ml-2">How may I help you?</span>
                </BMessage>
            </div>
        </div>

        <div class="section">
            <h4>Outlined</h4>
            <div class="b-flex b-gap-2">
                <BMessage severity="success" variant="outline">Success Message</BMessage>
                <BMessage severity="info" variant="outline">Info Message</BMessage>
                <BMessage severity="warn" variant="outline">Warn Message</BMessage>
                <BMessage severity="error" variant="outline">Error Message</BMessage>
                <BMessage severity="secondary" variant="outline">Secondary Message</BMessage>
                <BMessage severity="contrast" variant="outline">Contrast Message</BMessage>
            </div>
        </div>

        <div class="section">
            <h4>Simple</h4>
            <div class="b-flex b-gap-2">
                <BMessage severity="success" variant="simple">Success Message</BMessage>
                <BMessage severity="info" variant="simple">Info Message</BMessage>
                <BMessage severity="warn" variant="simple">Warn Message</BMessage>
                <BMessage severity="error" variant="simple">Error Message</BMessage>
                <BMessage severity="secondary" variant="simple">Secondary Message</BMessage>
                <BMessage severity="contrast" variant="simple">Contrast Message</BMessage>
            </div>
        </div>

        <div class="section">
            <h4>Sizes</h4>
            <div class="b-flex b-gap-2 b-align-items-center">
                <BMessage size="small" :icon="PlusSolid">Small Message</BMessage>
                <BMessage size="medium" :icon="PaperAirplaneOutline">Normal Message</BMessage>
                <BMessage size="large" :icon="HandRaisedOutline">Large Message</BMessage>
                <BMessage size="xlarge" :icon="CheckOutline">Extra Large Message</BMessage>
            </div>
        </div>

        <div class="section">
            <h4>With input</h4>
            <div class="b-flex b-gap-2 b-flex-col b-align-items-start">
                <BMessage v-if="!username || !email" severity="error" :icon="XCircleOutline" class="mb-2">Validation error</BMessage>
                <BMessage v-if="username && email" severity="success" :icon="XCircleOutline" class="mb-2">Form is valid</BMessage>
                <div class="flex flex-col gap-1">
                    <BInputText v-model="username" placeholder="Username" aria-label="username" :invalid="!username" />
                    <BMessage v-show="!username" severity="error" variant="simple" size="small">Username is required</BMessage>
                </div>
                <div class="flex flex-col gap-1">
                    <BInputText v-model="email" placeholder="Email" aria-label="email" :invalid="!email" />
                    <BMessage v-show="!email" severity="error" variant="simple" size="small">Email is not valid</BMessage>
                </div>
            </div>
        </div>

        <div class="section">
            <h4>Closable</h4>
            <div class="b-flex">
                <BMessage class="b-w-full" closable>Closable Message</BMessage>
            </div>
        </div>

        <div class="section">
            <h4>Life</h4>
            <div class="b-flex b-flex-col b-align-items-start b-gap-2">
                <BButton label="Show" @click="showMessage" :disabled="visible" class="mb-4" />
                <BMessage v-if="visible" severity="success" :life="3000">Auto Disappear Message</BMessage>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { BMessage, BInputText, BButton} from "@bestiary-ui/components";
import { PlusSolid, PaperAirplaneOutline, HandRaisedOutline, CheckOutline, XCircleOutline} from "@bestiary-ui/icons";
import {ref} from "vue";

const username = ref("");
const email = ref("");

let visible = ref(false);

const showMessage = () => {
    visible.value = true;

    setTimeout(() => {
        visible.value = false;
    }, 3500);
}
</script>
