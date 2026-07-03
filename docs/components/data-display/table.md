# Table <VersionBadge module="components" />
The Table component provides a comprehensive grid for displaying tabular data, featuring built-in sorting, advanced filtering, pagination, and dynamic cell templating. It utilizes a headless `<BColumn>` component to declaratively configure columns without rendering unnecessary wrapper DOM nodes.

::: info Theming
This component is built on top of the Bestiary UI CSS framework. For CSS classes, anatomy, and CSS custom properties (tokens), refer to the [Table Style API](../../style/components/data-display/table).
:::

## Import

```vue
<script setup>
import { BTable, BColumn } from '@bestiary-ui/components';
</script>
```

## API Reference

### BTable Props

| Name                 | Type                      | Default    | Description                                                                        |
|:---------------------|:--------------------------|:-----------|:-----------------------------------------------------------------------------------|
| `value`              | `object[]`                | `[]`       | An array of objects to display.                                                    |
| `dataKey`            | `string`                  | `null`     | Unique identifier of a row. Optimizes rendering.                                   |
| `loading`            | `boolean`                 | `false`    | Displays the loading overlay and blocks interactions.                              |
| `stripedRows`        | `boolean`                 | `false`    | Displays alternating background colors for rows.                                   |
| `rowHover`           | `boolean`                 | `false`    | Highlights rows on hover.                                                          |
| `showGridlines`      | `boolean`                 | `false`    | Displays borders between all cells.                                                |
| `size`               | `TableSize`               | `'medium'` | Padding size of the table cells (`'small'`, `'medium'`, `'large'`).                |
| `tableStyle`         | `CSSProperties \| string` | `null`     | Inline style of the internal `<table>` element.                                    |
| `tableClass`         | `any`                     | `null`     | Style class of the internal `<table>` element.                                     |
| `rowClass`           | `function`                | `null`     | Function receiving row data, returning a style class for the `<tr>`.               |
| `rowStyle`           | `function`                | `null`     | Function receiving row data, returning inline styles for the `<tr>`.               |
| `sortMode`           | `SortMode`                | `'single'` | Defines sorting mode (`'single'`, `'multiple'`).                                   |
| `sortField`          | `string`                  | `null`     | Default sort field. **Supports `v-model:sortField`.**                              |
| `sortOrder`          | `number`                  | `null`     | Default sort order (`1` for ASC, `-1` for DESC). **Supports `v-model:sortOrder`.** |
| `multiSortMeta`      | `SortMeta[]`              | `[]`       | Multi-column sort array. **Supports `v-model:multiSortMeta`.**                     |
| `removableSort`      | `boolean`                 | `false`    | Whether a third click resets the sorting state to unsorted.                        |
| `filters`            | `DataTableFilterMeta`     | `{}`       | Object defining column and global filters. **Supports `v-model:filters`.**         |
| `filterDisplay`      | `FilterDisplay`           | `null`     | Layout of the filter UI (`'row'`, `'menu'`).                                       |
| `globalFilterFields` | `string[]`                | `[]`       | Array of fields to search against when using the `'global'` filter.                |
| `paginator`          | `boolean`                 | `false`    | Enables internal pagination.                                                       |
| `rows`               | `number`                  | `10`       | Number of rows per page. **Supports `v-model:rows`.**                              |
| `first`              | `number`                  | `0`        | Index of the first record. **Supports `v-model:first`.**                           |
| `paginatorPosition`  | `PaginatorPosition`       | `'bottom'` | Where to render the paginator (`'top'`, `'bottom'`, `'both'`).                     |

*(Inherits all other props from the `BPaginator` component when `paginator` is true).*

### BTable Events

| Name     | Parameters         | Description                                                                   |
|:---------|:-------------------|:------------------------------------------------------------------------------|
| `sort`   | `{ field, order }` | Emitted when a column is sorted.                                              |
| `filter` | `{ filters }`      | Emitted when data is filtered.                                                |
| `page`   | `PaginatorState`   | Emitted when pagination changes. Payload: `{ first, rows, page, pageCount }`. |

### BTable Slots

| Name      | Description                                                                   |
|:----------|:------------------------------------------------------------------------------|
| `default` | Reserved for `<BColumn>` components.                                          |
| `header`  | Content above the table wrapper.                                              |
| `footer`  | Content below the table wrapper.                                              |
| `empty`   | Content displayed when `value` array is empty or filters return zero results. |
| `loading` | Custom loading spinner content.                                               |

### BColumn Props
The `<BColumn>` component is headless. It passes its props and slots up to the parent `<BTable>` for rendering.

| Name              | Type      | Default     | Description                                                               |
|:------------------|:----------|:------------|:--------------------------------------------------------------------------|
| `field`           | `string`  | `undefined` | Property of row data to display. Supports dot notation (`user.name`).     |
| `header`          | `string`  | `undefined` | Text for the column header. Overridden by `#header` slot.                 |
| `sortable`        | `boolean` | `false`     | Enables sorting for this column.                                          |
| `filterField`     | `string`  | `undefined` | Specific field to use in filtering (defaults to `field`).                 |
| `hidden`          | `boolean` | `false`     | Hides the column completely.                                              |
| `style` / `class` | `any`     | `undefined` | Styles/classes applied to the `<th>` and all `<td/>` cells in the column. |

