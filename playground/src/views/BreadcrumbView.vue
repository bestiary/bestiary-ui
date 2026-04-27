<script setup lang="ts">
import { ref } from "vue";
import {
    BookOpenOutline,
    CalculatorOutline, CubeOutline,
    HomeOutline,
    MapPinOutline,
    ShoppingBagOutline,
    WalletOutline
} from "@bestiary-ui/icons";
import ChevronRightOutline from "@bestiary-ui/icons/src/ChevronRightOutline.ts";

const home = ref({
    icon: HomeOutline
});
const items = ref([
    { label: 'Electronics' },
    { label: 'Computer' },
    { label: 'Accessories' },
    { label: 'Keyboard' },
    { label: 'Wireless' }
]);

const templateItems = ref([{ icon: MapPinOutline }, { icon: BookOpenOutline }, { icon: WalletOutline }, { icon: ShoppingBagOutline }, { icon: CalculatorOutline }]);

const routeHome = ref({
    icon: HomeOutline,
    route: '/introduction'
});
const routeItems = ref([
    {
        label: 'Components',
        to: '/buttons',
        icon: CubeOutline
    },
    {
        label: 'Button',
        to: '/divider',
        icon: CalculatorOutline
    },
    {
        label: 'Breadcrumb',
        to: '/breadcrumb',
        disabled: true,
        icon: BookOpenOutline
    }
]);
</script>

<template>
    <div class="content-view">
        <section>
            <h4 class="mb-3">Basic</h4>
            <div class="section flex justify-center">
                <BBreadcrumb :home="home" :model="items" />
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Basic</h4>
            <div class="section flex justify-center">
                <BBreadcrumb :home="home" :model="templateItems">
                    <template #item="{ item }">
                        <a class="b-breadcrumb__link cursor-pointer" :href="item.url || '#'">
                            <component :is="item.icon" v-if="item.icon" class="b-breadcrumb__icon" />
                            <span v-if="item.label">{{ item.label }}</span>
                        </a>
                    </template>

                    <template #separator>
                        <span>/</span>
                    </template>
                </BBreadcrumb>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Router</h4>
            <div class="section flex justify-center">
                <BBreadcrumb :home="routeHome" :model="routeItems">
                    <template #separator>
                        <ChevronRightOutline style="width: 14px; opacity: 0.5" />
                    </template>

                    <template #item="{ item }">
                        <router-link
                            v-if="item.to"
                            :to="item.to"
                            class="custom-breadcrumb-link"
                            :class="{ 'is-disabled': item.disabled }"
                        >
                            <component :is="item.icon" v-if="item.icon" class="w-4 h-4" />
                            <span class="font-medium">{{ item.label }}</span>
                        </router-link>
                        <span v-else class="text-muted flex items-center gap-1">
                             <component :is="item.icon" v-if="item.icon" class="w-4 h-4" />
                             {{ item.label }}
                        </span>
                    </template>
                </BBreadcrumb>
            </div>
        </section>
    </div>
</template>

<style scoped>
.custom-breadcrumb-link {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--b-primary-solid-background);
    text-decoration: none;
    padding: 4px 8px;
    border-radius: 4px;
    transition: background 0.2s;
}

.custom-breadcrumb-link:hover:not(.is-disabled) {
    background: var(--b-overlay-hover);
}

.custom-breadcrumb-link.is-disabled {
    color: var(--b-text-muted);
    pointer-events: none;
}

.router-link-active {
    font-weight: bold;
}
</style>