# Badge Style API <VersionBadge module="style" />
Badges are small status descriptors used to highlight item information. They feature a flexible token system for severities, sizes, and specialized overlay logic with a "cutout" ring effect.

## Anatomy
The component is lightweight and can be used as a standalone element or as an overlay.

### Standalone Badge

| Class      | Role          | Description                                                    |
|:-----------|:--------------|:---------------------------------------------------------------|
| `.b-badge` | **Container** | The root element. Sets dimensions, background, and typography. |

### Overlay Badge

| Class                         | Role          | Description                                                                        |
|:------------------------------|:--------------|:-----------------------------------------------------------------------------------|
| `.b-overlay-badge`            | **Wrapper**   | A relative container that anchors a badge to its top-right corner.                 |
| `.b-overlay-badge > .b-badge` | **Indicator** | The badge inside an overlay. Automatically positioned and given a protective ring. |

## Modifiers

### 1. Severities (Colors)
Mapped to the system's **Essence** matrix.

| Class                          | Background Token                      | Text Color Token                |
|:-------------------------------|:--------------------------------------|:--------------------------------|
| `.b-badge--severity-primary`   | `var(--b-primary-solid-background)`   | `var(--b-primary-solid-text)`   |
| `.b-badge--severity-secondary` | `var(--b-secondary-solid-background)` | `var(--b-secondary-solid-text)` |
| `.b-badge--severity-info`      | `var(--b-info-solid-background)`      | `var(--b-info-solid-text)`      |
| `.b-badge--severity-success`   | `var(--b-success-solid-background)`   | `var(--b-success-solid-text)`   |
| `.b-badge--severity-warn`      | `var(--b-warning-solid-background)`   | `var(--b-warning-solid-text)`   |
| `.b-badge--severity-danger`    | `var(--b-error-solid-background)`     | `var(--b-error-solid-text)`     |
| `.b-badge--severity-contrast`  | `var(--b-contrast-solid-background)`  | `var(--b-contrast-solid-text)`  |

### 2. Sizes
Standardized scales for height and font size.

| Class                   | Size Mapping      | Font Size Mapping   |
|:------------------------|:------------------|:--------------------|
| `.b-badge--size-small`  | `var(--b-size-4)` | `var(--b-text-2xs)` |
| `.b-badge--size-medium` | `var(--b-size-5)` | `var(--b-text-xs)`  |
| `.b-badge--size-large`  | `var(--b-size-6)` | `var(--b-text-sm)`  |
| `.b-badge--size-xlarge` | `var(--b-size-7)` | `var(--b-text-md)`  |

### 3. Shapes & States

- `.b-badge--rounded`: Forces a perfect pill or circle shape by setting border-radius to `--b-radius-full`.
- `.b-badge--dot`: Transforms the badge into a small fixed-size circle (`--b-size-2`) without content. Usually used in overlays.

## Public API Tokens

### 1. Active Mapping (Renderer API)
Override these on a specific instance for one-off customizations.

| Token                     | Default                                       |
|:--------------------------|:----------------------------------------------|
| `--b-badge-size`          | `var(--b-size-5)`                             |
| `--b-badge-font-size`     | `var(--b-text-xs)`                            |
| `--b-badge-background`    | `var(--b-primary-solid-background)`           |
| `--b-badge-color`         | `var(--b-primary-solid-text)`                 |
| `--b-badge-padding-x`     | `calc(var(--b-badge-size) / 3.5)`             |
| `--b-badge-border-radius` | `var(--b-radius-interactive)`                 |
| `--b-badge-font-family`   | `var(--b-font-family-base)`                   |
| `--b-badge-font-weight`   | `var(--b-font-weight-medium)`                 |
| `--b-badge-transition`    | `var(--b-duration-normal) var(--b-ease-base)` |

### 2. Overlay Tokens
Controls the behavior of badges inside a `.b-overlay-badge` wrapper.

| Token                          | Default                       | Description                     |
|:-------------------------------|:------------------------------|:--------------------------------|
| `--b-overlay-badge-offset-x`   | `5%`                          | Horizontal anchor point offset. |
| `--b-overlay-badge-offset-y`   | `5%`                          | Vertical anchor point offset.   |
| `--b-overlay-badge-ring-width` | `var(--b-stroke-strong)`      | Width of the protective cutout. |
| `--b-overlay-badge-ring-color` | `var(--b-surface-section)`    | Color of the protective cutout. |

