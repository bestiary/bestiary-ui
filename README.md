# Bestiary UI

Vue 3 UI component library by Bestiary.

## Packages

- `@bestiary-ui/components`: Vue 3 components (Button, Card, etc.)
- `@bestiary-ui/icons`: Collection of Vue 3 icons (Solid/Outline)
- `@bestiary-ui/utils`: Shared utility functions
- `@bestiary-ui/style`: CSS design tokens, themes, and global variables

## Installation

```bash
pnpm add @bestiary-ui/components @bestiary-ui/icons @bestiary-ui/style
```

### Global Setup

```ts
import { createApp } from 'vue'
import App from './App.vue'

// 1. Import components (styles are imported automatically)
import BestiaryUIComponents from '@bestiary-ui/components'

// 2. Import global styles (tokens, themes, variables)
import '@bestiary-ui/style'

const app = createApp(App)
app.use(BestiaryUIComponents)
app.mount('#app')
```

### Components and Icons

#### Button Component (`BButton`)

```vue
<template>
  <BButton type="primary" size="md">Click Me</BButton>
</template>

<script setup>
import { BButton } from '@bestiary-ui/components'
</script>
```

#### Icons (@bestiary-ui/icons)

Icons are organized by size and style. They support `currentColor` and can be styled with CSS.

```vue
<template>
  <BeakerIcon class="my-icon" />
</template>

<script setup>
import { BeakerIcon } from '@bestiary-ui/icons/24/solid'
</script>

<style>
.my-icon {
  width: 24px;
  height: 24px;
  color: #3b82f6;
}
</style>
```

Available sizes: `16`, `20`, `24`.
Available styles: `solid`, `outline` (24 only).

All SVG icons are adapted from [Heroicons](https://heroicons.com/) under MIT License.

---

## Development & Build Workflow

### Commands

| Command | Description |
| :--- | :--- |
| `pnpm dev` | Run the playground in development mode (linking directly to `src`). |
| `pnpm build` | Full build of all library packages. |
| `pnpm build:components` | Build components only. |
| `pnpm build:icons` | Generate and build icon components. |
| `pnpm build:style` | Minification and preparation of global styles. |
| `pnpm pack:libs` | Create `.tgz` archives for local testing (output to `/packed` folder). |
| `pnpm dev:build` | Run the test playground using the built archives. |

### Build Verification
To verify how the library will work after publishing to npm:
1. Run `pnpm build`.
2. Run `pnpm pack:libs` (creates archives in `packed/`).
3. Run `pnpm dev:build` to verify in a production-like environment.
