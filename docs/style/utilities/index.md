# Utilities <VersionBadge module="style" />
Utilities are a set of low-level, atomic CSS classes designed to speed up the development process. They provide a quick way to apply styles directly in your markup without writing custom CSS.

## The Role of Utilities
Bestiary UI is a **component-oriented ecosystem**. This means that the primary look and feel of your application should be driven by structured components. 

Utilities serve as an auxiliary layer. They are the "glue" that helps you:
- Adjust layout and alignment.
- Fine-tune spacings in unique edge cases.
- Prototype new layouts rapidly before encapsulating them into reusable components.

## Pure CSS Architecture
Unlike many modern utility frameworks, Bestiary UI Utilities are written in **pure CSS**. 
- **No Generation**: There is no JIT (Just-In-Time) compiler or complex build steps involved. 
- **Zero Overhead**: Since they are static CSS classes, they work instantly in any environment, from simple HTML files to complex SPA frameworks.
- **Predictable Cascade**: All utilities live within the `@layer b-utilities` CSS layer, giving them a predictable priority that won't conflict with your base styles.

## Naming Convention
We use short, familiar naming conventions (inspired by industry standards) to keep your HTML clean and readable. By omitting the `b-` prefix for utilities, we ensure maximum development speed.

```html
<!-- Example: Using utilities to layout a custom card -->
<div class="flex flex-col gap-4 p-6 surface-section radius-xl shadow-md">
  <div class="text-xl font-bold">Rapid Prototyping</div>
  <p class="text-secondary">
    Use utilities for layout, then move to components for production.
  </p>
</div>
```

## Next Steps

Explore the utility categories to find the classes you need:
- [**Spacing**](./spacing) — Padding and Margin controls.
- [**Sizing**](./sizing) — Width, Height, and constraints.
- [**Layout**](layout.md) — Position, Z-index, and display properties.
- [**Composition**](./composition) — Flexbox and CSS Grid layouts.
- [**Typography**](./typography) — Font styles, alignment, and shadows.
- [**Interactivity**](./interactivity) — Cursor, scroll, and transition behaviors.
- [**Effects**](./effects) — Box shadows, opacity, and blurs.
- [**Borders**](./borders) — Radius and border styling.