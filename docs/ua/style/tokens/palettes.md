# Primitive Palettes <VersionBadge module="style" />
Bestiary UI Style features a high-performance color system driven by the **OKLCH** color space. These primitive palettes are the foundational "ink" of the system, providing raw color scales defined with zero specificity.

## The OKLCH Advantage
All primitives are defined using the **OKLCH** color model (Lightness, Chroma, Hue). This ensures perceptually uniform brightness across all hues and provides access to the P3 wide color gamut.

### Using Raw Channels
Every color in our palettes exports a `-channels` variable. You can use it to create custom alpha-transparency while maintaining the integrity of the OKLCH space:

```css
.my-element {
  /* Using raw channels of Amber 500 with 30% opacity */
  background-color: oklch(var(--b-amber-500-channels) / 30%);
}
```

## Common Colors
Fundamental static colors that remain constant regardless of the active theme or essence.

<div class="common-grid">
  <div class="common-card">
    <div class="common-swatch" style="background: var(--b-white)"></div>
    <div class="common-info">
      <span class="common-name">White</span>
      <code>--b-white</code>
    </div>
  </div>
  <div class="common-card">
    <div class="common-swatch" style="background: var(--b-black)"></div>
    <div class="common-info">
      <span class="common-name">Black</span>
      <code>--b-black</code>
    </div>
  </div>
  <div class="common-card">
    <div class="common-swatch" style="background: transparent; border: 1px dashed var(--vp-c-divider)"></div>
    <div class="common-info">
      <span class="common-name">Transparent</span>
      <code>--b-transparent</code>
    </div>
  </div>
</div>

## Available Palettes
Each palette consists of 11 steps from `50` to `950`.

::: tip Interaction
Click **Var** to copy the CSS variable name, or **LCH** to copy the full `oklch()` expression with its raw channels.
:::

<PaletteGenerator name="red" />
<PaletteGenerator name="orange" />
<PaletteGenerator name="amber" />
<PaletteGenerator name="yellow" />
<PaletteGenerator name="lime" />
<PaletteGenerator name="green" />
<PaletteGenerator name="emerald" />
<PaletteGenerator name="teal" />
<PaletteGenerator name="cyan" />
<PaletteGenerator name="sky" />
<PaletteGenerator name="blue" />
<PaletteGenerator name="indigo" />
<PaletteGenerator name="violet" />
<PaletteGenerator name="purple" />
<PaletteGenerator name="fuchsia" />
<PaletteGenerator name="pink" />
<PaletteGenerator name="rose" />
<PaletteGenerator name="slate" />
<PaletteGenerator name="gray" />
<PaletteGenerator name="zinc" />
<PaletteGenerator name="neutral" />
<PaletteGenerator name="stone" />
<PaletteGenerator name="taupe" />
<PaletteGenerator name="mauve" />
<PaletteGenerator name="mist" />
<PaletteGenerator name="olive" />

## Semantic Usage
Primitives provide the raw data, but you should generally use **Semantic Tokens** from the [Contract](./semantic-contract) in your components to ensure they respond correctly to Essence and Theme changes.

```css
/* ❌ Avoid using primitives directly in components */
.my-button { background: var(--b-blue-500); }

/* ✅ Use semantic tokens (automatically adapts to context) */
.my-button { background: var(--b-primary-solid-background); }
```

<style>
.common-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
  margin: 20px 0;
}
.common-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}
.common-swatch {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  flex-shrink: 0;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.05);
}
.common-info {
  display: flex;
  flex-direction: column;
}
.common-name {
  font-size: 14px;
  font-weight: 600;
}
.common-info code {
  font-size: 11px;
  border: none;
  background: transparent;
  padding: 0;
  color: var(--vp-c-text-2);
}
</style>