<script setup>
import { BellOutline, EnvelopeOutline } from "@bestiary-ui/icons";
</script>

# Badge <VersionBadge module="components" />
Badge is a small status indicator for numbers, short text, or simple signals.

::: info Theming
Detailed information about CSS classes, customization tokens, and manual HTML implementation can be found in the [Style API Documentation](../../style/components/data-display/badge).
:::

## Import

```javascript
import { BBadge, BOverlayBadge } from "@bestiary-ui/components";
```

## Getting Started
A badge is defined with the `value` property.

<div class="card">
    <BBadge value="2" />
    <BBadge value="New" />
</div>

```vue
<BBadge value="2" />
<BBadge value="New" />
```

## Severity
Severities define the color scheme of the badge. Valid values are `primary` (default), `secondary`, `success`, `info`, `warn`, `danger` and `contrast`.

<div class="card">
    <BBadge value="Primary" />
    <BBadge value="Secondary" severity="secondary" />
    <BBadge value="Success" severity="success" />
    <BBadge value="Info" severity="info" />
    <BBadge value="Warn" severity="warn" />
    <BBadge value="Danger" severity="danger" />
    <BBadge value="Contrast" severity="contrast" />
</div>

```vue
<BBadge value="Primary" />
<BBadge value="Secondary" severity="secondary" />
<BBadge value="Success" severity="success" />
<BBadge value="Info" severity="info" />
<BBadge value="Warn" severity="warn" />
<BBadge value="Danger" severity="danger" />
<BBadge value="Contrast" severity="contrast" />
```

## Sizes
Badge provides `small`, `medium` (default), `large` and `xlarge` sizes.

<div class="card items-center">
    <BBadge value="8" size="small" />
    <BBadge value="8" size="medium" />
    <BBadge value="8" size="large" />
    <BBadge value="8" size="xlarge" />
</div>

```vue
<BBadge value="8" size="small" />
<BBadge value="8" size="medium" />
<BBadge value="8" size="large" />
<BBadge value="8" size="xlarge" />
```

## Rounded
The `rounded` property adds a pill-shaped design to the badge.

<div class="card">
    <BBadge value="Rounded" rounded />
</div>

```vue
<BBadge value="Rounded" rounded />
```

## Dot Variant
If no `value` is provided and the default slot is empty, the badge automatically renders as a small indicator dot.

<div class="card">
    <BBadge severity="danger" />
    <BBadge severity="success" />
</div>

```vue
<BBadge severity="danger" />
```

## OverlayBadge
`BOverlayBadge` is a wrapper component that anchors a badge to the top-right corner of its content.

<div class="card">
    <BOverlayBadge value="3">
        <BellOutline class="size-8" />
    </BOverlayBadge>
    <BOverlayBadge severity="danger" rounded>
        <EnvelopeOutline class="size-8" />
        <template #value>8</template>
    </BOverlayBadge>
    <BOverlayBadge severity="success">
        <BButton label="Notifications" />
    </BOverlayBadge>
</div>

```vue
<BOverlayBadge value="3">
    <BellOutline />
</BOverlayBadge>

<BOverlayBadge severity="danger" rounded>
    <EnvelopeOutline />
    <template #value>8</template>
</BOverlayBadge>

<BOverlayBadge severity="success">
    <BButton label="Notifications" />
</BOverlayBadge>
```

## API

### Badge Properties

| Name       | Type      | Default  | Description                                                                    |
|:-----------|:----------|:---------|:-------------------------------------------------------------------------------|
| `value`    | `string \| number` | `undefined` | Value to be displayed inside the badge. If empty, renders as a dot. |
| `severity` | `string`  | `primary` | Severity level. Valid values are `primary`, `secondary`, `success`, `info`, `warn`, `danger`, `contrast`. |
| `size`     | `string`  | `medium`  | Size of the badge. Valid values are `small`, `medium`, `large`, `xlarge`. |
| `rounded`  | `boolean` | `false`   | When enabled, adds fully rounded corners.                                     |

### Badge Slots

| Name      | Description                                            |
|:----------|:-------------------------------------------------------|
| `default` | Custom content to display inside the badge. Overrides the value prop. |

---

### OverlayBadge Properties
*OverlayBadge inherits all properties from **Badge Properties**.*

### OverlayBadge Slots

| Name      | Description                                            |
|:----------|:-------------------------------------------------------|
| `default` | The content that the badge will overlay.               |
| `value`   | Custom content to be displayed inside the badge.       |