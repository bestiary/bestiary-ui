# Image <VersionBadge module="components" />
The Image component provides a standardized container for displaying visual media. It features automatic border-radius management, attribute pass-throughs, and a fully interactive fullscreen lightbox portal with zoom and rotation controls.

::: info Theming
This component is built on top of the Bestiary UI CSS framework. For CSS classes, anatomy, and CSS custom properties (tokens), refer to the [Image Style API](../../style/components/data-display/image).
:::

## Import

```vue
<script setup>
import { BImage } from '@bestiary-ui/components';
</script>
```

## API Reference

### Props

| Name              | Type                | Default | Description                                                                                     |
|:------------------|:--------------------|:--------|:------------------------------------------------------------------------------------------------|
| `src`             | `string`            | `null`  | Source URL of the image.                                                                        |
| `srcset`          | `string`            | `null`  | Additional source set of the image for responsive loading.                                      |
| `alt`             | `string`            | `null`  | Alternate text for accessibility.                                                               |
| `width`           | `string \| number`  | `null`  | Width of the image container. Automatically appends `px` if passed as a number.                 |
| `height`          | `string \| number`  | `null`  | Height of the image container. Automatically appends `px` if passed as a number.                |
| `preview`         | `boolean`           | `false` | Whether to display an overlay on hover and enable the interactive fullscreen lightbox on click. |
| `imageStyle`      | `StyleValue`        | `null`  | Inline styles passed directly to the internal `<img>` element.                                  |
| `imageClass`      | `any`               | `null`  | CSS classes passed directly to the internal `<img>` element.                                    |
| `imageAttributes` | `ImgHTMLAttributes` | `null`  | Additional attributes (e.g., `loading="lazy"`) to pass to the `<img>` element.                  |

### Events

| Name    | Parameters          | Description                                          |
|:--------|:--------------------|:-----------------------------------------------------|
| `show`  | `event: MouseEvent` | Emitted when the fullscreen preview lightbox opens.  |
| `hide`  | `event: MouseEvent` | Emitted when the fullscreen preview lightbox closes. |
| `error` | `event: Event`      | Emitted when the image fails to load.                |

### Slots

| Name          | Description                                                                                                           |
|:--------------|:----------------------------------------------------------------------------------------------------------------------|
| `image`       | Overrides the main inline image. Exposes `class`, `style`, and `onClick` bindings.                                    |
| `previewicon` | Custom icon inside the hover indicator overlay.                                                                       |
| `indicator`   | Legacy alias for the `previewicon` slot.                                                                              |
| `preview`     | Overrides the large image displayed inside the fullscreen lightbox. Exposes `class`, `style`, and `onClick` bindings. |

## Examples

### Basic
Use the `src`, `alt`, and dimension props (`width`, `height`) for standard image rendering. The component handles aspect ratios via `object-fit: cover` internally.

<div class="card">
    <BImage src="https://picsum.photos/600/400?1" alt="Placeholder image" width="300" height="200" />
</div>

```vue
<template>
    <BImage 
        src="https://picsum.photos/600/400?1" 
        alt="Placeholder image" 
        width="300" 
        height="200" 
    />
</template>
```

### Preview Lightbox
Adding the `preview` prop automatically enables a hover indicator and registers click events to launch a fullscreen lightbox. The lightbox uses `<Teleport>` to attach to the `<body>`, locking the scroll and providing built-in rotation and zoom controls.

<div class="card">
    <BImage src="https://picsum.photos/800/600?2" alt="Interactive placeholder" width="300" height="200" preview />
</div>

```vue
<template>
    <BImage 
        src="https://picsum.photos/800/600?2" 
        alt="Interactive placeholder" 
        width="300" 
        height="200" 
        preview 
    />
</template>
```

### Custom Preview Icon
You can replace the default maximize SVG inside the hover overlay by using the `#previewicon` slot.

<div class="card">
    <BImage src="https://picsum.photos/800/600?3" alt="Custom icon" width="300" height="200" preview>
        <template #previewicon>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
        </template>
    </BImage>
</div>

```vue
<template>
    <BImage src="/path/to/image.jpg" width="300" preview>
        <template #previewicon>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <!-- Custom Zoom Icon -->
            </svg>
        </template>
    </BImage>
</template>
```

### Advanced: Slot Overrides
If you need complete control over the rendering logic of the image tags (e.g., rendering a `<picture>` element or a custom lazy-loading component), you can use the `#image` and `#preview` slots.

Ensure you bind the provided `class`, `style`, and `onClick` handlers to your custom elements so the internal transforms and event listeners keep working.

<div class="card">
    <BImage preview>
        <template #image="{ class: imgClass, style, onClick }">
            <img 
                src="https://picsum.photos/800/600?4" 
                :class="imgClass" 
                :style="style" 
                @click="onClick" 
            />
        </template>
        <template #preview="{ class: previewClass, style, onClick }">
            <img 
                src="https://picsum.photos/800/600?4" 
                :class="previewClass" 
                :style="style" 
                @click="onClick" 
            />
        </template>
    </BImage>
</div>

```vue
<template>
    <BImage preview>
        <!-- Inline Image Override -->
        <template #image="{ class: imgClass, style, onClick }">
            <img 
                src="/small-thumb.jpg" 
                :class="imgClass" 
                :style="style" 
                @click="onClick" 
            />
        </template>

        <!-- Fullscreen Image Override -->
        <template #preview="{ class: previewClass, style, onClick }">
            <img 
                src="/large-high-res.jpg" 
                :class="previewClass" 
                :style="style" 
                @click="onClick" 
            />
        </template>
    </BImage>
</template>
```