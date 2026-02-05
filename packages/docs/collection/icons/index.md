# Icons <Badge type="tip" text="v1.0.0" />

A comprehensive set of SVG icons designed for the Bestiary ecosystem. These components are based on [Heroicons](https://heroicons.com) and optimized for Vue 3.

## Library Explorer

Use the gallery below to find icons, copy their component names, or get the raw SVG code.

<IconGallery />

## Usage

Icons are exported as individual functional components. You can control their size and color using props or standard CSS classes.

```vue
<script setup>
import { PlusSolidIcon } from '@bestiary-ui/icons'
</script>

<template>
  <PlusSolidIcon size="24" class="b-text-primary" />
</template>