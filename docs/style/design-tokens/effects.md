# Effects <VersionBadge module="style" />
Effects tokens manage the visual depth, light interaction, and transparency of elements. By leveraging the **OKLCH Shadow Engine**, Bestiary UI provides shadows that automatically inherit the hue of their surroundings.

## The Shadow Engine
Traditional CSS shadows often look "muddy" or gray. Bestiary UI uses raw color channels to calculate shadows, ensuring they remain vibrant and naturally blended.

### Shadow Configuration
You can control the tint of all shadows in a specific context by redefining the channel variable:

```css
.blue-section {
  /* All shadows inside this section will have a subtle blue tint */
  --b-shadow-color-channels: var(--b-blue-500-channels);
}
```

### Elevation Scale (Box Shadows)
Used to create a sense of depth and hierarchy.

| Token            | Intensity | Intent                            |
|:-----------------|:----------|:----------------------------------|
| `--b-shadow-2xs` | 2XS       | Micro-elevation, subtle borders   |
| `--b-shadow-xs`  | XS        | Slight lift for small components  |
| `--b-shadow-sm`  | Small     | Standard elevation for cards      |
| `--b-shadow-md`  | Medium    | Prominent lift for dropdowns      |
| `--b-shadow-lg`  | Large     | High elevation for modals         |
| `--b-shadow-xl`  | XL        | Deep elevation for major overlays |
| `--b-shadow-2xl` | 2XL       | Maximum depth for global alerts   |

## Rings (Focus & Borders)
Rings provide a way to add outlines or focus states that don't affect the element's layout size.

### Outer Ring
The standard `--b-ring` uses a dual-layer approach: an offset (to create space) and the ring itself.

```css
.element {
  --b-ring-width: 2px;
  --b-ring-offset-width: 2px;
  --b-ring-color-channels: var(--b-primary-500-channels);
  box-shadow: var(--b-ring);
}
```

### Inset Ring
The `--b-inset-ring` is applied inside the element, perfect for subtle inner borders.

- **Token**: `--b-inset-ring`
- **Config**: `--b-inset-ring-width`, `--b-inset-ring-alpha`

## Blurs
Standardized Gaussian blur values for background glass effects or element softening.

| Token           | Value  | Intent                                                 |
|:----------------|:-------|:-------------------------------------------------------|
| `--b-blur-xs`   | `4px`  | Subtle softening                                       |
| `--b-blur-sm`   | `8px`  | Soft diffusion, ideal for overlay backdrops            |
| `--b-blur-md`   | `12px` | Standard "Glassmorphism" effect                        |
| `--b-blur-lg`   | `16px` | Strong diffusion for high-contrast background elements |
| `--b-blur-xl`   | `24px` | Heavy blur for background depth                        |
| `--b-blur-2xl`  | `40px` | Atmospheric abstraction of background shapes           |
| `--b-blur-3xl`  | `64px` | Extreme abstraction                                    |
| `--b-blur-none` | `0px`  | No blur applied                                        |

## Drop Shadows (SVG & Shapes)
Unlike box shadows, drop shadows follow the actual shape of the content (useful for icons or irregular shapes).

- **Scale**: `--b-drop-shadow-xs` to `--b-drop-shadow-2xl`.
- **Config**: Uses `--b-drop-shadow-color-channels`.

| Token                 | Intensity | Intent                            |
|:----------------------|:----------|:----------------------------------|
| `--b-drop-shadow-2xs` | 2XS       | Micro-elevation, subtle borders   |
| `--b-drop-shadow-xs`  | XS        | Slight lift for small components  |
| `--b-drop-shadow-sm`  | Small     | Standard elevation for cards      |
| `--b-drop-shadow-md`  | Medium    | Prominent lift for dropdowns      |
| `--b-drop-shadow-lg`  | Large     | High elevation for modals         |
| `--b-drop-shadow-xl`  | XL        | Deep elevation for major overlays |
| `--b-drop-shadow-2xl` | 2XL       | Maximum depth for global alerts   |

## Inset Shadows
Used to create "pressed" or "hollow" effects (inputs, sunken containers).

| Token                   | Intensity                      |
|:------------------------|:-------------------------------|
| `--b-inset-shadow-2xs`  | Ultra Subtle                   |
| `--b-inset-shadow-xs`   | Subtle                         |
| `--b-inset-shadow-sm`   | Small (Standard pressed state) |
| `--b-inset-shadow-none` | None                           |

## Opacity (Alpha)
Standardized scale for transparency levels.

| Token           | Value  |
|:----------------|:-------|
| `--b-alpha-0`   | `0`    |
| `--b-alpha-10`  | `0.1`  |
| `--b-alpha-20`  | `0.2`  |
| `--b-alpha-30`  | `0.3`  |
| `--b-alpha-40`  | `0.4`  |
| `--b-alpha-50`  | `0.5`  |
| `--b-alpha-60`  | `0.6`  |
| `--b-alpha-70`  | `0.7`  |
| `--b-alpha-80`  | `0.8`  |
| `--b-alpha-90`  | `0.9`  |
| `--b-alpha-95`  | `0.95` |
| `--b-alpha-100` | `1`    |

## Technical Specs (Houdini)
Most effect tokens are registered with `@property`, enabling high-performance animations:
- **Interpolatable Shadows**: You can smoothly animate between `--b-shadow-sm` and `--b-shadow-xl`.
- **Typed Channels**: Color channels are validated as `<number>+`, ensuring runtime reliability.