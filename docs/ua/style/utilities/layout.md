# Layout <VersionBadge module="style" />
Layout utilities provide essential classes for controlling element positioning, visibility, and structural behavior. These classes handle everything from basic display modes to complex multi-column layouts and stacking contexts.

## Display
Display utilities control the box model type of an element. These classes are the foundation of any layout, allowing you to switch between block-level flow, inline placement, or activation of powerful layout engines like Flexbox and Grid.

### Standard Flow
Basic box generation types for standard document flow.

| Class          | CSS Property            | Description                                                                   |
|:---------------|:------------------------|:------------------------------------------------------------------------------|
| `block`        | `display: block`        | Element takes up the full width available and starts on a new line.           |
| `inline-block` | `display: inline-block` | Element flows inline with text but respects width/height/padding.             |
| `inline`       | `display: inline`       | Element flows inline and ignores vertical box model properties.               |
| `hidden`       | `display: none`         | Completely removes the element from the document flow and accessibility tree. |

### Flex & Grid Engines
Activate layout engines for child element orchestration.

| Class         | CSS Property           | Intent                          |
|:--------------|:-----------------------|:--------------------------------|
| `flex`        | `display: flex`        | Standard flexbox container.     |
| `inline-flex` | `display: inline-flex` | Inline-level flexbox container. |
| `grid`        | `display: grid`        | Standard CSS grid container.    |
| `inline-grid` | `display: inline-grid` | Inline-level grid container.    |

### Special Helpers
Advanced display modes for specific layout challenges.

| Class       | CSS Property         | Use Case                                                                                                                                                               |
|:------------|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `contents`  | `display: contents`  | The element itself doesn't render any box, but its children act as direct children of the parent. Useful for semantic wrappers that shouldn't break Flex/Grid layouts. |
| `flow-root` | `display: flow-root` | Creates a new **Block Formatting Context (BFC)**. Fixes margin collapsing and containing floated elements without using "clearfix" hacks.                              |

### Accessibility (Screen Readers)
Bestiary UI provides specialized utilities to handle content that should be hidden visually but remain accessible to assistive technologies like screen readers.

| Class         | Description                                                                                                                                                             |
|:--------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `sr-only`     | **Visually Hidden**: Hides the element from the screen while keeping it discoverable by screen readers. Essential for labeling icons or adding context for blind users. |
| `not-sr-only` | **Revert**: Cancels `sr-only` styles, making the element visible again. Often used in responsive scenarios (e.g., show label on desktop, keep it SR-only on mobile).    |

```html
<!-- Accessibility Example -->
<button class="b-btn">
  <svg class="size-5">...</svg>
  <span class="sr-only">Close menu</span>
</button>
```

## Position
Position utilities control how an element is placed in the document. They are essential for creating complex layouts like sticky headers, floating badges, or anchored dropdowns.

| Class      | CSS Property         | Description                                                                                                                                      |
|:-----------|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|
| `static`   | `position: static`   | The default behavior. Element is positioned according to the normal flow of the document.                                                        |
| `relative` | `position: relative` | Element is positioned according to the normal flow, but acts as a reference point for its `absolute` children.                                   |
| `absolute` | `position: absolute` | Element is removed from the normal flow and positioned relative to its nearest positioned ancestor.                                              |
| `fixed`    | `position: fixed`    | Element is removed from the flow and positioned relative to the browser viewport. It stays in place during scrolling.                            |
| `sticky`   | `position: sticky`   | Element is treated as `relative` until it crosses a specified threshold (set via Inset utilities) within its scroll container, then it "sticks." |

### Practical Example
Common pattern: An absolute badge inside a relative container.

```html
<div class="relative size-12 surface-section">
  <!-- The badge is anchored to the top-right of this container -->
  <span class="absolute top-0 right-0 size-3 radius-full bg-error"></span>
</div>
```

## Inset (Top / Right / Bottom / Left)
Inset utilities control the distance between a positioned element and its nearest positioned ancestor. Bestiary UI uses **CSS Logical Properties** behind the scenes to ensure your layout automatically adapts to different writing directions.

### Global & Axis Insets
Shorthands for setting multiple sides at once. Useful for overlays and full-size backdrops.

