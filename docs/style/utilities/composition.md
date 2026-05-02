# Composition <VersionBadge module="style" />
Composition utilities are the building blocks of your layout's structure. They provide a comprehensive set of classes for **Flexbox** and **CSS Grid**, allowing you to orchestrate the relationship between parent containers and their children.

## Flexbox
Flexbox utilities manage the layout, alignment, and sizing of items within a flex container. These classes require the container to have `display: flex` or `display: inline-flex` applied.

### Flex Direction
Controls the direction of the main axis along which flex items are placed.

| Class              | CSS Property                     | Description                                          |
|:-------------------|:---------------------------------|:-----------------------------------------------------|
| `flex-row`         | `flex-direction: row`            | Items flow horizontally from start to end (default). |
| `flex-row-reverse` | `flex-direction: row-reverse`    | Items flow horizontally in reverse.                  |
| `flex-col`         | `flex-direction: column`         | Items flow vertically from top to bottom.            |
| `flex-col-reverse` | `flex-direction: column-reverse` | Items flow vertically in reverse.                    |

### Flex Wrap
Controls whether flex items are forced onto a single line or can wrap onto multiple lines.

| Class               | CSS Property              | Description                                    |
|:--------------------|:--------------------------|:-----------------------------------------------|
| `flex-wrap`         | `flex-wrap: wrap`         | Items wrap onto multiple lines if needed.      |
| `flex-wrap-reverse` | `flex-wrap: wrap-reverse` | Items wrap in reverse direction.               |
| `flex-nowrap`       | `flex-wrap: nowrap`       | Items are forced into a single line (default). |

### Flex Sizing (Shorthands)
Convenience classes to control how items grow, shrink, and occupy space.

| Class          | CSS Property     | Use Case                                                             |
|:---------------|:-----------------|:---------------------------------------------------------------------|
| `flex-1`       | `flex: 1 1 0%`   | Item expands to fill available space, ignoring initial size.         |
| `flex-auto`    | `flex: 1 1 auto` | Item expands to fill space, but respects its content's initial size. |
| `flex-initial` | `flex: 0 1 auto` | Item shrinks if needed, but doesn't grow. The browser default.       |
| `flex-none`    | `flex: none`     | Item is rigid. It will not grow or shrink.                           |

### Grow & Shrink
Individual control over the growing and shrinking logic.

| Class      | CSS Property     | Intent                                          |
|:-----------|:-----------------|:------------------------------------------------|
| `grow`     | `flex-grow: 1`   | Allow item to fill remaining space.             |
| `grow-0`   | `flex-grow: 0`   | Prevent item from growing.                      |
| `shrink`   | `flex-shrink: 1` | Allow item to shrink if container is too small. |
| `shrink-0` | `flex-shrink: 0` | Prevent item from shrinking (preserves width).  |

### Flex Basis
Sets the initial main size of a flex item before free space is distributed.

| Class        | Value     |
|:-------------|:----------|
| `basis-auto` | `auto`    |
| `basis-full` | `100%`    |
| `basis-1-2`  | `50%`     |
| `basis-3-4`  | `75%`     |
| `basis-1-3`  | `33.333%` |
| `basis-2-3`  | `66.666%` |
| `basis-1-4`  | `25%`     |

### Practical Example
Creating a classic "Media Object" (Icon + Text + Action).

```html
<div class="flex items-center gap-4 p-4 surface-section">
  <!-- Rigid icon -->
  <div class="flex-none size-10 bg-primary radius-md"></div>
  
  <!-- Content that fills available space -->
  <div class="flex-1">
    <h3 class="text-md font-bold">Flexbox Logic</h3>
    <p class="text-sm text-secondary">The text expands to fill the middle.</p>
  </div>
  
  <!-- Rigid action button -->
  <button class="flex-none b-btn">Edit</button>
</div>
```

## Grid Layout
Grid utilities provide a 2D layout system, controlling columns, rows, and the placement of items within them. To use these, the parent element must have the `grid` or `inline-grid` class applied.

### Grid Template Columns
Defines the column structure of the grid. Bestiary UI uses a standard 12-column system.

| Class               | CSS Property                                       |
|:--------------------|:---------------------------------------------------|
| `grid-cols-{n}`     | `grid-template-columns: repeat(n, minmax(0, 1fr))` |
| `grid-cols-none`    | `grid-template-columns: none`                      |
| `grid-cols-subgrid` | `grid-template-columns: subgrid`                   |

**Steps `{n}`:** `1` through `12`.

