# The Token Pipeline <VersionBadge module="style" />
Bestiary UI Style uses a sophisticated three-tier pipeline to manage design data. This architecture ensures that styles are not only consistent but also type-safe, performant, and animatable at the browser engine level.

## 1. Primitives (Zero-Specificity Reference)
Primitives are the raw "source of truth" values. They are defined within the `:where(html)` selector, which ensures **zero specificity**. This means they provide values without competing with your application's CSS selectors.

Our primitives are organized into logical modules and imported via a global manifest:

```css
/* primitives.css */
@import "layout/spacings.css";
@import "borders/radius.css";
@import "palettes/blue.css";
```

### OKLCH Palettes & Channels
Unlike traditional HEX/RGB palettes, we store colors as **OKLCH channels**. This allows us to perform advanced color manipulations like hue-shifting shadows or dynamic contrast adjustments.

```css
/* Example from amber.css */
:where(html) {
    --b-amber-500-channels: 76.9% 0.188 70.08;
    --b-amber-500: oklch(var(--b-amber-500-channels));
}
```

## 2. The Semantic Contract (Houdini API)
The **Contract** is a collection of typed slots. Instead of just passing strings, we register our tokens using the **CSS Houdini `@property` API** in `contract.css`.

### Why it matters:
- **Type Safety**: The browser knows if a token is a `<color>`, `<length>`, or `<time>`.
- **Interpolation**: Browsers can natively animate values like gradients or theme switches because they understand the data type.
- **Reliability**: If an invalid value is provided, the browser reverts to a strictly defined `initial-value`.

```css
/* Example from contract.css */
@property --b-primary-solid-background {
  syntax: "<color>";
  inherits: true;
  initial-value: transparent;
}

@property --b-radius-interactive {
  syntax: "<length-percentage>";
  inherits: true;
  initial-value: 0.5rem;
}
```

## 3. Thematic Orchestration

The final tier is the **Mapping**. This is where **Primitives** (raw data) are assigned to the **Contract** (semantic slots) based on the active **Theme** or **Essence**.

- **Themes** (`data-theme`): Fulfill the contract for geometry (radius, strokes, spacing).
- **Essences** (`data-essence`): Fulfill the contract for colors and shadows.

### The Lifecycle of a Style
1.  **Primitive**: `--b-blue-500` is defined as a specific OKLCH value.
2.  **Contract**: `--b-primary-solid-background` is registered as a `<color>`.
3.  **Mapping**: When `[data-essence="blue"]` is active, the contract is fulfilled:
    `--b-primary-solid-background: var(--b-blue-500)`.
4.  **Usage**: A component uses `var(--b-primary-solid-background)`.

## Token Categories
The library's design tokens are organized into six core categories, reflecting the internal architecture of the package:

| Category                      | Description                                                                                 | Key Modules                              |
|:------------------------------|:--------------------------------------------------------------------------------------------|:-----------------------------------------|
| [🎨 Palettes](./palettes)     | **The Color System**. OKLCH scales for all tints, brand colors, and shared common palettes. | `gray.css`, `blue.css`, `brands.css`     |
| [📏 Layout](./layout)         | **The Grid & Geometry**. Spacing scales, sizing, breakpoints, and Z-index layers.           | `spacings.css`, `size.css`, `layers.css` |
| [✍️ Typography](./typography) | **The Written Word**. Font families, semantic scales (H1-H6), weights, and leading.         | `font-size.css`, `line-height.css`       |
| [✨ Effects](./effects)        | **Light & Depth**. The Shadow Engine, blurs, opacity levels, and ring systems.              | `shadow.css`, `blur.css`, `ring.css`     |
| [💠 Borders](./borders)       | **Shapes & Outlines**. Border radii (including organic and blob shapes) and stroke weights. | `radius.css`, `strokes.css`              |
| [⚡ Behavior](./behavior)      | **Motion & Interaction**. Transition durations and custom easing curves (Bezier).           | `time.css`, `ease.css`                   |