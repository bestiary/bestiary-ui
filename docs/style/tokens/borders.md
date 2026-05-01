# Borders <VersionBadge module="style" />

Border tokens manage the outlines and corner shapes of elements. The system includes standard scales, organic "hand-drawn" shapes, and advanced conditional logic for responsive layouts.

## Stroke Weights
Standardized tokens for border widths and outlines.

| Token             | Value  | Intent                                       |
|:------------------|:-------|:---------------------------------------------|
| `--b-stroke-sm`   | `1px`  | Subtle dividers and standard borders         |
| `--b-stroke-md`   | `2px`  | Stronger borders or interactive focus states |
| `--b-stroke-lg`   | `3px`  | Emphasized outlines                          |
| `--b-stroke-xl`   | `5px`  | Heavy decorative borders                     |
| `--b-stroke-2xl`  | `10px` | Bold architectural outlines                  |
| `--b-stroke-none` | `0px`  | No border                                    |

## Corner Radius
Our radius system is designed for consistency across all component sizes.

### Standard Scale

| Token                | Value      | Pixel                       |
|:---------------------|:-----------|:----------------------------|
| `--b-radius-xs`      | `0.125rem` | 2px                         |
| `--b-radius-sm`      | `0.25rem`  | 4px                         |
| `--b-radius-md`      | `0.375rem` | 6px                         |
| `--b-radius-lg`      | `0.5rem`   | 8px                         |
| `--b-radius-xl`      | `0.75rem`  | 12px                        |
| `--b-radius-2xl`     | `1rem`     | 16px                        |
| `--b-radius-3xl`     | `1.5rem`   | 24px                        |
| `--b-radius-4xl`     | `2rem`     | 32px                        |
| `--b-radius-full`    | `1e5px`    | Perfect circle / Pill shape |
| `--b-radius-none`    | `none`     | None                        |
| `--b-radius-inherit` | `inherit`  | Inherit                     |

## Conditional Radius (Smart Corners)
One of the most advanced features of Bestiary UI. Conditional tokens automatically adjust the corner radius based on the element's width relative to the viewport.

**The Logic:**
- If the element is **full-width** (e.g., touching the screen edges), the corners become **sharp (0px)**.
- If the element is **inset** (e.g., inside a container), the corners maintain their **rounded** value.

| Token                        | Value                                                        |
|:-----------------------------|:-------------------------------------------------------------|
| `--b-radius-conditional-xs`  | `clamp(0px, calc(100vw - 100%) * 1e5, var(--b-radius-xs));`  |
| `--b-radius-conditional-sm`  | `clamp(0px, calc(100vw - 100%) * 1e5, var(--b-radius-sm));`  |
| `--b-radius-conditional-md`  | `clamp(0px, calc(100vw - 100%) * 1e5, var(--b-radius-md));`  |
| `--b-radius-conditional-lg`  | `clamp(0px, calc(100vw - 100%) * 1e5, var(--b-radius-lg));`  |
| `--b-radius-conditional-xl`  | `clamp(0px, calc(100vw - 100%) * 1e5, var(--b-radius-xl));`  |
| `--b-radius-conditional-2xl` | `clamp(0px, calc(100vw - 100%) * 1e5, var(--b-radius-2xl));` |
| `--b-radius-conditional-3xl` | `clamp(0px, calc(100vw - 100%) * 1e5, var(--b-radius-3xl));` |
| `--b-radius-conditional-4xl` | `clamp(0px, calc(100vw - 100%) * 1e5, var(--b-radius-4xl));` |
```css
/* Automatically sharp on mobile, rounded on desktop */
.card {
  border-radius: var(--b-radius-conditional-lg);
}
```

## Creative Shapes
For unique designs, we provide non-standard radius tokens that create organic, fluid shapes.

### Organic "Drawn" Radius
These tokens simulate a hand-drawn, slightly imperfect look using complex 8-point border-radius values.

| Token                | Value                                           |
|:---------------------|:------------------------------------------------|
| `--b-radius-drawn-1` | `255px 15px 225px 15px / 15px 225px 15px 255px` |
| `--b-radius-drawn-2` | `125px 10px 20px 185px / 25px 205px 205px 25px` |
| `--b-radius-drawn-3` | `15px 255px 15px 225px / 225px 15px 255px 15px` |
| `--b-radius-drawn-4` | `15px 25px 155px 25px / 225px 150px 25px 115px` |
| `--b-radius-drawn-5` | `250px 25px 15px 20px / 15px 80px 105px 115px`  |
| `--b-radius-drawn-6` | `28px 100px 20px 15px / 150px 30px 205px 225px` |

### Blobs
Fluid, liquid-like shapes perfect for background decorations or unique avatars.

| Token               | Value                               |
|:--------------------|:------------------------------------|
| `--b-radius-blob-1` | `30% 70% 70% 30% / 53% 30% 70% 47%` |
| `--b-radius-blob-2` | `53% 47% 34% 66% / 63% 46% 54% 37%` |
| `--b-radius-blob-3` | `37% 63% 56% 44% / 49% 56% 44% 51%` |
| `--b-radius-blob-4` | `63% 37% 37% 63% / 43% 37% 63% 57%` |
| `--b-radius-blob-5` | `49% 51% 48% 52% / 57% 44% 56% 43%` |

```html
<div class="size-12" style="border-radius: var(--b-radius-blob-1); background: var(--b-primary-500);">
  <!-- Liquid shape container -->
</div>
```

## Technical Specs (Houdini)
The `--b-radius` and `--b-stroke` tokens are registered via `@property`, allowing for:
- **Smooth Morphing**: Animate between different radius sizes or blob shapes natively.
- **Type Safety**: Values are validated as `<length>`, preventing layout shifts from invalid CSS assignments.