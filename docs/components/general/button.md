<script setup>
import { MagnifyingGlassOutline, PlusOutline, CheckOutline } from "@bestiary-ui/icons";
</script>

# Button <VersionBadge module="components" />
Button is an extension to standard button element with icons and theming.

::: info Theming
Detailed information about CSS classes, customization tokens, and manual HTML implementation can be found in the [Style API Documentation](../../style/components/general/button).
:::

## Import

```javascript
import { BButton } from "@bestiary-ui/components";
```

## Getting Started
A basic button is defined with the `label` property.

<div class="card">
    <BButton label="Submit" />
</div>

```vue
<BButton label="Submit" />
```

## Severity
Severities define the color scheme of the button. Valid values are `primary` (default), `secondary`, `success`, `info`, `warn`, `danger` and `contrast`.

<div class="card">
    <BButton label="Primary" />
    <BButton label="Secondary" severity="secondary" />
    <BButton label="Success" severity="success" />
    <BButton label="Info" severity="info" />
    <BButton label="Warn" severity="warn" />
    <BButton label="Danger" severity="danger" />
    <BButton label="Contrast" severity="contrast" />
</div>

```vue
<BButton label="Primary" />
<BButton label="Secondary" severity="secondary" />
<BButton label="Success" severity="success" />
<BButton label="Info" severity="info" />
<BButton label="Warn" severity="warn" />
<BButton label="Danger" severity="danger" />
<BButton label="Contrast" severity="contrast" />
```

## Raised
Raised buttons display a shadow for an elevated effect.

<div class="card">
    <BButton label="Primary" raised />
    <BButton label="Secondary" severity="secondary" raised />
    <BButton label="Success" severity="success" raised />
    <BButton label="Info" severity="info" raised />
    <BButton label="Warn" severity="warn" raised />
    <BButton label="Danger" severity="danger" raised />
    <BButton label="Contrast" severity="contrast" raised />
</div>

```vue
<BButton label="Primary" raised />
<BButton label="Secondary" severity="secondary" raised />
<BButton label="Success" severity="success" raised />
<BButton label="Info" severity="info" raised />
<BButton label="Warn" severity="warn" raised />
<BButton label="Danger" severity="danger" raised />
<BButton label="Contrast" severity="contrast" raised />
```

## Rounded
Rounded buttons have a pill-shaped design.

<div class="card">
    <BButton label="Primary" rounded />
    <BButton label="Secondary" severity="secondary" rounded />
    <BButton label="Success" severity="success" rounded />
    <BButton label="Info" severity="info" rounded />
    <BButton label="Warn" severity="warn" rounded />
    <BButton label="Danger" severity="danger" rounded />
    <BButton label="Contrast" severity="contrast" rounded />
</div>

```vue
<BButton label="Primary" rounded />
<BButton label="Secondary" severity="secondary" rounded />
<BButton label="Success" severity="success" rounded />
<BButton label="Info" severity="info" rounded />
<BButton label="Warn" severity="warn" rounded />
<BButton label="Danger" severity="danger" rounded />
<BButton label="Contrast" severity="contrast" rounded />
```

## Text
Text buttons are displayed without a background or border.

<div class="card">
    <BButton label="Primary" variant="text" />
    <BButton label="Secondary" severity="secondary" variant="text" />
    <BButton label="Success" severity="success" variant="text" />
    <BButton label="Info" severity="info" variant="text" />
    <BButton label="Warn" severity="warn" variant="text" />
    <BButton label="Danger" severity="danger" variant="text" />
    <BButton label="Contrast" severity="contrast" variant="text" />
</div>

```vue
<BButton label="Primary" variant="text" />
<BButton label="Secondary" severity="secondary" variant="text" />
<BButton label="Success" severity="success" variant="text" />
<BButton label="Info" severity="info" variant="text" />
<BButton label="Warn" severity="warn" variant="text" />
<BButton label="Danger" severity="danger" variant="text" />
<BButton label="Contrast" severity="contrast" variant="text" />
```

## Outlined
Outlined buttons display a border without a background.

<div class="card">
    <BButton label="Primary" variant="outline" />
    <BButton label="Secondary" severity="secondary" variant="outline" />
    <BButton label="Success" severity="success" variant="outline" />
    <BButton label="Info" severity="info" variant="outline" />
    <BButton label="Warn" severity="warn" variant="outline" />
    <BButton label="Danger" severity="danger" variant="outline" />
    <BButton label="Contrast" severity="contrast" variant="outline" />
</div>

