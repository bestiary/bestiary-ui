<script setup>
import { MagnifyingGlassOutline, LinkOutline, CheckOutline, ArrowRightOutline } from "@bestiary-ui/icons";
</script>

# Button <VersionBadge module="components" />
Buttons are interactive elements used to trigger actions. The Vue implementation provides `<BButton>` with built-in support for icons, loading states, visual variants, routing (`href` / `to`), and embedded badges.

::: info Theming
This component is built on top of the Bestiary UI CSS framework. For CSS classes, anatomy, and CSS custom properties (tokens), refer to the [Button Style API](/style/button).
:::

## Import

```vue
<script setup>
import { BButton } from '@bestiary-ui/components';
</script>
```

## API Reference

### Props

| Name            | Type                  | Default     | Description                                                                                                                    |
|:----------------|:----------------------|:------------|:-------------------------------------------------------------------------------------------------------------------------------|
| `label`         | `string`              | `undefined` | The text label of the button. Can also be passed via the default slot.                                                         |
| `severity`      | `ButtonSeverity`      | `'primary'` | Defines the color scheme. Valid values: `'primary'`, `'secondary'`, `'info'`, `'success'`, `'warn'`, `'danger'`, `'contrast'`. |
| `variant`       | `ButtonVariant`       | `'default'` | Visual style variant of the button. Valid values: `'default'` (solid), `'outline'`, `'text'`, `'link'`.                        |
| `size`          | `ButtonSize`          | `'medium'`  | Size of the button. Valid values: `'small'`, `'medium'`, `'large'`, `'xlarge'`.                                                |
| `type`          | `ButtonType`          | `'button'`  | HTML `type` attribute for the button element (`'button'`, `'submit'`, `'reset'`). Ignored if rendered as a link.               |
| `raised`        | `boolean`             | `false`     | Whether the button should have a drop shadow (elevation).                                                                      |
| `rounded`       | `boolean`             | `false`     | Whether the button has fully rounded corners (pill shape).                                                                     |
| `icon`          | `string \| Component` | `undefined` | Icon class (e.g., `'pi pi-check'`) or injected Vue component to display.                                                       |
| `iconPos`       | `string`              | `'left'`    | Position of the icon relative to the label (`'left'`, `'right'`, `'top'`, `'bottom'`).                                         |
| `badge`         | `string \| number`    | `undefined` | Text or number content inside the embedded badge.                                                                              |
| `badgePos`      | `string`              | `'right'`   | Position of the badge relative to the label (`'left'`, `'right'`, `'top'`, `'bottom'`).                                        |
| `badgeSeverity` | `ButtonBadgeSeverity` | `'primary'` | Color scheme of the embedded badge.                                                                                            |
| `disabled`      | `boolean`             | `false`     | Disables the button, applying reduced opacity and preventing interactions.                                                     |
| `loading`       | `boolean`             | `false`     | Puts the button in a loading state. Disables interaction and shows a spinner.                                                  |
| `loadingIcon`   | `string \| Component` | `undefined` | Custom icon class or component to replace the default loading SVG.                                                             |
| `href`          | `string`              | `undefined` | External URL. If provided, the button renders as an `<a>` element.                                                             |
| `to`            | `string \| object`    | `undefined` | Vue Router path. If provided, the button renders as a `<router-link>`.                                                         |
| `target`        | `string`              | `undefined` | Target attribute for links (e.g., `'_blank'`).                                                                                 |
| `ariaLabel`     | `string`              | `undefined` | Accessible description. Crucial for icon-only buttons.                                                                         |

### Slots

| Name           | Description                                                                                 |
|:---------------|:--------------------------------------------------------------------------------------------|
| `default`      | Primary content of the button (text label). Overrides the `label` prop.                     |
| `icon`         | Content for the icon slot. Overrides the `icon` prop.                                       |
| `loading-icon` | Custom loading indicator content. Overrides the `loadingIcon` prop and default SVG spinner. |

## Examples

### Variants
Buttons support multiple variants to establish visual hierarchy. The `default` variant uses solid colors.

<div class="card">
    <BButton label="Solid" />
    <BButton label="Outline" variant="outline" />
    <BButton label="Text" variant="text" />
    <BButton label="Link" variant="link" />
