# Badge Style API <VersionBadge module="style" />
Badges are small status descriptors used to highlight item information. They feature a flexible token system for severities, sizes, and specialized overlay logic with a "cutout" ring effect.

## Anatomy
The component is lightweight and can be used as a standalone span or as an overlay.

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

| Class                          | Essence Mapping                |
|:-------------------------------|:-------------------------------|
| `.b-badge--severity-primary`   | Main branding (Default).       |
| `.b-badge--severity-secondary` | Neutral / Secondary context.   |
| `.b-badge--severity-success`   | Positive / Completed status.   |
| `.b-badge--severity-info`      | Informational guidance.        |
| `.b-badge--severity-warn`      | Cautions and alerts.           |
| `.b-badge--severity-danger`    | Critical / Error states.       |
| `.b-badge--severity-contrast`  | High-contrast (inverted) mode. |

### 2. Sizes
Standardized scales for height and font size.

| Class                   | Size Token       |
|:------------------------|:-----------------|
| `.b-badge--size-small`  | `--b-badge-sm-*` |
| `.b-badge--size-medium` | `--b-badge-md-*` |
| `.b-badge--size-large`  | `--b-badge-lg-*` |
| `.b-badge--size-xlarge` | `--b-badge-xl-*` |

### 3. Shapes & States
- `.b-badge--rounded`: Forces a perfect "pill" or "circle" shape using `--b-radius-full`.
- `.b-badge--dot`: Transforms the badge into a small fixed-size (`0.5rem`) circle without content. Usually used in overlays.

## Public API Tokens

### 1. Active Mapping (Renderer API)
Override these on a specific instance for one-off customizations.

| Token                     | Default                           |
|:--------------------------|:----------------------------------|
| `--b-badge-size`          | `var(--b-badge-md-size)`          |
| `--b-badge-font-size`     | `var(--b-badge-md-font-size)`     |
| `--b-badge-background`    | *Current Severity Background*     |
| `--b-badge-color`         | *Current Severity Text Color*     |
| `--b-badge-padding-x`     | `calc(var(--b-badge-size) / 3.5)` |
| `--b-badge-border-radius` | `var(--b-radius-interactive)`     |
| `--b-badge-transition`    | `200ms var(--b-ease-base)`        |

### 2. Sizing Presets
Global scale for all badges of a certain size.

| Token                              | Mapping                                 |
|:-----------------------------------|:----------------------------------------|
| `--b-badge-sm-size` / `-font-size` | `var(--b-size-4)` / `var(--b-text-2xs)` |
| `--b-badge-md-size` / `-font-size` | `var(--b-size-5)` / `var(--b-text-xs)`  |
| `--b-badge-lg-size` / `-font-size` | `var(--b-size-6)` / `var(--b-text-md)`  |
| `--b-badge-xl-size` / `-font-size` | `var(--b-size-7)` / `var(--b-text-lg)`  |

### 3. Overlay Tokens
Controls the behavior of badges inside a `.b-overlay-badge` wrapper.

| Token                          | Description                     |
|:-------------------------------|:--------------------------------|
| `--b-overlay-badge-offset-x`   | Horizontal anchor point offset. |
| `--b-overlay-badge-offset-y`   | Vertical anchor point offset.   |
| `--b-overlay-badge-ring-width` | Width of the protective cutout. |
| `--b-overlay-badge-ring-color` | Color of the protective cutout. |

## Examples & Implementation

### Basic Standalone
Standard labels with varying content lengths.

<div class="card">
    <span class="b-badge b-badge--severity-primary">1</span>
    <span class="b-badge b-badge--severity-secondary">2</span>
    <span class="b-badge b-badge--severity-success">3</span>
    <span class="b-badge b-badge--severity-info">4</span>
    <span class="b-badge b-badge--severity-warn">5</span>
    <span class="b-badge b-badge--severity-danger">6</span>
    <span class="b-badge b-badge--severity-contrast">7</span>
</div>

```html
<span class="b-badge b-badge--severity-primary">1</span>
<span class="b-badge b-badge--severity-secondary">2</span>
<span class="b-badge b-badge--severity-success">3</span>
<span class="b-badge b-badge--severity-info">4</span>
<span class="b-badge b-badge--severity-warn">5</span>
<span class="b-badge b-badge--severity-danger">6</span>
<span class="b-badge b-badge--severity-contrast">7</span>
```

