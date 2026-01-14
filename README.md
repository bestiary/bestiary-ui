# Bestiary UI

A production-ready Vue 3 UI component library in a monorepo format.

## Packages

- `@bestiary-ui/components`: Vue 3 components (Button, Card, etc.)
- `@bestiary-ui/utils`: Shared utility functions
- `@bestiary-ui/style`: CSS design tokens, themes, and global variables

## Installation

```bash
pnpm add @bestiary-ui/components @bestiary-ui/style
```

## Usage

To ensure components are displayed correctly, you need to include **two** types of styles: global tokens and the component-specific styles.

### Global Setup

```ts
import { createApp } from 'vue'
import App from './App.vue'

// 1. Import components
import BestiaryUIComponents from '@bestiary-ui/components'

// 2. Import global styles (themes, variables)
import '@bestiary-ui/style'

// 3. Import component styles (structure)
import '@bestiary-ui/components/style.css'

const app = createApp(App)
app.use(BestiaryUIComponents)
app.mount('#app')
```

### Button Component (`BButton`)

The button component supports various types and sizes.

```vue
<template>
  <BButton type="primary" size="md">Click Me</BButton>
  <BButton type="success" disabled>Success Disabled</BButton>
</template>

<script setup>
import { BButton } from '@bestiary-ui/components'
</script>
```

**Props:**
- `type`: `'primary' | 'success' | 'warning' | 'danger'` (default: `'primary'`)
- `size`: `'sm' | 'md' | 'lg'` (default: `'md'`)
- `disabled`: `boolean`

---

## Development & Build Workflow

### Commands

| Command | Description |
| :--- | :--- |
| `pnpm dev` | Run the playground in development mode (linking directly to `src`). |
| `pnpm build` | Full build of all library packages. |
| `pnpm build:components` | Build components only. |
| `pnpm build:style` | Minification and preparation of global styles. |
| `pnpm pack:libs` | Create `.tgz` archives for local testing (output to `/packed` folder). |
| `pnpm dev:build` | Run the test playground using the built archives. |

### Build Verification
To verify how the library will work after publishing to npm:
1. Run `pnpm build`.
2. Run `pnpm pack:libs` (creates archives in `packed/`).
3. Run `pnpm dev:build` to verify in a production-like environment.
