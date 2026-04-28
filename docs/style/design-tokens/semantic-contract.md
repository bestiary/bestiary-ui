# Semantic Contract <Badge type="tip" text="v0.1.0" />

The **Semantic Contract** is the strictly typed API of Bestiary UI. It defines all available functional tokens using the **CSS Houdini (@property)** API.

By consuming these tokens instead of raw values, your application remains consistent across different **Themes** (geometry) and **Essences** (colors).

---

## Block 1: Theme (Geometry & Motion)

These tokens define the physical characteristics of the interface. They are typically populated by the `data-theme` attribute.

### 1.1 Typography Roles
Every typography role defines its `size`, `weight`, and `leading` (line-height).

| Role          | Size Token         | Weight Token         | Leading Token         |
|:--------------|:-------------------|:---------------------|:----------------------|
| **Heading 1** | `--b-h1-size`      | `--b-h1-weight`      | `--b-h1-leading`      |
| **Heading 2** | `--b-h2-size`      | `--b-h2-weight`      | `--b-h2-leading`      |
| **Heading 3** | `--b-h3-size`      | `--b-h3-weight`      | `--b-h3-leading`      |
| **Heading 4** | `--b-h4-size`      | `--b-h4-weight`      | `--b-h4-leading`      |
| **Heading 5** | `--b-h5-size`      | `--b-h5-weight`      | `--b-h5-leading`      |
| **Heading 6** | `--b-h6-size`      | `--b-h6-weight`      | `--b-h6-leading`      |
| **Body**      | `--b-body-size`    | `--b-body-weight`    | `--b-body-leading`    |
| **Label**     | `--b-label-size`   | `--b-label-weight`   | `--b-label-leading`   |
| **Caption**   | `--b-caption-size` | `--b-caption-weight` | `--b-caption-leading` |
| **Code**      | `--b-code-size`    | `--b-code-weight`    | `--b-code-leading`    |

### 1.2 Interactive Elements
Standardized scales for components and icons.

| Scale           | Control Size Token    | Icon Size Token    |
|:----------------|:----------------------|:-------------------|
| **Extra Small** | `--b-control-size-xs` | `--b-icon-size-xs` |
| **Small**       | `--b-control-size-sm` | `--b-icon-size-sm` |
| **Medium**      | `--b-control-size-md` | `--b-icon-size-md` |
| **Large**       | `--b-control-size-lg` | `--b-icon-size-lg` |
| **Extra Large** | `--b-control-size-xl` | `--b-icon-size-xl` |

### 1.3 Shapes & Borders
Tokens that define the "sharpness" and thickness of elements.

| Category    | Token                    | Syntax                | Initial   |
|:------------|:-------------------------|:----------------------|:----------|
| **Radius**  | `--b-radius-interactive` | `<length-percentage>` | `0.5rem`  |
|             | `--b-radius-container`   | `<length-percentage>` | `0.75rem` |
|             | `--b-radius-floating`    | `<length-percentage>` | `1rem`    |
| **Strokes** | `--b-stroke-default`     | `<length>`            | `1px`     |
|             | `--b-stroke-strong`      | `<length>`            | `2px`     |
|             | `--b-stroke-focus`       | `<length>`            | `2px`     |

### 1.4 Stacking Context (Z-Index)
Strict integers for managing layers.

| Token                   | Initial | Usage           |
|:------------------------|:--------|:----------------|
| `--b-z-hide`            | `-1`    | Hidden elements |
| `--b-z-base`            | `0`     | Standard flow   |
| `--b-z-nav` / `sticky`  | `100`   | Navigation bars |
| `--b-z-overlay`         | `1000`  | Backdrops       |
| `--b-z-modal` / `toast` | `1100`  | Global popups   |

---

## Block 2: Essence (Color Matrix)

These tokens define the mood and color distribution. They are typically populated by the `data-essence` attribute and support smooth transitions via Houdini.

### 2.1 Surface System
Defines the backgrounds of your application levels.

- `--b-surface-ground`: Primary app background.
- `--b-surface-section`: Cards, sidebars, and content blocks.
- `--b-surface-floating`: Modals and floating menus.
- `--b-surface-contrast`: High-contrast background (inverted).

### 2.2 Global Typography
Functional color tokens for text.

- `--b-text-primary`: Main content color.
- `--b-text-secondary`: Supporting text/labels.
- `--b-text-muted`: Disabled or placeholder text.
- `--b-text-contrast`: Text color for use on solid brand backgrounds.

### 2.3 The Semantic Matrix
This is the core functional group. Every group (Primary, Success, Error, etc.) contains a full set of interaction tokens.

**Example for Primary Group:**

| Token                           | Syntax      | Description                         |
|:--------------------------------|:------------|:------------------------------------|
| `--b-primary-channels`          | `<number>+` | OKLCH channels for dynamic effects. |
| `--b-primary-solid-background`  | `<color>`   | Default solid background.           |
| `--b-primary-solid-text`        | `<color>`   | Contrast text for solid background. |
| `--b-primary-subtle-background` | `<color>`   | Light/transparent background.       |
| `--b-primary-outline-border`    | `<color>`   | Border color for outline variant.   |

::: info Supported Functional Groups
The matrix includes: `Primary`, `Secondary`, `Success`, `Error`, `Warning`, `Info`, and `Contrast`.
:::

### 2.4 Form Controls (Inputs)
Specific tokens for consistent form experiences.

- `--b-form-control-background`
- `--b-form-control-border` (with `-hover` and `-active` states)
- `--b-form-control-placeholder`

---

## Technical Specs

All tokens are registered via `@property`. This means:
1. **Inheritance**: All tokens inherit by default (`inherits: true`).
2. **Animation**: You can transition colors, lengths, and even z-indices.
3. **Safety**: If a variable is undefined, the browser falls back to the `initial-value` defined in the contract.