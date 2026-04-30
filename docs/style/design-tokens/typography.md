# Typography
Typography tokens manage everything related to text presentation, from font stacks and scales to line clamping and specialized OKLCH-based text shadows.

## Font Families
We provide three optimized font stacks that cover the most common UI needs, focusing on system fonts for maximum performance and reliability.

| Token            | Type       | Font Stack                                                                                                                                                                                         |
|:-----------------|:-----------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--b-font-sans`  | Sans-Serif | ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" |
| `--b-font-serif` | Serif      | ui-serif, Georgia, Cambria, "Times New Roman", Times, serif                                                                                                                                        |
| `--b-font-mono`  | Monospace  | ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace                                                                                                 |

## Font Sizes & Line Heights
Bestiary UI uses a paired system where each font size comes with a pre-calculated, optimal line height. This ensures perfect readability across all scales.

| Token             | Value      | Pixels   | Default Line Height Token      | Value                 |
|:------------------|:-----------|:---------|:-------------------------------|:----------------------|
| `--b-text-2xs`    | `0.625rem` | 10px     | `--b-text-2xs--line-height`    | `calc(1 / 0.625);`    |
| `--b-text-xs`     | `0.75rem`  | 12px     | `--b-text-xs--line-height`     | `calc(1 / 0.75);`     |
| `--b-text-sm`     | `0.875rem` | 14px     | `--b-text-sm--line-height`     | `calc(1.25 / 0.875);` |
| **`--b-text-md`** | **`1rem`** | **16px** | **`--b-text-md--line-height`** | `calc(1.5 / 1);`      |
| `--b-text-lg`     | `1.125rem` | 18px     | `--b-text-lg--line-height`     | `calc(1.75 / 1.125);` |
| `--b-text-xl`     | `1.25rem`  | 20px     | `--b-text-xl--line-height`     | `calc(1.75 / 1.25);`  |
| `--b-text-2xl`    | `1.5rem`   | 24px     | `--b-text-2xl--line-height`    | `calc(2 / 1.5);`      |
| `--b-text-3xl`    | `1.875rem` | 30px     | `--b-text-3xl--line-height`    | `calc(2.25 / 1.875);` |
| `--b-text-4xl`    | `2.25rem`  | 36px     | `--b-text-4xl--line-height`    | `calc(2.5 / 2.25);`   |
| `--b-text-5xl`    | `3rem`     | 48px     | `--b-text-5xl--line-height`    | `1;`                  |
| `--b-text-6xl`    | `3.75rem`  | 60px     | `--b-text-6xl--line-height`    | `1;`                  |
| `--b-text-7xl`    | `4.5rem`   | 72px     | `--b-text-7xl--line-height`    | `1;`                  |
| `--b-text-8xl`    | `6rem`     | 96px     | `--b-text-8xl--line-height`    | `1;`                  |
| `--b-text-9xl`    | `8rem`     | 128px    | `--b-text-9xl--line-height`    | `1;`                  |

### Named Line Heights
If you need to override the default leading, use these named tokens:

| Token                     | Value   |
|:--------------------------|:--------|
| `--b-line-height-none`    | `1`     |
| `--b-line-height-tight`   | `1.25`  |
| `--b-line-height-normal`  | `1.5`   |
| `--b-line-height-relaxed` | `1.625` |
| `--b-line-height-loose`   | `2`     |

## Font Weights
A full range of weights from Thin to Black, mapped to standard numeric values.

| Token                        | Value |
|:-----------------------------|:------|
| `--b-font-weight-thin`       | `100` |
| `--b-font-weight-extralight` | `200` |
| `--b-font-weight-light`      | `300` |
| `--b-font-weight-normal`     | `400` |
| `--b-font-weight-medium`     | `500` |
| `--b-font-weight-semibold`   | `600` |
| `--b-font-weight-bold`       | `700` |
| `--b-font-weight-extrabold`  | `800` |
| `--b-font-weight-black`      | `900` |

## Letter Spacing
Fine-tune the horizontal density of your text.

| Token                        | Value      |
|:-----------------------------|:-----------|
| `--b-letter-spacing-tighter` | `-0.05em`  |
| `--b-letter-spacing-tight`   | `-0.025em` |
| `--b-letter-spacing-normal`  | `0em`      |
| `--b-letter-spacing-wide`    | `0.025em`  |
| `--b-letter-spacing-wider`   | `0.05em`   |
| `--b-letter-spacing-widest`  | `0.1em`    |

---

## Line Clamp (Truncation)
Tokens to control multi-line text truncation. Requires `display: -webkit-box` and `box-orient: vertical` (usually handled by utility classes).

| Token                 | Lines                        |
|:----------------------|:-----------------------------|
| `--b-line-clamp-1`    | `1` line (standard ellipsis) |
| `--b-line-clamp-2`    | `2` lines                    |
| `--b-line-clamp-3`    | `3` lines                    |
| `--b-line-clamp-4`    | `4` lines                    |
| `--b-line-clamp-5`    | `5` lines                    |
| `--b-line-clamp-6`    | `6` lines                    |
| `--b-line-clamp-none` | `9999` lines (no truncation) |

## Text Shadow Engine
Similar to our box shadows, text shadows use the **OKLCH engine**. They automatically adapt to the hue of your text if you provide the appropriate color channels.

### Shadow Configuration
- **Channel Reference**: `--b-text-shadow-color-channels` (inherited or defined per context).
- **Opacity Tiers**: From `alpha-2xs` to `alpha-lg`.

| Token                  | Intensity    | Intent                                             |
|:-----------------------|:-------------|:---------------------------------------------------|
| `--b-text-shadow-2xs`  | Ultra Subtle | Improving readability on slightly busy backgrounds |
| `--b-text-shadow-xs`   | Subtle       | Easy highlighting against a highlighted background |
| `--b-text-shadow-sm`   | Small        | Subtle lift for headers                            |
| `--b-text-shadow-md`   | Medium       | Noticeable depth for hero text                     |
| `--b-text-shadow-lg`   | Large        | Cinematic, multi-layered text depth                |
| `--b-text-shadow-none` | None         | Default text without a shadow                      |

```css
.hero-title {
  --b-text-shadow-color-channels: var(--b-primary-500-channels);
  text-shadow: var(--b-text-shadow-lg);
}
```

::: tip Semantic Typography
Remember that in real applications, you should use **Semantic Typography Tokens** like `--b-h1-size` or `--b-body-leading` from the [Semantic Contract](./semantic-contract). They automatically map these raw values to specific UI roles.
:::