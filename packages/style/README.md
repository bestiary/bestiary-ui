# @bestiary-ui/style

The core styling engine and design token system for the Bestiary UI ecosystem. A lightweight, framework-agnostic CSS library built with modern web standards.

![npm v](https://img.shields.io/npm/v/%40bestiary-ui%2Fstyle.svg)
![license](https://img.shields.io/npm/l/%40bestiary-ui%2Fstyle.svg)

## Features

*   **Design Tokens First:** Fully powered by CSS Variables and Houdini `@property` for type-safe animations and performance.
*   **Zero Specificity:** Most selectors use the `:where()` pseudo-class, allowing you to override any style with a single custom class without `!important`.
*   **Cascade Layers:** Organized into `@layer` (reset, tokens, components, utilities) to prevent style conflicts and ensure a predictable cascade.
*   **Multi-Dimensional Theming:** Independent control over Geometry (`data-theme`), Palette (`data-essence`), and Appearance (`data-color-mode`).
*   **OKLCH Color Space:** Perceptually uniform colors with native support for wide-gamut displays and dynamic transparency.
*   **Modern Reset:** Built-in "smart" reset with `text-wrap: balance`, `logical properties`, and `field-sizing`.

## Installation

```bash
# Using pnpm
pnpm add @bestiary-ui/style

# Using npm
npm install @bestiary-ui/style

# Using yarn
yarn add @bestiary-ui/style
```

## Usage

### 1. The Full Bundle (Recommended for simple projects)
Import everything (tokens, reset, all components, and utilities) in one go.

**Via JavaScript/TypeScript:**
```javascript
import "@bestiary-ui/style/index.bundle.css";
```

**Via CDN (Unpkg):**
```html
<link rel="stylesheet" href="https://unpkg.com/@bestiary-ui/style/index.bundle.css">
```

### 2. Granular Imports (Optimized)
Import only what you need to keep your CSS bundle small.

```css
/* 1. Core Definitions (Required) */
@import "@bestiary-ui/style/tokens/primitives.css";
@import "@bestiary-ui/style/tokens/contract.css";

/* 2. Base Reset */
@import "@bestiary-ui/style/reset.css";

/* 3. Theming Configuration */
@import "@bestiary-ui/style/themes/forest.css";
@import "@bestiary-ui/style/essences/leaf.css";

/* 4. Individual Components */
@import "@bestiary-ui/style/components/button.css";
@import "@bestiary-ui/style/components/card.css";

/* 5. Utilities */
@import "@bestiary-ui/style/utilities.css";
```

## Theming Architecture

Bestiary UI uses a 3-axis system applied via HTML data attributes:

```html
<html
    data-theme="forest"
    data-essence="leaf"
    data-color-mode="dark"
>
```

| Attribute | Scope | Examples |
|-----------|-------|----------|
| `data-theme` | Geometry & Motion | `forest`, `minimal`, `brutal` |
| `data-essence` | Color Palettes | `leaf`, `ocean`, `magma` |
| `data-color-mode` | Light/Dark logic | `light`, `dark` |

## Customization

Since all components rely on the **Semantic Contract**, you can override the entire design system by redefining variables in your local CSS. Thanks to `:where()` and `@layer`, your overrides will work without `!important`.

```css
:root {
    /* Change brand color globally */
    --b-primary-500: oklch(0.6 0.2 250);

    /* Change global corner rounding */
    --b-radius-factor: 2;

    /* Override a specific component locally */
    --b-button-border-width: 2px;
}
```

## License

MIT © [Bestiary UI](https://github.com/bestiary/bestiary-ui)