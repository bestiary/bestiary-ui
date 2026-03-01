<script setup>

import { BTable, BColumn, BButton, BRating } from "@bestiary-ui/components";
import { ref } from 'vue';

const products = ref([
    {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
    },
    {
        id: '1001',
        code: 'nvklal433',
        name: 'Black Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 70,
        category: 'Accessories',
        quantity: 61,
        inventoryStatus: 'INSTOCK',
        rating: 4
    },
]);

const columns = [
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'category', header: 'Category' },
    { field: 'quantity', header: 'Quantity' },
    { field: 'rating', header: 'Rating' },
];

const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
const getSeverity = (product) => {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warn';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};

</script>

<template>
    <div class="view-content">
        <div>
            <h2>Basic</h2>
            <div class="section b-flex">
                <BTable :value="products" tableStyle="min-width: 50rem">
                    <BColumn field="code" header="Code"></BColumn>
                    <BColumn field="name" header="Name"></BColumn>
                    <BColumn field="category" header="Category"></BColumn>
                    <BColumn field="quantity" header="Quantity"></BColumn>
                </BTable>
            </div>
        </div>
        <div class="b-mt-8">
            <h2>Dynamic Columns</h2>
            <div class="section b-flex">
                <BTable :value="products" tableStyle="min-width: 50rem">
                    <BColumn v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"></BColumn>
                </BTable>
            </div>
        </div>
<!--        <div class="b-mt-8">-->
<!--            <h2>Template</h2>-->
<!--            <div class="section b-flex">-->
<!--                <BTable :value="products" tableStyle="min-width: 50rem">-->
<!--                    <template #header>-->
<!--                        <div class="flex flex-wrap items-center justify-between gap-2">-->
<!--                            <span class="text-xl font-bold">Products</span>-->
<!--                            <BButton icon="pi pi-refresh" rounded raised />-->
<!--                        </div>-->
<!--                    </template>-->
<!--                    <BColumn field="name" header="Name"></BColumn>-->
<!--                    <BColumn header="Image">-->
<!--                        <template #body="slotProps">-->
<!--                            <img :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`" :alt="slotProps.data.image" class="w-24 rounded" />-->
<!--                        </template>-->
<!--                    </BColumn>-->
<!--                    <BColumn field="price" header="Price">-->
<!--                        <template #body="slotProps">-->
<!--                            {{ formatCurrency(slotProps.data.price) }}-->
<!--                        </template>-->
<!--                    </BColumn>-->
<!--                    <BColumn field="category" header="Category"></BColumn>-->
<!--                    <BColumn field="rating" header="Reviews">-->
<!--                        <template #body="slotProps">-->
<!--                            <BRating :modelValue="slotProps.data.rating" readonly />-->
<!--                        </template>-->
<!--                    </BColumn>-->
<!--                    <BColumn header="Status">-->
<!--                        <template #body="slotProps">-->
<!--                            <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)" />-->
<!--                        </template>-->
<!--                    </BColumn>-->
<!--                    <template #footer> In total there are {{ products ? products.length : 0 }} products. </template>-->
<!--                </BTable>-->
<!--            </div>-->
<!--        </div>-->
    </div>
</template>

<style scoped>

</style>