| Class        | CSS Property      | Description                                       |
|:-------------|:------------------|:--------------------------------------------------|
| `inset-0`    | `inset: 0`        | Resets all four sides to 0.                       |
| `inset-full` | `inset: 100%`     | Moves element by 100% on all sides.               |
| `inset-auto` | `inset: auto`     | Resets inset to browser default.                  |
| `inset-y-0`  | `inset-block: 0`  | Sets **Top** and **Bottom** to 0.                 |
| `inset-x-0`  | `inset-inline: 0` | Sets **Left** and **Right** (Start and End) to 0. |

### Individual Sides
Logical mapping of physical names to directional flow.

| Class         | CSS Property (Logical)     | Physical Direction (LTR) |
|:--------------|:---------------------------|:-------------------------|
| `top-0`       | `inset-block-start: 0`     | Top                      |
| `bottom-0`    | `inset-block-end: 0`       | Bottom                   |
| `left-0`      | `inset-inline-start: 0`    | Left                     |
| `right-0`     | `inset-inline-end: 0`      | Right                    |
| `top-full`    | `inset-block-start: 100%`  | Bottom edge of parent    |
| `bottom-full` | `inset-block-end: 100%`    | Top edge of parent       |
| `left-full`   | `inset-inline-start: 100%` | Right edge of parent     |
| `right-full`  | `inset-inline-end: 100%`   | Left edge of parent      |

---

### Centering & Fractions
Standard patterns for absolute centering.

| Class      | Value | Use Case                                         |
|:-----------|:------|:-------------------------------------------------|
| `top-1-2`  | `50%` | Vertical center (requires `translate-y-n1-2`).   |
| `left-1-2` | `50%` | Horizontal center (requires `translate-x-n1-2`). |

