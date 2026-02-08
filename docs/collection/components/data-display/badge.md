<DocTabs :tabs="[
{ id: 'features', label: 'Features' },
{ id: 'api', label: 'API' },
{ id: 'theming', label: 'Theming' }
]">

<DocTabPane id="features">

# Badge

Badge is a small status indicator for another element.

## Import

```vue
import { BBadge } from "@bestiary-ui/components"
```

## Basic

Content to display is defined with the `value` property or the default slot.

<div class="display-content">
    <BBadge value="5"></BBadge>
    <BBadge value="Text"></BBadge>
</div>

```vue
<BBadge value="5"></BBadge>
<BBadge value="Text"></BBadge>
```

## Form

The Badge component can be made completely round using the `rounded` property.

<div class="display-content">
    <BBadge value="5" rounded></BBadge>
    <BBadge value="Text" rounded></BBadge>
</div>

```vue
<BBadge value="5" rounded></BBadge>
<BBadge value="Text" rounded></BBadge>
```

## Severity

Severity defines the variant of a badge.

<div class="display-content">
    <BBadge value="2"></BBadge>
    <BBadge value="6" severity="secondary"></BBadge>
    <BBadge value="8" severity="success"></BBadge>
    <BBadge value="4" severity="info"></BBadge>
    <BBadge value="9" severity="warn"></BBadge>
    <BBadge value="3" severity="danger"></BBadge>
    <BBadge value="5" severity="contrast"></BBadge>
</div>

```vue
<BBadge value="2" severity="primary"></BBadge> //default
<BBadge value="6" severity="secondary"></BBadge>
<BBadge value="8" severity="success"></BBadge>
<BBadge value="4" severity="info"></BBadge>
<BBadge value="9" severity="warn"></BBadge>
<BBadge value="3" severity="danger"></BBadge>
<BBadge value="5" severity="contrast"></BBadge>
```

## Size

Use the size property to customize the dimensions of a Badge.

<div class="display-content">
    <BBadge value="2" size="small"></BBadge>
    <BBadge value="4" size="medium"></BBadge>
    <BBadge value="6" size="large"></BBadge>
    <BBadge value="8" size="xlarge"></BBadge>
</div>

```vue
<BBadge value="2" size="small"></BBadge>
<BBadge value="4" size="medium"></BBadge> //default
<BBadge value="6" size="large"></BBadge>
<BBadge value="8" size="xlarge"></BBadge>
```

## Overlay

A badge can be added to any element by encapsulating the content with the `OverlayBadge` component.

<script setup>
import {BellOutline, CalendarOutline, EnvelopeOutline} from "@bestiary-ui/icons";
</script>

<div class="display-content">
    <BOverlayBadge value="2">
        <BellOutline size="32" />
    </BOverlayBadge>
    <BOverlayBadge value="4" severity="danger">
        <CalendarOutline size="32" />
    </BOverlayBadge>
    <BOverlayBadge severity="danger">
        <EnvelopeOutline size="32" />
    </BOverlayBadge>
</div>

```vue
<BOverlayBadge value="2">
    <BellOutline size="32" />
</BOverlayBadge>
<BOverlayBadge value="4" severity="danger">
    <CalendarOutline size="32" />
</BOverlayBadge>
<BOverlayBadge severity="danger">
    <EnvelopeOutline size="32" />
</BOverlayBadge>
```

</DocTabPane>

<DocTabPane id="api">

# Badge API

API defines helper props, events and others for the Bestiary UI Badge module.

## Badge

Badge represents people using icons, labels and images.

### Props

Defines valid properties in Badge component.

| Name       | Type                                                                                                 | Default   | Description                        |
|:-----------|:-----------------------------------------------------------------------------------------------------|:----------|:-----------------------------------|
| `value`    | string \| number                                                                                     | null      | Value to display inside the badge. |
| `severity` | BadgeSeverity\<"primary" \| "secondary" \| "info" \| "success" \| "warn" \| "danger" \| "contrast"\> | "primary" | Severity type of the badge.        |
| `size`     | BadgeSize\<"small" \| "medium" \| "large" \| "xlarge"\>                                              | "medium"  | Size of the badge.                 |
| `rounded`  | bool                                                                                                 | false     | Fully rounded borders.             |

### Slots

Defines valid slots in Badge component.

| Name      | Description                                                                                   |
|:----------|:----------------------------------------------------------------------------------------------|
| `default` | Content can easily be customized with the default slot instead of using the built-in display. |

## OverlayBadge

OverlayBadge represents people using icon, label, image and badge.

### Props

Defines valid properties in OverlayBadge component.

| Name       | Type                                                                                                 | Default   | Description                        |
|:-----------|:-----------------------------------------------------------------------------------------------------|:----------|:-----------------------------------|
| `value`    | string \| number                                                                                     | null      | Value to display inside the badge. |
| `severity` | BadgeSeverity\<"primary" \| "secondary" \| "info" \| "success" \| "warn" \| "danger" \| "contrast"\> | "primary" | Severity type of the badge.        |
| `size`     | BadgeSize\<"small" \| "medium" \| "large" \| "xlarge"\>                                              | "medium"  | Size of the badge.                 |
| `rounded`  | bool                                                                                                 | false     | Fully rounded borders.             |

### Slots

Defines valid slots in Badge component.

| Name      | Description                                                                                   |
|:----------|:----------------------------------------------------------------------------------------------|
| `default` | Content can easily be customized with the default slot instead of using the built-in display. |

</DocTabPane>

<DocTabPane id="theming">

# Badge Theming

## Badge CSS Classes
List of Badge class names.

| Class                       | Description                               |
|:----------------------------|:------------------------------------------|
| b-badge                     | Class name of the root element            |
| b-badge--severity-primary   | Class name of the severity primary        |
| b-badge--severity-secondary | Class name of the severity secondary      |
| b-badge--severity-info      | Class name of the severity info           |
| b-badge--severity-success   | Class name of the severity success        |
| b-badge--severity-warn      | Class name of the severity warn           |
| b-badge--severity-danger    | Class name of the severity danger         |
| b-badge--severity-contrast  | Class name of the severity contrast       |
| b-badge--size-small         | Class name of the size small              |
| b-badge--size-medium        | Class name of the size medium \(default\) |
| b-badge--size-large         | Class name of the size large              |
| b-badge--size-xlarge        | Class name of the size xlarge             |
| b-badge--rounded            | Class name of the full rounded badge      |

## OverlayBadge CSS Classes
List of OverlayBadge class names

| Class                  | Description                     |
|:-----------------------|:--------------------------------|
| b-overlay-badge        | Class name of the root element  |
| b-overlay-badge__badge | Class name of the badge element |

## Design Tokens
List of the design tokens.

| CSS Variable            | Description                     |
|:------------------------|:--------------------------------|
| --b-badge-height        | Height of root                  |
| --b-badge-min-width     | Min width of root               |
| --b-badge-padding-x     | Horizontal padding of root      |
| --b-badge-padding-y     | Vertical padding of root        |
| --b-badge-gap           | Distance between child elements |
| --b-badge-border-width  | Border thickness of root        |
| --b-badge-border-style  | Border style of root            |
| --b-badge-border-color  | Border color of root            |
| --b-badge-border-radius | Border radius of root           |
| --b-badge-background    | Background                      |
| --b-badge-color         | Color of text or icons          |
| --b-badge-font-size     | Font size                       |
| --b-badge-font-weight   | Font weight                     |

</DocTabPane>

</DocTabs>