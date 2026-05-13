# Button Style API <VersionBadge module="style" />
A highly customizable, performant interactive element. The button architecture is built to handle complex internal layouts (icons, labels, badges) while remaining strictly bound to the design system's tokens.

## 1. Anatomy (Classes)
The component uses a BEM-based structure to ensure consistent internal alignment and spacing.

| Class                     | Role              | Requirement                                                                  |
|:--------------------------|:------------------|:-----------------------------------------------------------------------------|
| `.b-button`               | **Root**          | The main container. Sets base layout, typography, and interactive logic.     |
| `.b-button__icon-wrapper` | **Icon Slot**     | Required if using an icon or loader. Handles spacing between icon and label. |
| `.b-button__icon`         | **Static Icon**   | Standard SVG element. Automatically sized via tokens.                        |
| `.b-button__loading-icon` | **Animated Icon** | Uses a built-in CSS keyframe animation for spinning.                         |
| `.b-button__label`        | **Content**       | The primary text container.                                                  |
| `.b-button__badge`        | **Annotation**    | Nested badge for counters. Styled via the Badge component.                   |

## 2. Modifiers

### Severities (Colors)
These classes map the button's color matrix to the active **Essence**.

| Class                           | Essence Role                               |
|:--------------------------------|:-------------------------------------------|
| `.b-button--severity-primary`   | Main branding actions (Default).           |
| `.b-button--severity-secondary` | Secondary or neutral actions.              |
| `.b-button--severity-success`   | Positive, completion, or "Go" actions.     |
| `.b-button--severity-info`      | Informational or neutral guidance.         |
| `.b-button--severity-warn`      | Cautions and medium-priority alerts.       |
| `.b-button--severity-danger`    | Destructive, error, or high-alert actions. |
| `.b-button--severity-contrast`  | High-contrast or inverted theme actions.   |

### Variants (Visual Weight)
Controls the emphasis level of the button.

| Class                        | Style       | Visual result                                     |
|:-----------------------------|:------------|:--------------------------------------------------|
| *(None)*                     | **Solid**   | Full background color. Highest emphasis.          |
| `.b-button--variant-outline` | **Outline** | Transparent background with a border.             |
| `.b-button--variant-text`    | **Text**    | No background or border. Subtle emphasis.         |
| `.b-button--variant-link`    | **Link**    | Behaves like a hyperlink with underline on hover. |

### Sizes
Standardized scales for height, padding, and font size.

| Class                    | Size Token        |
|:-------------------------|:------------------|
| `.b-button--size-small`  | `--b-button-sm-*` |
| `.b-button--size-medium` | `--b-button-md-*` |
| `.b-button--size-large`  | `--b-button-lg-*` |
| `.b-button--size-xlarge` | `--b-button-xl-*` |

## 3. Interactive States & Behaviors

### Dynamic States
The button responds to standard browser interactions and custom library states.

| Class / State        | Effect                                                                               |
|:---------------------|:-------------------------------------------------------------------------------------|
| `:hover`             | Switches background/border/text to the hover tokens of the current severity.         |
| `:active`            | Applies a `translateY(1px)` and a slight brightness reduction.                       |
| `:focus-visible`     | Applies the **Focus Ring** (width, style, color, and offset).                        |
| `:disabled`          | Reduces opacity to `0.5`, sets cursor to `not-allowed`, and blocks events.           |
| `.b-button--loading` | Disables pointer events and applies `contrast(0.9)`. The loader spins automatically. |

### Layout Modifiers
Controls the orientation and density of the component.

- `.b-button--raised`: Applies the system's `shadow-md` elevation.
- `.b-button--rounded`: Forces a perfect "pill" shape (`radius-full`).
- `.b-button--icon-only`: Squares the button and removes horizontal padding.
- `.b-button--icon-[top \| right \| bottom \| left]`: Sets the layout direction for the label and icon relative to each other.

## Public API Tokens
The Button component utilizes a sophisticated set of CSS variables categorized into three main layers: **Visual Presets**, **Severity Matrices**, and **Active Functional Tokens**.

## 1. Global Visual Presets
These tokens define the shared aesthetic properties of all buttons, regardless of their size or color.

