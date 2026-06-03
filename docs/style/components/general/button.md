# Button Style API <VersionBadge module="style" />
Buttons are interactive elements used to trigger actions. The Style API provides a robust token pipeline that separates severities (colors) from variants (solid, outline, text), allowing for highly flexible and accessible button configurations.

## Anatomy
The button component uses a flexbox layout to automatically align icons, text, and badges.

| Class                         | Role          | Description                                                                   |
|:------------------------------|:--------------|:------------------------------------------------------------------------------|
| `.b-button`                   | **Container** | The root element (`<button>` or `<a>`). Manages flex layout and typography.   |
| `.b-button__icon-wrapper`     | **Wrapper**   | Centers the icon and maintains structural consistency.                        |
| `.b-button__icon`             | **Element**   | Sizing wrapper for normal SVG or font icons.                                  |
| `.b-button__loading-icon`     | **Element**   | Sizing wrapper for the loading spinner. Includes a continuous spin animation. |
| `.b-button__label`            | **Element**   | Wraps the text content.                                                       |

## Modifiers

### 1. Variants (Styles)
Controls how the button consumes the color tokens. By default, buttons use the **Solid** variant.

| Class                        | Description                                                                      |
|:-----------------------------|:---------------------------------------------------------------------------------|
| `.b-button--variant-default` | **Solid**: Uses solid background and text tokens.                                |
| `.b-button--variant-outline` | **Outline**: Transparent background, colored borders and text.                   |
| `.b-button--variant-text`    | **Text**: No borders or background until hovered.                                |
| `.b-button--variant-link`    | **Link**: Behaves like an inline link, underlining on hover without backgrounds. |

### 2. Severities (Colors)
Mapped to the system's **Essence** matrix. Severities inject a "Local Palette" which the chosen variant then consumes.

| Class                           | Local Palette Injection                       |
|:--------------------------------|:----------------------------------------------|
| `.b-button--severity-primary`   | Primary essence colors (Default).             |
| `.b-button--severity-secondary` | Secondary / Neutral colors.                   |
| `.b-button--severity-info`      | Informational colors.                         |
| `.b-button--severity-success`   | Positive / Success colors.                    |
| `.b-button--severity-warn`      | Warning colors.                               |
| `.b-button--severity-danger`    | Critical / Error colors.                      |
| `.b-button--severity-contrast`  | High-contrast (inverted) mode.                |

### 3. Sizes
Scales height, padding, and font sizes.

| Class                    | Height Token               | Padding Token      | Font Size Token     |
|:-------------------------|:---------------------------|:-------------------|:--------------------|
| `.b-button--size-small`  | `var(--b-control-size-sm)` | `var(--b-space-2)` | `var(--b-text-sm)`  |
| `.b-button--size-medium` | `var(--b-control-size-md)` | `var(--b-space-3)` | `var(--b-text-md)`  |
| `.b-button--size-large`  | `var(--b-control-size-lg)` | `var(--b-space-4)` | `var(--b-text-md)`  |
| `.b-button--size-xlarge` | `var(--b-control-size-xl)` | `var(--b-space-5)` | `var(--b-text-lg)`  |

### 4. Layout & States

| Class / Attribute             | Description                                                                   |
|:------------------------------|:------------------------------------------------------------------------------|
| `.b-button--icon-only`        | Forces a square aspect ratio (`width` = `height`) and removes side padding.   |
| `.b-button--icon-[pos]`       | Modifies flex direction. `[pos]` can be `left`, `right`, `top`, or `bottom`.  |
| `.b-button--badge-[pos]`      | Similar to icon positioning, controls the badge placement.                    |
| `.b-button--rounded`          | Forces a fully rounded pill shape (`var(--b-radius-full)`).                   |
| `.b-button--raised`           | Adds a drop shadow (`var(--b-shadow-md)`).                                    |
| `.b-button--loading`          | Disables pointer events and reduces contrast slightly.                        |
| `:disabled` / `aria-disabled` | Reduces opacity to `0.5` and sets cursor to `not-allowed`.                    |

## Public API Tokens
Override these on a specific instance for one-off customizations without breaking the variant/severity pipeline.

| Token                      | Default                                           |
|:---------------------------|:--------------------------------------------------|
| `--b-button-height`        | `var(--b-control-size-md)`                        |
| `--b-button-padding`       | `var(--b-space-3)`                                |
| `--b-button-font-size`     | `var(--b-text-md)`                                |
| `--b-button-icon-size`     | `1.1em`                                           |
| `--b-button-border-width`  | `var(--b-stroke-default)`                         |
| `--b-button-border-radius` | `var(--b-radius-interactive)`                     |
| `--b-button-gap`           | `var(--b-space-2)`                                |
| `--b-button-font-weight`   | `var(--b-body-weight)`                            |
| `--b-button-transition`    | `all var(--b-duration-normal) var(--b-ease-base)` |

## Examples & Implementation

### Basic Variants
The combination of `.b-button` and its variant modifiers.

<div class="card">
    <button class="b-button" type="button">
        <span class="b-button__label">Solid (Default)</span>
    </button>
    <button class="b-button b-button--variant-outline" type="button">
        <span class="b-button__label">Outline</span>
    </button>
    <button class="b-button b-button--variant-text" type="button">
        <span class="b-button__label">Text</span>
    </button>
    <button class="b-button b-button--variant-link" type="button">
        <span class="b-button__label">Link</span>
    </button>
