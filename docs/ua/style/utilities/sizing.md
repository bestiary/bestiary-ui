# Sizing <VersionBadge module="style" />
Sizing utilities allow you to control the width and height of elements. Bestiary UI uses **CSS Logical Properties** to ensure your layout remains consistent across different writing modes and directions.

## Logical Properties Concept

Unlike traditional CSS (width/height), logical properties focus on the flow of the content:
- **Inline Size**: Corresponds to **Width** in horizontal writing modes (LTR/RTL).
- **Block Size**: Corresponds to **Height** in horizontal writing modes.

## Inline Size (Width)
Utilities for controlling the horizontal dimension of an element using the `inline-size` logical property. These classes are essential for defining the width of components, sidebars, and grid columns.

### Core Keywords & Viewport
Fundamental sizing behaviors and viewport-relative widths. The `screen` utilities use **dvw** (Dynamic Viewport Width), which correctly handles mobile browser toolbars.

| Class               | CSS Property      | Value / Intent                             |
|:--------------------|:------------------|:-------------------------------------------|
| `inline-auto`       | `inline-size`     | `auto` (Default browser behavior)          |
| `inline-full`       | `inline-size`     | `100%` (Parent width)                      |
| `inline-min`        | `inline-size`     | `min-content` (Shrink to smallest content) |
| `inline-max`        | `inline-size`     | `max-content` (Expand to largest content)  |
| `inline-fit`        | `inline-size`     | `fit-content` (Available space up to max)  |
| `inline-screen`     | `inline-size`     | `100dvw` (Full dynamic viewport width)     |
| `min-inline-screen` | `min-inline-size` | `100dvw` (Minimum dynamic viewport width)  |

