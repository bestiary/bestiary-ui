# Card <VersionBadge module="components" />
Cards are flexible, highly structural containers used to group related content and actions. The Vue implementation provides `<BCard>` with built-in slots for headers, titles, content, and footers, along with dynamic tags and elevation controls.

::: info Theming
This component is built on top of the Bestiary UI CSS framework. For CSS classes, anatomy, and CSS custom properties (tokens), refer to the [Card Style API](../../style/components/data-display/card).
:::

## Import

```vue
<script setup>
import { BCard } from '@bestiary-ui/components';
</script>
```

## API Reference

### Props

| Name        | Type         | Default    | Description                                                                                              |
|:------------|:-------------|:-----------|:---------------------------------------------------------------------------------------------------------|
| `tag`       | `string`     | `'div'`    | The HTML tag to render the card root element. Useful for semantic HTML (e.g., `'article'`, `'section'`). |
| `size`      | `CardSize`   | `'medium'` | Size of the card padding and spacing. Valid values: `'small'`, `'medium'`, `'large'`, `'none'`.          |
| `shadow`    | `CardShadow` | `'always'` | Shadow display mode. Valid values: `'always'`, `'hover'`, `'never'`.                                     |
| `title`     | `string`     | `null`     | Title text of the card. Overridden if the `#title` slot is used.                                         |
| `subtitle`  | `string`     | `null`     | Subtitle text of the card. Overridden if the `#subtitle` slot is used.                                   |
| `bodyStyle` | `StyleValue` | `null`     | Inline style bound directly to the internal `.b-card__body` wrapper.                                     |

### Slots

| Name                  | Description                                                                                             |
|:----------------------|:--------------------------------------------------------------------------------------------------------|
| `header`              | Content to be placed at the top of the card, structurally outside the padded body (e.g., cover images). |
| `title`               | Custom title content. Overrides the `title` prop.                                                       |
| `subtitle`            | Custom subtitle content. Overrides the `subtitle` prop.                                                 |
| `default` / `content` | Primary content of the card.                                                                            |
| `footer`              | Content to be placed at the bottom of the card body (e.g., action buttons).                             |

## Examples

### Basic

Use the `title` and `subtitle` props for standard text headers, and the default slot for the main content.

<div class="flex justify-center">
    <BCard title="Design Principles" subtitle="Core philosophy of Bestiary UI" style="max-width: 400px;">
        Build interfaces using low-specificity CSS, strict token typing via Houdini, and structural separation of concerns.
    </BCard>
</div>

```vue
<template>
    <BCard title="Design Principles" subtitle="Core philosophy of Bestiary UI">
        Build interfaces using low-specificity CSS, strict token typing via Houdini, and structural separation of concerns.
    </BCard>
</template>
```

### Media Header & Footer Actions
Pass an `<img>` to the `#header` slot for cover images. Action buttons placed in the `#footer` slot will automatically anchor to the bottom of the card body.

<div class="flex justify-center">
    <BCard shadow="hover" style="max-width: 350px;">
        <template #header>
            <img src="https://picsum.photos/400/200" alt="Abstract placeholder" />
        </template>
        <template #title>
            System Architecture
        </template>
        <template #content>
            Discover the token pipeline and essence matrices that power our unified component ecosystem.
        </template>
        <template #footer>
            <div class="flex gap-2">
                <BButton label="Read Docs" />
                <BButton label="Cancel" variant="outline" severity="secondary" />
            </div>
        </template>
    </BCard>
</div>

```vue
<template>
    <BCard shadow="hover">
        <template #header>
            <img src="/path/to/image.jpg" alt="Cover" />
        </template>
        
        <template #title>System Architecture</template>
        
        <template #content>
            Discover the token pipeline and essence matrices that power our unified component ecosystem.
        </template>
        
        <template #footer>
            <div class="flex gap-2">
                <BButton label="Read Docs" />
                <BButton label="Cancel" variant="outline" severity="secondary" />
            </div>
        </template>
    </BCard>
</template>
```

### Sizes & Elevation
Adjust the `size` prop to change internal padding. Modify `shadow` to control elevation behavior on hover states.

<div class="flex justify-center items-center gap-4">
    <BCard title="Small Card" size="small" shadow="always" style="width: 250px;">
        Compact padding and gaps. Always elevated.
    </BCard>
    <BCard title="Large Hover Card" size="large" shadow="hover" style="width: 300px;">
        Increased whitespace for prominence. Elevates only on hover.
    </BCard>
</div>

```vue
<template>
    <BCard title="Small Card" size="small" shadow="always">
        Compact padding and gaps. Always elevated.
    </BCard>
    
    <BCard title="Large Hover Card" size="large" shadow="hover">
        Increased whitespace for prominence. Elevates only on hover.
    </BCard>
</template>
```

### Semantic HTML
By default, `<BCard>` renders as a `<div>`. Use the `tag` prop to render semantically appropriate tags like `<article>` or `<section>`.

<div class="flex justify-center">
    <BCard tag="article" title="Semantic Tagging">
        Inspect the DOM to see this card rendered as an <code>&lt;article&gt;</code> element.
    </BCard>
</div>

```vue
<template>
    <BCard tag="article" title="Semantic Tagging">
        Inspect the DOM to see this card rendered as an `<article>` element.
    </BCard>
</template>
```