### Grid Template Rows
Defines the row structure. While columns are usually the primary layout driver, row templates are useful for fixed-height grids.

| Class               | CSS Property                                    |
|:--------------------|:------------------------------------------------|
| `grid-rows-{n}`     | `grid-template-rows: repeat(n, minmax(0, 1fr))` |
| `grid-rows-none`    | `grid-template-rows: none`                      |
| `grid-rows-subgrid` | `grid-template-rows: subgrid`                   |

**Steps `{n}`:** `1` through `6`.

### Grid Column (Placement)
Controls how many columns an item spans and where it starts/ends.

| Class            | CSS Property                   | Description                            |
|:-----------------|:-------------------------------|:---------------------------------------|
| `col-span-{n}`   | `grid-column: span n / span n` | Span across `{n}` columns.             |
| `col-span-full`  | `grid-column: 1 / -1`          | Occupy the **full width** of the grid. |
| `col-start-1`    | `grid-column-start: 1`         | Force start at the first grid line.    |
| `col-auto`       | `grid-column: auto`            | Standard browser placement.            |
| `col-start-auto` | `grid-column-start: auto`      | Standard auto start.                   |
| `col-end-auto`   | `grid-column-end: auto`        | Standard auto end.                     |

**Steps `{n}` for span:** `1` through `12`.

### Grid Row (Placement)
Controls how many rows an item spans.

| Class           | CSS Property                | Description                                  |
|:----------------|:----------------------------|:---------------------------------------------|
| `row-span-{n}`  | `grid-row: span n / span n` | Span across `{n}` rows.                      |
| `row-span-full` | `grid-row: 1 / -1`          | Occupy the **full height** of the container. |
| `row-start-1`   | `grid-row-start: 1`         | Force start at the first row line.           |

**Steps `{n}` for span:** `1` through `6`.

### Grid Auto Tracks & Flow
Manage implicitly-created tracks (when items overflow the defined template) and the automatic placement algorithm.

#### Auto Sizing
| Class            | CSS Property                        | Use Case                      |
|:-----------------|:------------------------------------|:------------------------------|
| `auto-cols-fr`   | `grid-auto-columns: minmax(0, 1fr)` | Default fractional sizing.    |
| `auto-cols-auto` | `grid-auto-columns: auto`           | Size based on content.        |
| `auto-rows-fr`   | `grid-auto-rows: minmax(0, 1fr)`    | Equal heights for extra rows. |

#### Auto Flow
| Class             | CSS Property | Description                                     |
|:------------------|:-------------|:------------------------------------------------|
| `grid-flow-row`   | `row`        | Fill rows, adding new rows as needed (Default). |
| `grid-flow-col`   | `column`     | Fill columns, adding new columns as needed.     |
| `grid-flow-dense` | `dense`      | Attempt to fill in "holes" earlier in the grid. |

### Practical Example: Dashboard Layout
A common pattern with a sidebar and a content grid.

```html
<div class="grid grid-cols-12 gap-4">
  <!-- Sidebar spans 3 columns -->
  <aside class="col-span-3 surface-section">Sidebar</aside>
  
  <!-- Main content spans 9 columns -->
  <main class="col-span-9 grid grid-cols-3 gap-4">
    <div class="col-span-2 bg-primary">Wide Widget</div>
    <div class="col-span-1 bg-secondary">Small Widget</div>
    <div class="col-span-full bg-contrast">Full Width Row</div>
  </main>
</div>
```

::: tip Subgrid
The `grid-cols-subgrid` class allows a child element to inherit the column/row definition from its parent grid. This is perfect for aligning items inside a card with the main page grid.
:::

## Gap (Gutters)
Gap utilities control the gutter space between items in both **Flex** and **Grid** layouts. Unlike margins, `gap` only applies the space *between* the elements, avoiding unnecessary offsets at the edges of the container.

### Global Gap
Sets both horizontal and vertical gutters simultaneously.

| Class     | Properties | Token           |
|:----------|:-----------|:----------------|
| `gap-{n}` | `gap`      | `--b-space-{n}` |

### Horizontal Gap (Inline)
Sets the gutter space between columns.

| Class       | CSS Property | Description                   |
|:------------|:-------------|:------------------------------|
| `gap-x-{n}` | `column-gap` | Space between items in a row. |

### Vertical Gap (Block)
Sets the gutter space between rows.

| Class       | CSS Property | Description                  |
|:------------|:-------------|:-----------------------------|
| `gap-y-{n}` | `row-gap`    | Space between stacked items. |