| Token                          | Default Value                 | Description                                                          |
|:-------------------------------|:------------------------------|:---------------------------------------------------------------------|
| `--b-button-border-width`      | `var(--b-stroke-default)`     | Thickness of the button border.                                      |
| `--b-button-border-style`      | `solid`                       | CSS border-style for the container.                                  |
| `--b-button-border-radius`     | `var(--b-radius-interactive)` | Global corner rounding.                                              |
| `--b-button-gap`               | `var(--b-space-2)`            | Space between the icon and the label.                                |
| `--b-button-font-weight`       | `var(--b-body-weight)`        | Font weight of the button label.                                     |
| `--b-button-shadow`            | `var(--b-shadow-md)`          | Elevation shadow used when the `.b-button--raised` class is applied. |
| `--b-button-transition`        | `all 200ms ease`              | Transition timing and easing for interactions.                       |
| **Accessibility**              |                               |                                                                      |
| `--b-button-focus-ring-width`  | `var(--b-stroke-focus)`       | Thickness of the focus outline.                                      |
| `--b-button-focus-ring-style`  | `solid`                       | Style of the focus outline.                                          |
| `--b-button-focus-ring-offset` | `2px`                         | Distance between the button and the focus ring.                      |

## 2. Sizing Presets
These tokens define the dimensions for each of the four available size scales.

| Size             | Height Token           | Padding Token           | Font Size Token           |
|:-----------------|:-----------------------|:------------------------|:--------------------------|
| **Small (sm)**   | `--b-button-sm-height` | `--b-button-sm-padding` | `--b-button-sm-font-size` |
| **Medium (md)**  | `--b-button-md-height` | `--b-button-md-padding` | `--b-button-md-font-size` |
| **Large (lg)**   | `--b-button-lg-height` | `--b-button-lg-padding` | `--b-button-lg-font-size` |
| **X-Large (xl)** | `--b-button-xl-height` | `--b-button-xl-padding` | `--b-button-xl-font-size` |

## 3. Severity Matrices
Each severity (e.g., `primary`, `success`, `danger`) contains a matrix of tokens for every visual variant (**Solid**, **Outline**, **Text**, and **Link**).

### Color States Mapping
Every severity follows the same internal naming convention. For any given severity `{name}`, the following tokens are registered:

#### Solid Variant
| Token                                  | Description                           |
|:---------------------------------------|:--------------------------------------|
| `--b-button-{name}-background`         | Default solid background color.       |
| `--b-button-{name}-color`              | Text/icon color for solid background. |
| `--b-button-{name}-border-color`       | Border color for solid variant.       |
| `--b-button-{name}-hover-background`   | Background color on hover.            |
| `--b-button-{name}-hover-color`        | Text color on hover.                  |
| `--b-button-{name}-hover-border-color` | Border color on hover.                |

#### Outline Variant
| Token                                          | Description                       |
|:-----------------------------------------------|:----------------------------------|
| `--b-button-outline-{name}-background`         | Background (usually transparent). |
| `--b-button-outline-{name}-color`              | Text/icon color for outline.      |
| `--b-button-outline-{name}-border-color`       | Border color for outline.         |
| `--b-button-outline-{name}-hover-background`   | Background overlay on hover.      |
| `--b-button-outline-{name}-hover-color`        | Text color on hover.              |
| `--b-button-outline-{name}-hover-border-color` | Border color on hover.            |

#### Text & Link Variants
| Token                                     | Description                                    |
|:------------------------------------------|:-----------------------------------------------|
| `--b-button-text-{name}-color`            | Text color for the text-only variant.          |
| `--b-button-text-{name}-hover-background` | Subtle background tint on hover.               |
| `--b-button-text-{name}-hover-color`      | Text color for the text-only variant on hover. |
| `--b-button-link-{name}-color`            | Text color for the link variant.               |
| `--b-button-link-{name}-hover-color`      | Text color for the link variant on hover.      |

#### Contextual Effects
| Token                                     | Description                                |
|:------------------------------------------|:-------------------------------------------|
| `--b-button-{name}-shadow-color-channels` | OKLCH channels used for the raised shadow. |
| `--b-button-{name}-focus-ring-color`      | Color of the accessibility focus ring.     |

::: info Available Matrices
The above tokens exist for the following severities: `primary`, `secondary`, `success`, `info`, `warn`, `danger`, and `contrast`.
:::

## 4. Active Functional Tokens (The Renderer API)
These are the tokens consumed directly by the `.b-button` CSS class. Modifiers (`--size`, `--severity`, `--variant`) work by re-mapping the **Presets** to these **Active** variables.

**Override these via `style` on a specific instance for one-off customizations.**

