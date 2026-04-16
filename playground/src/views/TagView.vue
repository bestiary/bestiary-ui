<script setup lang="ts">
import {UserOutline, MagnifyingGlassOutline,  CheckOutline, InformationCircleSolid, ExclamationTriangleOutline, XMarkOutline, CogOutline} from "@bestiary-ui/icons";
</script>
<template>
<div class="view-content">
    <section>
        <h4 class="mb-3">Basic</h4>
        <div class="section flex justify-center">
            <BTag value="New"/>
        </div>
    </section>

    <section class="mt-8">
        <h4 class="mb-3">Severity</h4>
        <div class="section flex justify-center gap-2">
            <BTag value="Primary" />
            <BTag severity="secondary" value="Secondary" />
            <BTag severity="success" value="Success" />
            <BTag severity="info" value="Info" />
            <BTag severity="warn" value="Warn" />
            <BTag severity="danger" value="Danger" />
            <BTag severity="contrast" value="Contrast" />
        </div>
    </section>

    <section class="mt-8">
        <h4 class="mb-3">Pill</h4>
        <div class="section flex justify-center gap-2">
            <BTag value="Primary" rounded />
            <BTag severity="secondary" value="Secondary" rounded />
            <BTag severity="success" value="Success" rounded />
            <BTag severity="info" value="Info" rounded />
            <BTag severity="warn" value="Warn" rounded />
            <BTag severity="danger" value="Danger" rounded />
            <BTag severity="contrast" value="Contrast" rounded />
        </div>
    </section>

    <section class="mt-8">
        <h4 class="mb-3">Icon</h4>
        <div class="section flex justify-center gap-2">
            <BTag :icon="UserOutline" value="Primary" />
            <BTag :icon="MagnifyingGlassOutline" severity="secondary" value="Secondary" />
            <BTag :icon="CheckOutline" severity="success" value="Success" />
            <BTag :icon="InformationCircleSolid" severity="info" value="Info" />
            <BTag :icon="ExclamationTriangleOutline" severity="warn" value="Warn" />
            <BTag :icon="XMarkOutline" severity="danger" value="Danger" />
            <BTag :icon="CogOutline" severity="contrast" value="Contrast" />
        </div>
    </section>

    <section>
        <h4 class="mb-3">Template</h4>
        <div class="section flex justify-center">
            <BTag style="border: 2px solid var(--b-border-default); background: transparent; color: var(--b-text-primary)">
                <div class="flex items-center gap-2 px-1">
                    <img alt="Country" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" class="flag flag-it" style="width: 18px" />
                    <span>Italy</span>
                </div>
            </BTag>
        </div>
    </section>
</div>
</template>

<style scoped>
.flag {
    background: url(https://primefaces.org/cdn/primevue/images/flag/flags_responsive.png) no-repeat;
    background-position-x: 0%;
    background-position-y: 0%;
    background-size: auto;
    background-size: 100%;
    vertical-align: middle;
}

.flag-it {
    background-position: 0 42.975207%;
}
</style>