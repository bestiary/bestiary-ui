<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '../service/ProductService.js';
import { CustomerService } from '../service/CustomerService.js';
import {
    ArrowDownOnSquareOutline,
    ArrowPathOutline, CheckOutline,
    ChevronLeftOutline,
    ChevronRightOutline, ClockOutline, FunnelOutline,
    SlashOutline
} from "@bestiary-ui/icons";
import MagnifyingGlassOutline from "@bestiary-ui/icons/src/MagnifyingGlassOutline.ts";

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

const filters = ref({
    global: { value: null, matchMode: 'contains' },
    name: { value: null, matchMode: 'startsWith' },
    'country.name': { value: null, matchMode: 'contains' },
    'representative.name': { value: null, matchMode: 'contains' },
    status: { value: null, matchMode: 'equals' },
    verified: { value: null, matchMode: 'equals' }
});

const statuses = ['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'];

const getSeverityFilter = (status) => {
    switch (status) {
        case 'unqualified': return 'danger';
        case 'qualified':   return 'success';
        case 'new':         return 'info';
        case 'negotiation': return 'warn';
        case 'renewal':     return 'secondary';
        case 'proposal':    return 'contrast';
        default:            return 'secondary';
    }
};

const clearFilters = () => {
    filters.value.global.value = null;
    Object.keys(filters.value).forEach(key => {
        if (key !== 'global') (filters.value)[key].value = null;
    });
};


const loading = ref(true);

const initFilters = () => {
    return {
        global: { value: null, matchMode: 'contains' },
        name: {
            operator: 'and',
            constraints: [{ value: null, matchMode: 'startsWith' }]
        },
        'country.name': {
            operator: 'and',
            constraints: [{ value: null, matchMode: 'contains' }]
        },
        status: {
            operator: 'or',
            constraints: [{ value: null, matchMode: 'equals' }]
        },
        verified: { value: null, matchMode: 'equals' }
    };
};

const a_filters = ref(initFilters());
const a_statuses = ['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'];
const a_getSeverity = (status) => {
    switch (status) {
        case 'unqualified': return 'danger';
        case 'qualified':   return 'success';
        case 'new':         return 'info';
        case 'negotiation': return 'warn';
        case 'proposal':    return 'contrast';
        default:            return 'secondary';
    }
};
const clearAll = () => {
    filters.value = initFilters();
};