### Dimension API
| Token                  | Source (Default)          |
|:-----------------------|:--------------------------|
| `--b-button-height`    | `--b-button-md-height`    |
| `--b-button-padding`   | `--b-button-md-padding`   |
| `--b-button-font-size` | `--b-button-md-font-size` |
| `--b-button-icon-size` | Equal to font-size.       |

### Visual Identity API
| Token Group              | Specific Tokens                                                                                                  |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------|
| **Active Solid**         | `--b-button-background`, `--b-button-color`, `--b-button-border-color`                                           |
| **Active Solid Hover**   | `--b-button-hover-background`, `--b-button-hover-color`, `--b-button-hover-border-color`                         |
| **Active Outline**       | `--b-button-outline-background`, `--b-button-outline-color`, `--b-button-outline-border-color`                   |
| **Active Outline Hover** | `--b-button-outline-hover-background`, `--b-button-outline-hover-color`, `--b-button-outline-hover-border-color` |
| **Active Text**          | `--b-button-text-color`, `--b-button-text-hover-background`, `--b-button-text-hover-color`                       |
| **Active Link**          | `--b-button-link-color`, `--b-button-link-hover-color`                                                           |
| **Active Effects**       | `--b-shadow-color-channels`, `--b-button-focus-ring-color`                                                       |

## 5. Token Lifecycle Note
When you apply a modifier like `.b-button--severity-success`, the CSS engine performs a "Mapping Injection":
1. It takes values from the **Success Severity Matrix**.
2. It assigns them to the **Active Functional Tokens**.
3. The **Base Renderer** uses these active tokens to draw the button on the screen.

## Examples & Implementation
This section demonstrates the manual HTML implementation of the Button component. For the best experience, it is recommended to use these structures alongside the global `@bestiary-ui/style` package.

## Basic
A standard button consists of the `.b-button` root and a `.b-button__label` span. It defaults to the **Primary** severity and **Medium** size.

<div class="card">
    <button class="b-button">
        <span class="b-button__label">Submit</span>
    </button>
</div>

```html
<button class="b-button">
    <span class="b-button__label">Submit</span>
</button>
```

## Severity
Severities define the color context of the button, mapped to the current design essence.

<div class="card">
    <button class="b-button b-button--severity-primary"><span class="b-button__label">Primary</span></button>
    <button class="b-button b-button--severity-secondary"><span class="b-button__label">Secondary</span></button>
    <button class="b-button b-button--severity-success"><span class="b-button__label">Success</span></button>
    <button class="b-button b-button--severity-info"><span class="b-button__label">Info</span></button>
    <button class="b-button b-button--severity-warn"><span class="b-button__label">Warn</span></button>
    <button class="b-button b-button--severity-danger"><span class="b-button__label">Danger</span></button>
    <button class="b-button b-button--severity-contrast"><span class="b-button__label">Contrast</span></button>
</div>

```html
<button class="b-button b-button--severity-primary">...</button>
<button class="b-button b-button--severity-secondary">...</button>
<button class="b-button b-button--severity-success">...</button>
<button class="b-button b-button--severity-info">...</button>
<button class="b-button b-button--severity-warn">...</button>
<button class="b-button b-button--severity-danger">...</button>
<button class="b-button b-button--severity-contrast">...</button>
```

## Raised
Adds an elevation shadow using the dynamic Shadow Engine.

<div class="card">
    <button class="b-button b-button--severity-primary b-button--raised"><span class="b-button__label">Primary</span></button>
    <button class="b-button b-button--severity-secondary b-button--raised"><span class="b-button__label">Secondary</span></button>
    <button class="b-button b-button--severity-success b-button--raised"><span class="b-button__label">Success</span></button>
    <button class="b-button b-button--severity-info b-button--raised"><span class="b-button__label">Info</span></button>
    <button class="b-button b-button--severity-warn b-button--raised"><span class="b-button__label">Warn</span></button>
    <button class="b-button b-button--severity-danger b-button--raised"><span class="b-button__label">Danger</span></button>
    <button class="b-button b-button--severity-contrast b-button--raised"><span class="b-button__label">Contrast</span></button>
</div>