## Examples & Implementation

### Basic Standalone
Standard labels with varying content lengths.

<div class="card">
    <span class="b-badge b-badge--severity-primary" role="status">1</span>
    <span class="b-badge b-badge--severity-secondary" role="status">2</span>
    <span class="b-badge b-badge--severity-info" role="status">3</span>
    <span class="b-badge b-badge--severity-success" role="status">4</span>
    <span class="b-badge b-badge--severity-warn" role="status">5</span>
    <span class="b-badge b-badge--severity-danger" role="status">6</span>
    <span class="b-badge b-badge--severity-contrast" role="status">7</span>
</div>

```html
<span class="b-badge b-badge--severity-primary" role="status">1</span>
<span class="b-badge b-badge--severity-secondary" role="status">2</span>
<span class="b-badge b-badge--severity-info" role="status">3</span>
<span class="b-badge b-badge--severity-success" role="status">4</span>
<span class="b-badge b-badge--severity-warn" role="status">5</span>
<span class="b-badge b-badge--severity-danger" role="status">6</span>
<span class="b-badge b-badge--severity-contrast" role="status">7</span>
```

### Size Variations
From small labels to extra-large status blocks.

<div class="card items-center">
    <span class="b-badge b-badge--size-small" role="status">1</span>
    <span class="b-badge b-badge--size-medium" role="status">2</span>
    <span class="b-badge b-badge--size-large" role="status">3</span>
    <span class="b-badge b-badge--size-xlarge" role="status">4</span>
</div>

```html
<span class="b-badge b-badge--size-small" role="status">1</span>
<span class="b-badge b-badge--size-medium" role="status">2</span>
<span class="b-badge b-badge--size-large" role="status">3</span>
<span class="b-badge b-badge--size-xlarge" role="status">4</span>
```

### Rounded & Dots
Pill shapes and notification indicators.

<div class="card flex-col items-center">
    <div class="flex gap-4">
        <span class="b-badge b-badge--severity-primary b-badge--rounded" role="status">1</span>
        <span class="b-badge b-badge--severity-secondary b-badge--rounded" role="status">2</span>
        <span class="b-badge b-badge--severity-success b-badge--rounded" role="status">3</span>
        <span class="b-badge b-badge--severity-info b-badge--rounded" role="status">4</span>
    </div>
    <div class="flex gap-4">
        <span class="b-badge b-badge--severity-primary b-badge--dot" role="status"></span>
        <span class="b-badge b-badge--severity-secondary b-badge--dot" role="status"></span>
        <span class="b-badge b-badge--severity-success b-badge--dot" role="status"></span>
        <span class="b-badge b-badge--severity-info b-badge--dot" role="status"></span>
    </div>
</div>

```html
<!-- Rounded -->
<span class="b-badge b-badge--severity-primary b-badge--rounded" role="status">1</span>
<span class="b-badge b-badge--severity-secondary b-badge--rounded" role="status">2</span>

<!-- Dot -->
<span class="b-badge b-badge--severity-primary b-badge--dot" role="status"></span>
<span class="b-badge b-badge--severity-secondary b-badge--dot" role="status"></span>
```

### Overlay Badges
Used to overlay indicators on top of other elements, like icons or buttons.

<div class="card">
    <div class="b-overlay-badge">
        <button class="b-button b-button--variant-outline b-button--icon-only">
            <span class="b-button__icon-wrapper">
                <svg class="b-button__icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
            </span>
        </button>
        <span class="b-badge b-badge--dot b-badge--severity-danger" role="status"></span>
    </div>
</div>

```html
<div class="b-overlay-badge">
    <button class="b-button b-button--variant-outline b-button--icon-only">
        <span class="b-button__icon-wrapper">
            <!-- Icon SVG -->
        </span>
    </button>
    <span class="b-badge b-badge--dot b-badge--severity-danger" role="status"></span>
</div>
```

::: tip Design Note
The **cutout ring** effect in overlays is achieved via `box-shadow`. If you place an overlay badge on a colored section, make sure to override `--b-overlay-badge-ring-color` to match your container background for a perfect blend.
:::