</div>

```vue
<template>
    <BButton label="Solid" />
    <BButton label="Outline" variant="outline" />
    <BButton label="Text" variant="text" />
    <BButton label="Link" variant="link" />
</template>
```

### Severities
Applying severities changes the semantic color palette. This works identically across all `variant` types.

<div class="card">
    <BButton label="Primary" severity="primary" />
    <BButton label="Secondary" severity="secondary" />
    <BButton label="Info" severity="info" />
    <BButton label="Success" severity="success" />
    <BButton label="Warning" severity="warn" />
    <BButton label="Danger" severity="danger" />
    <BButton label="Contrast" severity="contrast" />
</div>

```vue
<template>
    <BButton label="Primary" severity="primary" />
    <BButton label="Secondary" severity="secondary" />
    <BButton label="Info" severity="info" />
    <BButton label="Success" severity="success" />
    <BButton label="Warning" severity="warn" />
    <BButton label="Danger" severity="danger" />
    <BButton label="Contrast" severity="contrast" />
</template>
```

### Sizes & Shapes
Use `size` for scaling, `rounded` for pill geometry, and `raised` for shadows.

<div class="card">
    <BButton label="Small" size="small" />
    <BButton label="Medium" size="medium" />
    <BButton label="Large" size="large" />
    <BButton label="XLarge Rounded" size="xlarge" rounded />
    <BButton label="Raised" raised variant="text" severity="secondary" />
</div>

```vue
<template>
    <BButton label="Small" size="small" />
    <BButton label="Medium" size="medium" />
    <BButton label="Large" size="large" />
    <BButton label="XLarge Rounded" size="xlarge" rounded />
    <BButton label="Raised" raised variant="text" severity="secondary" />
</template>
```

### Icons & Placement
Pass an icon via the `icon` prop or slot. Use `iconPos` to change its location. If a button lacks text content (no `label` or default slot), it automatically becomes a perfectly square icon-only button.

<div class="card">
    <BButton label="Left Icon" :icon="CheckOutline" iconPos="left" />
    <BButton label="Right Icon" :icon="ArrowRightOutline" iconPos="right" variant="outline" />
    <BButton :icon="MagnifyingGlassOutline" ariaLabel="Search" rounded />
</div>

```vue
<template>
    <BButton label="Left Icon" :icon="CheckOutline" iconPos="left" />
    <BButton label="Right Icon" :icon="ArrowRightOutline" iconPos="right" variant="outline" />
    <BButton :icon="MagnifyingGlassOutline" ariaLabel="Search" rounded />
</template>
```

### Loading State
The `loading` prop replaces the icon (or prepends one if absent) with an infinite spinning SVG. Interaction is disabled while loading.

<div class="card">
    <BButton label="Save changes" loading />
    <BButton label="Processing" loading iconPos="right" variant="outline" />
</div>

```vue
<template>
    <BButton label="Save changes" loading />
    <BButton label="Processing" loading iconPos="right" variant="outline" />
</template>
```

### With Badges
You can embed a `<BBadge>` directly inside the button using the `badge` prop.

<div class="card">
    <BButton label="Messages" badge="3" severity="primary" badgeSeverity="danger" />
    <BButton label="Notifications" badge="12" badgePos="top" variant="outline" />
</div>

```vue
<template>
    <BButton label="Messages" badge="3" severity="primary" badgeSeverity="danger" />
    <BButton label="Notifications" badge="12" badgePos="top" variant="outline" />
</template>
```

### Routing & Links
The component intelligently switches its root DOM node to an `<a>` or `<router-link>` based on the `href` and `to` props, preserving all styling and states.

<div class="card flex flex-wrap gap-4">
    <BButton label="External Link" href="https://github.com" target="_blank" :icon="LinkOutline" />
    <BButton label="Router Link" to="../../style/components/general/button" variant="outline" />
</div>

```vue
<template>
    <!-- Renders an <a> tag -->
    <BButton label="External Link" href="https://github.com" target="_blank" icon="pi pi-external-link" />
    
    <!-- Renders a <router-link> tag -->
    <BButton label="Router Link" to="/style/button" variant="outline" />
</template>
```