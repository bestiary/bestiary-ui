<script setup>
import { BButton } from "@bestiary-ui/components";
import { HomeSolid, UserOutline, CheckSolid, MagnifyingGlassSolid, ArrowPathSolid } from "@bestiary-ui/icons";

import { ref } from 'vue';

const loading = ref(false);

const load = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
    }, 2000);
};

</script>
<template>
    <div class="b-flex b-flex-col b-gap-8">
        <section>
            <h2 class="b-text-h3 b-mb-4">Basic</h2>
            <div class="b-flex b-gap-2 b-flex-wrap">
                <BButton label="Submit" />
            </div>
        </section>

        <section>
            <h2 class="b-text-h3 b-mb-4">Icons</h2>
            <div class="b-flex b-items-center b-gap-4">
                <BButton :icon="HomeSolid" />
                <BButton label="Profile" :icon="UserOutline" />
                <BButton label="Save" :icon="CheckSolid" iconPos="right" />
                <BButton label="Search" :icon="MagnifyingGlassSolid" iconPos="top" />
                <BButton label="Update" :icon="ArrowPathSolid" iconPos="bottom" />
            </div>
        </section>

        <section>
            <h2 class="b-text-h3 b-mb-4">Loading</h2>
            <div class="b-flex b-gap-4">
                <BButton label="Search" :icon="MagnifyingGlassSolid" :loading="loading" @click="load" />
            </div>
        </section>

        <section>
            <h2 class="b-text-h3 b-mb-4">Severity</h2>
            <div class="b-flex b-items-center b-gap-4">
                <BButton label="Primary" />
                <BButton label="Secondary" severity="secondary" />
                <BButton label="Success" severity="success" />
                <BButton label="Info" severity="info" />
                <BButton label="Warn" severity="warn" />
                <BButton label="Help" severity="help" />
                <BButton label="Danger" severity="danger" />
                <BButton label="Contrast" severity="contrast" />
            </div>
        </section>

        <section>
            <h2 class="b-text-h3 b-mb-4">Disabled</h2>
            <div class="b-flex b-gap-4">
                <BButton label="Submit" disabled />
            </div>
        </section>

        <section>
            <h2 class="b-text-h3 b-mb-4">Rounded</h2>
            <div class="b-flex b-items-center b-gap-4">
                <BButton label="Primary" rounded />
                <BButton label="Secondary" severity="secondary" rounded />
                <BButton label="Success" severity="success" rounded />
                <BButton label="Info" severity="info" rounded />
                <BButton label="Warn" severity="warn" rounded />
                <BButton label="Help" severity="help" rounded />
                <BButton label="Danger" severity="danger" rounded />
                <BButton label="Contrast" severity="contrast" rounded />
            </div>
        </section>
    </div>
</template>