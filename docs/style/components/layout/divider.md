# Divider Style API <VersionBadge module="style" />
Dividers are used to visually separate content within a layout. The component supports both horizontal and vertical orientations, various line styles, and embedded content (text or icons) with precise alignment controls.

## Anatomy
The divider uses a pseudo-element to draw the line, allowing the actual content wrapper to sit on top and mask the line using its background color.

| Class                  | Role             | Description                                                                                   |
|:-----------------------|:-----------------|:----------------------------------------------------------------------------------------------|
| `.b-divider`           | **Container**    | Root flex element. Requires `role="separator"` and `aria-orientation`.                        |
| `::before`             | **Visual Line**  | Absolute positioned pseudo-element that renders the actual border line.                       |
| `.b-divider__content`  | **Content Mask** | Wraps slotted content. Elevated via `z-index: 1` and uses a solid background to cut the line. |

## Modifiers

### 1. Layouts
Defines the axis of the divider.

| Class                           | Description                                                                   |
|:--------------------------------|:------------------------------------------------------------------------------|
| `.b-divider--layout-horizontal` | Block-level element (`width: 100%`). Line is drawn horizontally.              |
| `.b-divider--layout-vertical`   | Inline-flex element. Line is drawn vertically. Requires a parent with height. |

### 2. Line Types
Overrides `--b-divider-border-style`.

| Class                       | CSS Border Style |
|:----------------------------|:-----------------|
| `.b-divider--type-solid`    | `solid`          |
| `.b-divider--type-dashed`   | `dashed`         |
| `.b-divider--type-dotted`   | `dotted`         |
| `.b-divider--type-double`   | `double`         |
| `.b-divider--type-none`     | `none`           |

### 3. Alignments
Controls the placement of `.b-divider__content` along the main axis.

**For Horizontal Layouts:**
- `.b-divider--align-left` (`justify-content: flex-start`)
- `.b-divider--align-center` (`justify-content: center`)
- `.b-divider--align-right` (`justify-content: flex-end`)

**For Vertical Layouts:**
- `.b-divider--align-top` (`align-items: flex-start`)
- `.b-divider--align-center` (`align-items: center`)
- `.b-divider--align-bottom` (`align-items: flex-end`)

## Public API Tokens
Override these on a specific instance for one-off customizations.

### Structural Tokens
| Token                        | Default                   | Description                                         |
|:-----------------------------|:--------------------------|:----------------------------------------------------|
| `--b-divider-width`          | `var(--b-stroke-default)` | Thickness of the line.                              |
| `--b-divider-border-style`   | `solid`                   | CSS border style (controlled by type modifier).     |
| `--b-divider-border-color`   | `var(--b-border-subtle)`  | Color of the line.                                  |
| `--b-divider-margin-inline`  | `0`                       | Spacing on the left/right (for vertical spacing).   |
| `--b-divider-margin-block`   | `var(--b-space-4)`        | Spacing on the top/bottom (for horizontal spacing). |
| `--b-divider-padding-inline` | `var(--b-space-4)`        | Restricts content from hitting the absolute edges.  |

### Content Tokens
| Token                              | Default                       | Description                                                   |
|:-----------------------------------|:------------------------------|:--------------------------------------------------------------|
| `--b-divider-content-background`   | `var(--b-surface-section)`    | Masks the line behind the text. Must match parent background. |
| `--b-divider-content-color`        | `var(--b-text-primary)`       | Text color.                                                   |
| `--b-divider-content-padding`      | `var(--b-space-2)`            | Space between the text and the line.                          |
| `--b-divider-content-font-size`    | `var(--b-text-sm)`            | Typography sizing.                                            |
| `--b-divider-content-font-weight`  | `var(--b-font-weight-medium)` | Typography weight.                                            |

## Examples & Implementation

### Basic Dividers
Standard horizontal layout without content.

<div class="card flex-col items-center">
    <div>Above Content</div>
    <div class="b-divider b-divider--layout-horizontal b-divider--type-solid b-divider--align-center" role="separator" aria-orientation="horizontal"></div>
    <div>Below Content</div>
</div>

```html
<div>Above Content</div>
<div class="b-divider b-divider--layout-horizontal b-divider--type-solid b-divider--align-center" role="separator" aria-orientation="horizontal"></div>
<div>Below Content</div>
```

### With Content (Horizontal Alignment)
When passing content, the text automatically breaks the line based on `--b-divider-content-background`.

<div class="card flex-col">
    <div class="b-divider b-divider--layout-horizontal b-divider--type-solid b-divider--align-left b-divider--with-content" role="separator" aria-orientation="horizontal">
        <div class="b-divider__content">Left</div>
    </div>
    <div class="b-divider b-divider--layout-horizontal b-divider--type-solid b-divider--align-center b-divider--with-content" role="separator" aria-orientation="horizontal">
        <div class="b-divider__content">Center</div>
    </div>
    <div class="b-divider b-divider--layout-horizontal b-divider--type-solid b-divider--align-right b-divider--with-content" role="separator" aria-orientation="horizontal">
        <div class="b-divider__content">Right</div>
    </div>
</div>

```html
<div class="b-divider b-divider--layout-horizontal b-divider--type-solid b-divider--align-left b-divider--with-content" role="separator" aria-orientation="horizontal">
    <div class="b-divider__content">Left</div>
</div>
<div class="b-divider b-divider--layout-horizontal b-divider--type-solid b-divider--align-center b-divider--with-content" role="separator" aria-orientation="horizontal">
    <div class="b-divider__content">Center</div>
</div>
<div class="b-divider b-divider--layout-horizontal b-divider--type-solid b-divider--align-right b-divider--with-content" role="separator" aria-orientation="horizontal">
    <div class="b-divider__content">Right</div>
</div>
```

::: tip Background Matching
The `.b-divider__content` uses `var(--b-surface-section)` by default. If your divider is placed on a different background (like `var(--b-surface-base)`), override `--b-divider-content-background` so the cutout effect matches seamlessly.
:::

### Line Types
Modify the `--b-divider-border-style` using type classes.

<div class="card flex-col">
    <div class="b-divider b-divider--layout-horizontal b-divider--type-solid" role="separator"></div>
    <div class="b-divider b-divider--layout-horizontal b-divider--type-dashed" role="separator"></div>
    <div class="b-divider b-divider--layout-horizontal b-divider--type-dotted" role="separator"></div>
    <div class="b-divider b-divider--layout-horizontal b-divider--type-double" role="separator"></div>
</div>

```html
<div class="b-divider b-divider--layout-horizontal b-divider--type-solid" role="separator"></div>
<div class="b-divider b-divider--layout-horizontal b-divider--type-dashed" role="separator"></div>
<div class="b-divider b-divider--layout-horizontal b-divider--type-dotted" role="separator"></div>
<div class="b-divider b-divider--layout-horizontal b-divider--type-double" role="separator"></div>
```

### Vertical Layout
Vertical dividers require a flex parent or a defined height to stretch appropriately. Alignment modifiers control vertical positioning.

<div class="card items-center">
    <div>Panel 1</div>
    <div class="b-divider b-divider--layout-vertical b-divider--align-center" role="separator" aria-orientation="vertical">
        <div class="b-divider__content">OR</div>
    </div>
    <div>Panel 2</div>
</div>

```html
<div class="flex items-center">
    <div>Panel 1</div>
    <div class="b-divider b-divider--layout-vertical b-divider--align-center" role="separator" aria-orientation="vertical">
        <div class="b-divider__content">OR</div>
    </div>
    <div>Panel 2</div>
</div>
```