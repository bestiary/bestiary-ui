# Button

Button is an extension to standard input element with icons and theming.

<DocTabs :tabs="[
{ id: 'features', label: 'Features' },
{ id: 'api', label: 'API' },
{ id: 'theming', label: 'Theming' }
]">

<DocTabPane id="features">

## Import

```ts
import {BButton} from '@bestiary-ui/components'
```

## Basic Usage

The button comes in several semantic types to communicate different levels of importance or status.

<div class="b-flex b-gap-2 b-flex-wrap b-p-6 b-border b-rounded-xl b-bg-surface">
  <BButton severity="primary">Primary</BButton>
  <BButton severity="secondary">Secondary</BButton>
  <BButton severity="success">Success</BButton>
  <BButton severity="warning">Warning</BButton>
  <BButton severity="danger">Danger</BButton>
  <BButton severity="info">Info</BButton>
</div>

```vue

<BButton severity="primary">Primary</BButton>
<BButton severity="secondary">Secondary</BButton>
<BButton severity="success">Success</BButton>
<BButton severity="warning">Warning</BButton>
<BButton severity="danger">Danger</BButton>
<BButton severity="info">Info</BButton>
```

## Sizes

Bestiary UI supports four standard vertical sizes to maintain consistent rhythm across forms and toolbars.

<div class="b-flex b-items-center b-gap-4 b-p-6 b-border b-rounded-xl">
  <BButton size="small">Small</BButton>
  <BButton size="medium">Medium</BButton>
  <BButton size="large">Large</BButton>
  <BButton size="xlarge">X-Large</BButton>
</div>

```vue

<BButton size="small">Small</BButton>
<BButton size="medium">Medium</BButton>
<BButton size="large">Large</BButton>
<BButton size="xlarge">X-Large</BButton>
```

## Icons

Buttons can be enhanced with icons from `@bestiary-ui/icons`. You can place icons in four different positions or use
them as standalone icon buttons.

<script setup>
import { 
  PlusSolid, 
  ArrowRightOutline, 
  TrashSolid, 
  CloudArrowUpOutline,
  ChevronDownSolid
} from '@bestiary-ui/icons'
</script>

<div class="b-flex b-gap-2 b-flex-wrap b-p-6 b-border b-rounded-xl">
    <BButton :icon="PlusSolid">Add Item</BButton>
    <BButton severity="secondary" :icon="ArrowRightOutline" iconPos="right">Next</BButton>
    <BButton severity="info" :icon="CloudArrowUpOutline" iconPos="top">Upload</BButton>
    <BButton severity="danger" :icon="TrashSolid" />
    <BButton severity="secondary" :icon="PlusSolid" rounded />
</div>

```vue

<BButton :icon="PlusSolid">Add Item</BButton>
<BButton severity="secondary" :icon="ArrowRightOutline" iconPos="right">Next</BButton>
<BButton severity="info" :icon="CloudArrowUpOutline" iconPos="top">Upload</BButton>
<BButton severity="danger" :icon="TrashSolid"/>
<BButton severity="secondary" :icon="PlusSolid" rounded/>

```

## Badges

Integrated badges are perfect for showing notifications or counts directly on the action element.

<div class="b-flex b-gap-4 b-p-6 b-border b-rounded-xl">
  <BButton badge="8" badgeType="info">Notifications</BButton>
  <BButton type="info" badge="99+" badgeType="success">Messages</BButton>
</div>

```vue

<BButton badge="8" badgeType="info">Notifications</BButton>
<BButton type="info" badge="99+" badgeType="success">Messages</BButton>
```

## States

Handle asynchronous actions and interactivity states.

<div class="b-flex b-gap-2 b-p-6 b-border b-rounded-xl">
  <BButton loading>Loading...</BButton>
  <BButton loading type="success" />
  <BButton disabled>Disabled Button</BButton>
</div>

```vue

<BButton loading>Loading...</BButton>
<BButton disabled>Disabled</BButton>
```

## Rounded & Shapes

Control the corner radius for different UI styles.

<div class="b-flex b-gap-2 b-p-6 b-border b-rounded-xl">
  <BButton rounded>Rounded Pill</BButton>
  <BButton type="secondary" :icon="PlusSolid" rounded />
  <BButton type="primary" :icon="ChevronDownSolid" />
</div>

</DocTabPane>

<DocTabPane id="api">

## API

### Props

| Name        | Type               | Default     | Description                                                                     |
|:------------|:-------------------|:------------|:--------------------------------------------------------------------------------|
| `type`      | `ButtonType`       | `'primary'` | Semantic style: `primary`, `secondary`, `success`, `warning`, `danger`, `info`. |
| `size`      | `ButtonSize`       | `'medium'`  | Vertical height: `small`, `medium`, `large`, `xlarge`.                          |
| `icon`      | `Component`        | `null`      | Icon component from `@bestiary-ui/icons`.                                       |
| `iconPos`   | `String`           | `'left'`    | Icon position: `left`, `right`, `top`, `bottom`.                                |
| `label`     | `String`           | `null`      | Text label (or use default slot).                                               |
| `badge`     | `String \| Number` | `null`      | Value for the integrated badge.                                                 |
| `badgePos`  | `String`           | `'right'`   | Badge position: `left`, `right`, `top`, `bottom`.                               |
| `badgeType` | `String`           | `'primary'` | Color type for the badge.                                                       |
| `rounded`   | `Boolean`          | `false`     | Enables full border radius (pill shape).                                        |
| `loading`   | `Boolean`          | `false`     | Disables button and shows a spinner.                                            |
| `disabled`  | `Boolean`          | `false`     | Disables user interaction.                                                      |

</DocTabPane>

<DocTabPane id="theming">

### CSS Variables (Local Tokens)

You can customize buttons globally via `:root` or locally for specific sections.

| Variable                   | Default Value              |
|:---------------------------|:---------------------------|
| `--b-button-background`    | `var(--b-color-primary)`   |
| `--b-button-color`         | `var(--b-text-on-primary)` |
| `--b-button-height`        | `var(--b-size-sm)`         |
| `--b-button-border-radius` | `var(--b-ref-radius-md)`   |
| `--b-button-gap`           | `var(--b-ref-space-1)`     |
| `--b-button-font-weight`   | `500`                      |
| `--b-button-transition`    | `all 0.2s ease-in-out`     |

```css
/* Example: Customizing a specific area */
.auth-form {
    --b-button-border-radius: 0px;
    --b-button-font-weight: 700;
}
```

</DocTabPane>

</DocTabs>