### Container Scale (T-Shirt Sizes)
A comprehensive scale for fixed horizontal constraints, mapped to the [Container Tokens](../tokens/layout#container-widths).

| Class        | Token               | Pixel  |
|:-------------|:--------------------|:-------|
| `inline-3xs` | `--b-container-3xs` | 256px  |
| `inline-2xs` | `--b-container-2xs` | 288px  |
| `inline-xs`  | `--b-container-xs`  | 320px  |
| `inline-sm`  | `--b-container-sm`  | 384px  |
| `inline-md`  | `--b-container-md`  | 448px  |
| `inline-lg`  | `--b-container-lg`  | 512px  |
| `inline-xl`  | `--b-container-xl`  | 576px  |
| `inline-2xl` | `--b-container-2xl` | 672px  |
| `inline-3xl` | `--b-container-3xl` | 768px  |
| `inline-4xl` | `--b-container-4xl` | 896px  |
| `inline-5xl` | `--b-container-5xl` | 1024px |
| `inline-6xl` | `--b-container-6xl` | 1152px |
| `inline-7xl` | `--b-container-7xl` | 1280px |

### Fractional Widths
Percentage-based utilities for building flexible layouts and grids.

| Class        | Value (%)  | Fraction |
|:-------------|:-----------|:---------|
| `inline-1-6` | `16.6666%` | 1/6      |
| `inline-1-5` | `20%`      | 1/5      |
| `inline-1-4` | `25%`      | 1/4      |
| `inline-1-3` | `33.3333%` | 1/3      |
| `inline-2-5` | `40%`      | 2/5      |
| `inline-1-2` | `50%`      | 1/2      |
| `inline-3-5` | `60%`      | 3/5      |
| `inline-2-3` | `66.6666%` | 2/3      |
| `inline-3-4` | `75%`      | 3/4      |
| `inline-4-5` | `80%`      | 4/5      |
| `inline-5-6` | `83.3333%` | 5/6      |

### Basic Constraints
Utility overrides for minimum and maximum horizontal boundaries.

| Class             | CSS Property      | Value  |
|:------------------|:------------------|:-------|
| `max-inline-full` | `max-inline-size` | `100%` |
| `min-inline-0`    | `min-inline-size` | `0`    |

```html
<!-- Example: A responsive card with max-width and min-width constraint -->
<div class="inline-md max-inline-full min-inline-0 surface-section p-4">
  This card is 448px wide but won't exceed the parent width on small screens.
</div>
```

## Block Size (Height)

Utilities for controlling the vertical dimension of an element using the `block-size` logical property.

### Core Keywords
Standard behavior for vertical sizing.

| Class        | CSS Property              | Intent                                        |
|:-------------|:--------------------------|:----------------------------------------------|
| `block-auto` | `block-size: auto`        | Natural height based on content.              |
| `block-full` | `block-size: 100%`        | Occupy the full height of the parent.         |
| `block-min`  | `block-size: min-content` | Shrink to the minimum required height.        |
| `block-max`  | `block-size: max-content` | Expand to the height of the internal content. |
| `block-fit`  | `block-size: fit-content` | Best fit within available space.              |
| `block-0`    | `block-size: 0`           | Collapse the height completely.               |

### Viewport Heights
Dynamic viewport units that automatically adjust when mobile browser toolbars appear or disappear.

| Class              | CSS Property             | Value                                                 |
|:-------------------|:-------------------------|:------------------------------------------------------|
| `block-screen`     | `block-size: 100dvh`     | Exactly the height of the dynamic viewport.           |
| `block-min-screen` | `min-block-size: 100dvh` | Ensure the element is at least as tall as the screen. |

### Modern Specials
Advanced units for precise typography-based layout.

| Class      | CSS Property      | Description                                           |
|:-----------|:------------------|:------------------------------------------------------|
| `block-lh` | `block-size: 1lh` | Sets the height equal to the current **line-height**. |

::: tip Line Height Unit (`lh`)
The `block-lh` utility is perfect for creating elements that must align perfectly with a single line of text, such as custom decorative borders or input adornments.
:::

### Example
```html
<!-- A full-screen section with content centered vertically -->
<section class="block-min-screen flex items-center justify-center">
  <div class="block-lh border-l-2 border-primary">
    This div is exactly as tall as one line of text.
  </div>
</section>
```

## Min-Inline Size (Min-Width)
Utilities for setting the minimum horizontal dimension of an element. These classes prevent elements from shrinking below a specific threshold, which is crucial for maintaining layout integrity in responsive designs.

### Core Keywords
Fundamental constraints using standard CSS sizing logic.

| Class             | CSS Property                   | Description                                                                      |
|:------------------|:-------------------------------|:---------------------------------------------------------------------------------|
| `min-inline-0`    | `min-inline-size: 0`           | Resets min-width. **Critical for fixing overflow issues in Flexbox/Grid items.** |
| `min-inline-full` | `min-inline-size: 100%`        | Ensures the element is at least as wide as its parent.                           |
| `min-inline-min`  | `min-inline-size: min-content` | Prevents shrinking below the size of the smallest internal content.              |
| `min-inline-max`  | `min-inline-size: max-content` | Ensures the element is at least as wide as its longest internal content.         |
| `min-inline-fit`  | `min-inline-size: fit-content` | Minimum size is determined by the available space vs content.                    |

### Viewport Limits
Sets the minimum width based on the visible area of the browser.

| Class               | CSS Property              | Value                                            |
|:--------------------|:--------------------------|:-------------------------------------------------|
| `min-inline-screen` | `min-inline-size: 100dvw` | At least the full width of the dynamic viewport. |

### Container-Based Limits (T-Shirt Scale)
These utilities use the [Container Scale](../tokens/layout#container-widths) to prevent UI blocks (like sidebars or cards) from becoming too narrow and unreadable.

| Class            | Token               | Value   | Pixels |
|:-----------------|:--------------------|:--------|:-------| 
| `min-inline-3xs` | `--b-container-3xs` | `16rem` | 256px  |
| `min-inline-2xs` | `--b-container-2xs` | `18rem` | 288px  |
| `min-inline-xs`  | `--b-container-xs`  | `20rem` | 320px  |
| `min-inline-sm`  | `--b-container-sm`  | `24rem` | 384px  |
| `min-inline-md`  | `--b-container-md`  | `28rem` | 448px  |
| `min-inline-lg`  | `--b-container-lg`  | `32rem` | 512px  |
| `min-inline-xl`  | `--b-container-xl`  | `36rem` | 576px  |
| `min-inline-2xl` | `--b-container-2xl` | `42rem` | 672px  |
| `min-inline-3xl` | `--b-container-3xl` | `48rem` | 768px  |
| `min-inline-4xl` | `--b-container-4xl` | `56rem` | 896px  |
| `min-inline-5xl` | `--b-container-5xl` | `64rem` | 1024px |
| `min-inline-6xl` | `--b-container-6xl` | `72rem` | 1152px |
| `min-inline-7xl` | `--b-container-7xl` | `80rem` | 1280px |

### Fractional Min-Widths
Ensures an element occupies at least a specific percentage of its parent container.

| Class            | Value (%)  | Fraction |
|:-----------------|:-----------|:---------|
| `min-inline-1-6` | `16.6666%` | 1/6      |
| `min-inline-1-5` | `20%`      | 1/5      |
| `min-inline-1-4` | `25%`      | 1/4      |
| `min-inline-1-3` | `33.3333%` | 1/3      |
| `min-inline-2-5` | `40%`      | 2/5      |
| `min-inline-1-2` | `50%`      | 1/2      |
| `min-inline-3-5` | `60%`      | 3/5      |
| `min-inline-2-3` | `66.6666%` | 2/3      |
| `min-inline-3-4` | `75%`      | 3/4      |
| `min-inline-4-5` | `80%`      | 4/5      |
| `min-inline-5-6` | `83.3333%` | 5/6      |

### Example
```html
<!-- sidebar will be 25% of width, but never narrower than 320px -->
<div class="flex">
  <aside class="inline-1-4 min-inline-xs surface-variant">
    Sidebar Content
  </aside>
  <main class="inline-full">
    Main Content
  </main>
</div>
```

## Max-Inline Size (Max-Width)
Utilities for controlling the maximum horizontal dimension of an element. These classes ensure that elements do not expand beyond a certain point, maintaining layout structure and optimal line lengths for typography.

### Core Keywords
Standard CSS constraints for horizontal growth.

| Class             | CSS Property                   | Description                                                                     |
|:------------------|:-------------------------------|:--------------------------------------------------------------------------------|
| `max-inline-none` | `max-inline-size: none`        | Removes any maximum width constraints.                                          |
| `max-inline-full` | `max-inline-size: 100%`        | Prevents the element from being wider than its parent.                          |
| `max-inline-fit`  | `max-inline-size: fit-content` | Limits size to the space required by content, but no more than available space. |
| `max-inline-max`  | `max-inline-size: max-content` | Limits size to the intrinsic maximum width of the content.                      |

### Viewport Limits
Limits the width based on the dynamic viewport.

| Class               | CSS Property              | Value                                                 |
|:--------------------|:--------------------------|:------------------------------------------------------|
| `max-inline-screen` | `max-inline-size: 100dvw` | Cannot exceed the full width of the dynamic viewport. |

### Container-Based Limits (T-Shirt Scale)
These utilities use the [Container Scale](../tokens/layout#container-widths). They are perfect for limiting the width of articles, sidebars, or cards to keep them visually balanced.

| Class            | Token               | Value (Rem) | Pixels (16px base) |
|:-----------------|:--------------------|:------------|:-------------------|
| `max-inline-3xs` | `--b-container-3xs` | `16rem`     | 256px              |
| `max-inline-2xs` | `--b-container-2xs` | `18rem`     | 288px              |
| `max-inline-xs`  | `--b-container-xs`  | `20rem`     | 320px              |
| `max-inline-sm`  | `--b-container-sm`  | `24rem`     | 384px              |
| `max-inline-md`  | `--b-container-md`  | `28rem`     | 448px              |
| `max-inline-lg`  | `--b-container-lg`  | `32rem`     | 512px              |
| `max-inline-xl`  | `--b-container-xl`  | `36rem`     | 576px              |
| `max-inline-2xl` | `--b-container-2xl` | `42rem`     | 672px              |
| `max-inline-3xl` | `--b-container-3xl` | `48rem`     | 768px              |
| `max-inline-4xl` | `--b-container-4xl` | `56rem`     | 896px              |
| `max-inline-5xl` | `--b-container-5xl` | `64rem`     | 1024px             |
| `max-inline-6xl` | `--b-container-6xl` | `72rem`     | 1152px             |
| `max-inline-7xl` | `--b-container-7xl` | `80rem`     | 1280px             |

### Fractional Limits (Percentages)
Limits an element's width to a specific fraction of its parent container.

| Class            | Value (%)  | Fraction |
|:-----------------|:-----------|:---------|
| `max-inline-1-6` | `16.6666%` | 1/6      |
| `max-inline-1-5` | `20%`      | 1/5      |
| `max-inline-1-4` | `25%`      | 1/4      |
| `max-inline-1-3` | `33.3333%` | 1/3      |
| `max-inline-2-5` | `40%`      | 2/5      |
| `max-inline-1-2` | `50%`      | 1/2      |
| `max-inline-3-5` | `60%`      | 3/5      |
| `max-inline-2-3` | `66.6666%` | 2/3      |
| `max-inline-3-4` | `75%`      | 3/4      |
| `max-inline-4-5` | `80%`      | 4/5      |
| `max-inline-5-6` | `83.3333%` | 5/6      |

### Example
```html
<!-- An article constrained for better readability -->
<article class="inline-full max-inline-3xl m-auto p-4">
  <h1>Readable Title</h1>
  <p>This content will never exceed 768px in width, even on large screens.</p>
</article>
```

## Min-Block Size (Min-Height)
Utilities for setting the minimum vertical dimension of an element using the `min-block-size` logical property. These classes ensure that elements never shrink below a specified height, regardless of their content.

### Core Keywords
Standard CSS constraints for vertical minimums.

| Class            | CSS Property           | Description                                                      |
|:-----------------|:-----------------------|:-----------------------------------------------------------------|
| `min-block-0`    | `min-block-size: 0`    | Resets the minimum height to zero.                               |
| `min-block-full` | `min-block-size: 100%` | Ensures the element is at least as tall as its parent container. |

### Viewport Limits
Essential for creating layouts that adapt to the user's screen size.

| Class              | CSS Property             | Value      | Description                                                                                                  |
|:-------------------|:-------------------------|:-----------|:-------------------------------------------------------------------------------------------------------------|
| `min-block-screen` | `min-block-size: 100dvh` | **100dvh** | Guaranteed to take at least the full height of the dynamic viewport, accounting for mobile browser toolbars. |

### Typography-Based Limits
Specialized logical units for precise alignment with text flow.

| Class          | CSS Property          | Description                                                                             |
|:---------------|:----------------------|:----------------------------------------------------------------------------------------|
| `min-block-lh` | `min-block-size: 1lh` | Ensures the minimum height is exactly equal to one **line-height** of the current font. |

### Small Utility Steps (Spatial Scale)
Micro-heights based on the [Spatial Scale](../tokens/layout#the-spatial-scale). Useful for placeholder boxes, dividers, or empty states.

| Class          | CSS Token      | Value      | Value |
|:---------------|:---------------|:-----------|:------|
| `min-block-1`  | `--b-space-1`  | `0.25rem`  | 4px   |
| `min-block-2`  | `--b-space-2`  | `0.5rem`   | 8px   |
| `min-block-3`  | `--b-space-3`  | `0.75rem`  | 12px  |
| `min-block-4`  | `--b-space-4`  | `1rem`     | 16px  |
| `min-block-5`  | `--b-space-5`  | `1.25rem`  | 20px  |
| `min-block-6`  | `--b-space-6`  | `1.5rem`   | 24px  |
| `min-block-7`  | `--b-space-7`  | `1.75rem`  | 28px  |
| `min-block-8`  | `--b-space-8`  | `2rem`     | 32px  |
| `min-block-9`  | `--b-space-9`  | `2.25rem`  | 36px  |
| `min-block-10` | `--b-space-10` | `2.5rem`   | 40px  |
| `min-block-11` | `--b-space-11` | `2.75rem`  | 44px  |
| `min-block-12` | `--b-space-12` | `3rem`     | 48px  |

### Macro Container Scale (T-Shirt Scale)
Large-scale minimum heights for major layout blocks like hero sections, sidebars, or large cards.

| Class           | CSS Token           | Value   | Value  |
|:----------------|:--------------------|:--------|:-------|
| `min-block-3xs` | `--b-container-3xs` | `16rem` | 256px  |
| `min-block-2xs` | `--b-container-2xs` | `18rem` | 288px  |
| `min-block-xs`  | `--b-container-xs`  | `20rem` | 320px  |
| `min-block-sm`  | `--b-container-sm`  | `24rem` | 384px  |
| `min-block-md`  | `--b-container-md`  | `28rem` | 448px  |
| `min-block-lg`  | `--b-container-lg`  | `32rem` | 512px  |
| `min-block-xl`  | `--b-container-xl`  | `36rem` | 576px  |
| `min-block-2xl` | `--b-container-2xl` | `42rem` | 672px  |
| `min-block-3xl` | `--b-container-3xl` | `48rem` | 768px  |
| `min-block-4xl` | `--b-container-4xl` | `56rem` | 896px  |
| `min-block-5xl` | `--b-container-5xl` | `64rem` | 1024px |
| `min-block-6xl` | `--b-container-6xl` | `72rem` | 1152px |
| `min-block-7xl` | `--b-container-7xl` | `80rem` | 1280px |

### Fractional Min-Heights
Ensures an element takes up at least a specific percentage of the vertical space.

| Class           | Value (%)  | Fraction |
|:----------------|:-----------|:---------|
| `min-block-1-6` | `16.6666%` | 1/6      |
| `min-block-1-5` | `20%`      | 1/5      |
| `min-block-1-4` | `25%`      | 1/4      |
| `min-block-1-3` | `33.3333%` | 1/3      |
| `min-block-2-5` | `40%`      | 2/5      |
| `min-block-1-2` | `50%`      | 1/2      |
| `min-block-3-5` | `60%`      | 3/5      |
| `min-block-2-3` | `66.6666%` | 2/3      |
| `min-block-3-4` | `75%`      | 3/4      |
| `min-block-4-5` | `80%`      | 4/5      |
| `min-block-5-6` | `83.3333%` | 5/6      |

### Example
```html
<!-- A hero section that is at least the height of the screen -->
<section class="min-block-screen flex items-center surface-ground">
  <div class="min-block-3xl surface-section p-8 shadow-lg">
    This card is at least 768px tall.
  </div>
</section>
```

## Max-Block Size (Max-Height)
Utilities for controlling the maximum vertical dimension of an element using the `max-block-size` logical property. These classes are essential for constraining height and enabling vertical overflow handling (scrolling).

### Core Keywords
Standard CSS behaviors for limiting vertical growth.

| Class            | CSS Property                  | Description                                                            |
|:-----------------|:------------------------------|:-----------------------------------------------------------------------|
| `max-block-none` | `max-block-size: none`        | Removes all maximum height constraints.                                |
| `max-block-full` | `max-block-size: 100%`        | Prevents the element from being taller than its parent container.      |
| `max-block-min`  | `max-block-size: min-content` | Element will not exceed the minimum height required by its content.    |
| `max-block-max`  | `max-block-size: max-content` | Element will not exceed the intrinsic maximum height of its content.   |
| `max-block-fit`  | `max-block-size: fit-content` | Element will not exceed the available space or its own content height. |

### Viewport Limits
Limits the height based on the visible browser area.

| Class              | CSS Property             | Value      | Description                                                                               |
|:-------------------|:-------------------------|:-----------|:------------------------------------------------------------------------------------------|
| `max-block-screen` | `max-block-size: 100dvh` | **100dvh** | Ensures the element never exceeds the current viewport height (aware of mobile toolbars). |

### Typography-Based Limits
Precise vertical constraints based on font metrics.

| Class          | CSS Property          | Description                                                                                                                |
|:---------------|:----------------------|:---------------------------------------------------------------------------------------------------------------------------|
| `max-block-lh` | `max-block-size: 1lh` | Limits the element's height to exactly **one line-height**. Useful for single-line text containers or decorative elements. |

### Container-Based Limits (T-Shirt Scale)
These utilities use the [Container Scale](../tokens/layout#container-widths). They are perfect for limiting the height of scrollable areas, such as long dropdown menus, side panels, or constrained card bodies.

| Class           | CSS Token           | Value (Rem) | Value  |
|:----------------|:--------------------|:------------|:-------|
| `max-block-3xs` | `--b-container-3xs` | `16rem`     | 256px  |
| `max-block-2xs` | `--b-container-2xs` | `18rem`     | 288px  |
| `max-block-xs`  | `--b-container-xs`  | `20rem`     | 320px  |
| `max-block-sm`  | `--b-container-sm`  | `24rem`     | 384px  |
| `max-block-md`  | `--b-container-md`  | `28rem`     | 448px  |
| `max-block-lg`  | `--b-container-lg`  | `32rem`     | 512px  |
| `max-block-xl`  | `--b-container-xl`  | `36rem`     | 576px  |
| `max-block-2xl` | `--b-container-2xl` | `42rem`     | 672px  |
| `max-block-3xl` | `--b-container-3xl` | `48rem`     | 768px  |
| `max-block-4xl` | `--b-container-4xl` | `56rem`     | 896px  |
| `max-block-5xl` | `--b-container-5xl` | `64rem`     | 1024px |
| `max-block-6xl` | `--b-container-6xl` | `72rem`     | 1152px |
| `max-block-7xl` | `--b-container-7xl` | `80rem`     | 1280px |

### Example
```html
<!-- A scrollable dropdown limited to a medium container height -->
<ul class="max-block-md overflow-y-auto surface-floating shadow-lg">
  <li>Very Long List Item 1</li>
  <li>Very Long List Item 2</li>
  <!-- ... more items ... -->
  <li>Very Long List Item 100</li>
</ul>
```

## Dual Sizing (Size)
Utilities for setting both `inline-size` and `block-size` simultaneously. These classes are shorthand for creating perfectly square elements or ensuring an element occupies a fixed area in both dimensions.

### Core Keywords
Standard CSS shorthand behaviors.

| Class       | CSS Properties                          | Intent                            |
|:------------|:----------------------------------------|:----------------------------------|
| `size-auto` | `inline-size: auto`, `block-size: auto` | Reset to natural dimensions.      |
| `size-full` | `inline-size: 100%`, `block-size: 100%` | Fill the entire parent container. |

### Viewport Squares
Creates a square based on the dynamic viewport height.

| Class         | Value               | Description                                         |
|:--------------|:--------------------|:----------------------------------------------------|
| `size-screen` | `100dvh` x `100dvh` | A perfect square matching the full viewport height. |

### Numeric Scale (Icon & Avatar Sizes)
These utilities map to the [Spatial Scale](../tokens/layout#the-spatial-scale) to ensure that your square elements (like icons) align perfectly with your margins, paddings, and grid.

| Class     | CSS Token      | Value (Rem) | Value |
|:----------|:---------------|:------------|:------|
| `size-0`  | `0`            | `0`         | 0px   |
| `size-1`  | `--b-space-1`  | `0.25rem`   | 4px   |
| `size-2`  | `--b-space-2`  | `0.5rem`    | 8px   |
| `size-3`  | `--b-space-3`  | `0.75rem`   | 12px  |
| `size-4`  | `--b-space-4`  | `1rem`      | 16px  |
| `size-5`  | `--b-space-5`  | `1.25rem`   | 20px  |
| `size-6`  | `--b-space-6`  | `1.5rem`    | 24px  |
| `size-7`  | `--b-space-7`  | `1.75rem`   | 28px  |
| `size-8`  | `--b-space-8`  | `2rem`      | 32px  |
| `size-9`  | `--b-space-9`  | `2.25rem`   | 36px  |
| `size-10` | `--b-space-10` | `2.5rem`    | 40px  |
| `size-11` | `--b-space-11` | `2.75rem`   | 44px  |
| `size-12` | `--b-space-12` | `3rem`      | 48px  |

### Specials
| Class     | Value | Intent                                |
|:----------|:------|:--------------------------------------|
| `size-px` | `1px` | Micro-elements or pixel-perfect dots. |

### Example
```html
<!-- A perfectly square avatar -->
<img 
  src="/avatar.jpg" 
  class="size-12 radius-full object-cover shadow-sm" 
  alt="User Avatar"
>

<!-- A standard icon size -->
<svg class="size-5 text-primary">...</svg>
```

## Constraints & Scales
All sizing utilities leverage three types of values:
1.  **Numeric Scale**: Fixed steps from our [Spatial Scale](../tokens/layout#the-spatial-scale) (e.g., `w-4`).
2.  **Percentage/Fractional**: Based on the [Fractions Scale](../tokens/layout#fractions) (e.g., `w-1-2`).
3.  **Global Constants**: Keywords like `full`, `screen`, `min`, `max`, `fit`, and `auto`.