This is the documentation for the **Tag** Vue component, following the Bestiary UI architecture and PrimeVue-inspired structure.

---

<script setup>
import { CheckOutline, InfoOutline, XCircleOutline, ExclamationOutline } from '@bestiary-ui/icons'
</script>

# Tag <VersionBadge module="components" />

Tag component is used to categorize content or display status.

::: info Theming
Detailed information about CSS classes, customization tokens, and manual HTML implementation can be found in the [Style API Documentation](../../style/components/data-display/tag).
:::

## Import

```javascript
import { BTag } from "@bestiary-ui/components";
```

## Getting Started
A tag is defined with the `value` property.

<div class="card">
    <BTag value="New" />
    <BTag value="Featured" />
</div>

```vue
<BTag value="New" />
<BTag value="Featured" />
```

## Severity
Severities define the color scheme of the tag. Valid values are `primary` (default), `secondary`, `success`, `info`, `warn`, `danger` and `contrast`.

<div class="card b-flex-wrap">
    <BTag value="Primary" />
    <BTag value="Secondary" severity="secondary" />
    <BTag value="Success" severity="success" />
    <BTag value="Info" severity="info" />
    <BTag value="Warn" severity="warn" />
    <BTag value="Danger" severity="danger" />
    <BTag value="Contrast" severity="contrast" />
</div>

```vue
<BTag value="Primary" />
<BTag value="Secondary" severity="secondary" />
<BTag value="Success" severity="success" />
<BTag value="Info" severity="info" />
<BTag value="Warn" severity="warn" />
<BTag value="Danger" severity="danger" />
<BTag value="Contrast" severity="contrast" />
```

## Pill
The `rounded` property adds a pill-shaped design to the tag.

<div class="card">
    <BTag value="Pill" rounded />
    <BTag value="Completed" severity="success" rounded />
</div>

```vue
<BTag value="Completed" severity="success" rounded />
```

## Icons
An icon can be added to a tag using the `icon` property. The layout automatically adjusts the padding to balance the icon.

<div class="card b-flex-wrap">
    <BTag value="Success" severity="success" :icon="CheckOutline" />
    <BTag value="Info" severity="info" :icon="InfoOutline" />
    <BTag value="Warning" severity="warn" :icon="ExclamationOutline" />
    <BTag value="Danger" severity="danger" :icon="XCircleOutline" />
</div>

```vue
<script setup>
import { CheckOutline } from '@bestiary-ui/icons'
</script>

<template>
    <BTag value="Success" severity="success" :icon="CheckOutline" />
</template>
```

## API

### Tag Properties

| Name       | Type                  | Default     | Description                                                                    |
|:-----------|:----------------------|:------------|:-------------------------------------------------------------------------------|
| `value`    | `string \| number`    | `undefined` | Value to be displayed inside the tag.                                          |
| `severity` | `string`              | `primary`   | Severity level. Valid values are `primary`, `secondary`, `success`, `info`, `warn`, `danger`, `contrast`. |
| `rounded`  | `boolean`             | `false`     | Whether the tag has fully rounded corners (pill shape).                        |
| `icon`     | `string \| Component` | `undefined` | Icon to display next to the value.                                             |

### Tag Slots

| Name      | Description                                            |
|:----------|:-------------------------------------------------------|
| `default` | Custom content for the tag label. Overrides the value prop. |
| `icon`    | Custom icon content.                                   |