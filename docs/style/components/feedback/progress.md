# Progress Style API <VersionBadge module="style" />
The Progress component visually displays the completion status of a task or process. It supports two structural types (linear and circular), semantic severities, and an indeterminate state for unknown durations.

## Anatomy
Because the rendering logic differs significantly between types, the DOM structure is split into Linear and Circular variations. Both share the same root container.

### 1. Linear Structure

| Class                  | Role          | Description                                                                 |
|:-----------------------|:--------------|:----------------------------------------------------------------------------|
| `.b-progress`          | **Container** | The root wrapper. Manages relative positioning and base variables.          |
| `.b-progress__track`   | **Wrapper**   | Full-width background track. Applies `border-radius: var(--b-radius-full)`. |
| `.b-progress__value`   | **Element**   | The animated fill bar. Width is controlled via inline styles (e.g., `50%`). |
| `.b-progress__label`   | **Element**   | Centered text label inside the value bar.                                   |

### 2. Circular Structure

| Class                        | Role          | Description                                                                     |
|:-----------------------------|:--------------|:--------------------------------------------------------------------------------|
| `.b-progress`                | **Container** | Fixed dimensions defined by `--b-progress-circle-size`.                         |
| `.b-progress__svg`           | **Element**   | SVG container rotated `-90deg` so progress starts from the top.                 |
| `.b-progress__circle-track`  | **Element**   | Base `<circle>` element styled via `stroke`.                                    |
| `.b-progress__circle-value`  | **Element**   | Active `<circle>` element. Uses `stroke-dasharray` and `stroke-dashoffset`.     |
| `.b-progress__label`         | **Element**   | Absolute positioned text centered inside the circle. Sibling to the `<svg>`.    |

## Modifiers

### 1. Types & States

| Class                        | Description                                                                         |
|:-----------------------------|:------------------------------------------------------------------------------------|
| `.b-progress--linear`        | Renders as a horizontal bar.                                                        |
| `.b-progress--circular`      | Renders as an SVG ring.                                                             |
| `.b-progress--indeterminate` | Triggers infinite loading keyframe animations. Overrides inline width/dash offsets. |

### 2. Severities (Colors)
Severities inject local color variables directly into the fill backgrounds and labels.

| Class                             | Background / Stroke Token             | Label Text Color Token           |
|:----------------------------------|:--------------------------------------|:---------------------------------|
| `.b-progress--severity-primary`   | `var(--b-primary-solid-background)`   | `var(--b-primary-solid-text)`    |
| `.b-progress--severity-secondary` | `var(--b-secondary-solid-background)` | `var(--b-secondary-solid-text)`  |
| `.b-progress--severity-info`      | `var(--b-info-solid-background)`      | `var(--b-info-solid-text)`       |
| `.b-progress--severity-success`   | `var(--b-success-solid-background)`   | `var(--b-success-solid-text)`    |
| `.b-progress--severity-warn`      | `var(--b-warning-solid-background)`   | `var(--b-warning-solid-text)`    |
| `.b-progress--severity-danger`    | `var(--b-error-solid-background)`     | `var(--b-error-solid-text)`      |
| `.b-progress--severity-contrast`  | `var(--b-contrast-solid-background)`  | `var(--b-contrast-solid-text)`   |

## Public API Tokens
Override these on a specific instance for layout adjustments.

| Token                           | Default                             | Description                                         |
|:--------------------------------|:------------------------------------|:----------------------------------------------------|
| `--b-progress-height`           | `var(--b-space-4)`                  | Height of the linear track.                         |
| `--b-progress-circle-size`      | `var(--b-size-12)`                  | Diameter of the circular progress wrapper.          |
| `--b-progress-track-background` | `var(--b-surface-variant)`          | Background color of the track/unfilled area.        |
| `--b-progress-fill-background`  | `var(--b-primary-solid-background)` | Controlled by severity. Fill color.                 |
| `--b-progress-label-color`      | `var(--b-primary-solid-text)`       | Controlled by severity. Text color inside the fill. |

## Examples & Implementation

### Linear Progress
Set the completion percentage using inline `width` on `.b-progress__value`. Include standard `aria-*` attributes on the root container for screen readers.

