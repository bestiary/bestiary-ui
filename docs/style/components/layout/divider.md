# Divider Style API <VersionBadge module="style" />
A visual separator between content blocks. It supports horizontal and vertical orientations, multiple line styles, and customizable content alignment.

## Anatomy
The component follows a clean BEM structure. The line itself is generated via a pseudo-element `::before`, allowing the content to sit on top of it.

| Class                 | Role          | Description                                          |
|:----------------------|:--------------|:-----------------------------------------------------|
| `.b-divider`          | **Container** | The root element. Manages orientation and alignment. |
| `.b-divider__content` | **Content**   | Wrapper for text or icons placed inside the divider. |

## Modifiers

### 1. Layout (Orientation)
Defines the axis along which the divider is drawn.

| Class                           | Intent                                        |
|:--------------------------------|:----------------------------------------------|
| `.b-divider--layout-horizontal` | Horizontal line (Default).                    |
| `.b-divider--layout-vertical`   | Vertical line for separating inline elements. |

### 2. Alignment
Controls the position of the content inside the divider line.

**For Horizontal Layout:**
- `.b-divider--align-left`: Content at the start.
- `.b-divider--align-center`: Content in the middle (Default).
- `.b-divider--align-right`: Content at the end.

**For Vertical Layout:**
- `.b-divider--align-top`: Content at the top.
- `.b-divider--align-center`: Content in the center (Default).
- `.b-divider--align-bottom`: Content at the bottom.

### 3. Line Styles
Quickly switch the border style of the separator.

| Class                     | Style Token Mapping | Result                     |
|:--------------------------|:--------------------|:---------------------------|
| `.b-divider--type-solid`  | `solid`             | Continuous line (Default). |
| `.b-divider--type-dotted` | `dotted`            | Dotted line.               |
| `.b-divider--type-dashed` | `dashed`            | Dashed line.               |
| `.b-divider--type-double` | `double`            | Two parallel lines.        |

## Public API Tokens
The Divider component uses a set of local tokens for easy customization without breaking the layout logic.

### Line Configuration
| Token                      | Default                   | Description                       |
|:---------------------------|:--------------------------|:----------------------------------|
| `--b-divider-width`        | `var(--b-stroke-default)` | Thickness of the line.            |
| `--b-divider-border-style` | `solid`                   | Line style (solid, dashed, etc.). |
| `--b-divider-border-color` | `var(--b-border-subtle)`  | Color of the line.                |

### Spacing & Padding
| Token                        | Default            | Description                              |
|:-----------------------------|:-------------------|:-----------------------------------------|
| `--b-divider-margin-block`   | `var(--b-space-4)` | Vertical margin (for horizontal layout). |
| `--b-divider-padding-inline` | `var(--b-space-4)` | Space at the ends of the line.           |

### Content Styling
| Token                            | Default                    | Description                                   |
|:---------------------------------|:---------------------------|:----------------------------------------------|
| `--b-divider-content-background` | `var(--b-surface-section)` | Background behind the text (covers the line). |
| `--b-divider-content-color`      | `var(--b-text-primary)`    | Text color inside the divider.                |
| `--b-divider-content-padding`    | `var(--b-space-2)`         | Space between the line and the text.          |

## Examples & Implementation

### Basic Horizontal
A standard full-width separator.

<div class="card flex flex-col gap-0 text-justify">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam architecto asperiores blanditiis consectetur, dicta eveniet magnam nisi nobis omnis perspiciatis placeat porro possimus qui quia quos recusandae, reprehenderit vero.</p>
    <div class="b-divider b-divider--layout-horizontal" role="separator"></div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ducimus eligendi facere fugiat labore molestiae natus nihil non nostrum quas reiciendis sunt veritatis voluptas? Amet dolorum esse ipsa magnam vel.</p>
</div>

```html
<div class="b-divider b-divider--layout-horizontal" role="separator"></div>
```

### With Content & Alignment
Text placed at different positions along the line.

<div class="card flex flex-col">
    <div class="b-divider b-divider--layout-horizontal b-divider--align-left" role="separator">
        <div class="b-divider__content">Left Aligned</div>
    </div>
    <div class="b-divider b-divider--layout-horizontal b-divider--align-center" role="separator">
        <div class="b-divider__content">Center</div>
    </div>
    <div class="b-divider b-divider--layout-horizontal b-divider--align-right" role="separator">
        <div class="b-divider__content">Right Aligned</div>
    </div>
</div>

```html
<div class="b-divider b-divider--layout-horizontal b-divider--align-left" role="separator">
    <div class="b-divider__content">Left Aligned</div>
</div>
<div class="b-divider b-divider--layout-horizontal b-divider--align-center" role="separator">
    <div class="b-divider__content">Center</div>
</div>
<div class="b-divider b-divider--layout-horizontal b-divider--align-right" role="separator">
    <div class="b-divider__content">Right Aligned</div>
</div>
```

<div class="card justify-around" style="height: 200px;">
    <div class="b-divider b-divider--layout-vertical b-divider--align-top" role="separator">
        <div class="b-divider__content">Left Aligned</div>
    </div>
    <div class="b-divider b-divider--layout-vertical b-divider--align-center" role="separator">
        <div class="b-divider__content">Center</div>
    </div>
    <div class="b-divider b-divider--layout-vertical b-divider--align-bottom" role="separator">
        <div class="b-divider__content">Right Aligned</div>
    </div>
</div>

```html
<div class="b-divider b-divider--layout-vertical b-divider--align-top" role="separator">
    <div class="b-divider__content">Left Aligned</div>
</div>
<div class="b-divider b-divider--layout-vertical b-divider--align-center" role="separator">
    <div class="b-divider__content">Center</div>
</div>
<div class="b-divider b-divider--layout-vertical b-divider--align-bottom" role="separator">
    <div class="b-divider__content">Right Aligned</div>
</div>
```

### Line Types
Demonstrating different border styles.

<div class="card flex flex-col">
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

### Vertical Divider
Ideal for separating buttons in a toolbar or links in a footer.

<div class="card">
    <span>Home</span>
    <div class="b-divider b-divider--layout-vertical" role="separator"></div>
    <span>Docs</span>
    <div class="b-divider b-divider--layout-vertical" role="separator"></div>
    <span>Blog</span>
</div>

```html
<div class="flex items-center">
    <span>Home</span>
    <div class="b-divider b-divider--layout-vertical" role="separator"></div>
    <span>Docs</span>
    <div class="b-divider b-divider--layout-vertical" role="separator"></div>
    <span>Blog</span>
</div>
```

### Custom Styling (Token Overrides)
Override the line color and content background for specific sections.

<div class="card">
    <div class="b-divider b-divider--layout-horizontal" style="--b-divider-border-color: var(--b-primary-500); --b-divider-width: 2px;" role="separator">
        <div class="b-divider__content" style="--b-divider-content-color: var(--b-primary-600);">Custom Brand Divider</div>
    </div>
</div>

```html
<div class="b-divider b-divider--layout-horizontal" style="--b-divider-border-color: var(--b-primary-500); --b-divider-width: 2px;" role="separator">
    <div class="b-divider__content" style="--b-divider-content-color: var(--b-primary-600);">Custom Brand Divider</div>
</div>
```

::: tip Accessibility
The `role="separator"` attribute is automatically added to inform screen readers about the nature of the element. For horizontal dividers, `aria-orientation="horizontal"` is the browser default.
:::