```html
<button class="b-button b-button--severity-primary b-button--raised"><span class="b-button__label">Primary</span></button>
<button class="b-button b-button--severity-secondary b-button--raised"><span class="b-button__label">Secondary</span></button>
<button class="b-button b-button--severity-success b-button--raised"><span class="b-button__label">Success</span></button>
<button class="b-button b-button--severity-info b-button--raised"><span class="b-button__label">Info</span></button>
<button class="b-button b-button--severity-warn b-button--raised"><span class="b-button__label">Warn</span></button>
<button class="b-button b-button--severity-danger b-button--raised"><span class="b-button__label">Danger</span></button>
<button class="b-button b-button--severity-contrast b-button--raised"><span class="b-button__label">Contrast</span></button>
```

## Rounded
Forces a "pill" shape using the maximum border-radius token.

<div class="card ">
    <button class="b-button b-button--rounded"><span class="b-button__label">Rounded</span></button>
</div>

```html
<button class="b-button b-button--rounded">...</button>
```

## Text
Subtle visual style without background or borders.

<div class="card">
    <button class="b-button b-button--severity-primary b-button--variant-text"><span class="b-button__label">Primary</span></button>
    <button class="b-button b-button--severity-secondary b-button--variant-text"><span class="b-button__label">Secondary</span></button>
    <button class="b-button b-button--severity-success b-button--variant-text"><span class="b-button__label">Success</span></button>
    <button class="b-button b-button--severity-info b-button--variant-text"><span class="b-button__label">Info</span></button>
    <button class="b-button b-button--severity-warn b-button--variant-text"><span class="b-button__label">Warn</span></button>
    <button class="b-button b-button--severity-danger b-button--variant-text"><span class="b-button__label">Danger</span></button>
    <button class="b-button b-button--severity-contrast b-button--variant-text"><span class="b-button__label">Contrast</span></button>
</div>

```html
<button class="b-button b-button--severity-primary b-button--variant-text"><span class="b-button__label">Primary</span></button>
<button class="b-button b-button--severity-secondary b-button--variant-text"><span class="b-button__label">Secondary</span></button>
<button class="b-button b-button--severity-success b-button--variant-text"><span class="b-button__label">Success</span></button>
<button class="b-button b-button--severity-info b-button--variant-text"><span class="b-button__label">Info</span></button>
<button class="b-button b-button--severity-warn b-button--variant-text"><span class="b-button__label">Warn</span></button>
<button class="b-button b-button--severity-danger b-button--variant-text"><span class="b-button__label">Danger</span></button>
<button class="b-button b-button--severity-contrast b-button--variant-text"><span class="b-button__label">Contrast</span></button>
```

## Outlined
Medium-emphasis style with a border and transparent background.

<div class="card">
    <button class="b-button b-button--severity-primary b-button--variant-outline"><span class="b-button__label">Primary</span></button>
    <button class="b-button b-button--severity-secondary b-button--variant-outline"><span class="b-button__label">Secondary</span></button>
    <button class="b-button b-button--severity-success b-button--variant-outline"><span class="b-button__label">Success</span></button>
    <button class="b-button b-button--severity-info b-button--variant-outline"><span class="b-button__label">Info</span></button>
    <button class="b-button b-button--severity-warn b-button--variant-outline"><span class="b-button__label">Warn</span></button>
    <button class="b-button b-button--severity-danger b-button--variant-outline"><span class="b-button__label">Danger</span></button>
    <button class="b-button b-button--severity-contrast b-button--variant-outline"><span class="b-button__label">Contrast</span></button>
</div>

```html
<button class="b-button b-button--severity-primary b-button--variant-outline"><span class="b-button__label">Primary</span></button>
<button class="b-button b-button--severity-secondary b-button--variant-outline"><span class="b-button__label">Secondary</span></button>
<button class="b-button b-button--severity-success b-button--variant-outline"><span class="b-button__label">Success</span></button>
<button class="b-button b-button--severity-info b-button--variant-outline"><span class="b-button__label">Info</span></button>
<button class="b-button b-button--severity-warn b-button--variant-outline"><span class="b-button__label">Warn</span></button>
<button class="b-button b-button--severity-danger b-button--variant-outline"><span class="b-button__label">Danger</span></button>
<button class="b-button b-button--severity-contrast b-button--variant-outline"><span class="b-button__label">Contrast</span></button>
```

## Link
Behaves like a hyperlink, often used for low-priority actions or navigation.

