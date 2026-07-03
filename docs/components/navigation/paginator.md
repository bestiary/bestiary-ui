<script setup>
import {ArrowLeftCircleOutline, BookOpenSolid} from '@bestiary-ui/icons';
</script>

# Paginator <VersionBadge module="components" />
The Paginator component provides navigation for large datasets. The Vue implementation features a robust template engine for rearranging internal elements, responsive layouts, two-way binding for state management, and a fully headless container slot for absolute control.

::: info Theming
This component is built on top of the Bestiary UI CSS framework. For CSS classes, anatomy, and CSS custom properties (tokens), refer to the [Paginator Style API](../../style/components/navigation/paginator).
:::

## Import

```vue
<script setup>
import { BPaginator } from '@bestiary-ui/components';
</script>
```

## API Reference

### Props

| Name                        | Type               | Default                             | Description                                                                                                                               |
|:----------------------------|:-------------------|:------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------|
| `totalRecords`              | `number`           | `0`                                 | Total number of records.                                                                                                                  |
| `first`                     | `number`           | `0`                                 | Index of the first record to display. **Supports `v-model:first`.**                                                                       |
| `rows`                      | `number`           | `10`                                | Number of rows to display per page. **Supports `v-model:rows`.**                                                                          |
| `pageLinkSize`              | `number`           | `5`                                 | Number of page links to display in the numbered sequence.                                                                                 |
| `rowsPerPageOptions`        | `number[]`         | `null`                              | Array of integer values for the `RowsPerPageDropdown` element.                                                                            |
| `template`                  | `string \| object` | *(See below)*                       | Defines the internal layout. Accepts a string or a responsive object mapping screen widths to strings.                                    |
| `currentPageReportTemplate` | `string`           | `'({currentPage} of {totalPages})'` | Text template for the `CurrentPageReport` element. Uses `{first}`, `{last}`, `{rows}`, `{currentPage}`, `{totalPages}`, `{totalRecords}`. |
| `showFirstLastIcon`         | `boolean`          | `true`                              | Whether to render the "First" and "Last" page buttons.                                                                                    |
| `showPrevNextIcon`          | `boolean`          | `true`                              | Whether to render the "Previous" and "Next" page buttons.                                                                                 |
| `alwaysShow`                | `boolean`          | `true`                              | Whether to show the paginator even if there is only 1 page.                                                                               |

**Default Template:**
`'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown'`

**Available Template Elements:**
`FirstPageLink`, `PrevPageLink`, `PageLinks`, `NextPageLink`, `LastPageLink`, `RowsPerPageDropdown`, `CurrentPageReport`, `JumpToPageInput`.

### Events

| Name   | Parameters              | Description                                                                                                          |
|:-------|:------------------------|:---------------------------------------------------------------------------------------------------------------------|
| `page` | `state: PaginatorState` | Emitted when the page changes or rows per page are altered. The payload contains `{ first, rows, page, pageCount }`. |

### Slots

| Name        | Description                                                                                                                                                                                                                                                                  |
|:------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `start`     | Content placed before the main paginator elements.                                                                                                                                                                                                                           |
| `end`       | Content placed after the main paginator elements.                                                                                                                                                                                                                            |
| `container` | Headless slot that completely replaces the internal layout. Exposes variables: `first`, `last`, `rows`, `page`, `pageCount`, `totalRecords`, and navigation callbacks: `firstPageCallback`, `lastPageCallback`, `prevPageCallback`, `nextPageCallback`, `rowChangeCallback`. |

## Examples

### Basic
Use `v-model:first` to bind the starting record index, and define `totalRecords`. The component automatically calculates the active page based on the `rows` prop (default 10).

<div class="card">
    <BPaginator :totalRecords="120" />
</div>

```vue
<script setup>
import { ref } from 'vue';

const first = ref(0);
</script>

<template>
    <BPaginator v-model:first="first" :totalRecords="120" :rows="10" />
</template>
```

### Advanced Template & Rows Dropdown
Reorder components by passing a custom string to the `template` prop. Provide `rowsPerPageOptions` to activate the `RowsPerPageDropdown` element.

<div class="card">
    <BPaginator 
        :totalRecords="120" 
        :rowsPerPageOptions="[10, 20, 50]" 
        template="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown JumpToPageInput"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
    />
</div>

```vue
<script setup>
import { ref } from 'vue';

const first = ref(0);
const rows = ref(10);
</script>

<template>
    <BPaginator 
        v-model:first="first"
        v-model:rows="rows"
        :totalRecords="120" 
        :rowsPerPageOptions="[10, 20, 50]" 
        template="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown JumpToPageInput"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
    />
</template>
```

### Start & End Slots
Use the `#start` and `#end` slots to inject custom controls or information at the edges of the `.b-paginator__content` wrapper.

<div class="card">
    <BPaginator :totalRecords="120">
        <template #start>
            <BButton :icon="ArrowLeftCircleOutline" variant="text" ariaLabel="Refresh" />
        </template>
        <template #end>
            <BButton :icon="BookOpenSolid" variant="text" ariaLabel="Search" />
        </template>
    </BPaginator>
</div>

```vue
<template>
    <BPaginator :totalRecords="120">
        <template #start>
            <BButton :icon="ArrowLeftCircleOutline" variant="text" ariaLabel="Refresh" />
        </template>
        <template #end>
            <BButton :icon="BookOpenSolid" variant="text" ariaLabel="Search" />
        </template>
    </BPaginator>
</template>
```

### Responsive Templates
Pass an object to `template` where keys are screen widths (in pixels) and values are template strings. The component listens to window resizes and applies the highest matched breakpoint layout, falling back to `default`.

```vue
<template>
    <BPaginator 
        :totalRecords="120"
        :template="{
            '640': 'PrevPageLink CurrentPageReport NextPageLink',
            '960': 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink',
            'default': 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown JumpToPageInput'
        }"
    />
</template>
```

### Headless Container
For total control over rendering, use the `#container` slot. This completely overrides the internal DOM while exposing all calculated variables and navigation callbacks.

```vue
<template>
    <BPaginator :totalRecords="120" :rows="10">
        <template #container="{ page, pageCount, prevPageCallback, nextPageCallback }">
            <div class="flex items-center justify-between p-4 bg-surface-base rounded-md">
                <span class="text-sm font-medium">Page {{ page + 1 }} of {{ pageCount }}</span>
                <div class="flex gap-2">
                    <BButton 
                        label="Previous" 
                        variant="outline" 
                        :disabled="page === 0" 
                        @click="prevPageCallback" 
                    />
                    <BButton 
                        label="Next" 
                        variant="outline" 
                        :disabled="page === pageCount - 1" 
                        @click="nextPageCallback" 
                    />
                </div>
            </div>
        </template>
    </BPaginator>
</template>
```