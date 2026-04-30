# Layout
Layout tokens define the spatial relationship between elements. They cover everything from micro-spacings and sizing to responsive breakpoints and stacking contexts.

## Sizing & Spacing
Bestiary UI uses a unified numeric scale for both general sizes (`--b-size`) and spacings (`--b-space`). This ensures a consistent visual rhythm throughout the interface.

### The Spatial Scale
The base unit is **4px** (`0.25rem`). Most tokens follow a linear progression.

| Size Token       | Spacing Token     | Rem        | Pixels   |
|:-----------------|:------------------|:-----------|:---------|
| `--b-size-0`     | `--b-space-0`     | `0`        | 0px      |
| `--b-size-px`    | `--b-space-px`    | `1px`      | 1px      |
| `--b-size-0-5`   | `--b-space-0-5`   | `0.125rem` | 2px      |
| `--b-size-1`     | `--b-space-1`     | `0.25rem`  | 4px      |
| `--b-size-1-5`   | `--b-space-1-5`   | `0.375rem` | 6px      |
| `--b-size-2`     | `--b-space-2`     | `0.5rem`   | 8px      |
| `--b-size-2-5`   | `--b-space-2-5`   | `0.625rem` | 10px     |
| `--b-size-3`     | `--b-space-3`     | `0.75rem`  | 12px     |
| `--b-size-3-5`   | `--b-space-3-5`   | `0.875rem` | 14px     |
| **`--b-size-4`** | **`--b-space-4`** | **`1rem`** | **16px** |
| `--b-size-5`     | `--b-space-5`     | `1.25rem`  | 20px     |
| `--b-size-6`     | `--b-space-6`     | `1.5rem`   | 24px     |
| `--b-size-7`     | `--b-space-7`     | `1.75rem`  | 28px     |
| `--b-size-8`     | `--b-space-8`     | `2rem`     | 32px     |
| `--b-size-9`     | `--b-space-9`     | `2.25rem`  | 36px     |
| `--b-size-10`    | `--b-space-10`    | `2.5rem`   | 40px     |
| `--b-size-11`    | `--b-space-11`    | `2.75rem`  | 44px     |
| `--b-size-12`    | `--b-space-12`    | `3rem`     | 48px     |
| `--b-size-auto`  | `--b-space-auto`  | `auto`     | -        |

```css
.card {
  padding: var(--b-space-4);
  width: var(--b-size-12);
}
```

## Breakpoints & Containers
Responsive design in Bestiary UI is driven by a standardized set of breakpoints. We also provide container widths that align with these triggers.

### Breakpoints
Used in Media Queries to adapt layouts to different screen sizes.

| Token                | Value   | Pixel  |
|:---------------------|:--------|:-------|
| `--b-breakpoint-2xs` | `20rem` | 320px  |
| `--b-breakpoint-xs`  | `30rem` | 480px  |
| `--b-breakpoint-sm`  | `40rem` | 640px  |
| `--b-breakpoint-md`  | `48rem` | 768px  |
| `--b-breakpoint-lg`  | `64rem` | 1024px |
| `--b-breakpoint-xl`  | `80rem` | 1280px |
| `--b-breakpoint-2xl` | `96rem` | 1536px |

### Container Widths
Pre-defined widths for content encapsulation.

| Token               | Value   | Pixels |
|:--------------------|:--------|:-------|
| `--b-container-3xs` | `16rem` | 256px  |
| `--b-container-2xs` | `18rem` | 288px  |
| `--b-container-xs`  | `20rem` | 320px  |
| `--b-container-sm`  | `24rem` | 384px  |
| `--b-container-md`  | `28rem` | 448px  |
| `--b-container-lg`  | `32rem` | 512px  |
| `--b-container-xl`  | `36rem` | 576px  |
| `--b-container-2xl` | `42rem` | 672px  |
| `--b-container-3xl` | `48rem` | 768px  |
| `--b-container-4xl` | `56rem` | 896px  |
| `--b-container-5xl` | `64rem` | 1024px |
| `--b-container-6xl` | `72rem` | 1152px |
| `--b-container-7xl` | `80rem` | 1280px |

```css
.container {
  max-width: var(--b-container-7xl); /* 1280px */
  width: var(--b-container-full);    /* 100% */
}
```

## Grid & Ratios

### Fractions
Percentage-based tokens used for custom grid columns or partial widths.

| Token              | Value    |
|:-------------------|:---------|
| `--b-fraction-1-6` | 16.6666% |
| `--b-fraction-1-5` | 20%      |
| `--b-fraction-1-4` | 25%      |
| `--b-fraction-1-3` | 33.3333% |
| `--b-fraction-2-5` | 40%      |
| `--b-fraction-1-2` | 50%      |
| `--b-fraction-3-5` | 60%      |
| `--b-fraction-2-3` | 66.6666% |
| `--b-fraction-3-4` | 75%      |
| `--b-fraction-4-5` | 80%      |
| `--b-fraction-5-6` | 83.3333% |

### Aspect Ratios
Tokens for maintaining consistent proportions for images, videos, and cards.

| Token                    | Ratio       | Usage                                                            |
|:-------------------------|:------------|:-----------------------------------------------------------------|
| `--b-aspect-square`      | `1 / 1`     | Avatars, Icons                                                   |
| `--b-aspect-landscape`   | `4 / 3`     | Classic Photo Displays                                           |
| `--b-aspect-portrait`    | `3 / 4`     | Mobile-first content, vertical product cards, story previews     |
| `--b-aspect-photography` | `3 / 2`     | Standard DSLR photo galleries, professional portfolio thumbnails |
| `--b-aspect-widescreen`  | `16 / 9`    | YouTube, Hero Sections                                           |
| `--b-aspect-ultrawide`   | `18 / 5`    | Banners                                                          |
| `--b-aspect-golden`      | `1.618 / 1` | Balanced layouts                                                 |

## Stacking Context (Layers)

Z-index management is simplified through a named layering system. Instead of random numbers, use the hierarchical scale.

| Token               | Value           | Intent                              |
|:--------------------|:----------------|:------------------------------------|
| `--b-z-negative`    | `-1`            | Background decorations              |
| `--b-z-0`           | `0`             | Default content                     |
| `--b-z-1 ... 5`     | `10 ... 50`     | Relative layering within components |
| `--b-z-10 ... 50`   | `100 ... 500`   | Navigation, Tooltips, Stickies      |
| `--b-z-100 ... 500` | `1000 ... 5000` | Overlays, Modals, Toasts            |
| `--b-z-max`         | `2147483647`    | Critical system alerts              |

::: tip Semantic Contract
Note that the [Semantic Contract](./semantic-contract) maps these raw layer tokens to functional roles like `--b-z-modal` or `--b-z-nav`. Always prefer semantic tokens in your CSS.
:::