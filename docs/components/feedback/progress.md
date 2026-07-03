# Progress <VersionBadge module="components" />
The Progress component visually displays the completion status of a task or process. The Vue implementation provides `<BProgress>` with built-in SVG math for circular rendering, semantic severities, and automatic indeterminate animations.

::: info Theming
This component is built on top of the Bestiary UI CSS framework. For CSS classes, anatomy, and CSS custom properties (tokens), refer to the [Progress Style API](../../style/components/feedback/progress).
:::

## Import

```vue
<script setup>
import { BProgress } from '@bestiary-ui/components';
</script>
```

## API Reference

### Props

| Name          | Type               | Default         | Description                                                                                                                    |
|:--------------|:-------------------|:----------------|:-------------------------------------------------------------------------------------------------------------------------------|
| `value`       | `number`           | `0`             | Value of the progress (0 to 100).                                                                                              |
| `mode`        | `ProgressMode`     | `'determinate'` | Defines the operation mode. Valid values: `'determinate'`, `'indeterminate'`.                                                  |
| `type`        | `ProgressType`     | `'linear'`      | Type of the progress bar. Valid values: `'linear'`, `'circular'`.                                                              |
| `showValue`   | `boolean`          | `true`          | Whether to display the value text inside/near the progress bar.                                                                |
| `severity`    | `ProgressSeverity` | `'primary'`     | Defines the color scheme. Valid values: `'primary'`, `'secondary'`, `'success'`, `'info'`, `'warn'`, `'danger'`, `'contrast'`. |
| `strokeWidth` | `number`           | `4`             | Width of the stroke in circular mode. Relative to a 50x50 SVG viewBox.                                                         |
| `size`        | `string`           | `null`          | Diameter of the circle in circular mode (e.g. `'100px'` or `'4rem'`).                                                          |
| `ariaLabel`   | `string`           | `null`          | Accessible label for screen readers. Crucial when `showValue` is `false`.                                                      |

### Slots

| Name      | Description                                                            |
|:----------|:-----------------------------------------------------------------------|
| `default` | Custom content for the progress label. Exposes `{ value }` slot props. |

## Examples

### Linear Progress
The default rendering is a horizontal bar. Use the `value` prop to set the completion percentage.

<div class="card flex-col">
    <BProgress :value="45" />
    <BProgress :value="100" severity="success" />
</div>

```vue
<template>
    <BProgress :value="45" />
    <BProgress :value="100" severity="success" />
</template>
```

### Circular Progress
Set `type="circular"` to render an SVG ring. You can control its physical dimensions using the `size` prop and the line thickness via `strokeWidth`.

<div class="card items-center">
    <BProgress type="circular" :value="75" />
    <BProgress type="circular" :value="60" size="80px" :strokeWidth="6" severity="info" />
</div>

```vue
<template>
    <!-- Default size -->
    <BProgress type="circular" :value="75" />
    
    <!-- Custom size and stroke width -->
    <BProgress type="circular" :value="60" size="80px" :strokeWidth="6" severity="info" />
</template>
```

### Severities

Applying severities changes the semantic color palette for both the track fill and the label text.

<div class="card">
    <div class="flex flex-col inline-full justify-around">
        <BProgress :value="10" severity="primary" />
        <BProgress :value="20" severity="secondary" />
        <BProgress :value="30" severity="info" />
        <BProgress :value="40" severity="success" />
        <BProgress :value="50" severity="warn" />
        <BProgress :value="60" severity="danger" />
        <BProgress :value="70" severity="contrast" />
    </div>
    <div class="flex flex-col gap-4">
        <BProgress :value="10" type="circular" severity="primary" />
        <BProgress :value="20" type="circular" severity="secondary" />
        <BProgress :value="30" type="circular" severity="info" />
        <BProgress :value="40" type="circular" severity="success" />
        <BProgress :value="50" type="circular" severity="warn" />
        <BProgress :value="60" type="circular" severity="danger" />
        <BProgress :value="70" type="circular" severity="contrast" />
    </div>
</div>

```vue
<template>
    <!--  Linear  -->
    <BProgress :value="10" severity="primary" />
    <BProgress :value="20" severity="secondary" />
    <BProgress :value="30" severity="info" />
    <BProgress :value="40" severity="success" />
    <BProgress :value="50" severity="warn" />
    <BProgress :value="60" severity="danger" />
    <BProgress :value="70" severity="contrast" />

    <!--  Circular  -->
    <BProgress :value="10" type="circular" severity="primary" />
    <BProgress :value="20" type="circular" severity="secondary" />
    <BProgress :value="30" type="circular" severity="info" />
    <BProgress :value="40" type="circular" severity="success" />
    <BProgress :value="50" type="circular" severity="warn" />
    <BProgress :value="60" type="circular" severity="danger" />
    <BProgress :value="70" type="circular" severity="contrast" />
</template>
```

### Indeterminate State
For processes with unknown durations, set `mode="indeterminate"`. This overrides the `value` prop and triggers infinite CSS loading animations.

<div class="card items-center">
    <div class="inline-full">
        <BProgress mode="indeterminate" severity="secondary" />
    </div>
    <div>
        <BProgress type="circular" mode="indeterminate" severity="warn" />
    </div>
</div>

```vue
<template>
    <!-- Linear Indeterminate -->
    <BProgress mode="indeterminate" severity="secondary" />
    
    <!-- Circular Indeterminate -->
    <BProgress type="circular" mode="indeterminate" severity="warn" />
</template>
```

### Custom Labels & Hiding Values
If you want to hide the percentage, set `showValue="false"`. To customize the text, use the `default` slot.

<div class="card">
    <BProgress :value="33" :showValue="false" ariaLabel="Storage used" />
    <BProgress :value="50">
        <template #default="{ value }">
            {{ value }} / 100 GB
        </template>
    </BProgress>
</div>

```vue
<template>
    <!-- Hidden Label (requires ariaLabel for accessibility) -->
    <BProgress :value="33" :showValue="false" ariaLabel="Storage used" />
    
    <!-- Custom Label Format via Slot -->
    <BProgress :value="50">
        <template #default="{ value }">
            {{ value }} / 100 GB
        </template>
    </BProgress>
</template>
```