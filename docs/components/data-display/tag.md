<script setup>
import { CheckOutline, InformationCircleOutline, ExclamationTriangleOutline, XCircleOutline } from "@bestiary-ui/icons";
</script>

# Tag <VersionBadge module="components" />
Tags are compact elements used to categorize, label, or organize items. The Vue implementation provides `<BTag>` with built-in support for icons, dynamic rounding, and automatic structural spacing.

::: info Theming
This component is built on top of the Bestiary UI CSS framework. For CSS classes, anatomy, and CSS custom properties (tokens), refer to the [Tag Style API](../../style/components/data-display/tag.md).
:::

## Import

```vue
<script setup>
import { BTag } from '@bestiary-ui/components';
</script>
```

## API Reference

### Props

| Name        | Type                  | Default     | Description                                                                                                                    |
|:------------|:----------------------|:------------|:-------------------------------------------------------------------------------------------------------------------------------| 
| `value`     | `string \| number`    | `null`      | Value to be displayed inside the tag.                                                                                          |
| `severity`  | `TagSeverity`         | `'primary'` | Defines the color scheme. Valid values: `'primary'`, `'secondary'`, `'info'`, `'success'`, `'warn'`, `'danger'`, `'contrast'`. |
| `rounded`   | `boolean`             | `false`     | Whether the tag has fully rounded corners (pill shape).                                                                        |
| `icon`      | `string \| Component` | `null`      | Icon class (e.g., `'pi pi-check'`) or an injected Vue component to display.                                                    |
| `ariaLabel` | `string`              | `null`      | Accessible description for screen readers. Useful when the tag contains only an icon or ambiguous text.                        |

### Slots

| Name      | Description                                                               |
|:----------|:--------------------------------------------------------------------------|
| `default` | Custom content to be displayed. Overrides or appends to the `value` prop. |
| `icon`    | Custom icon implementation. Overrides the `icon` prop.                    |

## Examples

### Basic
Use the `value` prop to set the tag content, and `severity` to apply semantic colors.

<div class="card">
    <BTag value="Primary" severity="primary" />
    <BTag value="Secondary" severity="secondary" />
    <BTag value="Info" severity="info" />
    <BTag value="Success" severity="success" />
    <BTag value="Warning" severity="warn" />
    <BTag value="Danger" severity="danger" />
    <BTag value="Contrast" severity="contrast" />
</div>

```vue
<template>
    <BTag value="Primary" severity="primary" />
    <BTag value="Secondary" severity="secondary" />
    <BTag value="Info" severity="info" />
    <BTag value="Success" severity="success" />
    <BTag value="Warning" severity="warn" />
    <BTag value="Danger" severity="danger" />
    <BTag value="Contrast" severity="contrast" />
</template>
```

### With Icons
Icons can be passed as string classes (for font icons), as injected Vue components, or via the `#icon` slot. The component automatically adjusts padding when an icon is present.

<div class="card flex flex-wrap gap-2">
    <BTag value="Component Prop" :icon="CheckOutline" severity="success" />
    <BTag value="Slot Icon" severity="warn">
        <template #icon>
            <svg viewBox="0 0 24 24" fill="none" width="24" height="24" stroke="currentColor" stroke-width="2" class="w-4 h-4">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
        </template>
    </BTag>
</div>

```vue
<template>
    <!-- String class (e.g., PrimeIcons) -->
    <BTag value="String Icon" icon="pi pi-user" severity="primary" />
    
    <!-- Injected Component -->
    <BTag value="Component Prop" :icon="CheckOutline" severity="success" />

    <!-- Slot override -->
    <BTag value="Slot Icon" severity="warn">
        <template #icon>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <!-- SVG Paths -->
            </svg>
        </template>
    </BTag>
</template>
```

### Rounded
Use the `rounded` prop to apply a pill shape geometry to the tag.

<div class="card">
    <BTag value="Design System" severity="primary" rounded />
    <BTag value="Architecture" severity="warn" rounded />
</div>

```vue
<template>
    <BTag value="Design System" severity="primary" rounded />
    <BTag value="Architecture" severity="warn" rounded />
</template>
```