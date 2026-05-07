# Style <VersionBadge module="style" />
**@bestiary-ui/style** is a high-performance, framework-agnostic CSS foundation built for the modern web. It serves as the core of the Bestiary UI ecosystem, providing design tokens, a semantic theming engine, and atomic utilities.

Unlike traditional CSS frameworks, it leverages cutting-edge browser features like **CSS Houdini**, **OKLCH color space**, and **CSS Layers** to provide a strictly typed, yet infinitely flexible styling system.

## The ATC Paradigm
The library follows the **Atomic-Token-Component (ATC)** architecture:

1.  **Atomic Utilities**: High-priority classes for rapid layout adjustments.
2.  **Design Tokens**: The source of truth for all values (colors, spacing, shadows).
3.  **Components**: High-level semantic classes that consume tokens and handle complex states.

## Key Pillars

### 🎨 Next-Gen Color Engine (OKLCH)
We use the **OKLCH** color model for all palettes. This ensures perceptually uniform brightness and access to the P3 wide color gamut, resulting in more vibrant and consistent colors that are impossible to achieve with HEX or RGB.

### 🧬 Houdini Type Safety
Through the **CSS Houdini `@property`** API, our semantic tokens are strictly typed. This allows the browser to perform smooth transitions between themes and validate values, preventing "broken" states during runtime.

### 🌓 Theme vs. Essence
We decouple **Geometry** from **Color**:
- **Themes** (`data-theme`): Control the "bones" — border-radii, stroke widths, and typography scales.
- **Essences** (`data-essence`): Control the "soul" — color matrices and surface elevations.

### 🌑 Shadow Engine
Our shadows are calculated dynamically using registered color channels. This allows shadows to automatically inherit the hue of their background, creating a natural, multi-layered "soft shadow" effect.

### 🌐 Logical Properties
Built with RTL (Right-to-Left) support from day one. By using **CSS Logical Properties** (`inline-start`, `block-end`) instead of physical ones (`left`, `top`), your interfaces are globally accessible without a single line of extra code.

## The Cascade Guard (CSS Layers)
To solve the "specificity war," we encapsulate the entire library into orchestrated **CSS Layers** using `@layer`:

1.  `b-tokens`: Low-priority data registration.
2.  `b-reset`: Foundation and tag-level resets.
3.  `b-components`: Encapsulated component logic.
4.  `b-utilities`: High-priority overrides.

---

::: tip Framework Agnostic
While it powers `@bestiary-ui/components` for Vue 3, this package can be used with **React, Angular, Svelte**, or even **pure HTML** projects.
:::