### Minimal Numeric Scale
For micro-adjustments using the system [Spatial Scale](../tokens/layout#the-spatial-scale).

| Class    | Token Used         | Value                 |
|:---------|:-------------------|:----------------------|
| `top-1`  | `var(--b-space-1)` | 4px from top          |
| `left-1` | `var(--b-space-1)` | 4px from left (start) |

### Examples
**1. Full Screen Overlay**
```html
<div class="fixed inset-0 surface-overlay z-overlay">
  <!-- This div covers the entire screen -->
</div>
```

**2. Absolute Centering Pattern**
```html
<div class="relative size-12">
  <div class="absolute top-1-2 left-1-2 -translate-x-1/2 -translate-y-1/2">
    Centered Child
  </div>
</div>
```

## Z-Index

Z-Index utilities manage the stacking order of elements along the z-axis (depth). Bestiary UI provides both semantic roles for standard UI components and a numeric scale for custom layering.

### Semantic Roles
These classes map directly to the [Semantic Contract](../tokens/semantic-contract#_1-4-stacking-context-z-index). Using these ensures consistent behavior across different themes.

| Class        | Token            | Typical Usage                                |
|:-------------|:-----------------|:---------------------------------------------|
| `z-hide`     | `--b-z-hide`     | Elements placed behind content (decorative). |
| `z-base`     | `--b-z-base`     | Default stacking context (0).                |
| `z-nav`      | `--b-z-nav`      | Main navigation bars.                        |
| `z-sticky`   | `--b-z-sticky`   | Elements that stick during scroll.           |
| `z-dropdown` | `--b-z-dropdown` | Context menus and select options.            |
| `z-overlay`  | `--b-z-overlay`  | Modal backdrops and dimmers.                 |
| `z-modal`    | `--b-z-modal`    | Dialogs and modals.                          |
| `z-popover`  | `--b-z-popover`  | Tooltips and floating info boxes.            |
| `z-toast`    | `--b-z-toast`    | System notifications (topmost).              |
| `z-tooltip`  | `--b-z-tooltip`  | Micro-labels on hover.                       |

### Atomic Scale
For custom layering within a specific component or layout section.

| Class    | Value        |
|:---------|:-------------|
| `z-auto` | `auto`       |
| `z-0`    | `0`          |
| `z-10`   | `10`         |
| `z-20`   | `20`         |
| `z-30`   | `30`         |
| `z-40`   | `40`         |
| `z-50`   | `50`         |
| `z-max`  | `2147483647` |

::: warning Usage Tip
Always prefer **Semantic Roles** (like `z-modal`) in your application code. Use the **Atomic Scale** (like `z-10`) only when you need to layer internal parts of a single component.
:::

### Example
```html
<!-- The backdrop uses z-overlay, the modal uses z-modal -->
<div class="fixed inset-0 bg-black/50 z-overlay"></div>
<div class="fixed top-1-2 left-1-2 z-modal surface-floating shadow-xl">
  <h2>Critical Update</h2>
</div>
```

## Aspect Ratio
Aspect ratio utilities ensure that elements maintain consistent proportional dimensions. This is especially useful for preventing layout shifts when loading media or for creating uniform grids of cards.

| Class                | Token                    | Ratio       | Typical Usage                                  |
|:---------------------|:-------------------------|:------------|:-----------------------------------------------|
| `aspect-auto`        | —                        | `auto`      | Default browser behavior.                      |
| `aspect-square`      | `--b-aspect-square`      | `1 / 1`     | Avatars, icons, social media posts.            |
| `aspect-landscape`   | `--b-aspect-landscape`   | `4 / 3`     | Standard card previews or classic monitors.    |
| `aspect-portrait`    | `--b-aspect-portrait`    | `3 / 4`     | Vertical product cards, mobile story previews. |
| `aspect-photography` | `--b-aspect-photography` | `3 / 2`     | DSLR photos and gallery thumbnails.            |
| `aspect-video`       | `--b-aspect-widescreen`  | `16 / 9`    | YouTube/Vimeo embeds and hero sections.        |
| `aspect-ultrawide`   | `--b-aspect-ultrawide`   | `18 / 5`    | Wide banners and dashboard headers.            |
| `aspect-golden`      | `--b-aspect-golden`      | `1.618 / 1` | Balanced, aesthetically pleasing compositions. |

### Practical Example
To ensure an image covers its container perfectly while maintaining a video ratio:

```html
<div class="inline-full aspect-video radius-lg overflow-hidden">
  <img 
    src="/nature.jpg" 
    class="size-full object-cover" 
    alt="Nature"
  >
</div>
```

::: info Image Scaling
When using `aspect-ratio` with images, it is highly recommended to combine them with **Object Fit** utilities (e.g., `object-cover`) to prevent the image from being stretched or squashed.
:::

## Columns
Column utilities control the number of columns into which the content of an element should be divided. This is primarily used for flowing long passages of text into readable, side-by-side blocks.

| Class          | CSS Property    | Description                                                     |
|:---------------|:----------------|:----------------------------------------------------------------|
| `columns-auto` | `columns: auto` | Browser decides the number of columns based on available space. |
| `columns-1`    | `columns: 1`    | Force content into a single column (default).                   |
| `columns-2`    | `columns: 2`    | Divide content into 2 equal columns.                            |
| `columns-3`    | `columns: 3`    | Divide content into 3 equal columns.                            |
| `columns-4`    | `columns: 4`    | Divide content into 4 equal columns.                            |
| `columns-5`    | `columns: 5`    | Divide content into 5 equal columns.                            |
| `columns-6`    | `columns: 6`    | Divide content into 6 equal columns.                            |
| `columns-7`    | `columns: 7`    | Divide content into 7 equal columns.                            |
| `columns-8`    | `columns: 8`    | Divide content into 8 equal columns.                            |
| `columns-9`    | `columns: 9`    | Divide content into 9 equal columns.                            |
| `columns-10`   | `columns: 10`   | Divide content into 10 equal columns.                           |
| `columns-11`   | `columns: 11`   | Divide content into 11 equal columns.                           |
| `columns-12`   | `columns: 12`   | Maximum of 12 columns.                                          |

### Practical Example
Ideal for article bodies or list-heavy footers to improve readability and space usage.

```html
<div class="columns-2 b-gap-8">
  <p>
    This long paragraph will automatically split into two columns. 
    When the text reaches the bottom of the first column, it continues 
    at the top of the second one.
  </p>
</div>
```

::: tip Column Gap
The distance between columns is controlled by the **Gap** utilities found in the [Composition](./composition) section.
:::

## Object Fit & Position
These utilities control how replaced content, such as `<img>` or `<video>`, responds to the dimensions of its content box.

### Object Fit
Determines how the image or video should be resized to fit its container.

| Class               | CSS Property             | Description                                                                                               |
|:--------------------|:-------------------------|:----------------------------------------------------------------------------------------------------------|
| `object-fill`       | `object-fit: fill`       | Content is stretched to fill the entire box. Aspect ratio is ignored.                                     |
| `object-cover`      | `object-fit: cover`      | Content covers the entire box while **preserving its aspect ratio**. Parts of the content may be clipped. |
| `object-contain`    | `object-fit: contain`    | Content is resized to be fully visible while preserving its aspect ratio. Letterboxing may occur.         |
| `object-none`       | `object-fit: none`       | Content maintains its original size and ignores the container size.                                       |
| `object-scale-down` | `object-fit: scale-down` | Content is sized as if `none` or `contain` were specified, whichever results in a smaller size.           |

### Object Position
Specifies the alignment of the replaced content within its box. This is particularly useful when using `object-fit: cover` to ensure the most important part of an image remains visible.

| Class                 | CSS Property                    |
|:----------------------|:--------------------------------|
| `object-center`       | `object-position: center`       |
| `object-top`          | `object-position: top`          |
| `object-bottom`       | `object-position: bottom`       |
| `object-left`         | `object-position: left`         |
| `object-right`        | `object-position: right`        |
| `object-top-left`     | `object-position: top left`     |
| `object-top-right`    | `object-position: top right`    |
| `object-bottom-left`  | `object-position: bottom left`  |
| `object-bottom-right` | `object-position: bottom right` |

### Practical Example
Creating a hero-style profile header where the background image always covers the area and is aligned to the top.

```html
<div class="inline-full block-64 overflow-hidden relative">
  <img 
    src="/mountain.jpg" 
    class="size-full object-cover object-top" 
    alt="Background"
  >
  <div class="absolute inset-0 flex items-center justify-center">
    <h1 class="text-contrast">Welcome Explorer</h1>
  </div>
</div>
```

::: tip Visual Pairing
Combine `object-cover` with an [Aspect Ratio](./layout#aspect-ratio) utility to create perfectly consistent media galleries that don't distort images.
:::

## Overflow & Overscroll

These utilities manage how content is handled when it exceeds the dimensions of its container, and how the browser behaves when reaching the boundary of a scrolling area.

### Overflow
Controls the clipping and scrolling behavior of an element.

| Class              | CSS Property        | Description                                                                    |
|:-------------------|:--------------------|:-------------------------------------------------------------------------------|
| `overflow-auto`    | `overflow: auto`    | Adds scrollbars only when content exceeds the container.                       |
| `overflow-hidden`  | `overflow: hidden`  | Clips the content. No scrollbars are shown.                                    |
| `overflow-visible` | `overflow: visible` | Content is not clipped and renders outside the element's box.                  |
| `overflow-scroll`  | `overflow: scroll`  | Always shows scrollbars, regardless of content size.                           |
| `overflow-clip`    | `overflow: clip`    | Stricter than `hidden`; prevents all scrolling, including programmatic scroll. |

### Logical Axis Overflow
Bestiary UI uses **Logical Properties** to handle overflow per axis, ensuring consistency in RTL/LTR layouts.

| Class               | CSS Property (Logical)    | Description                     |
|:--------------------|:--------------------------|:--------------------------------|
| `overflow-x-auto`   | `overflow-inline: auto`   | Automatic horizontal scrolling. |
| `overflow-x-hidden` | `overflow-inline: hidden` | Hide horizontal overflow.       |
| `overflow-y-auto`   | `overflow-block: auto`    | Automatic vertical scrolling.   |
| `overflow-y-hidden` | `overflow-block: hidden`  | Hide vertical overflow.         |

---

### Overscroll Behavior
Controls what happens when a user reaches the boundary of a scrolling area (e.g., preventing the "scroll chaining" effect where the whole page starts scrolling when a modal reaches its end).

| Class                | CSS Property                   | Description                                                                         |
|:---------------------|:-------------------------------|:------------------------------------------------------------------------------------|
| `overscroll-auto`    | `overscroll-behavior: auto`    | Default behavior. Scroll chaining is enabled.                                       |
| `overscroll-contain` | `overscroll-behavior: contain` | Prevents scroll chaining to parent elements but keeps native "bounce" effects.      |
| `overscroll-none`    | `overscroll-behavior: none`    | Prevents scroll chaining and disables all overscroll effects (like rubber-banding). |

### Practical Examples

**1. Scrollable Sidebar with Fixed Height**
```html
<aside class="block-screen inline-xs overflow-y-auto overscroll-contain surface-section">
  <!-- Content here won't scroll the main page when it reaches the bottom -->
</aside>
```

**2. Horizontal Image Gallery**
```html
<div class="flex gap-4 overflow-x-auto p-4">
  <img src="..." class="inline-sm aspect-square object-cover">
  <img src="..." class="inline-sm aspect-square object-cover">
  <img src="..." class="inline-sm aspect-square object-cover">
</div>
```

::: tip Scroll Chaining
Use `overscroll-contain` on components like **Modals**, **Dropdowns**, or **Sidebars** to ensure that scrolling inside them doesn't accidentally move the background page.
:::

## Visibility

Visibility utilities control whether an element is visible or not, without affecting the layout of the document.

| Class       | CSS Property          | Description                                                           |
|:------------|:----------------------|:----------------------------------------------------------------------|
| `visible`   | `visibility: visible` | The element is visible. This is the browser default.                  |
| `invisible` | `visibility: hidden`  | The element is hidden, but **it still takes up space** in the layout. |

### Visibility vs. Hidden
It is important to understand the difference between these two approaches:
- Use **`hidden`** (from [Display](./layout#display)) to completely remove an element from the page. Other elements will move to fill the gap.
- Use **`invisible`** to hide an element while keeping its dimensions and position intact. This is useful for toggling elements without causing "jumps" or layout shifts.

### Practical Example
Useful for maintaining consistent alignment in a row when one item is temporarily hidden.

```html
<div class="flex gap-4">
  <div class="p-4 bg-primary">Always Visible</div>
  
  <!-- This box is hidden but the gap remains consistent -->
  <div class="invisible p-4 bg-primary">Ghost Box</div>
  
  <div class="p-4 bg-primary">Always Visible</div>
</div>
```

::: warning Accessibility
Elements with the `invisible` class are hidden from both the screen and assistive technologies (like screen readers). If you want to hide an element visually but keep it for screen readers, use **`sr-only`** instead.
:::

## Tables
Table utilities control the rendering behavior and border orchestration of table elements. These classes are essential for building predictable data grids and dashboards.

### Table Layout
Determines the algorithm used to lay out table cells, rows, and columns.

| Class         | CSS Property          | Description                                                                                                                     |
|:--------------|:----------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| `table-auto`  | `table-layout: auto`  | The table and its cells resize to fit the content. This is the browser default.                                                 |
| `table-fixed` | `table-layout: fixed` | The table respects fixed widths. Content does not expand cells. **Highly recommended for dashboards to prevent layout shifts.** |

### Border Behavior
Controls whether table borders are separated or merged into a single border.

| Class             | CSS Property                | Description                                                                                             |
|:------------------|:----------------------------|:--------------------------------------------------------------------------------------------------------|
| `border-collapse` | `border-collapse: collapse` | Adjacent borders are merged into a single border. **The standard choice for modern, clean UI designs.** |
| `border-separate` | `border-collapse: separate` | Each cell maintains its own individual borders. This is the browser default.                            |

### Practical Example
Building a clean, fixed-layout data table with collapsed borders.

```html
<table class="inline-full table-fixed border-collapse surface-section">
  <thead>
    <tr class="border-b border-default">
      <th class="p-4 text-left font-bold">ID</th>
      <th class="p-4 text-left font-bold">Status</th>
      <th class="p-4 text-left font-bold">Value</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-subtle">
      <td class="p-4">#001</td>
      <td class="p-4 text-success">Completed</td>
      <td class="p-4">$500.00</td>
    </tr>
  </tbody>
</table>
```

::: info Performance Tip
Using **`table-fixed`** allows the browser to render the table progressively as it receives data, rather than waiting for all content to calculate cell widths. This significantly improves performance for large datasets.
:::

## Usage Philosophy
While these utilities are powerful for rapid layout adjustments, remember that Bestiary UI is **component-oriented**.
- Use **Layout Utilities** for global structure or unique one-off positioning.
- Rely on **Components** (like Flex or Grid containers) for standard interface patterns.