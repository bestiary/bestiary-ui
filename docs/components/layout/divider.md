# Divider <VersionBadge module="components" />
Dividers are used to visually separate content within a layout. The Vue implementation provides `<BDivider>` with built-in accessibility (`role="separator"`, `aria-orientation`), horizontal and vertical orientations, content slots, and various line styles.

::: info Theming
This component is built on top of the Bestiary UI CSS framework. For CSS classes, anatomy, and CSS custom properties (tokens), refer to the [Divider Style API](../../style/components/layout/divider).
:::

## Import

```vue
<script setup>
import { BDivider } from '@bestiary-ui/components';
</script>
```

## API Reference

### Props

| Name     | Type            | Default        | Description                                                                                                                             |
|:---------|:----------------|:---------------|:----------------------------------------------------------------------------------------------------------------------------------------|
| `align`  | `DividerAlign`  | `'center'`     | Alignment of the slotted content. Horizontal layout: `'left'`, `'center'`, `'right'`. Vertical layout: `'top'`, `'center'`, `'bottom'`. |
| `layout` | `DividerLayout` | `'horizontal'` | Orientation of the divider. Valid values: `'horizontal'`, `'vertical'`.                                                                 |
| `type`   | `DividerType`   | `'solid'`      | CSS border style of the divider line. Valid values: `'solid'`, `'dashed'`, `'dotted'`, `'double'`, `'none'`.                            |

### Slots

| Name      | Description                                                                                           |
|:----------|:------------------------------------------------------------------------------------------------------|
| `default` | Content to be displayed within the divider line. The line is automatically masked behind the content. |

## Examples

### Basic
By default, the divider renders as a solid horizontal line.

<div class="card flex-col items-center">
    <p>Section One content...</p>
    <BDivider />
    <p>Section Two content...</p>
</div>

```vue
<template>
    <p>Section One content...</p>
    <BDivider />
    <p>Section Two content...</p>
</template>
```

### With Content & Alignment
Passing content into the default slot places it over the line. Use the `align` prop to adjust its position.

<div class="card flex-col">
    <BDivider align="left">Left</BDivider>
    <BDivider align="center">Center</BDivider>
    <BDivider align="right">Right</BDivider>
</div>

```vue
<template>
    <BDivider align="left">Left</BDivider>
    <BDivider align="center">Center</BDivider>
    <BDivider align="right">Right</BDivider>
</template>
```

::: tip Background Matching
The slotted content is wrapped in a container that uses `var(--b-surface-section)` to mask the line behind it. If your divider is placed on a different background (like a primary panel), override `--b-divider-content-background` via inline styles or CSS classes so the cutout matches seamlessly.
:::

### Line Types
Use the `type` prop to change the border style of the line.

<div class="card flex-col">
    <BDivider type="solid">Dashed</BDivider>
    <BDivider type="dashed">Dashed</BDivider>
    <BDivider type="dotted">Dotted</BDivider>
    <BDivider type="double">Double</BDivider>
</div>

```vue
<template>
    <BDivider type="solid">Dashed</BDivider>
    <BDivider type="dashed">Dashed</BDivider>
    <BDivider type="dotted">Dotted</BDivider>
    <BDivider type="double">Double</BDivider>
</template>
```

### Vertical Layout
Set `layout="vertical"` to draw a vertical line. This requires a parent container with a defined height or flexbox alignment.

<div class="card items-center" style="height: 300px;">
    <div>Panel 1</div>
    <BDivider layout="vertical" align="top">Top</BDivider>
    <div>Panel 2</div>
    <BDivider layout="vertical" align="center">Center</BDivider>
    <div>Panel 3</div>
    <BDivider layout="vertical" align="bottom">Bottom</BDivider>
    <div>Panel 4</div>
</div>

```vue
<template>
    <div class="flex items-center" style="height: 300px;">
        <div>Panel 1</div>
        <BDivider layout="vertical" align="top">Top</BDivider>
        <div>Panel 2</div>
        <BDivider layout="vertical" align="center">Center</BDivider>
        <div>Panel 3</div>
        <BDivider layout="vertical" align="bottom">Bottom</BDivider>
        <div>Panel 4</div>
    </div>
</template>
```