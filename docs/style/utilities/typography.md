# Typography <VersionBadge module="style" />
Typography utilities provide a wide range of classes for fine-tuning text presentation. While Bestiary UI components handle standard semantic roles, these utilities allow for rapid adjustments of font metrics, alignment, and decorative effects.

## Font Size
Font size utilities control the magnitude of your text. Bestiary UI uses a **paired system**: applying a size class automatically applies the optimal `line-height` defined in the [Typography Tokens](../design-tokens/typography).

| Class      | Font Size (Rem) | Pixels (16px base) | Leading (Line Height) |
|:-----------|:----------------|:-------------------|:----------------------|
| `text-2xs` | `0.625rem`      | 10px               | Paired Leading        |
| `text-xs`  | `0.75rem`       | 12px               | Paired Leading        |
| `text-sm`  | `0.875rem`      | 14px               | Paired Leading        |
| `text-md`  | `1rem`          | 16px               | Paired Leading        |
| `text-lg`  | `1.125rem`      | 18px               | Paired Leading        |
| `text-xl`  | `1.25rem`       | 20px               | Paired Leading        |
| `text-2xl` | `1.5rem`        | 24px               | Paired Leading        |
| `text-3xl` | `1.875rem`      | 30px               | Paired Leading        |
| `text-4xl` | `2.25rem`       | 36px               | Paired Leading        |
| `text-5xl` | `3rem`          | 48px               | Paired Leading        |
| `text-6xl` | `3.75rem`       | 60px               | Paired Leading        |
| `text-7xl` | `4.5rem`        | 72px               | Paired Leading        |
| `text-8xl` | `6rem`          | 96px               | Paired Leading        |
| `text-9xl` | `8rem`          | 128px              | Paired Leading        |

### Practical Example
Using font size utilities for a hero section header and subtext.

```html
<div class="flex flex-col gap-2">
  <h1 class="text-5xl font-bold">Main Heading</h1>
  <p class="text-lg text-secondary">
    Supporting description with optimized leading.
  </p>
  <span class="text-xs text-muted uppercase">Metadata Label</span>
</div>
```

::: tip Vertical Rhythm
Because these utilities include `line-height`, they are essential for maintaining a consistent vertical rhythm. You don't need to manually adjust margins to fix text "clrowding" when changing sizes.
:::

## Text Alignment
Text alignment utilities control the horizontal flow of text within its container. Bestiary UI uses **logical values** to ensure layouts remain consistent across different writing systems (LTR and RTL).

| Class          | CSS Property          | Description                                               |
|:---------------|:----------------------|:----------------------------------------------------------|
| `text-start`   | `text-align: start`   | Align text to the start edge (Left in LTR, Right in RTL). |
| `text-end`     | `text-align: end`     | Align text to the end edge (Right in LTR, Left in RTL).   |
| `text-center`  | `text-align: center`  | Center the text horizontally.                             |
| `text-justify` | `text-align: justify` | Stretch lines so that each line has equal width.          |

### Logical Alignment Note
Unlike `text-left` and `text-right`, the `text-start` and `text-end` classes respond to the direction of the text. This is the modern standard for global accessibility.

### Practical Example

```html
<div class="surface-section p-6 space-y-4">
  <h2 class="text-center text-xl font-bold">Centered Title</h2>
  <p class="text-start text-secondary">
    This paragraph aligns to the left in English, but will automatically 
    align to the right if the content direction is set to RTL.
  </p>
  <div class="text-end">
    <button class="b-btn">Action at the End</button>
  </div>
</div>
```

## Formatting & Style
These utilities control the visual presentation of text characters, their transformation, and how the browser's engine renders font edges.

### Text Transform
Control the capitalization of your text.

| Class         | CSS Property                 | Result                      |
|:--------------|:-----------------------------|:----------------------------|
| `uppercase`   | `text-transform: uppercase`  | ALL UPPERCASE TEXT          |
| `lowercase`   | `text-transform: lowercase`  | all lowercase text          |
| `capitalize`  | `text-transform: capitalize` | First Letter Of Each Word   |
| `normal-case` | `text-transform: none`       | Standard case (as in HTML). |

