<script setup>
import {ref} from 'vue';
import {ChevronLeftOutline, ChevronRightOutline} from "@bestiary-ui/icons";

const first = ref(0);
</script>

<template>
    <div class="view-content">
        <section>
            <h4 class="mb-3">Basic</h4>
            <div class="section flex justify-center">
                <BPaginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]"></BPaginator>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Template</h4>
            <div class="section flex flex-col items-center">
                <BPaginator v-model:first="first" :rows="1" :totalRecords="12" template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink" />

                <div class="p-4 text-center">
                    <img :src="`https://primefaces.org/cdn/primevue/images/nature/nature${first + 1}.jpg`" :alt="first" class="rounded w-full sm:w-[30rem]" />
                </div>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Current Page Report</h4>
            <div class="section flex flex-col items-center">
                <BPaginator :rows="10" :totalRecords="120" template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                           currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" />
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Responsive</h4>
            <div class="section flex flex-col items-center">
                <BPaginator
                    :template="{
                        '640px': 'PrevPageLink CurrentPageReport NextPageLink',
                        '960px': 'FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink',
                        '1300px': 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink',
                        default: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink JumpToPageDropdown JumpToPageInput'
                    }"
                    :rows="10"
                    :totalRecords="120">
                </BPaginator>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Responsive</h4>
            <div class="section">
                <BPaginator :rows="10" :totalRecords="120">
                    <template #container="{ first, last, page, pageCount, prevPageCallback, nextPageCallback, totalRecords }">
                        <div class="custom-paginator">
                            <BButton :icon="ChevronLeftOutline" rounded variant="text" @click="prevPageCallback" :disabled="page === 0" />
                            <div class="font-medium">
                                <span class="block">Page {{ page + 1 }} of {{ pageCount }}</span>
                            </div>
                            <BButton :icon="ChevronRightOutline" rounded variant="text" @click="nextPageCallback" :disabled="page === pageCount - 1" />
                        </div>
                    </template>
                </BPaginator>
            </div>
        </section>
    </div>
</template>

<style scoped>
.custom-paginator {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--b-space-4);
    border: 1px solid var(--b-primary-outline-border);
    background-color: transparent;
    border-radius: 9999px;
    padding: var(--b-space-1) var(--b-space-2);
}
</style>