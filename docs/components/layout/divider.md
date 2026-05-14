<script setup>
import { MagnifyingGlassOutline } from "@bestiary-ui/icons";
</script>

# Divider <VersionBadge module="components" />

Divider is used to separate content with a line.

::: info Theming
Detailed information about CSS classes, customization tokens, and manual HTML implementation can be found in the [Style API Documentation](../../style/components/layout/divider).
:::

## Import

```javascript
import { BDivider } from "@bestiary-ui/components";
```

## Getting Started
A basic divider is defined as a horizontal line.

<div class="card flex-col gap-0">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <BDivider />
    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>

```vue
<p>Lorem ipsum...</p>
<BDivider />
<p>Sed do eiusmod...</p>
```

## Content
Any content inside the divider is centered by default on top of the line.

<div class="card flex-col gap-0">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur incidunt laudantium quaerat sequi velit? Ad, adipisci consequatur cum delectus dolore esse iste iure, laboriosam quae qui, quos repellendus sed similique!</p>
    <BDivider>
        <b>OR</b>
    </BDivider>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet ducimus laboriosam maxime nesciunt nobis odit quos totam. Cumque debitis ea eum ipsum itaque laudantium odio quo, repellat tenetur voluptatibus.</p>
</div>

```vue
<p>Lorem ipsum...</p>
<BDivider>
    <b>OR</b>
</BDivider>
<p>Sed do eiusmod...</p>
```

### Icons as Content
You can place icons inside the divider for a more visual separation.

<div class="card flex-col gap-0">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium adipisci atque deleniti dolores magni maiores modi odio quae reiciendis? Architecto at ex excepturi facere id quo quod quos veritatis.</p>
    <BDivider>
        <MagnifyingGlassOutline class="size-4" />
    </BDivider>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ducimus eveniet ex nesciunt officiis praesentium reiciendis. Eius eveniet, fugiat. Alias deleniti dolore ducimus ea earum ipsum nisi perferendis quidem temporibus.</p>
</div>

```vue
<template>
    <p>Lorem...</p>
    <BDivider>
        <SearchOutline />
    </BDivider>
    <p>Lorem...</p>
</template>
```

## Vertical
Vertical dividers are used to separate inline elements like toolbar items.

<div class="card">
    <div class="flex items-center">
        <span>Home</span>
        <BDivider layout="vertical" />
        <span>Docs</span>
        <BDivider layout="vertical" />
        <span>Blog</span>
    </div>
</div>

```vue
<div class="flex items-center">
    <span>Home</span>
    <BDivider layout="vertical" />
    <span>Docs</span>
    <BDivider layout="vertical" />
    <span>Blog</span>
</div>
```

## Alignment
Content alignment within the divider can be adjusted using the `align` property.

<div class="card flex-col">
    <BDivider align="left"><b>Start</b></BDivider>
    <BDivider align="center"><b>Center</b></BDivider>
    <BDivider align="right"><b>End</b></BDivider>
</div>

```vue
<BDivider align="left"><b>Start</b></BDivider>
<BDivider align="center"><b>Center</b></BDivider>
<BDivider align="right"><b>End</b></BDivider>
```

## Type
The border style of the line can be set using the `type` property. Valid values are `solid` (default), `dotted`, `dashed`, and `double`.

<div class="card flex-col">
    <BDivider type="solid" />
    <BDivider type="dashed" />
    <BDivider type="dotted" />
    <BDivider type="double" />
</div>

```vue
<BDivider type="solid" />
<BDivider type="dashed" />
<BDivider type="dotted" />
<BDivider type="double" />
```

## API

### Divider Properties

| Name     | Type     | Default      | Description                                                                                                                 |
|:---------|:---------|:-------------|:----------------------------------------------------------------------------------------------------------------------------|
| `layout` | `string` | `horizontal` | Orientation of the divider. Valid values are `horizontal` and `vertical`.                                                   |
| `align`  | `string` | `center`     | Alignment of the content. Valid values are `left`, `center`, `right` (horizontal) and `top`, `center`, `bottom` (vertical). |
| `type`   | `string` | `solid`      | Style of the border. Valid values are `solid`, `dashed`, `dotted`, `double`.                                                |

### Divider Slots

| Name      | Description                                   |
|:----------|:----------------------------------------------|
| `default` | Custom content to display inside the divider. |