### Text Wrapping (Modern)
Bestiary UI leverages modern CSS properties to ensure your headings and paragraphs look professional without manual line breaks.

| Class          | CSS Property         | Best Use Case                                                                                      |
|:---------------|:---------------------|:---------------------------------------------------------------------------------------------------| 
| `text-wrap`    | `text-wrap: wrap`    | Standard multi-line wrapping (Default).                                                            |
| `text-nowrap`  | `text-wrap: nowrap`  | Force text to stay on a single line.                                                               |
| `text-balance` | `text-wrap: balance` | **Headings**: Automatically balances the length of lines to prevent single words on the last line. |
| `text-pretty`  | `text-wrap: pretty`  | **Paragraphs**: Optimized algorithm to prevent "orphans" (single words at the end of a block).     |

### Text Overflow & Truncation
Manage how text behaves when it exceeds the width of its container.

| Class           | Description                                                                                 |
|:----------------|:--------------------------------------------------------------------------------------------|
| `truncate`      | **The Ellipsis Shorthand**: Prevents wrapping, hides overflow, and adds a `...` at the end. |
| `text-ellipsis` | Applies `text-overflow: ellipsis` (requires `overflow: hidden`).                            |
| `text-clip`     | Clips the text exactly at the edge of the container.                                        |

### Font Smoothing (Antialiasing)
Control how fonts are rendered on different operating systems, particularly macOS.

| Class                  | Description                                                                                               |
|:-----------------------|:----------------------------------------------------------------------------------------------------------|
| `antialiased`          | Renders text using grayscale antialiasing. Makes light text on dark backgrounds look thinner and crisper. |
| `subpixel-antialiased` | The browser's default subpixel rendering. Often looks "heavier" or bolder on high-resolution screens.     |

### Practical Examples

**1. Using Text Balance for Headlines**
```html
<!-- Without balance, "World" might be on the last line alone. 
     With balance, both lines will have equal length. -->
<h2 class="text-3xl font-bold text-balance">
  Welcome to the Future of Modular Web Development World
</h2>
```

**2. The Truncate Shorthand**
```html
<div class="inline-xs truncate text-secondary">
  This is a very long string of text that will be truncated with dots.
</div>
```

**3. Refining Dark Mode Text**
```html
<div class="surface-contrast p-4 antialiased text-md">
  This light text looks cleaner on a dark background thanks to grayscale antialiasing.
</div>
```

## Text Decoration
Utilities for styling text decorations such as underlines and line-throughs. These classes offer granular control over the appearance and behavior of decorative lines.

### Decoration Lines
Sets the type of line decoration to use.

| Class          | CSS Property                         | Description                                   |
|:---------------|:-------------------------------------|:----------------------------------------------|
| `underline`    | `text-decoration-line: underline`    | Add an underline to the text.                 |
| `overline`     | `text-decoration-line: overline`     | Add a line above the text.                    |
| `line-through` | `text-decoration-line: line-through` | Draw a line through the text (strikethrough). |
| `no-underline` | `text-decoration-line: none`         | Remove any text decoration.                   |

### Decoration Styles
Defines the visual style of the decoration line.

| Class               | CSS Property | Visual Style                        |
|:--------------------|:-------------|:------------------------------------|
| `decoration-solid`  | `solid`      | Continuous straight line (Default). |
| `decoration-double` | `double`     | Two parallel lines.                 |
| `decoration-dotted` | `dotted`     | Series of dots.                     |
| `decoration-dashed` | `dashed`     | Series of short line segments.      |
| `decoration-wavy`   | `wavy`       | Sinusoidal wavy line.               |

### Decoration Thickness
Controls the weight of the decoration line. Bestiary UI maps these to the system's [Stroke Scale](../design-tokens/borders#stroke-weights) for consistency.

| Class             | Value                     | Intent                                     |
|:------------------|:--------------------------|:-------------------------------------------|
| `decoration-auto` | `auto`                    | Browser-defined thickness.                 |
| `decoration-1`    | `1px`                     | 1-pixel thin line.                         |
| `decoration-2`    | `2px`                     | 2-pixel standard line.                     |
| `decoration-sm`   | `var(--b-stroke-default)` | Matches the system's default border width. |

