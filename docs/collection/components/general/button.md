<DocTabs :tabs="[
{ id: 'features', label: 'Features' },
{ id: 'api', label: 'API' },
{ id: 'theming', label: 'Theming' }
]">

<DocTabPane id="features">

# Button

Button is an extension to standard input element with icons and theming.

## Import

```ts
import { BButton } from '@bestiary-ui/components';
```

## Basic

Text to display on a button is defined with the label property.

<div class="display-content">
  <BButton label="Submit" />
</div>

```vue
<BButton label="Submit" />
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

<div class="display-content">
    <BButton :icon="PlusSolid" label="Add Item" />
    <BButton severity="secondary" :icon="ArrowRightOutline" iconPos="right" label="Next" />
    <BButton severity="info" :icon="CloudArrowUpOutline" iconPos="top" label="Upload" />
    <BButton severity="danger" :icon="TrashSolid" />
    <BButton severity="secondary" :icon="PlusSolid" rounded />
</div>

```vue
<BButton :icon="PlusSolid" label="Add Item" />
<BButton severity="secondary" :icon="ArrowRightOutline" iconPos="right" label="Next" />
<BButton severity="info" :icon="CloudArrowUpOutline" iconPos="top" label="Upload" />
<BButton severity="danger" :icon="TrashSolid" />
<BButton severity="secondary" :icon="PlusSolid" rounded />
```

## States

Handle asynchronous actions and interactivity states.

<div class="display-content">
  <BButton loading label="Loading..." />
  <BButton loading type="success" />
  <BButton disabled label="Disabled" />
</div>

```vue
<BButton loading label="Loading..." />
<BButton loading type="success" />
<BButton disabled label="Disabled" />
```

## Severity

The `severity` property defines the variant of a button.

<div class="display-content">
  <BButton severity="primary" label="Primary" />
  <BButton severity="secondary" label="Secondary" />
  <BButton severity="success" label="Success" />
  <BButton severity="warn" label="Warning" />
  <BButton severity="danger" label="Danger" />
  <BButton severity="info" label="Info" />
</div>

```vue
<BButton severity="primary" label="Primary" />
<BButton severity="secondary" label="Secondary" />
<BButton severity="success" label="Success" />
<BButton severity="warn" label="Warning" />
<BButton severity="danger" label="Danger" />
<BButton severity="info" label="Info" />
```

## Sizes

Bestiary UI supports four standard vertical sizes to maintain consistent rhythm across forms and toolbars.

<div class="display-content">
  <BButton size="small" label="Small" />
  <BButton size="medium" label="Medium" />
  <BButton size="large" label="Large" />
  <BButton size="xlarge" label="X-Large" />
</div>

```vue
<BButton size="small" label="Small" />
<BButton size="medium" label="Medium" />
<BButton size="large" label="Large" />
<BButton size="xlarge" label="X-Large" />
```

## Badges

Integrated badges are perfect for showing notifications or counts directly on the action element.

<div class="display-content">
  <BButton badge="8" badgeSeverity="info" label="Notifications" />
  <BButton type="info" badge="99+" badgeSeverity="success" label="Messages" />
</div>

```vue
<BButton badge="8" badgeSeverity="info" label="Notifications" />
<BButton type="info" badge="99+" badgeSeverity="success" label="Messages" />
```

## Rounded & Shapes

Control the corner radius for different UI styles.

<div class="display-content">
  <BButton rounded label="Rounded Pill" />
  <BButton severity="secondary" :icon="PlusSolid" rounded />
  <BButton severity="info" :icon="ChevronDownSolid" />
</div>

```vue
<BButton rounded label="Rounded Pill" />
<BButton severity="secondary" :icon="PlusSolid" rounded />
<BButton severity="info" :icon="ChevronDownSolid" />
```

</DocTabPane>

<DocTabPane id="api">

# API

API defines helper props, events and others for the PrimeVue Button module.

## Button

Button is an extension to standard button element with icons and theming.

### Props

| Name            | Type                                                                                                       | Default     | Description                                     |
|:----------------|:-----------------------------------------------------------------------------------------------------------|:------------|:------------------------------------------------|
| `type`          | ButtonType\<"primary" \| "secondary" \| "success" \| warning \| "danger \| "info"\>                        | `"primary"` | Semantic style.                                 |
| `size`          | ButtonSize\<"small" \| "medium" \| "large" \| "xlarge"\>                                                   | `"medium"`  | Vertical height.                                |
| `icon`          | Component                                                                                                  | `null`      | Icon component from `@bestiary-ui/icons`.       |
| `iconPos`       | ButtonIconPos\<"left" \| "right" \| "top" \| "bottom"\>                                                    | `"left"`    | Icon position.                                  |
| `label`         | String                                                                                                     | `null`      | Text label (or use default slot).               |
| `badge`         | String \| Number                                                                                           | `null`      | Value for the integrated badge.                 |
| `badgePos`      | ButtonBadgePos\<"top" \| "left" \| "bottom" \| "right"\>                                                   | `"right"`   | Badge position.                                 |
| `badgeSeverity` | ButtonBadgeSeverity\<"primary" \| "secondary" \| "info" \| "success" \| "warn" \| "danger" \| "contrast"\> | `"primary"` | Color type for the badge.                       |
| `rounded`       | Boolean                                                                                                    | `false`     | Enables full border radius (pill shape).        |
| `loading`       | Boolean                                                                                                    | `false`     | Disables button and shows a spinner.            |
| `disabled`      | Boolean                                                                                                    | `false`     | Disables user interaction.                      |

### Slots
Defines valid slots in Button component.

| Name          | Parameters                 | Return Type | Description                                                                                                                                                      |
|:--------------|:---------------------------|:------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `default`     | scope: \{ class: string \} | VNode\[ \]  | Custom content such as icons, images and text can be placed inside the button via the default slot. Note that when slot is used, label property is not included. |
| `icon`        | scope: \{ class: string \} | VNode\[ \]  | Custom icon template. If used, it overrides the `icon` property.                                                                                                 |
| `loadingicon` | scope: \{ class: string \} | VNode\[ \]  | Custom loading icon template. Visible when `loading` prop is set to true.                                                                                        |
</DocTabPane>

<DocTabPane id="theming">

# Button Theming

## Button CSS Classes
List of Button class names.

| Class                  | Description                                 |
|:-----------------------|:--------------------------------------------|
| b-button               | Class name of the root element              |
| b-button__content      | Class name of the content bontainer element |
| b-button__label        | Class name of the label element             |
| b-button__badge        | Class name of the badge element             |
| b-button__icon         | Class name of the icon element              |
| b-button__loading-icon | Class name of the loading icon element      |

## Design Tokens
List of design tokens.

| Variable                    | Default Value                 |
|:----------------------------|:------------------------------|
| --b-button-height           | Height of root                |
| --b-button-width            | Min width of root             |
| --b-button-padding-x        | Padding x of root             | 
| --b-button-padding-y        | Padding y of root             | 
| --b-button-gap              | Gap inside content            |
| --b-button-background       | Background color of root      |
| --b-button-color            | Color of content              |
| --b-button-hover-background | Background when hover of root |
| --b-button-hover-color      | Color when hover of root      |
| --b-button-border-radius    | Border radius of root         |
| --b-button-border-width     | Border width of root          | 
| --b-button-border-style     | Border style of root          |
| --b-button-border-color     | Border color of root          |
| --b-button-font-size        | Font size of root             |
| --b-button-font-weight      | Font weight of root           |
| --b-button-icon-size        | Icon size of root             |
| --b-button-transition       | Transition of root            |

```css
/* Example: Customizing a specific area */
.auth-form {
    --b-button-border-radius: 0px;
    --b-button-font-weight: 700;
}
```

</DocTabPane>

</DocTabs>