<div class="card">
    <button class="b-button b-button--severity-primary b-button--variant-link"><span class="b-button__label">Primary</span></button>
    <button class="b-button b-button--severity-secondary b-button--variant-link"><span class="b-button__label">Secondary</span></button>
    <button class="b-button b-button--severity-success b-button--variant-link"><span class="b-button__label">Success</span></button>
    <button class="b-button b-button--severity-info b-button--variant-link"><span class="b-button__label">Info</span></button>
    <button class="b-button b-button--severity-warn b-button--variant-link"><span class="b-button__label">Warn</span></button>
    <button class="b-button b-button--severity-danger b-button--variant-link"><span class="b-button__label">Danger</span></button>
    <button class="b-button b-button--severity-contrast b-button--variant-link"><span class="b-button__label">Contrast</span></button>
</div>

```html
<button class="b-button b-button--severity-primary b-button--variant-link"><span class="b-button__label">Primary</span></button>
<button class="b-button b-button--severity-secondary b-button--variant-link"><span class="b-button__label">Secondary</span></button>
<button class="b-button b-button--severity-success b-button--variant-link"><span class="b-button__label">Success</span></button>
<button class="b-button b-button--severity-info b-button--variant-link"><span class="b-button__label">Info</span></button>
<button class="b-button b-button--severity-warn b-button--variant-link"><span class="b-button__label">Warn</span></button>
<button class="b-button b-button--severity-danger b-button--variant-link"><span class="b-button__label">Danger</span></button>
<button class="b-button b-button--severity-contrast b-button--variant-link"><span class="b-button__label">Contrast</span></button>
```

## Sizes
Standardized scales for different density requirements.

<div class="card items-center">
    <button class="b-button b-button--size-small"><span class="b-button__label">Small</span></button>
    <button class="b-button b-button--size-medium"><span class="b-button__label">Medium</span></button>
    <button class="b-button b-button--size-large"><span class="b-button__label">Large</span></button>
    <button class="b-button b-button--size-xlarge"><span class="b-button__label">X-Large</span></button>
</div>

```html
<button class="b-button b-button--size-small">...</button>
<button class="b-button b-button--size-medium">...</button>
<button class="b-button b-button--size-large">...</button>
<button class="b-button b-button--size-xlarge">...</button>
```

## Icons
Buttons can contain icons. Use `.b-button__icon-wrapper` for proper alignment.

### Icon Only
Use `.b-button--icon-only` for perfectly square buttons.

<div class="card">
    <button class="b-button b-button--icon-only b-button--severity-primary">
        <span class="b-button__icon-wrapper">
            <svg class="b-button__icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
        </span>
    </button>
</div>

```html
<button class="b-button b-button--icon-only">
    <span class="b-button__icon-wrapper">
        <svg class="b-button__icon">...</svg>
    </span>
</button>
```

### Icon with Label
Control icon position using `.b-button--icon-[left|right|top|bottom]`.

<div class="card">
    <button class="b-button b-button--icon-left">
        <span class="b-button__icon-wrapper"><svg class="b-button__icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></span>
        <span class="b-button__label">Back</span>
    </button>
    <button class="b-button b-button--icon-right">
        <span class="b-button__label">Forward</span>
        <span class="b-button__icon-wrapper"><svg class="b-button__icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
    </button>
</div>

```html
<!-- Icon on the right -->
<button class="b-button b-button--icon-right">
    <span class="b-button__label">Forward</span>
    <span class="b-button__icon-wrapper">...</span>
</button>
```

## Loading
The `.b-button--loading` state disables interaction and displays a spinning indicator.

<div class="card">
    <button class="b-button b-button--loading" disabled aria-busy="true">
        <span class="b-button__icon-wrapper">
            <svg class="b-button__loading-icon" viewBox="0 0 24 24" width="24" height="24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" opacity="0.25"></circle>
                <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
            </svg>
        </span>
        <span class="b-button__label">Loading</span>
    </button>
</div>

```html
<button class="b-button b-button--loading" disabled>
    <span class="b-button__icon-wrapper">
        <svg class="b-button__loading-icon">...</svg>
    </span>
    <span class="b-button__label">Loading</span>
</button>
```

## Badge
Combining Button with the **Badge** component for counters.

<div class="card">
    <button class="b-button">
        <span class="b-button__label">Messages</span>
        <span class="b-button__badge b-badge b-badge--size-small b-badge--severity-info b-badge--shape-circle">8</span>
    </button>
</div>

```html
<button class="b-button">
    <span class="b-button__label">Messages</span>
    <span class="b-button__badge b-badge b-badge--size-small b-badge--severity-info b-badge--shape-circle">8</span>
</button>
```

