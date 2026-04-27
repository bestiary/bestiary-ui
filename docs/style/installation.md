# Installation

To start using **Bestiary UI Style**, you can either install it via your favorite package manager or include it directly via a CDN.

## Package Manager

This is the recommended method for modern web applications built with tools like Vite, Webpack, Nuxt, or Next.js. It allows for better tree-shaking and integration with your build pipeline.

::: code-group
```bash [pnpm]
pnpm add @bestiary-ui/style
```
```bash [npm]
npm install @bestiary-ui/style
```
```bash [yarn]
yarn add @bestiary-ui/style
```
:::

### Quick Start

Import the main CSS entry point in your application's root file (e.g., `main.ts`, `app.js`, or `index.tsx`).

```javascript
// Import design tokens, resets, and utilities
import "@bestiary-ui/style";
```

## CDN Usage

For quick prototyping or projects without a build step, you can include the pre-bundled and minified version via **unpkg** or **jsDelivr**.

```html
<!-- Include the bundled CSS in your <head> -->
<link 
  rel="stylesheet" 
  href="https://unpkg.com/@bestiary-ui/style/index.bundle.css"
>
```

::: tip Why index.bundle.css?
The `index.bundle.css` file is a standalone, minified build that contains all design tokens, resets, and utilities in a single file, optimized for network delivery.
:::

## Initial Setup

By default, the library registers tokens and base styles. However, to see the visual effects, you must specify the **Essence** (color matrix) and **Theme** (geometry) on your root element (usually `<html>` or `<body>`).

```html
<!-- Example: Dark mode with Rounded geometry and Primary essence -->
<html
    data-theme="forest" 
    data-essence="leaf"
    data-color-mode="light"
>
  ...
</html>
```

### Verification

To verify that the library is working, try using one of the utility classes:

```html
<button class="b-button">Success</button>
```

## Advanced: Granular Imports

If you want to reduce the CSS footprint or use only specific parts of the library, you can import individual modules (thanks to our `exports` mapping):

```javascript
// Import only tokens (design variables)
import "@bestiary-ui/style/tokens/primitives.css";

// Import only layout utilities
import "@bestiary-ui/style/spacing/padding.css";
```