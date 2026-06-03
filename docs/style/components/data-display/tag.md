# Tag Style API <VersionBadge module="style" />
Tags are compact elements used to categorize, label, or organize items. Unlike badges, tags are typically interactive or descriptive keywords, featuring a subtle color palette, optional icons, and specific spacing adjustments.

## Anatomy
The tag is composed of a flexible container and internal slots for icons and text.

| Class            | Role          | Description                                                                     |
|:-----------------|:--------------|:--------------------------------------------------------------------------------|
| `.b-tag`         | **Container** | The root element. Sets background, padding, typography, and flex layout.        |
| `.b-tag__icon`   | **Element**   | Wrapper for SVG or icon fonts. Ensures consistent `1.1em` sizing and alignment. |
| `.b-tag__label`  | **Element**   | Wraps the text content, normalizing line height.                                |

## Modifiers

### 1. Severities (Colors)
Mapped to the system's **Essence** matrix using **subtle** tokens.

| Class                        | Background Token                        | Text Color Token                  |
|:-----------------------------|:----------------------------------------|:----------------------------------|
| `.b-tag--severity-primary`   | `var(--b-primary-subtle-background)`    | `var(--b-primary-subtle-text)`    |
| `.b-tag--severity-secondary` | `var(--b-secondary-subtle-background)`  | `var(--b-secondary-subtle-text)`  |
| `.b-tag--severity-info`      | `var(--b-info-subtle-background)`       | `var(--b-info-subtle-text)`       |
| `.b-tag--severity-success`   | `var(--b-success-subtle-background)`    | `var(--b-success-subtle-text)`    |
| `.b-tag--severity-warn`      | `var(--b-warning-subtle-background)`    | `var(--b-warning-subtle-text)`    |
| `.b-tag--severity-danger`    | `var(--b-error-subtle-background)`      | `var(--b-error-subtle-text)`      |
| `.b-tag--severity-contrast`  | `var(--b-contrast-subtle-background)`   | `var(--b-contrast-subtle-text)`   |

### 2. Layout & Shapes

| Class              | Description                                                                                              |
|:-------------------|:---------------------------------------------------------------------------------------------------------|
| `.b-tag--rounded`  | Forces a perfect pill shape by overriding `--b-tag-border-radius` with `var(--b-radius-full)`.           |
| `.b-tag--has-icon` | Dynamically reduces the inline-start padding (`0.75x`) to balance visual weight when an icon is present. |

## Public API Tokens
Override these on a specific instance for one-off customizations.

| Token                   | Default                                       |
|:------------------------|:----------------------------------------------|
| `--b-tag-background`    | `var(--b-primary-subtle-background)`          |
| `--b-tag-color`         | `var(--b-primary-subtle-text)`                |
| `--b-tag-padding-x`     | `var(--b-space-2)`                            |
| `--b-tag-padding-y`     | `var(--b-space-1)`                            |
| `--b-tag-border-radius` | `var(--b-radius-interactive)`                 |
| `--b-tag-gap`           | `calc(var(--b-space-1) * 1.5)`                |
| `--b-tag-font-size`     | `var(--b-text-sm)`                            |
| `--b-tag-font-weight`   | `var(--b-font-weight-bold)`                   |
| `--b-tag-icon-size`     | `1.1em`                                       |
| `--b-tag-transition`    | `var(--b-duration-normal) var(--b-ease-base)` |

## Examples & Implementation

### Basic Severities
Standard tags mapping to the essence matrix.

<div class="card flex flex-wrap gap-2">
    <span class="b-tag b-tag--severity-primary" role="status"><span class="b-tag__label">Primary</span></span>
    <span class="b-tag b-tag--severity-secondary" role="status"><span class="b-tag__label">Secondary</span></span>
    <span class="b-tag b-tag--severity-info" role="status"><span class="b-tag__label">Info</span></span>
    <span class="b-tag b-tag--severity-success" role="status"><span class="b-tag__label">Success</span></span>
    <span class="b-tag b-tag--severity-warn" role="status"><span class="b-tag__label">Warning</span></span>
    <span class="b-tag b-tag--severity-danger" role="status"><span class="b-tag__label">Danger</span></span>
    <span class="b-tag b-tag--severity-contrast" role="status"><span class="b-tag__label">Contrast</span></span>
</div>

```html
<span class="b-tag b-tag--severity-primary" role="status">
    <span class="b-tag__label">Primary</span>
</span>
<span class="b-tag b-tag--severity-success" role="status">
    <span class="b-tag__label">Success</span>
</span>
```

### With Icons
When adding an icon, apply the `.b-tag--has-icon` modifier to the root element. This adjusts the internal padding to prevent the tag from looking visually off-center.

<div class="card flex flex-wrap gap-2">
    <span class="b-tag b-tag--severity-primary b-tag--has-icon" role="status">
        <svg class="b-tag__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
        </svg>
        <span class="b-tag__label">User</span>
    </span>
    <span class="b-tag b-tag--severity-success b-tag--has-icon" role="status">
        <svg class="b-tag__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <span class="b-tag__label">Verified</span>
    </span>
    <span class="b-tag b-tag--severity-warn b-tag--has-icon" role="status">
        <svg class="b-tag__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <span class="b-tag__label">Pending</span>
    </span>
</div>

```html
<span class="b-tag b-tag--severity-success b-tag--has-icon" role="status">
    <svg class="b-tag__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <!-- SVG Paths -->
    </svg>
    <span class="b-tag__label">Verified</span>
</span>
```

### Rounded Shape
Use the `.b-tag--rounded` modifier to apply a pill shape to any tag variation.

<div class="card flex gap-2">
    <span class="b-tag b-tag--severity-primary b-tag--rounded" role="status">
        <span class="b-tag__label">Design System</span>
    </span>
    <span class="b-tag b-tag--severity-secondary b-tag--rounded" role="status">
        <span class="b-tag__label">Architecture</span>
    </span>
</div>

```html
<span class="b-tag b-tag--severity-primary b-tag--rounded" role="status">
    <span class="b-tag__label">Design System</span>
</span>
```