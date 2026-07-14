# InputText Style API <VersionBadge module="style" />

InputText provides a standardized styling foundation for native HTML `<input>` elements. It features robust handling of browser-specific quirks (like Webkit autofill backgrounds), flexible sizing, variants, and dynamic padding injection designed to seamlessly integrate with structural wrappers like `IconField`.

## Anatomy

The component consists of a single HTML node, avoiding unnecessary wrapper `div`s.

| Class              | Role        | Description                                                                     |
|:-------------------|:------------|:--------------------------------------------------------------------------------|
| `.b-input-text`    | **Element** | Applied directly to the `<input>` tag. Manages typography, borders, and states. |

## Modifiers

### 1. Variants

Controls the base visual style of the input.

| Class                               | Description                                                                                     |
|:------------------------------------|:------------------------------------------------------------------------------------------------|
| *(Default)*                         | **Outline**: Standard borders with `var(--b-surface-section)` background.                       |
| `.b-input-text--variant-filled`     | **Filled**: Uses a subtle colored background with no borders. Reverts to standard on `:focus`.  |

### 2. Validation & States

States map to standard CSS pseudo-classes or semantic attributes.

| Class / Attribute             | Description                                                                                               |
|:------------------------------|:----------------------------------------------------------------------------------------------------------|
| `.b-input-text--invalid`      | Applies error colors to the border, text, and focus ring. Pair with `aria-invalid="true"`.                |
| `:disabled`                   | Reduces opacity to `var(--b-state-disabled-opacity)` and applies `cursor: not-allowed`.                   |
| `[readonly]:not(:disabled)`   | Applies a subtle background to indicate non-editability but allows text selection (`cursor: text`).       |

### 3. Sizes

Scales the height, typography, and horizontal padding.

| Class                       | Height Token               | Font Size Token     | Padding X Token     |
|:----------------------------|:---------------------------|:--------------------|:--------------------|
| `.b-input-text--size-small` | `var(--b-control-size-sm)` | `var(--b-text-sm)`  | `var(--b-space-2)`  |
| *(Default)*                 | `var(--b-control-size-md)` | `var(--b-text-md)`  | `var(--b-space-3)`  |
| `.b-input-text--size-large` | `var(--b-control-size-lg)` | `var(--b-text-lg)`  | `var(--b-space-4)`  |

### 4. Layout & Shapes

| Class                       | Description                                                                    |
|:----------------------------|:-------------------------------------------------------------------------------|
| `.b-input-text--fluid`      | Overrides the default width (`var(--b-container-xs)`) to `width: 100%`.        |
| `.b-input-text--rounded`    | Forces fully rounded pill-shaped corners using `var(--b-radius-full)`.         |

## Public API Tokens

Override these on a specific instance for customizations.

### Layout & Sizing
| Token                           | Default                      | Description |
|:--------------------------------|:-----------------------------|:------------|
| `--b-input-text-height`         | `var(--b-control-size-md)`   | Element height. |
| `--b-input-text-width`          | `var(--b-container-xs)`      | Default width of the input. |
| `--b-input-text-padding-x`      | `var(--b-space-3)`           | Base horizontal padding. |
| `--b-input-text-padding-x-left` | *Fallback to padding-x*      | Left padding injection point (for IconField). |
| `--b-input-text-padding-x-right`| *Fallback to padding-x*      | Right padding injection point (for IconField). |

### Colors
| Token                              | Default                      | Description |
|:-----------------------------------|:-----------------------------|:------------|
| `--b-input-text-background`        | `var(--b-surface-section)`   | Input background color. |
| `--b-input-text-color`             | `var(--b-text-primary)`      | Typed text color. |
| `--b-input-text-placeholder-color` | `var(--b-text-muted)`        | Placeholder text color. |
| `--b-input-text-border-color`      | `var(--b-border-default)`    | Default border color. |

### Typography & Borders
| Token                              | Default                       |
|:-----------------------------------|:------------------------------|
| `--b-input-text-font-family`       | `var(--b-font-family-base)`   |
| `--b-input-text-font-size`         | `var(--b-text-md)`            |
| `--b-input-text-font-weight`       | `var(--b-font-weight-normal)` |
| `--b-input-text-border-width`      | `var(--b-stroke-default)`     |
| `--b-input-text-border-radius`     | `var(--b-radius-interactive)` |

## Examples & Implementation

### Basic & Variants

The component supports a standard outlined variant and a filled variant.

<div class="card flex flex-wrap gap-4">
    <input type="text" class="b-input-text" placeholder="Standard outline" />
    <input type="text" class="b-input-text b-input-text--variant-filled" placeholder="Filled variant" />
</div>

```html
<!-- Outline (Default) -->
<input type="text" class="b-input-text" placeholder="Standard outline" />

<!-- Filled -->
<input type="text" class="b-input-text b-input-text--variant-filled" placeholder="Filled variant" />
```

### Sizes

Changing the size scales the height and text proportionally.

<div class="card flex flex-wrap gap-4 items-center">
    <input type="text" class="b-input-text b-input-text--size-small" placeholder="Small" />
    <input type="text" class="b-input-text" placeholder="Medium (Default)" />
    <input type="text" class="b-input-text b-input-text--size-large" placeholder="Large" />
</div>

```html
<input type="text" class="b-input-text b-input-text--size-small" placeholder="Small" />
<input type="text" class="b-input-text" placeholder="Medium" />
<input type="text" class="b-input-text b-input-text--size-large" placeholder="Large" />
```

### Validation & States

Inputs can be marked as invalid, disabled, or read-only. For accessibility, always pair the `.b-input-text--invalid` class with `aria-invalid="true"`.

<div class="card flex flex-wrap gap-4">
    <input type="text" class="b-input-text b-input-text--invalid" placeholder="Invalid input" aria-invalid="true" />
    <input type="text" class="b-input-text" placeholder="Disabled input" disabled />
    <input type="text" class="b-input-text" value="Read-only data" readonly />
</div>

```html
<!-- Invalid (Error) -->
<input type="text" class="b-input-text b-input-text--invalid" aria-invalid="true" />

<!-- Disabled -->
<input type="text" class="b-input-text" disabled />

<!-- Readonly -->
<input type="text" class="b-input-text" value="Read-only data" readonly />
```

### Layout Shapes

Using `.b-input-text--fluid` forces the input to take 100% of its container's width. `.b-input-text--rounded` applies a pill shape.

<div class="card flex flex-col gap-4">
    <input type="text" class="b-input-text b-input-text--fluid" placeholder="Fluid width (100%)" />
    <div>
        <input type="text" class="b-input-text b-input-text--rounded" placeholder="Rounded corners" />
    </div>
</div>

```html
<input type="text" class="b-input-text b-input-text--fluid" placeholder="Fluid width (100%)" />

<input type="text" class="b-input-text b-input-text--rounded" placeholder="Rounded corners" />
```

::: tip Browser Autofill Fix
The `.b-input-text` class contains an internal Webkit fix (`:-webkit-autofill`). When browsers like Chrome autofill saved passwords or emails, the component overrides the native stark yellow/white background, matching the autofill text color to the system theme seamlessly.
:::