### Size Variations
From small labels to extra-large status blocks.

<div class="card items-center">
    <span class="b-badge b-badge--size-small">1</span>
    <span class="b-badge b-badge--size-medium">2</span>
    <span class="b-badge b-badge--size-large">3</span>
    <span class="b-badge b-badge--size-xlarge">4</span>
</div>

```html
<span class="b-badge b-badge--size-small">1</span>
<span class="b-badge b-badge--size-medium">2</span>
<span class="b-badge b-badge--size-large">3</span>
<span class="b-badge b-badge--size-xlarge">4</span>
```

### Rounded & Dots
Pill shapes and notification indicators.

<div class="card flex-col items-center">
    <div class="flex gap-4">
        <span class="b-badge b-badge--severity-primary b-badge--rounded">1</span>
        <span class="b-badge b-badge--severity-secondary b-badge--rounded">2</span>
        <span class="b-badge b-badge--severity-success b-badge--rounded">3</span>
        <span class="b-badge b-badge--severity-info b-badge--rounded">4</span>
        <span class="b-badge b-badge--severity-warn b-badge--rounded">5</span>
        <span class="b-badge b-badge--severity-danger b-badge--rounded">6</span>
        <span class="b-badge b-badge--severity-contrast b-badge--rounded">7</span>
    </div>
    <div class="flex gap-4">
        <span class="b-badge b-badge--severity-primary b-badge--dot"></span>
        <span class="b-badge b-badge--severity-secondary b-badge--dot"></span>
        <span class="b-badge b-badge--severity-success b-badge--dot"></span>
        <span class="b-badge b-badge--severity-info b-badge--dot"></span>
        <span class="b-badge b-badge--severity-warn b-badge--dot"></span>
        <span class="b-badge b-badge--severity-danger b-badge--dot"></span>
        <span class="b-badge b-badge--severity-contrast b-badge--dot"></span>
    </div>
</div>

```html
<span class="b-badge b-badge--severity-primary b-badge--rounded">1</span>
<span class="b-badge b-badge--severity-secondary b-badge--rounded">2</span>
<span class="b-badge b-badge--severity-success b-badge--rounded">3</span>
<span class="b-badge b-badge--severity-info b-badge--rounded">4</span>
<span class="b-badge b-badge--severity-warn b-badge--rounded">5</span>
<span class="b-badge b-badge--severity-danger b-badge--rounded">6</span>
<span class="b-badge b-badge--severity-contrast b-badge--rounded">7</span>
<span class="b-badge b-badge--dot"></span>

<span class="b-badge b-badge--severity-primary b-badge--dot"></span>
<span class="b-badge b-badge--severity-secondary b-badge--dot"></span>
<span class="b-badge b-badge--severity-success b-badge--dot"></span>
<span class="b-badge b-badge--severity-info b-badge--dot"></span>
<span class="b-badge b-badge--severity-warn b-badge--dot"></span>
<span class="b-badge b-badge--severity-danger b-badge--dot"></span>
<span class="b-badge b-badge--severity-contrast b-badge--dot"></span>
```

### Overlay Badges
The most common use case: indicators over icons or buttons.

<div class="card">
    <div class="b-overlay-badge">
        <button class="b-button b-button--variant-outline b-button--icon-only">
            <span class="b-button__icon-wrapper">
                <svg class="b-button__icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
            </span>
        </button>
        <span class="b-badge b-badge--dot b-badge--severity-danger"></span>
    </div>
</div>

```html
<div class="b-overlay-badge">
    <button class="b-button b-button--variant-outline b-button--icon-only">
            <span class="b-button__icon-wrapper">
                <svg class="b-button__icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
            </span>
    </button>
    <span class="b-badge b-badge--dot b-badge--severity-danger"></span>
</div>
```

::: tip Design Note
The **cutout ring** effect in overlays is achieved via `box-shadow`. If you place an overlay badge on a colored section, make sure to override `--b-overlay-badge-ring-color` to match your container background for a perfect blend.
:::