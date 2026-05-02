# Effects <VersionBadge module="style" />
Effects utilities manage the visual depth, transparency, and softening of elements. They leverage the core [Shadow Engine](../design-tokens/effects) and global blur/alpha tokens to create polished, modern interfaces.

## Box Shadow (Elevation)
Utilities for controlling the elevation and depth of an element. These classes use multi-layered shadows to ensure a soft, realistic look.

| Class         | Token            | Intensity                                     |
|:--------------|:-----------------|:----------------------------------------------|
| `shadow-none` | —                | Removes all shadows.                          |
| `shadow-2xs`  | `--b-shadow-2xs` | Micro-elevation for small items.              |
| `shadow-xs`   | `--b-shadow-xs`  | Extra small lift.                             |
| `shadow-sm`   | `--b-shadow-sm`  | Standard lift for cards and small components. |
| `shadow-md`   | `--b-shadow-md`  | Prominent lift for dropdowns and popovers.    |
| `shadow-lg`   | `--b-shadow-lg`  | High elevation for modals.                    |
| `shadow-xl`   | `--b-shadow-xl`  | Deep elevation for major overlays.            |
| `shadow-2xl`  | `--b-shadow-2xl` | Maximum depth for global alerts.              |

### Shadow Color Hooks
Bestiary UI allows you to change the tint of your shadows semantically. Apply a color hook along with a shadow class to inject specific OKLCH channels into the shadow calculation.

| Class              | Target Essence              |
|:-------------------|:----------------------------|
| `shadow-primary`   | Maps to Primary channels.   |
| `shadow-secondary` | Maps to Secondary channels. |
| `shadow-success`   | Maps to Success channels.   |
| `shadow-danger`    | Maps to **Error** channels. |
| `shadow-warning`   | Maps to Warning channels.   |
| `shadow-info`      | Maps to Info channels.      |
| `shadow-contrast`  | Maps to Contrast channels.  |

```html
<!-- Example: A large modal shadow with a primary tint -->
<div class="shadow-lg shadow-primary surface-section">...</div>
```

## Inset Shadows (Inner Depth)
Used for "pressed" states, inputs, or to create a hollow effect.

| Class              | Token                  | Intent                                   |
|:-------------------|:-----------------------|:-----------------------------------------|
| `shadow-inset-2xs` | `--b-inset-shadow-2xs` | Ultra-subtle inner depth.                |
| `shadow-inset-xs`  | `--b-inset-shadow-xs`  | Standard inner shadow for form controls. |
| `shadow-inset-sm`  | `--b-inset-shadow-sm`  | Pronounced "pressed" effect.             |

## Blur & Backdrop Blur
Utilities for visual softening. Bestiary UI separates standard blurs from backdrop blurs to support modern layering techniques.

### Blur (Filter)
Applies the blur effect to the **element itself**.

| Class       | Value  | Class      | Value  |
|:------------|:-------|:-----------|:-------|
| `blur-none` | `0px`  | `blur-lg`  | `16px` |
| `blur-xs`   | `4px`  | `blur-xl`  | `24px` |
| `blur-sm`   | `8px`  | `blur-2xl` | `40px` |
| `blur-md`   | `12px` | `blur-3xl` | `64px` |

### Backdrop Blur
Applies the blur effect to the **area behind** the element. Essential for "Glassmorphism."

- **Usage**: Combine with a semi-transparent background (e.g., `opacity-80`).
- **Scale**: Matches the standard blur scale (`backdrop-blur-xs` to `backdrop-blur-3xl`).

```html
<!-- Glassmorphism Example -->
<div class="fixed top-0 backdrop-blur-md opacity-80 surface-section">
  Sticky Glass Header
</div>
```

## Opacity
Controls the transparency level of an element.

| Class        | Value        | Class         | Value        |
|:-------------|:-------------|:--------------|:-------------|
| `opacity-0`  | `0` (Hidden) | `opacity-60`  | `0.6`        |
| `opacity-10` | `0.1`        | `opacity-70`  | `0.7`        |
| `opacity-20` | `0.2`        | `opacity-80`  | `0.8`        |
| `opacity-30` | `0.3`        | `opacity-90`  | `0.90`       |
| `opacity-40` | `0.4`        | `opacity-95`  | `0.95`       |
| `opacity-50` | `0.5`        | `opacity-100` | `1` (Opaque) |

## Technical Note: Hue-Aware Shadows
Because Bestiary UI shadows are driven by OKLCH color channels, they automatically avoid the "dirty gray" look of traditional CSS shadows. By using `shadow-primary` or inherited channels, your shadows will feel like real light passing through or reflecting off colored objects.

::: tip Performance
`backdrop-filter` can be resource-intensive on mobile devices. Use `backdrop-blur-md` or lower for large areas to ensure smooth scrolling.
:::