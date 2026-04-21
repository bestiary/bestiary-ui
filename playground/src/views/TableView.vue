<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '../service/ProductService.js';
import { CustomerService } from '../service/CustomerService.js';
import {ArrowDownOnSquareOutline, ArrowPathOutline, ChevronLeftOutline, ChevronRightOutline} from "@bestiary-ui/icons";

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
    CustomerService.getCustomersMedium().then((data) => (customers.value = data));
});

const products = ref();
const customers = ref();

const columns = [
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'category', header: 'Category' },
    { field: 'quantity', header: 'Quantity' }
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

const size = ref({ label: 'Normal', value: 'null' });
const sizeOptions = ref([
    { label: 'Small', value: 'small' },
    { label: 'Normal', value: 'null' },
    { label: 'Large', value: 'large' }
]);

const rowClass = (data) => {
    return { 'is-fitness-row': data.category === 'Fitness' };
};
const rowStyle = (data) => {
    if (data.quantity === 0) {
        return { fontWeight: 'bold', fontStyle: 'italic' };
    }
};
const stockSeverity = (data) => {
    if (data.quantity === 0) return 'danger';
    else if (data.quantity > 0 && data.quantity < 10) return 'warn';
    else return 'success';
}
</script>

<template>
    <div class="view-content">
        <section>
            <h4 class="mb-3">Basic</h4>
            <div class="section">
                <BTable :value="products" tableStyle="min-width: 50rem">
                    <BColumn field="code" header="Code"></BColumn>
                    <BColumn field="name" header="Name"></BColumn>
                    <BColumn field="category" header="Category"></BColumn>
                    <BColumn field="quantity" header="Quantity"></BColumn>
                </BTable>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Dynamic Columns</h4>
            <div class="section">
                <BTable :value="products" tableStyle="min-width: 50rem">
                    <BColumn v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"></BColumn>
                </BTable>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Template</h4>
            <div class="section">
                <BTable :value="products" tableStyle="min-width: 50rem">
                    <template #header>
                        <div class="flex flex-wrap items-center justify-between gap-2">
                            <span class="text-xl font-bold">Products</span>
                            <BButton :icon="ArrowPathOutline" rounded raised />
                        </div>
                    </template>
                    <BColumn field="name" header="Name"></BColumn>
                    <BColumn header="Image">
                        <template #body="slotProps">
                            <img :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`" :alt="slotProps.data.image" class="order-image" />
                        </template>
                    </BColumn>
                    <BColumn field="price" header="Price">
                        <template #body="slotProps">
                            {{ formatCurrency(slotProps.data.price) }}
                        </template>
                    </BColumn>
                    <BColumn field="category" header="Category"></BColumn>
                    <BColumn field="rating" header="Reviews">
                        <template #body="slotProps">
                            <BRating :modelValue="slotProps.data.rating" readonly />
                        </template>
                    </BColumn>
                    <BColumn header="Status">
                        <template #body="slotProps">
                            <BTag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)" />
                        </template>
                    </BColumn>
                    <template #footer> In total there are {{ products ? products.length : 0 }} products. </template>
                </BTable>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Size</h4>
            <div class="section">
                <div class="flex justify-center mb-6">
                    <BSelectButton v-model="size" :options="sizeOptions" optionLabel="label" dataKey="label" />
                </div>
                <BTable :value="products" :size="size.value" tableStyle="min-width: 50rem">
                    <BColumn field="code" header="Code"></BColumn>
                    <BColumn field="name" header="Name"></BColumn>
                    <BColumn field="category" header="Category"></BColumn>
                    <BColumn field="quantity" header="Quantity"></BColumn>
                </BTable>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Grid Lines</h4>
            <div class="section">
                <BTable :value="products" showGridlines tableStyle="min-width: 50rem">
                    <BColumn field="code" header="Code"></BColumn>
                    <BColumn field="name" header="Name"></BColumn>
                    <BColumn field="category" header="Category"></BColumn>
                    <BColumn field="quantity" header="Quantity"></BColumn>
                </BTable>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Striped Rows</h4>
            <div class="section">
                <BTable :value="products" stripedRows tableStyle="min-width: 50rem">
                    <BColumn field="code" header="Code"></BColumn>
                    <BColumn field="name" header="Name"></BColumn>
                    <BColumn field="category" header="Category"></BColumn>
                    <BColumn field="quantity" header="Quantity"></BColumn>
                </BTable>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Conditional Style</h4>
            <div class="section">
                <BTable :value="products" :rowClass="rowClass" :rowStyle="rowStyle" tableStyle="min-width: 50rem">
                    <BColumn field="code" header="Code"></BColumn>
                    <BColumn field="name" header="Name"></BColumn>
                    <BColumn field="category" header="Category"></BColumn>
                    <BColumn field="quantity" header="Quantity">
                        <template #body="slotProps">
                            <BBadge :value="slotProps.data.quantity" :severity="stockSeverity(slotProps.data)" />
                        </template>
                    </BColumn>
                </BTable>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Loading</h4>
            <div class="section">
                <BTable :value="products" :loading="true" tableStyle="min-width: 50rem">
                    <BColumn field="code" header="Code" style="width: 25%"></BColumn>
                    <BColumn field="name" header="Name" style="width: 25%"></BColumn>
                    <BColumn field="category" header="Category" style="width: 25%"></BColumn>
                    <BColumn field="quantity" header="Quantity" style="width: 25%"></BColumn>
                </BTable>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Skeleton</h4>
            <div class="section">
                <BTable :value="products" tableStyle="min-width: 50rem">
                    <BColumn field="code" header="Code">
                        <template #body>
                            <BSkeleton />
                        </template>
                    </BColumn>
                    <BColumn field="name" header="Name">
                        <template #body>
                            <BSkeleton />
                        </template>
                    </BColumn>
                    <BColumn field="category" header="Category">
                        <template #body>
                            <BSkeleton />
                        </template>
                    </BColumn>
                    <BColumn field="quantity" header="Quantity">
                        <template #body>
                            <BSkeleton />
                        </template>
                    </BColumn>
                </BTable>
            </div>
        </section>

        <h3 class="mt-8">Pagination</h3>

        <section>
            <h4 class="mb-3">Basic</h4>
            <div class="section">
                <BTable :value="customers" paginator :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
                    <BColumn field="name" header="Name" style="width: 25%"></BColumn>
                    <BColumn field="country.name" header="Country" style="width: 25%"></BColumn>
                    <BColumn field="company" header="Company" style="width: 25%"></BColumn>
                    <BColumn field="representative.name" header="Representative" style="width: 25%"></BColumn>
                </BTable>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Template</h4>
            <div class="section">
                <BTable :value="customers" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem"
                           paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                           currentPageReportTemplate="{first} to {last} of {totalRecords}">
                    <template #paginatorstart>
                        <BButton type="button" :icon="ArrowPathOutline" variant="text" />
                    </template>
                    <template #paginatorend>
                        <BButton type="button" :icon="ArrowDownOnSquareOutline" variant="text" />
                    </template>
                    <BColumn field="name" header="Name" style="width: 25%"></BColumn>
                    <BColumn field="country.name" header="Country" style="width: 25%"></BColumn>
                    <BColumn field="company" header="Company" style="width: 25%"></BColumn>
                    <BColumn field="representative.name" header="Representative" style="width: 25%"></BColumn>
                </BTable>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Headless</h4>
            <div class="section">
                <BTable :value="customers" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
                    <BColumn field="name" header="Name" style="width: 25%"></BColumn>
                    <BColumn field="country.name" header="Country" style="width: 25%"></BColumn>
                    <BColumn field="company" header="Company" style="width: 25%"></BColumn>
                    <BColumn field="representative.name" header="Representative" style="width: 25%"></BColumn>
                    <template #paginatorcontainer="{ first, last, page, pageCount, prevPageCallback, nextPageCallback, totalRecords }">
                        <div class="custom-paginator">
                            <BButton :icon="ChevronLeftOutline" rounded variant="text" @click="prevPageCallback" :disabled="page === 0" />
                            <div class="text-color font-medium">
                                <span class="hidden sm:block">Showing {{ first }} to {{ last }} of {{ totalRecords }}</span>
                                <span class="block sm:hidden">Page {{ page + 1 }} of {{ pageCount }}</span>
                            </div>
                            <BButton :icon="ChevronRightOutline" rounded variant="text" @click="nextPageCallback" :disabled="page === pageCount - 1" />
                        </div>
                    </template>
                </BTable>
            </div>
        </section>

        <h3 class="mt-8">Sort</h3>

        <section>
            <h4 class="mb-3">Single Column</h4>
            <div class="section">
                <BTable :value="products" tableStyle="min-width: 50rem">
                    <BColumn field="code" header="Code" sortable style="width: 25%"></BColumn>
                    <BColumn field="name" header="Name" sortable style="width: 25%"></BColumn>
                    <BColumn field="category" header="Category" sortable style="width: 25%"></BColumn>
                    <BColumn field="quantity" header="Quantity" sortable style="width: 25%"></BColumn>
                </BTable>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Multiple Columns</h4>
            <div class="section">
                <BTable :value="products" sortMode="multiple" tableStyle="min-width: 50rem">
                    <BColumn field="code" header="Code" sortable style="width: 25%"></BColumn>
                    <BColumn field="name" header="Name" sortable style="width: 25%"></BColumn>
                    <BColumn field="category" header="Category" sortable style="width: 25%"></BColumn>
                    <BColumn field="quantity" header="Quantity" sortable style="width: 25%"></BColumn>
                </BTable>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Presort</h4>
            <div class="section">
                <BTable :value="products" sortField="price" :sortOrder="-1" tableStyle="min-width: 50rem">
                    <BColumn field="code" header="Code" sortable style="width: 20%"></BColumn>
                    <BColumn field="name" header="Name" sortable style="width: 20%"></BColumn>
                    <BColumn field="price" header="Price" :sortable="true">
                        <template #body="slotProps">
                            {{ formatCurrency(slotProps.data.price) }}
                        </template>
                    </BColumn>
                    <BColumn field="category" header="Category" sortable style="width: 20%"></BColumn>
                    <BColumn field="quantity" header="Quantity" sortable style="width: 20%"></BColumn>
                </BTable>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Removable</h4>
            <div class="section">
                <BTable :value="products" removableSort tableStyle="min-width: 50rem">
                    <BColumn field="code" header="Code" sortable style="width: 25%"></BColumn>
                    <BColumn field="name" header="Name" sortable style="width: 25%"></BColumn>
                    <BColumn field="category" header="Category" sortable style="width: 25%"></BColumn>
                    <BColumn field="quantity" header="Quantity" sortable style="width: 25%"></BColumn>
                </BTable>
            </div>
        </section>
    </div>
</template>

<style scoped>
.order-image {
    width: 6rem;
    border-radius: var(--b-radius-sm);
}

.custom-paginator{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    border: 1px solid var(--b-primary-outline-border);
    background: transparent;
    border-radius: var(--b-radius-full);
    width: 100%;
    padding: 0.25rem 0.5rem;
}
</style>

<style>
.is-fitness-row {
    background-color: var(--b-primary-solid-background);
    color: var(--b-primary-solid-text);
}
</style>