</div>

```html
<button class="b-button" type="button">
    <span class="b-button__label">Solid (Default)</span>
</button>
<button class="b-button b-button--variant-outline" type="button">
    <span class="b-button__label">Outline</span>
</button>
<button class="b-button b-button--variant-text" type="button">
    <span class="b-button__label">Text</span>
</button>
<button class="b-button b-button--variant-link" type="button">
    <span class="b-button__label">Link</span>
</button>
```

### Severities
Applying severities works across all variants via CSS custom property injection.

<div class="card">
    <button class="b-button b-button--severity-primary" type="button"><span class="b-button__label">Primary</span></button>
    <button class="b-button b-button--severity-secondary" type="button"><span class="b-button__label">Secondary</span></button>
    <button class="b-button b-button--severity-success" type="button"><span class="b-button__label">Success</span></button>
    <button class="b-button b-button--severity-info" type="button"><span class="b-button__label">Info</span></button>
    <button class="b-button b-button--severity-warn" type="button"><span class="b-button__label">Warning</span></button>
    <button class="b-button b-button--severity-danger" type="button"><span class="b-button__label">Danger</span></button>
    <button class="b-button b-button--severity-contrast" type="button"><span class="b-button__label">Contrast</span></button>
</div>

```html
<button class="b-button b-button--severity-primary" type="button"><span class="b-button__label">Primary</span></button>
<button class="b-button b-button--severity-secondary" type="button"><span class="b-button__label">Secondary</span></button>
<button class="b-button b-button--severity-success" type="button"><span class="b-button__label">Success</span></button>
<button class="b-button b-button--severity-info" type="button"><span class="b-button__label">Info</span></button>
<button class="b-button b-button--severity-warn" type="button"><span class="b-button__label">Warning</span></button>
<button class="b-button b-button--severity-danger" type="button"><span class="b-button__label">Danger</span></button>
<button class="b-button b-button--severity-contrast" type="button"><span class="b-button__label">Contrast</span></button>
```

### Sizes & Shapes

<div class="card items-center">
    <button class="b-button b-button--size-small" type="button"><span class="b-button__label">Small</span></button>
    <button class="b-button b-button--size-medium" type="button"><span class="b-button__label">Medium</span></button>
    <button class="b-button b-button--size-large" type="button"><span class="b-button__label">Large</span></button>
    <button class="b-button b-button--size-xlarge b-button--rounded" type="button"><span class="b-button__label">XLarge Rounded</span></button>
    <button class="b-button b-button--raised b-button--variant-text" type="button"><span class="b-button__label">Raised</span></button>
</div>

```html
<button class="b-button b-button--size-small" type="button">...</button>
<button class="b-button b-button--size-large b-button--rounded" type="button">...</button>
<button class="b-button b-button--raised" type="button">...</button>
```

### Icons & Placement
Wrap the icon in `.b-button__icon-wrapper`. Use `.b-button--icon-[pos]` on the root to control flex direction.

<div class="card">
    <button class="b-button b-button--icon-left" type="button">
        <span class="b-button__icon-wrapper">
            <svg class="b-button__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </span>
        <span class="b-button__label">Left Icon</span>
    </button>
    <button class="b-button b-button--icon-right b-button--variant-outline" type="button">
        <span class="b-button__icon-wrapper">
            <svg class="b-button__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </span>
        <span class="b-button__label">Right Icon</span>
    </button>
    <button class="b-button b-button--icon-only b-button--rounded" type="button" aria-label="Submit">
        <span class="b-button__icon-wrapper">
            <svg class="b-button__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </span>
    </button>
</div>

```html
<!-- Left Icon -->
<button class="b-button b-button--icon-left" type="button">
    <span class="b-button__icon-wrapper">
        <svg class="b-button__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">...</svg>
    </span>
    <span class="b-button__label">Left Icon</span>
</button>

<!-- Right Icon -->
<button class="b-button b-button--icon-right b-button--variant-outline" type="button">
    <span class="b-button__icon-wrapper">
        <svg class="b-button__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">...</svg>
    </span>
    <span class="b-button__label">Right Icon</span>
</button>

<!-- Icon Only (Requires aria-label) -->
<button class="b-button b-button--icon-only b-button--rounded" type="button" aria-label="Submit">
    <span class="b-button__icon-wrapper">
        <svg class="b-button__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">...</svg>
    </span>
</button>
```

### Loading State
Apply the `.b-button--loading` modifier. The `.b-button__loading-icon` handles the infinite spin animation automatically.

<div class="card flex flex-wrap gap-4">
    <button class="b-button b-button--loading b-button--icon-left" type="button" aria-busy="true">
        <span class="b-button__icon-wrapper">
            <svg class="b-button__loading-icon" viewBox="0 0 24 24" width="1em" height="1em" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="transparent" stroke-width="4"></circle>
                <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        </span>
        <span class="b-button__label">Processing...</span>
    </button>
</div>

```html
<button class="b-button b-button--loading b-button--icon-left" type="button" aria-busy="true">
    <span class="b-button__icon-wrapper">
        <svg class="b-button__loading-icon" viewBox="0 0 24 24">
            <!-- Spinner Paths -->
        </svg>
    </span>
    <span class="b-button__label">Processing...</span>
</button>
```