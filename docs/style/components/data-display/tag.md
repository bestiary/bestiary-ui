# Tag Style API <VersionBadge module="style" />
Tags are compact elements used to categorize, label, or organize content. They support semantic colors, rounded shapes, and integrated icons with automatic layout adjustment.

## Anatomy
The component follows a strict BEM structure to manage icons and labels consistently.

| Class                  | Role          | Requirement                                                       |
|:-----------------------|:--------------|:------------------------------------------------------------------|
| `.b-tag`               | **Root**      | The main container. Sets dimensions, padding, and base colors.    |
| `.b-tag__icon-wrapper` | **Icon Slot** | Used if an icon is present. Manages flex alignment and shrinkage. |
| `.b-tag__icon`         | **Icon**      | Standard SVG element. Sized relative to the font (1.1em).         |
| `.b-tag__label`        | **Content**   | The text container. Forces single-line display.                   |

## Modifiers

### 1. Severities (Color Matrix)
Maps the tag to the current **Essence**. Unlike buttons, tags mostly use **subtle** (transparent) backgrounds by default.

| Class                        | Essence Mapping    | Visual Characteristic                  |
|:-----------------------------|:-------------------|:---------------------------------------|
| `.b-tag--severity-primary`   | `Primary Subtle`   | Default brand colors.                  |
| `.b-tag--severity-secondary` | `Secondary Subtle` | Neutral/De-emphasized context.         |
| `.b-tag--severity-success`   | `Success Subtle`   | Positive/Completed status.             |
| `.b-tag--severity-info`      | `Info Subtle`      | Informational guidance.                |
| `.b-tag--severity-warn`      | `Warning Subtle`   | Cautions or alerts.                    |
| `.b-tag--severity-danger`    | `Error Subtle`     | Critical errors or destructive states. |
| `.b-tag--severity-contrast`  | `Contrast Solid`   | High-contrast (Solid background).      |

### 2. Shapes
- `.b-tag--rounded`: Applies `--b-radius-full` to create a "pill" shape.

### 3. Layout Adjustments
- `.b-tag--has-icon`: Automatically reduces the starting padding to visually balance the icon's presence.

## Public API Tokens
Bestiary UI Tag uses a hierarchical token system. You can customize a single instance or change the entire palette.

### 1. Active Mapping (Renderer API)
Override these locally via the `style` attribute.

| Token                   | Default                        | Description                   |
|:------------------------|:-------------------------------|:------------------------------|
| `--b-tag-background`    | *Derived from Severity*        | Background color.             |
| `--b-tag-color`         | *Derived from Severity*        | Text and icon color.          |
| `--b-tag-padding-x`     | `var(--b-space-2)`             | Horizontal padding.           |
| `--b-tag-padding-y`     | `var(--b-space-1)`             | Vertical padding.             |
| `--b-tag-border-radius` | `var(--b-radius-interactive)`  | Corner rounding.              |
| `--b-tag-gap`           | `calc(var(--b-space-1) * 1.5)` | Space between icon and label. |
| `--b-tag-font-size`     | `var(--b-text-sm)`             | Text magnitude.               |
| `--b-tag-font-weight`   | `var(--b-font-weight-bold)`    | Label thickness.              |

### 2. Severity Matrix Presets
Global settings for each color role. Change these in your theme to affect all tags globally.

| Severity      | Background Token               | Text/Icon Color Token     | Visual Mapping     |
|:--------------|:-------------------------------|:--------------------------|:-------------------|
| **Primary**   | `--b-tag-primary-background`   | `--b-tag-primary-color`   | `Primary Subtle`   |
| **Secondary** | `--b-tag-secondary-background` | `--b-tag-secondary-color` | `Secondary Subtle` |
| **Success**   | `--b-tag-success-background`   | `--b-tag-success-color`   | `Success Subtle`   |
| **Info**      | `--b-tag-info-background`      | `--b-tag-info-color`      | `Info Subtle`      |
| **Warning**   | `--b-tag-warn-background`      | `--b-tag-warn-color`      | `Warning Subtle`   |
| **Danger**    | `--b-tag-danger-background`    | `--b-tag-danger-color`    | `Error Subtle`     |
| **Contrast**  | `--b-tag-contrast-background`  | `--b-tag-contrast-color`  | `Contrast Solid`   |

## Examples & Implementation

### Basic Structure
The simplest form with just a label.

<div class="card">
    <span class="b-tag b-tag--severity-primary">
        <span class="b-tag__label">Tag</span>
    </span>
</div>

```html
<span class="b-tag b-tag--severity-primary">
    <span class="b-tag__label">Tag</span>
</span>
```

### Rounded (Pill)
Pill-shaped tags are often used for status indicators.

<div class="card">
    <span class="b-tag b-tag--severity-success b-tag--rounded">
        <span class="b-tag__label">Completed</span>
    </span>
</div>

```html
<span class="b-tag b-tag--rounded b-tag--severity-success">
    <span class="b-tag__label">Completed</span>
</span>
```

### With Icon
Combining icons with labels for better visual context.

<div class="card">
    <span class="b-tag b-tag--severity-info b-tag--has-icon">
        <span class="b-tag__icon-wrapper">
            <svg class="b-tag__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>
        <span class="b-tag__label">Information</span>
    </span>
</div>

```html
<span class="b-tag b-tag--severity-info b-tag--has-icon">
    <span class="b-tag__icon-wrapper">
        <svg class="b-tag__icon">...</svg>
    </span>
    <span class="b-tag__label">Information</span>
</span>
```

### Custom Token Overrides
Using tokens to create unique branded tags without new CSS.

<div class="card">
    <span class="b-tag" style="--b-tag-background: var(--b-rose-500); --b-tag-color: white; --b-tag-font-weight: 900;">
        <span class="b-tag__label">SPECIAL</span>
    </span>
</div>

```html
<span class="b-tag" style="--b-tag-background: var(--b-rose-500); --b-tag-color: white;">
    <span class="b-tag__label">SPECIAL</span>
</span>
```

::: tip Design Note
The `1.1em` icon size ensures that icons automatically scale with the font size, staying visually consistent whether you use a global font-size override or keep the default `text-sm`.
:::