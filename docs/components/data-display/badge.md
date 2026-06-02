<script setup> import { BellOutline } from "@bestiary-ui/icons"; </script> 

# Badge <VersionBadge module="components" />
Badges are small status descriptors used to highlight item information. The Vue implementation provides `<BBadge>` for standalone use and `<BOverlayBadge>` for anchoring a badge to another element.

::: info Theming
This component is built on top of the Bestiary UI CSS framework. For CSS classes, anatomy, and CSS custom properties (tokens), refer to the [Badge Style API](../../style/components/data-display/badge.md).
:::

## Import

```vue
<script setup>
import { BBadge, BOverlayBadge } from '@bestiary-ui/components';
</script>
```

## API Reference

### Props
The following props apply to both `<BBadge>` and `<BOverlayBadge>`.

| Name        | Type               | Default     | Description                                                                                                                    |
|:------------|:-------------------|:------------|:-------------------------------------------------------------------------------------------------------------------------------|
| `value`     | `string \| number` | `null`      | Value to be displayed inside the badge. If not provided and the default slot is empty, the badge renders as a dot.             |
| `severity`  | `BadgeSeverity`    | `'primary'` | Defines the color scheme. Valid values: `'primary'`, `'secondary'`, `'info'`, `'success'`, `'warn'`, `'danger'`, `'contrast'`. |
| `size`      | `BadgeSize`        | `'medium'`  | Size of the badge. Valid values: `'small'`, `'medium'`, `'large'`, `'xlarge'`.                                                 |
| `rounded`   | `boolean`          | `false`     | Whether the badge has fully rounded corners (pill/circle shape).                                                               |
| `ariaLabel` | `string`           | `null`      | Screen reader text. Crucial when the badge value is just a number or a dot.                                                    |

### Slots

**`BBadge`**

| Name      | Description                                                           |
|:----------|:----------------------------------------------------------------------|
| `default` | Content to be displayed inside the badge. Overrides the `value` prop. |

**`BOverlayBadge`**

| Name      | Description                                                                                 |
|:----------|:--------------------------------------------------------------------------------------------|
| `default` | The content that the badge will overlay (e.g., an Icon or Button).                          |
| `value`   | Custom content to be displayed inside the badge itself (passed to `<BBadge>` default slot). |

## Examples

### Basic
Use the `value` prop to set the badge content. Alternatively, use the `default` slot for custom elements.

<div class="card">
    <BBadge value="1" severity="primary" />
    <BBadge value="2" severity="secondary" />
    <BBadge value="3" severity="info" />
    <BBadge value="4" severity="success" />
    <BBadge value="5" severity="warn" />
    <BBadge value="6" severity="danger" />
    <BBadge value="7" severity="contrast" />
</div>

```vue
<template>
    <BBadge value="1" severity="primary" />
    <BBadge value="2" severity="secondary" />
    <BBadge value="3" severity="info" />
    <BBadge value="4" severity="success" />
    <BBadge value="5" severity="warn" />
    <BBadge value="6" severity="danger" />
    <BBadge value="7" severity="contrast" />
</template>
```

### Sizes
The `size` prop scales the badge dimensions and typography uniformly.

<div class="card items-center">
    <BBadge value="1" size="small" />
    <BBadge value="2" size="medium" />
    <BBadge value="3" size="large" />
    <BBadge value="4" size="xlarge" />
</div>

```vue
<template>
    <BBadge value="1" size="small" />
    <BBadge value="2" size="medium" />
    <BBadge value="3" size="large" />
    <BBadge value="4" size="xlarge" />
</template>
```

### Rounded & Dot

Setting `rounded` applies a pill shape. If `value` is undefined and no default slot is passed, the badge automatically collapses into a `.b-badge--dot`.

<div class="card flex-col items-center">
    <div class="flex gap-4">
        <BBadge value="1" severity="primary" />
        <BBadge value="2" severity="secondary" />
        <BBadge value="3" severity="info" />
        <BBadge value="4" severity="success" />
        <BBadge value="5" severity="warn" />
        <BBadge value="6" severity="danger" />
        <BBadge value="7" severity="contrast" />
    </div>
    <div class="flex gap-4">
        <BBadge severity="primary" />
        <BBadge severity="secondary" />
        <BBadge severity="info" />
        <BBadge severity="success" />
        <BBadge severity="warn" />
        <BBadge severity="danger" />
        <BBadge severity="contrast" />
    </div>
</div>

```vue
<template>
    <!-- Rounded Pill -->
    <BBadge value="1" severity="primary" />
    <BBadge value="2" severity="secondary" />
    <BBadge value="3" severity="info" />
    <BBadge value="4" severity="success" />
    <BBadge value="5" severity="warn" />
    <BBadge value="6" severity="danger" />
    <BBadge value="7" severity="contrast" />

    <!-- Dot (No value or slot provided) -->
    <BBadge severity="primary" />
    <BBadge severity="secondary" />
    <BBadge severity="info" />
    <BBadge severity="success" />
    <BBadge severity="warn" />
    <BBadge severity="danger" />
    <BBadge severity="contrast" />
</template>
```

### Overlay Badge
Wrap an element with `<BOverlayBadge>` to anchor an indicator to its top-right corner. It accepts the same props as `<BBadge>`.

<div class="card">
    <BOverlayBadge severity="danger">
        <BButton :icon="BellOutline" variant="outline"></BButton>
    </BOverlayBadge>
</div>

```vue
<template>
    <BOverlayBadge severity="danger">
        <BButton :icon="BellOutline" variant="outline"></BButton>
    </BOverlayBadge>
</template>
```