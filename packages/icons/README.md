# @bestiary-ui/icons

SVG icon components for Vue 3. Part of the Bestiary UI ecosystem.

![alt text](https://img.shields.io/npm/v/%40bestiary-ui%2Ficons.svg)


![license](https://img.shields.io/npm/l/%40bestiary-ui%2Ficons.svg)

## Features

* **Vue 3 First:** Functional components designed specifically for the Vue 3 Composition API.

* **TypeScript Support:** Full type definitions for every icon out of the box.

* **Styling:** Easily control size and color via props or standard CSS classes.

* **Optimized:** Based on the 24x24 pixel-perfect grid from Heroicons.

## Installation

```
# Using pnpm
pnpm add @bestiary-ui/icons

# Using npm
npm install @bestiary-ui/icons

# Using yarn
yarn add @bestiary-ui/icons
```

## Usage

All icons are exported as individual components. They follow the naming convention: `[Name][Style]`.

### Basic Example

``` vue
<script setup>
import { 
  PlusSolid, 
  BellOutline, 
  AcademicCapSolid 
} from '@bestiary-ui/icons';
</script>

<template>
  <div class="flex gap-4">
    <!-- Solid style -->
    <PlusSolid size="24" color="#7dae78" />

    <!-- Outline style with CSS classes -->
    <BellOutline size="20" class="b-text-primary" />

    <!-- Default 1em size (inherits from font-size) -->
    <AcademicCapSolid />
  </div>
</template>
```

## Component API

Each icon component accepts the following props:

| Prop     | Type               | Default | Description                                      |
|----------|--------------------|---------|--------------------------------------------------|
| `size`   | `string \| number` | `'1em'` | The width and height of the icon.                |
| `color`  | `string`           | `null`  | The color of the icon  ( sets the color style ). |

Additionally, icons inherit all attributes (like `class`, `id`, `onclick`) and apply them to the root `<svg>` tag.

## Naming Convention

* Solid Icons: Represented by the `Solid` suffix (e.g., `UserSolid`).
* Outline Icons: Represented by the `Outline` suffix (e.g., `UserOutline`).

## Credits

This icon set is based on the amazing [Heroicons](https://heroicons.com) library created by the [Tailwind Labs](https://github.com/tailwindlabs) team.
The original SVG files are licensed under the MIT License.
License

MIT © [Bestiary UI](https://github.com/bestiary/bestiary-ui/blob/main/packages/icons/LICENSE)