# Bestiary UI

A production-ready Vue 3 UI component library in a monorepo format.

## Packages

- `@bestiary-ui/components`: Vue 3 components
- `@bestiary-ui/utils`: Shared utility functions
- `@bestiary-ui/style`: CSS tokens and themes

## Installation

```bash
pnpm add @bestiary-ui/components @bestiary-ui/style
```

## Usage

### Global Plugin

```ts
import { createApp } from 'vue'
import App from './App.vue'
import BestiaryUI from '@bestiary-ui/components'
import '@bestiary-ui/style'

const app = createApp(App)
app.use(BestiaryUI)
app.mount('#app')
```

### Per-component Import

```ts
import { BButton } from '@bestiary-ui/components/button'
```

## Development

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start playground:
   ```bash
   pnpm dev
   ```

3. Build packages:
   ```bash
   pnpm build
   ```


pnpm dev	Запускає local playground з вихідним кодом (src). Ідеально для розробки.
pnpm build	Білдить все (components, utils, style).
pnpm build:components	Білдить тільки компоненти.
pnpm build:utils	Білдить тільки утиліти.
pnpm build:style	Білдить тільки стилі.
pnpm dev:dist	Запускає playground, використовуючи збілжені файли (dist). Для тестування бібліотеки перед релізом.