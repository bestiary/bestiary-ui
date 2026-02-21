<script setup>
import { BButton } from "@bestiary-ui/components";
import { HomeSolid, UserOutline, CheckSolid, MagnifyingGlassSolid, ArrowPathSolid, CheckOutline, BookmarkOutline, MagnifyingGlassOutline, BellOutline, HeartOutline, XMarkOutline, StarOutline } from "@bestiary-ui/icons";

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
            <h2 class="b-text-h3 b-mb-4">Disabled</h2>
            <div class="b-flex b-gap-4">
                <BButton label="Search" disabled />
            </div>
        </section>

        <section>
            <h2 class="b-text-h3 b-mb-4">Link</h2>
            <div class="b-flex b-gap-4">
                <BButton label="Link" variant="link" />
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
            <h2 class="b-text-h3 b-mb-4">Raised</h2>
            <div class="b-flex b-gap-4">
                <BButton label="Primary" raised />
                <BButton label="Secondary" severity="secondary" raised />
                <BButton label="Success" severity="success" raised />
                <BButton label="Info" severity="info" raised />
                <BButton label="Warn" severity="warn" raised />
                <BButton label="Danger" severity="danger" raised />
                <BButton label="Contrast" severity="contrast" raised />
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
                <BButton label="Danger" severity="danger" rounded />
                <BButton label="Contrast" severity="contrast" rounded />
            </div>
        </section>

        <section>
            <h2 class="b-text-h3 b-mb-4">Text</h2>
            <div class="b-flex b-items-center b-gap-4">
                <BButton label="Primary" variant="text" />
                <BButton label="Secondary" severity="secondary" variant="text" />
                <BButton label="Success" severity="success" variant="text" />
                <BButton label="Info" severity="info" variant="text" />
                <BButton label="Warn" severity="warn" variant="text" />
                <BButton label="Danger" severity="danger" variant="text" />
                <BButton label="Contrast" severity="contrast" variant="text" />
            </div>
        </section>

        <section>
            <h2 class="b-text-h3 b-mb-4">Raised Text</h2>
            <div class="b-flex b-items-center b-gap-4">
                <BButton label="Primary" variant="text" raised />
                <BButton label="Secondary" severity="secondary" variant="text" raised />
                <BButton label="Success" severity="success" variant="text" raised />
                <BButton label="Info" severity="info" variant="text" raised />
                <BButton label="Warn" severity="warn" variant="text" raised />
                <BButton label="Danger" severity="danger" variant="text" raised />
                <BButton label="Contrast" severity="contrast" variant="text" raised />
            </div>
        </section>

        <section>
            <h2 class="b-text-h3 b-mb-4">Outlined</h2>
            <div class="b-flex b-items-center b-gap-4">
                <BButton label="Primary" variant="outline" />
                <BButton label="Secondary" severity="secondary" variant="outline" />
                <BButton label="Success" severity="success" variant="outline" />
                <BButton label="Info" severity="info" variant="outline" />
                <BButton label="Warn" severity="warn" variant="outline" />
                <BButton label="Danger" severity="danger" variant="outline" />
                <BButton label="Contrast" severity="contrast" variant="outline" />
            </div>
        </section>

        <section>
            <h2 class="b-text-h3 b-mb-4">Icon only</h2>
            <div class="b-flex b-items-center b-gap-4">
                <BButton :icon="CheckOutline" />
                <BButton :icon="BookmarkOutline" severity="secondary" />
                <BButton :icon="MagnifyingGlassOutline" severity="success" />
                <BButton :icon="UserOutline" severity="info" />
                <BButton :icon="BellOutline" severity="warn" />
                <BButton :icon="XMarkOutline" severity="danger" />
                <BButton :icon="StarOutline" severity="contrast" />
            </div>
            <div class="b-flex b-items-center b-gap-4 b-mt-2">
                <BButton :icon="CheckOutline" rounded />
                <BButton :icon="BookmarkOutline" severity="secondary" rounded />
                <BButton :icon="MagnifyingGlassOutline" severity="success" rounded />
                <BButton :icon="UserOutline" severity="info" rounded />
                <BButton :icon="BellOutline" severity="warn" rounded />
                <BButton :icon="XMarkOutline" severity="danger" rounded />
                <BButton :icon="StarOutline" severity="contrast" rounded />
            </div>
            <div class="b-flex b-items-center b-gap-4 b-mt-2">
                <BButton :icon="CheckOutline" rounded variant="outline" />
                <BButton :icon="BookmarkOutline" severity="secondary" rounded variant="outline" />
                <BButton :icon="MagnifyingGlassOutline" severity="success" rounded variant="outline" />
                <BButton :icon="UserOutline" severity="info" rounded variant="outline" />
                <BButton :icon="BellOutline" severity="warn" rounded variant="outline" />
                <BButton :icon="XMarkOutline" severity="danger" rounded variant="outline" />
                <BButton :icon="StarOutline" severity="contrast" rounded variant="outline" />
            </div>
            <div class="b-flex b-items-center b-gap-4 b-mt-2">
                <BButton :icon="CheckOutline" rounded raised variant="text" />
                <BButton :icon="BookmarkOutline" severity="secondary" rounded raised variant="text" />
                <BButton :icon="MagnifyingGlassOutline" severity="success" rounded raised variant="text" />
                <BButton :icon="UserOutline" severity="info" rounded raised variant="text" />
                <BButton :icon="BellOutline" severity="warn" rounded raised variant="text" />
                <BButton :icon="XMarkOutline" severity="danger" rounded raised variant="text" />
                <BButton :icon="StarOutline" severity="contrast" rounded raised variant="text" />
            </div>
            <div class="b-flex b-items-center b-gap-4 b-mt-2">
                <BButton :icon="CheckOutline" rounded variant="text" />
                <BButton :icon="BookmarkOutline" severity="secondary" rounded variant="text" />
                <BButton :icon="MagnifyingGlassOutline" severity="success" rounded variant="text" />
                <BButton :icon="UserOutline" severity="info" rounded variant="text" />
                <BButton :icon="BellOutline" severity="warn" rounded variant="text" />
                <BButton :icon="XMarkOutline" severity="danger" rounded variant="text" />
                <BButton :icon="StarOutline" severity="contrast" rounded variant="text" />
            </div>
        </section>

        <section>
            <h2 class="b-text-h3 b-mb-4">Sizes</h2>
            <div class="b-flex b-items-center b-gap-4">
                <BButton label="Small" :icon="CheckOutline" size="small" />
                <BButton label="Normal" :icon="CheckOutline" size="medium" />
                <BButton label="Large" :icon="CheckOutline" size="large" />
                <BButton label="XLarge" :icon="CheckOutline" size="xlarge" />
            </div>
        </section>
    </div>
</template>