<div class="card">
    <div class="b-progress b-progress--linear b-progress--severity-primary" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">
        <div class="b-progress__track">
            <div class="b-progress__value" style="width: 45%;">
                <span class="b-progress__label">45%</span>
            </div>
        </div>
    </div>
    <div class="b-progress b-progress--linear b-progress--severity-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
        <div class="b-progress__track">
            <div class="b-progress__value" style="width: 100%;">
                <span class="b-progress__label">Complete</span>
            </div>
        </div>
    </div>
</div>

```html
<div class="b-progress b-progress--linear b-progress--severity-primary" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">
    <div class="b-progress__track">
        <!-- Control width here -->
        <div class="b-progress__value" style="width: 45%;">
            <span class="b-progress__label">45%</span>
        </div>
    </div>
</div>
```

### Circular Progress
Circular progress requires SVG math. The `stroke-dasharray` is equal to the circle's circumference (`2 * Math.PI * radius`). The `stroke-dashoffset` controls the empty space.
*(E.g., for `r="22"`, circumference ≈ `138`. To show 75%, offset is `138 - (138 * 0.75) = 34.5`)*.

<div class="card">
    <div class="b-progress b-progress--circular b-progress--severity-primary" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
        <svg class="b-progress__svg" viewBox="0 0 50 50">
            <circle class="b-progress__circle-track" cx="25" cy="25" r="22" fill="none" stroke-width="4"></circle>
            <circle class="b-progress__circle-value" cx="25" cy="25" r="22" fill="none" stroke-width="4" stroke-linecap="round" stroke-dasharray="138" stroke-dashoffset="34.5"></circle>
        </svg>
        <div class="b-progress__label">75%</div>
    </div>
</div>

```html
<div class="b-progress b-progress--circular b-progress--severity-primary" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
    <svg class="b-progress__svg" viewBox="0 0 50 50">
        <!-- Track -->
        <circle class="b-progress__circle-track" cx="25" cy="25" r="22" fill="none" stroke-width="4"></circle>
        
        <!-- Value Line -->
        <circle class="b-progress__circle-value" cx="25" cy="25" r="22" fill="none" stroke-width="4" stroke-linecap="round" stroke-dasharray="138" stroke-dashoffset="34.5"></circle>
    </svg>
    <div class="b-progress__label">75%</div>
</div>
```

### Indeterminate State
Apply the `.b-progress--indeterminate` class. You do not need to apply inline `width` or `stroke-dashoffset`, as the CSS animations override them. Do not include `aria-valuenow`.

<div class="card items-center">
    <div class="b-progress b-progress--linear b-progress--indeterminate b-progress--severity-secondary" role="progressbar" aria-valuemin="0" aria-valuemax="100">
        <div class="b-progress__track">
            <div class="b-progress__value"></div>
        </div>
    </div>
    <div class="b-progress b-progress--circular b-progress--indeterminate b-progress--severity-warn" role="progressbar" aria-valuemin="0" aria-valuemax="100">
        <svg class="b-progress__svg" viewBox="0 0 50 50">
            <circle class="b-progress__circle-track" cx="25" cy="25" r="22" fill="none" stroke-width="4"></circle>
            <circle class="b-progress__circle-value" cx="25" cy="25" r="22" fill="none" stroke-width="4" stroke-linecap="round"></circle>
        </svg>
    </div>
</div>

```html
<!-- Linear Indeterminate -->
<div class="b-progress b-progress--linear b-progress--indeterminate b-progress--severity-secondary" role="progressbar">
    <div class="b-progress__track">
        <div class="b-progress__value"></div>
    </div>
</div>

<!-- Circular Indeterminate -->
<div class="b-progress b-progress--circular b-progress--indeterminate b-progress--severity-warn" role="progressbar">
    <svg class="b-progress__svg" viewBox="0 0 50 50">
        <circle class="b-progress__circle-track" cx="25" cy="25" r="22" fill="none" stroke-width="4"></circle>
        <circle class="b-progress__circle-value" cx="25" cy="25" r="22" fill="none" stroke-width="4" stroke-linecap="round"></circle>
    </svg>
</div>
```