onMounted(async () => {
    try {
        customers.value = await CustomerService.getCustomersMedium();
    } finally {
        loading.value = false;
    }
});
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

        <h3 class="mt-8">Filter</h3>

        <section>
            <h4 class="mb-3">Basic</h4>
            <div class="section">
                <BTable
                    v-model:filters="filters"
                    :value="customers"
                    :loading="loading"
                    paginator
                    :rows="10"
                    :rowsPerPageOptions="[5, 10, 20, 50]"
                    filterDisplay="row"
                    sortMode="multiple"
                    removableSort
                    dataKey="id"
                    :globalFilterFields="['name', 'country.name', 'representative.name', 'status']"
                >
                    <!-- Global Header -->
                    <template #header>
                        <div class="flex justify-between items-center mb-4 gap-4">
                            <BButton label="Clear Filters" severity="secondary" variant="outline" @click="clearFilters" />
                            <div class="flex items-center gap-3">
                                <span class="text-sm text-muted">Global Search:</span>
                                <BInputText v-model="filters.global.value" placeholder="Keyword Search" />
                            </div>
                        </div>
                    </template>

                    <!-- Name Column -->
                    <BColumn field="name" header="Customer" sortable style="min-width: 14rem">
                        <template #filter="{ filterModel, filterCallback }">
                            <BInputText
                                v-model="filterModel.value"
                                placeholder="Filter by name"
                                @input="filterCallback"
                            />
                        </template>
                    </BColumn>

                    <!-- Country Column (Nested) -->
                    <BColumn field="country.name" header="Country" sortable style="min-width: 12rem">
                        <template #body="{ data }">
                            <div class="flex items-center gap-2">
                                <img
                                    src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                                    :class="`flag flag-${data.country.code}`"
                                    style="width: 20px"
                                />
                                <span>{{ data.country.name }}</span>
                            </div>
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <BInputText
                                v-model="filterModel.value"
                                placeholder="Filter by country"
                                @input="filterCallback"
                            />
                        </template>
                    </BColumn>

                    <!-- Representative Column (Nested + Custom Body) -->
                    <BColumn field="representative.name" header="Agent" sortable style="min-width: 14rem">
                        <template #body="{ data }">
                            <div class="flex items-center gap-2">
                                <BAvatar
                                    :image="`https://primefaces.org/cdn/primevue/images/avatar/${data.representative.image}`"
                                    shape="circle"
                                    size="small"
                                />
                                <span>{{ data.representative.name }}</span>
                            </div>
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <BInputText
                                v-model="filterModel.value"
                                placeholder="Filter by agent"
                                @input="filterCallback"
                            />
                        </template>
                    </BColumn>

                    <!-- Status Column -->
                    <BColumn field="status" header="Status" sortable style="min-width: 10rem">
                        <template #body="{ data }">
                            <BTag :value="data.status" :severity="getSeverity(data.status)" rounded />
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <select
                                v-model="filterModel.value"
                                class="playground-select"
                                @change="filterCallback"
                            >
                                <option :value="null">Any Status</option>
                                <option v-for="s in statuses" :key="s" :value="s">{{ s }}</option>
                            </select>
                        </template>
                    </BColumn>

                    <!-- Verified Column -->
                    <BColumn field="verified" header="Verified" sortable style="min-width: 8rem" class="text-center">
                        <template #body="{ data }">
                            <span v-if="data.verified" class="text-success text-xl">●</span>
                            <span v-else class="text-error text-xl">●</span>
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <div class="flex justify-center">
                                <BCheckbox v-model="filterModel.value" @change="filterCallback" />
                            </div>
                        </template>
                    </BColumn>

                    <!-- Empty State -->
                    <template #empty>
                        <div class="flex flex-col items-center p-12 text-muted">
                            <span class="text-h3 mb-2">∅</span>
                            <p>No customers found matching the criteria.</p>
                        </div>
                    </template>

                    <!-- Loading State -->
                    <template #loading>
                        <div class="flex flex-col items-center gap-4">
                            <div class="loading-spinner"></div>
                            <span>Processing customer records...</span>
                        </div>
                    </template>
                </BTable>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Advanced</h4>
            <div class="section">
                <BTable
                    v-model:filters="a_filters"
                    :value="customers"
                    :loading="loading"
                    paginator
                    :rows="10"
                    filterDisplay="menu"
                    dataKey="id"
                    :globalFilterFields="['name', 'country.name', 'status']"
                >
                    <!-- Global Header -->
                    <template #header>
                        <div class="flex justify-between items-center mb-4">
                            <BButton
                                label="Reset All"
                                :icon="FunnelOutline"
                                severity="secondary"
                                variant="text"
                                size="small"
                                @click="clearAll"
                            />
                            <div class="flex items-center gap-2">
                                <div class="search-box">
                                    <BInputText v-model="filters.global.value" placeholder="Global Search..." size="small" />
                                    <MagnifyingGlassOutline class="search-icon" />
                                </div>
                            </div>
                        </div>
                    </template>

                    <!-- Name Column with constraints[0] -->
                    <BColumn field="name" header="Customer Name" sortable style="min-width: 14rem">
                        <template #body="{ data }">
                            <span class="font-bold">{{ data.name }}</span>
                        </template>
                        <template #filter="{ filterModel }">
                            <div class="filter-popover-content">
                                <label class="filter-label">Starts with:</label>
                                <BInputText
                                    v-model="filterModel.constraints[0].value"
                                    placeholder="Enter name"
                                    size="small"
                                />
                            </div>
                        </template>
                    </BColumn>

                    <!-- Country Column (Nested Data) -->
                    <BColumn header="Country" filterField="country.name" sortable style="min-width: 12rem">
                        <template #body="{ data }">
                            <div class="flex items-center gap-2">
                                <span class="text-lg">📍</span>
                                <span>{{ data.country.name }}</span>
                            </div>
                        </template>
                        <template #filter="{ filterModel }">
                            <div class="filter-popover-content">
                                <label class="filter-label">Country contains:</label>
                                <BInputText
                                    v-model="filterModel.constraints[0].value"
                                    placeholder="e.g. Algeria"
                                    size="small"
                                />
                            </div>
                        </template>
                        <!-- Customizing Apply/Clear Buttons -->
                        <template #filterclear="{ filterCallback }">
                            <BButton :icon="XMarkOutline" severity="secondary" size="small" variant="text" @click="filterCallback()" />
                        </template>
                        <template #filterapply="{ filterCallback }">
                            <BButton label="Apply" :icon="CheckOutline" severity="primary" size="small" @click="filterCallback()" />
                        </template>
                    </BColumn>

                    <!-- Status Column (Select Inside Popover) -->
                    <BColumn field="status" header="Status" style="min-width: 10rem">
                        <template #body="{ data }">
                            <BTag :value="data.status" :severity="a_getSeverity(data.status)" />
                        </template>
                        <template #filter="{ filterModel }">
                            <div class="filter-popover-content">
                                <label class="filter-label">Select status:</label>
                                <select v-model="filterModel.constraints[0].value" class="popover-select">
                                    <option :value="null">Any Status</option>
                                    <option v-for="s in a_statuses" :key="s" :value="s">{{ s }}</option>
                                </select>
                            </div>
                        </template>
                    </BColumn>

                    <!-- Verified Column (Direct Value) -->
                    <BColumn field="verified" header="Verified" class="text-center" style="min-width: 8rem">
                        <template #body="{ data }">
                            <BTag v-if="data.verified" severity="success" value="Verified" rounded />
                            <BTag v-else severity="danger" value="Unverified" rounded />
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <div class="flex items-center gap-2 py-2">
                                <BCheckbox v-model="filterModel.value" @change="filterCallback" />
                                <span class="text-sm">Is Verified</span>
                            </div>
                        </template>
                    </BColumn>

                    <template #empty>
                        <div class="p-10 text-center text-muted">No records matched your filters.</div>
                    </template>
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

.filter-popover-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    min-width: 180px;
}

.filter-label {
    font-size: 0.7rem;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--b-text-muted);
}

.popover-select {
    width: 100%;
    padding: 0.5rem;
    border-radius: var(--b-radius-sm);
    border: 1px solid var(--b-border-default);
    background: var(--b-surface-section);
    color: var(--b-text-primary);
    outline: none;
}

.search-box {
    position: relative;
}

.search-icon {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    color: var(--b-text-muted);
    pointer-events: none;
}
</style>