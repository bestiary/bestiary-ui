<script setup>
import { HomeOutline, CogOutline } from "@bestiary-ui/icons";
</script>

# Breadcrumb <VersionBadge module="components" />
Breadcrumbs provide contextual navigation for users, indicating their current location within a hierarchical site structure. The `<BBreadcrumb>` component relies on a data model to automatically generate standard `<nav>` and `<ol>` HTML elements, handling Vue Router integration and `aria-*` accessibility states internally.

::: info Theming
This component is built on top of the Bestiary UI CSS framework. For CSS classes, anatomy, and CSS custom properties (tokens), refer to the [Breadcrumb Style API](../../style/components/navigation/breadcrumb).
:::

## Import

```vue
<script setup>
import { BBreadcrumb } from '@bestiary-ui/components';
</script>
```

## API Reference

### Props

| Name        | Type               | Default     | Description                                                                     |
|:------------|:-------------------|:------------|:--------------------------------------------------------------------------------|
| `model`     | `BreadcrumbItem[]` | `[]`        | An array of menuitems representing the breadcrumb trail.                        |
| `home`      | `BreadcrumbItem`   | `undefined` | Configuration for the root/home item, rendered before the standard model items. |
| `separator` | `string`           | `'/'`       | Custom text character used as the visual separator between items.               |

### BreadcrumbItem API
The data object used to configure individual items in the `model` and `home` props.

| Name       | Type                  | Default | Description                                                                  |
|:-----------|:----------------------|:--------|:-----------------------------------------------------------------------------|
| `label`    | `string`              | `null`  | Text of the item.                                                            |
| `icon`     | `string \| Component` | `null`  | Icon class (e.g., `'pi pi-home'`) or an injected Vue component.              |
| `url`      | `string`              | `null`  | External URL. Causes the item to render as an `<a>` tag.                     |
| `to`       | `string \| object`    | `null`  | Vue Router path. Causes the item to render as a `<router-link>`.             |
| `target`   | `string`              | `null`  | Target attribute for links (e.g., `'_blank'`).                               |
| `disabled` | `boolean`             | `false` | Disables the item visually (`aria-disabled="true"`) and prevents navigation. |
| `visible`  | `boolean`             | `true`  | If `false`, the component is omitted from rendering entirely.                |
| `class`    | `any`                 | `null`  | Custom CSS class applied directly to the `.b-breadcrumb__item` wrapper.      |

### Slots

| Name        | Description                                                                  |
|:------------|:-----------------------------------------------------------------------------|
| `item`      | Custom template for each item. Exposes `{ item, label, isLast }` slot props. |
| `separator` | Custom template for the separator. Overrides the `separator` string prop.    |

## Examples

### Basic Navigation
Pass an array of objects to the `model` prop. The component automatically applies `aria-current="page"` to the final active item.

<div class="card">
    <BBreadcrumb :model="[
        { label: 'Store', url: '#' },
        { label: 'Electronics', url: '#' },
        { label: 'Smartphones', url: '#' }
    ]" />
</div>

```vue
<script setup>
import { ref } from 'vue';

const items = ref([
    { label: 'Store', url: '#' },
    { label: 'Electronics', url: '#' },
    { label: 'Smartphones', url: '#' }
]);
</script>

<template>
    <BBreadcrumb :model="items" />
</template>
```

### Home Item & Icons
Use the `home` prop to define a root item, typically rendered with an icon. You can freely mix `label` and `icon` properties on any item.

<div class="card">
    <BBreadcrumb 
        :home="{ icon: HomeOutline, url: '#' }"
        :model="[
            { label: 'Settings', icon: CogOutline, url: '#' },
            { label: 'Security', url: '#' }
        ]" 
    />
</div>

```vue
<BBreadcrumb
    :home="{ icon: HomeOutline, url: '#' }"
    :model="[
        { label: 'Settings', icon: CogOutline, url: '#' },
        { label: 'Security', url: '#' }
    ]"
/>
```

### Disabled & Routing
The component intelligently switches between `<a>` and `<router-link>` depending on whether `url` or `to` is provided. If `disabled` is set to true, it renders a non-interactive `<span>` with `aria-disabled="true"`.

<div class="card">
    <BBreadcrumb :model="[
        { label: 'External Link', url: 'https://example.com', target: '_blank' },
        { label: 'Disabled Route', to: '/hidden', disabled: true },
        { label: 'Current Page' }
    ]" />
</div>

```vue
<script setup>
import { ref } from 'vue';

const items = ref([
    // Renders as <a>
    { label: 'External Link', url: 'https://example.com', target: '_blank' },
    
    // Renders as <span> with opacity reduced
    { label: 'Disabled Route', to: '/hidden', disabled: true },
    
    // Renders as <span> with aria-current="page"
    { label: 'Current Page' }
]);
</script>

<template>
    <BBreadcrumb :model="items" />
</template>
```

### Custom Separator
You can easily change the separator character using the `separator` prop, or replace it entirely with an icon using the `#separator` slot.

<div class="card flex flex-col gap-4">
    <BBreadcrumb separator=">" :model="[{ label: 'Users' }, { label: 'Admin' }]" />
    <BBreadcrumb :model="[{ label: 'Library' }, { label: 'Data' }]">
        <template #separator>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </template>
    </BBreadcrumb>
</div>

```vue
<template>
    <!-- Via Prop -->
    <BBreadcrumb separator=">" :model="items" />

    <!-- Via Slot -->
    <BBreadcrumb :model="items">
        <template #separator>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </template>
    </BBreadcrumb>
</template>
```

### Custom Item Template
For complete control over the rendering of individual breadcrumb links, use the `#item` slot. It provides access to the raw configuration object, its label, and a boolean indicating if it's the last item in the list.

```vue
<template>
    <BBreadcrumb :model="items">
        <template #item="{ item, label, isLast }">
            <span v-if="isLast" class="text-primary font-bold">
                {{ label }}
            </span>
            <a v-else :href="item.url" class="custom-link-style">
                {{ label }}
            </a>
        </template>
    </BBreadcrumb>
</template>
```