```vue
<BButton label="Primary" variant="outline" />
<BButton label="Secondary" severity="secondary" variant="outline" />
<BButton label="Success" severity="success" variant="outline" />
<BButton label="Info" severity="info" variant="outline" />
<BButton label="Warn" severity="warn" variant="outline" />
<BButton label="Danger" severity="danger" variant="outline" />
<BButton label="Contrast" severity="contrast" variant="outline" />
```

## Link
Link buttons are displayed as a link element with a label.

<div class="card">
    <BButton label="Primary" variant="link" />
    <BButton label="Secondary" severity="secondary" variant="link" />
    <BButton label="Success" severity="success" variant="link" />
    <BButton label="Info" severity="info" variant="link" />
    <BButton label="Warn" severity="warn" variant="link" />
    <BButton label="Danger" severity="danger" variant="link" />
    <BButton label="Contrast" severity="contrast" variant="link" />
</div>

```vue
<BButton label="Primary" variant="link" />
<BButton label="Secondary" severity="secondary" variant="link" />
<BButton label="Success" severity="success" variant="link" />
<BButton label="Info" severity="info" variant="link" />
<BButton label="Warn" severity="warn" variant="link" />
<BButton label="Danger" severity="danger" variant="link" />
<BButton label="Contrast" severity="contrast" variant="link" />
```

## Sizes
Button provides `small`, `medium` (default), `large` and `xlarge` sizes.

<div class="card items-center">
    <BButton label="Small" size="small" />
    <BButton label="Medium" size="medium" />
    <BButton label="Large" size="large" />
    <BButton label="X-Large" size="xlarge" />
</div>

```vue
<BButton label="Small" size="small" />
<BButton label="Medium" size="medium" />
<BButton label="Large" size="large" />
<BButton label="X-Large" size="xlarge" />
```

## Icons
An icon can be added to a button using the `icon` property.

<div class="card">
    <BButton label="Search" :icon="MagnifyingGlassOutline" />
    <BButton label="Add" :icon="PlusOutline" iconPos="right" />
</div>

```vue
<BButton label="Search" :icon="MagnifyingGlassOutline" />
<BButton label="Add" :icon="PlusOutline" iconPos="right" />
```

### Icon Only
When only an icon is provided without a label, the button is rendered as a square.

<div class="card">
    <BButton :icon="CheckOutline" />
</div>

```vue
<BButton :icon="CheckOutline" />
```

## Loading
The `loading` property displays a spinner icon and disables the button.

<div class="card">
    <BButton label="Submit" loading />
</div>

```vue
<BButton label="Submit" loading />
```

## Badge
Buttons can display a badge using the `badge` property.

<div class="card">
    <BButton label="Emails" badge="8" badgeSeverity="contrast" />
</div>

```vue
<BButton label="Emails" badge="8" badgeSeverity="contrast" />
```

## API

### Button Properties

| Name            | Type                  | Default     | Description                                                                                               |
|:----------------|:----------------------|:------------|:----------------------------------------------------------------------------------------------------------|
| `label`         | `string`              | `undefined` | Text of the button.                                                                                       |
| `severity`      | `string`              | `primary`   | Severity level. Valid values are `primary`, `secondary`, `success`, `info`, `warn`, `danger`, `contrast`. |
| `variant`       | `string`              | `default`   | Visual style. Valid values are `default`, `outline`, `text`, `link`.                                      |
| `size`          | `string`              | `medium`    | Size of the button. Valid values are `small`, `medium`, `large`, `xlarge`.                                |
| `raised`        | `boolean`             | `false`     | When enabled, displays a shadow.                                                                          |
| `rounded`       | `boolean`             | `false`     | When enabled, adds a pill shape.                                                                          |
| `icon`          | `string \| Component` | `undefined` | Icon to display.                                                                                          |
| `iconPos`       | `string`              | `left`      | Position of the icon. Valid values are `top`, `left`, `bottom`, `right`.                                  |
| `loading`       | `boolean`             | `false`     | Whether the button is in loading state.                                                                   |
| `loadingIcon`   | `string \| Component` | `undefined` | Custom loading icon.                                                                                      |
| `badge`         | `string \| number`    | `undefined` | Content of the badge.                                                                                     |
| `badgeSeverity` | `string`              | `primary`   | Color of the badge.                                                                                       |
| `disabled`      | `boolean`             | `false`     | When enabled, prevents interaction.                                                                       |
| `type`          | `string`              | `button`    | HTML button type.                                                                                         |
| `ariaLabel`     | `string`              | `undefined` | Accessible label for the element.                                                                         |

### Button Slots

| Name          | Description                             |
|:--------------|:----------------------------------------|
| `default`     | Custom content for the button label.    |
| `icon`        | Custom icon content.                    |
| `loadingicon` | Custom content for the loading spinner. |