### BColumn Slots

| Name     | Slot Props                        | Description                                                                           |
|:---------|:----------------------------------|:--------------------------------------------------------------------------------------|
| `header` | `-`                               | Custom header content.                                                                |
| `body`   | `{ data, column, index }`         | Custom cell content. `data` is the current row object.                                |
| `filter` | `{ filterModel, filterCallback }` | UI for the filter input. Call `filterCallback()` after modifying `filterModel.value`. |

## Examples

### Basic Data & Templating
Use the `field` prop to automatically extract text data. For custom UI (like badges or buttons), use the `<BColumn>` `#body` slot.

<div class="card">
    <BTable :value="customers" dataKey="id">
        <BColumn field="id" header="ID" />
        <BColumn field="name" header="Name" />
        <BColumn field="company" header="Company" />
        <BColumn header="Status">
            <template #body="{ data }">
                <BTag :value="data.status" :severity="data.status === 'Active' ? 'success' : 'secondary'" rounded />
            </template>
        </BColumn>
    </BTable>
</div>

```vue
<script setup>
import { ref } from 'vue';

const customers = ref([
    { id: 1000, name: 'James Butt', company: 'Benton, John B Jr', status: 'Active' },
    { id: 1001, name: 'Josephine Darakjy', company: 'Chanay, Jeffrey A', status: 'Inactive' },
    { id: 1002, name: 'Art Venere', company: 'Chemel, James L Cpa', status: 'Active' }
]);
</script>

<template>
    <BTable :value="customers" dataKey="id">
        <BColumn field="id" header="ID" />
        <BColumn field="name" header="Name" />
        <BColumn field="company" header="Company" />
        
        <!-- Custom Cell Template -->
        <BColumn header="Status">
            <template #body="{ data }">
                <BTag 
                    :value="data.status" 
                    :severity="data.status === 'Active' ? 'success' : 'secondary'" 
                    rounded 
                />
            </template>
        </BColumn>
    </BTable>
</template>
```

### Grid Lines, Striping & Sizes
Apply structural modifiers via props.

```vue
<template>
    <BTable 
        :value="data" 
        stripedRows 
        rowHover 
        showGridlines 
        size="small"
    >
        <BColumn field="code" header="Code" />
        <BColumn field="name" header="Name" />
    </BTable>
</template>
```

### Pagination
Enable the `paginator` prop. The table automatically integrates `<BPaginator>` and handles slicing the `value` array internally.

```vue
<template>
    <BTable 
        :value="largeDataset" 
        paginator 
        :rows="5" 
        :rowsPerPageOptions="[5, 10, 20]"
    >
        <BColumn field="id" header="ID" />
        <BColumn field="name" header="Name" />
    </BTable>
</template>
```

### Sorting
Add the `sortable` prop to columns. For multi-column sorting (holding Meta/Ctrl), set `sortMode="multiple"`.

```vue
<template>
    <BTable :value="products" sortMode="multiple" removableSort>
        <BColumn field="code" header="Code" sortable />
        <BColumn field="name" header="Name" sortable />
        <BColumn field="price" header="Price" sortable />
    </BTable>
</template>
```

### Filtering (Menu Mode)
To enable filtering, define a `filters` object with match modes, set `filterDisplay="menu"`, and provide an input UI via the `#filter` slot. The table's internal `FilterService` evaluates the data automatically.

<div class="card">
    <BTable :value="customers" v-model:filters="filters" filterDisplay="menu" dataKey="id">
        <BColumn field="name" header="Name">
            <template #filter="{ filterModel, filterCallback }">
                <input 
                    type="text" 
                    v-model="filterModel.value" 
                    @input="filterCallback"
                    class="b-input" 
                    placeholder="Search by name" 
                />
            </template>
        </BColumn>
        <BColumn field="company" header="Company" />
    </BTable>
</div>

```vue
<script setup>
import { ref } from 'vue';

const customers = ref([/* data */]);

// Define the filter model structure
const filters = ref({
    name: { value: null, matchMode: 'contains' }
});
</script>

<template>
    <BTable 
        :value="customers" 
        v-model:filters="filters" 
        filterDisplay="menu" 
        dataKey="id"
    >
        <BColumn field="name" header="Name">
            <!-- Filter Dropdown UI -->
            <template #filter="{ filterModel, filterCallback }">
                <input 
                    type="text" 
                    v-model="filterModel.value" 
                    @input="filterCallback"
                    placeholder="Search by name" 
                    class="your-input-class"
                />
            </template>
        </BColumn>
        
        <BColumn field="company" header="Company" />
    </BTable>
</template>
```

### Loading State
Set `loading` to `true` to display the blurred overlay and block interactions while fetching data.

```vue
<template>
    <BTable :value="data" :loading="isFetching">
        <BColumn field="id" header="ID" />
        <BColumn field="name" header="Name" />
        
        <template #loading>
            <!-- Optional: Replace default spinner -->
            <span class="text-primary font-bold">Loading Data...</span>
        </template>
    </BTable>
</template>
```