### The Scale Reference
Replace `{n}` in the classes above with any step from the [Spatial Scale](../tokens/layout#the-spatial-scale).

**Steps:** `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`.

| Step  | Pixels (16px base) | Example Class |
|:------|:-------------------|:--------------|
| `1`   | 4px                | `gap-1`       |
| `2`   | 8px                | `gap-2`       |
| `4`   | 16px               | `gap-4`       |
| `8`   | 32px               | `gap-8`       |
| `12`  | 48px               | `gap-12`      |

### Practical Examples

**1. Standard Grid with Uniform Gap**
```html
<div class="grid grid-cols-3 gap-4">
  <div class="surface-section p-4">Item 1</div>
  <div class="surface-section p-4">Item 2</div>
  <div class="surface-section p-4">Item 3</div>
</div>
```

**2. Flex Stack with Specific Vertical Spacing**
```html
<div class="flex flex-col gap-y-2">
  <button class="b-button">Action 1</button>
  <button class="b-button">Action 2</button>
</div>
```

**3. Mixed Axes**
```html
<div class="flex flex-wrap gap-x-6 gap-y-2">
  <!-- 24px space between items horizontally, 8px between wrapped lines -->
  <span>Tag 1</span>
  <span>Tag 2</span>
  <span>Tag 3</span>
</div>
```

::: tip Logical Note
While the classes use `x` and `y` for familiarity, they correctly map to the layout flow. In a standard row, `gap-x` is the space between items, regardless of whether the document is LTR or RTL.
:::

## Align (Cross Axis)
Alignment utilities control how items are positioned along the cross axis of their container. These classes work in both **Flexbox** and **Grid** layouts.

### Align Items
Controls the alignment of all items inside a single-line container. This is the most common way to vertically center content in a row.

| Class            | CSS Property              | Description                                    |
|:-----------------|:--------------------------|:-----------------------------------------------|
| `items-start`    | `align-items: flex-start` | Align items to the start of the cross axis.    |
| `items-end`      | `align-items: flex-end`   | Align items to the end of the cross axis.      |
| `items-center`   | `align-items: center`     | Center items along the cross axis.             |
| `items-baseline` | `align-items: baseline`   | Align items along their text baselines.        |
| `items-stretch`  | `align-items: stretch`    | Stretch items to fill the container (Default). |

### Align Self
Allows an individual child element to override the `align-items` value set by its parent.

| Class           | CSS Property             | Description                               |
|:----------------|:-------------------------|:------------------------------------------|
| `self-auto`     | `align-self: auto`       | Inherit alignment from parent (Default).  |
| `self-start`    | `align-self: flex-start` | Align this specific item to the start.    |
| `self-end`      | `align-self: flex-end`   | Align this specific item to the end.      |
| `self-center`   | `align-self: center`     | Center this specific item.                |
| `self-stretch`  | `align-self: stretch`    | Stretch this specific item.               |
| `self-baseline` | `align-self: baseline`   | Align this specific item to the baseline. |

### Align Content
Controls how **rows** (wrapped lines) are distributed within a multi-line container.

::: info Multi-line only
This property only has an effect when items wrap into multiple lines (e.g., `flex-wrap: wrap`) or in a Grid layout with multiple rows.
:::

| Class             | CSS Property                   | Description                                          |
|:------------------|:-------------------------------|:-----------------------------------------------------|
| `content-start`   | `align-content: flex-start`    | Pack lines at the start.                             |
| `content-end`     | `align-content: flex-end`      | Pack lines at the end.                               |
| `content-center`  | `align-content: center`        | Pack lines in the center.                            |
| `content-stretch` | `align-content: stretch`       | Stretch lines to take up remaining space.            |
| `content-between` | `align-content: space-between` | Distribute lines with equal space between them.      |
| `content-around`  | `align-content: space-around`  | Distribute lines with space around each line.        |
| `content-evenly`  | `align-content: space-evenly`  | Distribute lines with equal space around everything. |

### Practical Examples

**1. Vertical Centering in a Navbar**
```html
<nav class="flex items-center h-16 p-4 surface-section">
  <div class="size-8 bg-primary">Logo</div>
  <div class="ml-auto">Links</div>
</nav>
```

**2. Individual Override**
```html
<div class="flex items-start h-32 bg-surface-variant">
  <div class="p-4">I am at the Top</div>
  <!-- This item will be centered while others stay at the top -->
  <div class="self-center p-4 bg-primary">I am Centered</div>
</div>
```

**3. Multi-line Distribution**
```html
<div class="flex flex-wrap content-between h-64 border border-default">
  <!-- Lines of items will be pushed to the very top and very bottom -->
  <div class="w-full">Top Row</div>
  <div class="w-full">Bottom Row</div>
</div>
```

## Justify (Main Axis)
Justify utilities control how items are positioned along the main (inline) axis of their container. These classes work in both **Flexbox** and **Grid** layouts, with some specific behaviors for Grid.

### Justify Content
Controls how the browser distributes space between and around content items along the main axis of a container.

| Class             | CSS Property                     | Description                                          |
|:------------------|:---------------------------------|:-----------------------------------------------------|
| `justify-start`   | `justify-content: flex-start`    | Pack items at the start of the main axis (Default).  |
| `justify-end`     | `justify-content: flex-end`      | Pack items at the end of the main axis.              |
| `justify-center`  | `justify-content: center`        | Pack items in the center.                            |
| `justify-between` | `justify-content: space-between` | Distribute items with equal space between them.      |
| `justify-around`  | `justify-content: space-around`  | Distribute items with equal space around them.       |
| `justify-evenly`  | `justify-content: space-evenly`  | Distribute items with equal space around everything. |
| `justify-stretch` | `justify-content: stretch`       | Items stretch to fill the main axis (Grid only).     |

### Justify Items (Grid Only)
Controls the default alignment of all items inside their assigned grid areas along the inline (horizontal) axis.

| Class                   | CSS Property             | Description                                 |
|:------------------------|:-------------------------|:--------------------------------------------|
| `justify-items-start`   | `justify-items: start`   | Align items to the start of their area.     |
| `justify-items-end`     | `justify-items: end`     | Align items to the end of their area.       |
| `justify-items-center`  | `justify-items: center`  | Center items within their area.             |
| `justify-items-stretch` | `justify-items: stretch` | Stretch items to fill their area (Default). |

### Justify Self (Grid Only)
Allows an individual child element to override the `justify-items` value set by its parent grid container.

| Class                  | CSS Property            | Description                              |
|:-----------------------|:------------------------|:-----------------------------------------|
| `justify-self-auto`    | `justify-self: auto`    | Inherit alignment from parent (Default). |
| `justify-self-start`   | `justify-self: start`   | Align this specific item to the start.   |
| `justify-self-end`     | `justify-self: end`     | Align this specific item to the end.     |
| `justify-self-center`  | `justify-self: center`  | Center this specific item.               |
| `justify-self-stretch` | `justify-self: stretch` | Stretch this specific item.              |

### Practical Examples

**1. Centering a Button Group (Flex)**
```html
<div class="flex justify-center gap-4">
  <button class="b-btn">Cancel</button>
  <button class="b-btn is-solid">Save Changes</button>
</div>
```

**2. Space Between (Navbar Pattern)**
```html
<header class="flex justify-between items-center p-4">
  <div class="logo">Bestiary</div>
  <nav class="flex gap-4">
    <a>Home</a>
    <a>About</a>
  </nav>
</header>
```

**3. Centering an element inside a Grid Area**
```html
<div class="grid grid-cols-2 justify-items-stretch">
  <div class="bg-primary p-4">Full Width</div>
  <!-- This specific item will shrink to its content and center -->
  <div class="justify-self-center bg-secondary p-4">Centered Item</div>
</div>
```

## Place (Dual Axis Alignment)
Place utilities allow you to align items along both the horizontal and vertical axes simultaneously. These classes are shorthands for the corresponding `justify-*` and `align-*` properties.

### Place Items
Controls the alignment of all items inside their assigned grid areas or flex lines along **both axes**. This is the quickest way to perfectly center an element inside a container.

| Class                 | CSS Property           | Description                                    |
|:----------------------|:-----------------------|:-----------------------------------------------|
| `place-items-center`  | `place-items: center`  | Center items both horizontally and vertically. |
| `place-items-start`   | `place-items: start`   | Align items to the start of both axes.         |
| `place-items-end`     | `place-items: end`     | Align items to the end of both axes.           |
| `place-items-stretch` | `place-items: stretch` | Stretch items to fill their area on both axes. |

### Place Content
Controls how the browser distributes space between and around content items along **both axes** in a multi-line container.

| Class                   | CSS Property                   | Description                                  |
|:------------------------|:-------------------------------|:---------------------------------------------|
| `place-content-center`  | `place-content: center`        | Pack content in the center of the container. |
| `place-content-start`   | `place-content: start`         | Pack content at the start.                   |
| `place-content-end`     | `place-content: end`           | Pack content at the end.                     |
| `place-content-between` | `place-content: space-between` | Distribute space between items on both axes. |
| `place-content-around`  | `place-content: space-around`  | Distribute space around items on both axes.  |
| `place-content-evenly`  | `place-content: space-evenly`  | Distribute space evenly around all items.    |
| `place-content-stretch` | `place-content: stretch`       | Stretch content to fill the container.       |

### Place Self
Allows an individual element to override its parent's alignment settings on **both axes** at once.

| Class                | CSS Property          | Description                                |
|:---------------------|:----------------------|:-------------------------------------------|
| `place-self-auto`    | `place-self: auto`    | Inherit alignment from parent (Default).   |
| `place-self-center`  | `place-self: center`  | Center this specific item on both axes.    |
| `place-self-start`   | `place-self: start`   | Align this item to the start on both axes. |
| `place-self-end`     | `place-self: end`     | Align this item to the end on both axes.   |
| `place-self-stretch` | `place-self: stretch` | Stretch this item on both axes.            |

### Practical Examples

**1. The Ultimate Center (Grid)**
The fastest way to center anything perfectly in the middle of a container.

```html
<div class="grid place-items-center h-64 surface-section">
  <div class="size-12 bg-primary">I am perfectly centered</div>
</div>
```

**2. Uniform Grid Spacing**
Using `place-content` to distribute multiple rows/columns.

```html
<div class="grid grid-cols-2 place-content-between h-96">
  <div>Top Left</div>
  <div>Top Right</div>
  <div>Bottom Left</div>
  <div>Bottom Right</div>
</div>
```

**3. Individual Placement**
Overriding the container's rules for one specific element.

```html
<div class="grid grid-cols-3 place-items-start h-32">
  <div>Item 1</div>
  <!-- This item will move to the center-end (bottom-right in LTR) -->
  <div class="place-self-center-end">Item 2</div>
  <div>Item 3</div>
</div>
```

## Order
Order utilities control the visual order of items within a **Flex** or **Grid** container. By default, items are displayed in the same order as they appear in the source code (order 0). These classes allow you to reorder them regardless of their position in the DOM.

### Special Keywords
Shifting elements to the absolute start or end of the container.

| Class         | CSS Property  | Intent                              |
|:--------------|:--------------|:------------------------------------|
| `order-first` | `order: -999` | Force the item to appear **first**. |
| `order-last`  | `order: 999`  | Force the item to appear **last**.  |
| `order-none`  | `order: 0`    | Reset to the default source order.  |

### Numeric Scale
Bestiary UI provides a balanced scale for fine-grained control over element positioning.

#### Positive Scale
Items with higher values appear later in the flow.

| Class      | Value |
|:-----------|:------|
| `order-1`  | `1`   |
| `order-2`  | `2`   |
| `order-3`  | `3`   |
| `order-4`  | `4`   |
| `order-5`  | `5`   |
| `order-6`  | `6`   |
| `order-7`  | `7`   |
| `order-8`  | `8`   |
| `order-9`  | `9`   |
| `order-10` | `10`  |
| `order-11` | `11`  |
| `order-12` | `12`  |

#### Negative Scale
Items with lower (more negative) values appear earlier in the flow.

| Class       | Value |
|:------------|:------|
| `order-n1`  | `-1`  |
| `order-n2`  | `-2`  |
| `order-n3`  | `-3`  |
| `order-n4`  | `-4`  |
| `order-n5`  | `-5`  |
| `order-n6`  | `-6`  |
| `order-n7`  | `-7`  |
| `order-n8`  | `-8`  |
| `order-n9`  | `-9`  |
| `order-n10` | `-10` |
| `order-n11` | `-11` |
| `order-n12` | `-12` |

### Practical Example: Responsive Reordering
A common pattern where a "Call to Action" is visually placed first on mobile but last on desktop.

```html
<div class="flex flex-col md:flex-row">
  <div class="order-2 md:order-1">Main Article Content</div>
  <aside class="order-3 md:order-2">Related Links</aside>
  <button class="order-1 md:order-last b-btn is-solid">Buy Now</button>
</div>
```

::: warning Accessibility Note
The `order` property only affects the **visual representation**. It does not change the tab order or the order in which screen readers navigate the content. Always ensure that the logical structure of your HTML makes sense without CSS styles.
:::

## Usage Tip: Flex vs. Grid

- Use **Flexbox** (`flex`) for 1D layouts (either a row OR a column). Ideal for components like navbars, button groups, or simple lists.
- Use **Grid** (`grid`) for 2D layouts (rows AND columns simultaneously). Ideal for complex page structures, dashboard widgets, or photo galleries.