### Semantic Colors
Decoration colors are bound to the active [Essence](../tokens/semantic-contract#block-2-essence). This ensures that an underlined "Error" message automatically uses the correct red hue from your current theme.

| Class                | Maps to           | Class                 | Maps to            |
|:---------------------|:------------------|:----------------------|:-------------------|
| `decoration-primary` | `Primary Essence` | `decoration-warning`  | `Warning Essence`  |
| `decoration-success` | `Success Essence` | `decoration-info`     | `Info Essence`     |
| `decoration-error`   | `Error Essence`   | `decoration-contrast` | `Contrast Essence` |

### Underline Offset
Improves legibility by moving the underline further away from the text baseline. This prevents the line from cutting through "descenders" (the tails of letters like **g, y, p, q, j**).

| Class                   | Value  | Typical Usage                  |
|:------------------------|:-------|:-------------------------------|
| `underline-offset-auto` | `auto` | Default browser spacing.       |
| `underline-offset-1`    | `1px`  | Subtle nudge for small text.   |
| `underline-offset-2`    | `2px`  | Standard offset for body text. |
| `underline-offset-4`    | `4px`  | Generous space for headings.   |

### Practical Examples

**1. Semantic Link with Wavy Underline**
```html
<a href="#" class="underline decoration-wavy decoration-primary underline-offset-2">
  Click here to learn more
</a>
```

**2. Struck-through Discount Price**
```html
<span class="text-secondary line-through decoration-error decoration-1">
  $99.00
</span>
<span class="text-xl font-bold ml-2">$49.00</span>
```

**3. Elegant Heading with Offset**
```html
<h2 class="text-2xl underline decoration-sm underline-offset-4">
  Architectural Design
</h2>
```

## Text Control (Wrapping & Breaking)
Text control utilities manage how the browser handles white space and word breaking within an element. These classes are essential for building robust layouts that don't break when encountering long strings or user-generated content.

### White Space
Controls how white space inside an element is handled.

| Class                 | CSS Property            | Description                                                                              |
|:----------------------|:------------------------|:-----------------------------------------------------------------------------------------|
| `whitespace-nowrap`   | `white-space: nowrap`   | Text will never wrap to the next line. Useful for buttons or horizontal labels.          |
| `whitespace-normal`   | `white-space: normal`   | Standard wrapping behavior. Newlines and spaces are collapsed.                           |
| `whitespace-pre-wrap` | `white-space: pre-wrap` | Preserves both sequences of white space and newline characters, but wraps text normally. |

### Word Breaking
Determines how words should be broken when they exceed the width of their container.

| Class          | CSS Property                | Description                                                                                                    |
|:---------------|:----------------------------|:---------------------------------------------------------------------------------------------------------------|
| `break-words`  | `overflow-wrap: break-word` | **The Recommended Way**: Breaks long words or URLs only if they would otherwise overflow the container.        |
| `break-all`    | `word-break: break-all`     | **Aggressive**: Breaks words at any character to prevent overflow. Ideal for hashes, IDs, or long hex strings. |
| `break-normal` | `overflow-wrap: normal`     | Resets breaking behavior to browser defaults.                                                                  |

### Practical Examples

**1. Preventing Button Text Wrap**
```html
<button class="b-btn whitespace-nowrap">
  This Label Will Stay In One Line
</button>
```

**2. Handling Long URLs in Comments**
```html
<div class="inline-xs surface-section p-4 break-words">
  Check this out: https://bestiary-ui.com/very/long/url/path/that/might/break/your/ui
</div>
```

**3. Preserving User Formatting**
```html
<p class="whitespace-pre-wrap text-secondary">
  This text
     preserves 
  spaces and newlines.
</p>
```

::: tip Layout Integrity
Always use **`break-words`** on containers that display dynamic data (like chat messages or user bios) to prevent long strings from breaking your grid or flex layouts.
:::

## Text Shadow (Elevation)
Text shadow utilities provide visual depth and improve readability of text on complex backgrounds. They leverage the dynamic **Shadow Engine**, separating the **geometry** (size and spread) from the **color context**.

### 1. Shadow Geometry (Sizes)
These classes apply the physical shadow offsets and blurs.

| Class              | Intensity    | Description                                           |
|:-------------------|:-------------|:------------------------------------------------------|
| `text-shadow-none` | None         | Removes any text shadow.                              |
| `text-shadow-2xs`  | Ultra Subtle | Micro-depth, perfect for slightly improving contrast. |
| `text-shadow-xs`   | Extra Small  | Subtle lift for labels or UI descriptors.             |
| `text-shadow-sm`   | Small        | Standard lift for headers.                            |
| `text-shadow-md`   | Medium       | Noticeable depth for prominent hero text.             |
| `text-shadow-lg`   | Large        | High-impact, multi-layered cinematic shadow.          |

### 2. Shadow Color Context
By default, shadows use the current context's channels. You can use these "hooks" to explicitly change the hue of the text shadow to match your branding or status.

#### Semantic Hooks
These classes update the `--b-text-shadow-color-channels` variable based on your [Essence](../tokens/semantic-contract#block-2-essence).

| Class                   | Maps to           |
|:------------------------|:------------------|
| `text-shadow-primary`   | Primary Essence   | 
| `text-shadow-secondary` | Secondary Essence | 
| `text-shadow-success`   | Success Essence   | 
| `text-shadow-danger`    | **Error** Essence |
| `text-shadow-warning`   | Warning Essence   |
| `text-shadow-info`      | Info Essence      |
| `text-shadow-contrast`  | Contrast Essence  |

#### Literal Colors
Fixed color contexts that do not change with the essence.

| Class               | Value                        |
|:--------------------|:-----------------------------|
| `text-shadow-white` | Force white shadow channels. |
| `text-shadow-black` | Force black shadow channels. |

### Usage Logic: The "Hook & Apply" Pattern
To apply a colored shadow, you should combine a **Geometry** class with a **Color Context** class.

```html
<!-- A large shadow with primary color tint -->
<h1 class="text-shadow-lg text-shadow-primary">
  Bestiary UI
</h1>

<!-- A subtle shadow with fixed black channels -->
<p class="text-shadow-xs text-shadow-black text-white">
  Legibility on busy backgrounds
</p>
```

::: tip Dynamic Hue-Inheritance
If you don't provide a color context class, the shadow will inherit the `--b-text-shadow-color-channels` from its parent. This allows you to set the shadow hue once for an entire section.
:::

## Lists
Utilities for controlling the markers and the positioning of list elements (`<ul>`, `<ol>`).

### List Style Type
Sets the type of marker (bullet, number, or none) for the list.

| Class          | CSS Property               | Visual Result                                            |
|:---------------|:---------------------------|:---------------------------------------------------------|
| `list-none`    | `list-style-type: none`    | **No markers**. Ideal for navigation menus and sidebars. |
| `list-disc`    | `list-style-type: disc`    | Standard solid bullet points (•).                        |
| `list-decimal` | `list-style-type: decimal` | Standard decimal numbering (1, 2, 3...).                 |

### List Position
Determines whether the list marker appears inside or outside the content flow.

| Class          | CSS Property | Description                                                         |
|:---------------|:-------------|:--------------------------------------------------------------------|
| `list-inside`  | `inside`     | The marker is part of the text block and moves with the first line. |
| `list-outside` | `outside`    | The marker stays outside the content area (browser default).        |

### Practical Examples

**1. Clean Navigation Menu**
Common pattern for headers or footers where bullets must be removed.

```html
<ul class="list-none flex gap-4">
  <li><a href="/">Home</a></li>
  <li><a href="/docs">Docs</a></li>
  <li><a href="/blog">Blog</a></li>
</ul>
```

**2. Standard Article List**
Using disc markers with specific spacing.

```html
<article class="surface-section p-6">
  <h3 class="text-lg font-bold mb-4">Features</h3>
  <ul class="list-disc list-outside ml-6 space-y-2">
    <li>Fully typed CSS Houdini tokens.</li>
    <li>Zero-specificity primitives.</li>
    <li>Atomic-Token-Component architecture.</li>
  </ul>
</article>
```

::: tip Vertical Spacing
To add space between list items, combine these utilities with **Space Between** classes like `space-y-2` (from [Spacing](./spacing#space-between)).
:::

## General Typography
These utilities provide comprehensive control over font families, weights, spacing, and advanced layout behaviors like line clamping.

### Font Families
Switch between the primary font stacks defined in your theme.

| Class          | Token                     | Description                              |
|:---------------|:--------------------------|:-----------------------------------------|
| `font-sans`    | `--b-font-family-base`    | Standard sans-serif stack for body text. |
| `font-display` | `--b-font-family-display` | Optimized stack for large headings.      |
| `font-mono`    | `--b-font-family-mono`    | Monospaced stack for code and data.      |

### Font Weights & Styles
Control the thickness and posture of the font.

| Class         | Weight | Class           | Weight |
|:--------------|:-------|:----------------|:-------|
| `font-light`  | 300    | `font-semibold` | 600    |
| `font-normal` | 400    | `font-bold`     | 700    |
| `font-medium` | 500    | `font-black`    | 900    |

- **Styles**: Use `italic` to italicize text or `not-italic` to reset to normal.

### Letter Spacing (Tracking)
Adjust the horizontal density of characters.

| Class              | Token Mapping                |
|:-------------------|:-----------------------------|
| `tracking-tighter` | `--b-letter-spacing-tighter` |
| `tracking-tight`   | `--b-letter-spacing-tight`   |
| `tracking-normal`  | `--b-letter-spacing-normal`  |
| `tracking-wide`    | `--b-letter-spacing-wide`    |
| `tracking-widest`  | `--b-letter-spacing-widest`  |

### Line Height (Leading)
Set the vertical distance between lines of text.

| Class             | Token                     | Value   |
|:------------------|:--------------------------|:--------|
| `leading-none`    | `--b-line-height-none`    | `1`     |
| `leading-tight`   | `--b-line-height-tight`   | `1.25`  |
| `leading-normal`  | `--b-line-height-normal`  | `1.5`   |
| `leading-relaxed` | `--b-line-height-relaxed` | `1.625` |
| `leading-loose`   | `--b-line-height-loose`   | `2`     |

### Line Clamp (Text Truncation)
Limit text to a specific number of lines using `-webkit-box` logic.

| Class             | Effect                  |
|:------------------|:------------------------|
| `line-clamp-1`    | Truncate after 1 line.  |
| `line-clamp-2`    | Truncate after 2 lines. |
| `line-clamp-3`    | Truncate after 3 lines. |
| `line-clamp-6`    | Truncate after 6 lines. |
| `line-clamp-none` | Remove clamping.        |

#### Custom Line Clamp
You can use the generic `line-clamp` class along with a CSS variable for any custom number of lines:
```html
<p class="line-clamp" style="--b-line-clamp: 7;">
  This text will truncate after 7 lines.
</p>
```

### Numeric & Content Helpers
Specialized utilities for data presentation and pseudo-elements.

- **`tabular-nums`**: Sets all numbers to the same width (essential for alignment in price lists or tables).
- **`font-features-case`**: Enables "case-sensitive forms" feature (improves vertical alignment of punctuation with all-caps text).
- **`content-empty`**: Quickly sets `content: ""` (useful for decorative pseudo-elements like `::before`).

### Practical Example: Dashboard Feed Item

```html
<div class="surface-section p-4 space-y-2">
  <div class="flex justify-between">
    <h4 class="font-display font-bold text-md tracking-tight">Order Updated</h4>
    <span class="tabular-nums text-sm text-secondary">#4,200.50</span>
  </div>
  <p class="line-clamp-2 leading-relaxed text-secondary text-sm">
    This is a long notification message that describes exactly what happened 
    with the order, but we want to keep it short in the feed.
  </p>
</div>
```

## Usage Philosophy

Bestiary UI is **component-driven**. In most cases, you should use typography tokens within your components (e.g., `--b-h1-size`). Use these utility classes for:
- One-off adjustments in custom layouts.
- Prototyping without writing new CSS rules.
- Fine-tuning contrast or readability in specific contexts.