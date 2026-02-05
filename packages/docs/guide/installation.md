# Installation

Bestiary UI is a modular ecosystem. You can install only the packages you need for your specific project.

## Quick Start

To use the core components with our default styling, install the following packages:

```bash
pnpm add @bestiary-ui/components @bestiary-ui/style @bestiary-ui/icons
```

## Global Registration

If you want to make all components available globally in your application:

```typescript
import { createApp } from 'vue'
import { BestiaryUI } from '@bestiary-ui/components'
import '@bestiary-ui/style'

const app = createApp(App)
app.use(BestiaryUI)
app.mount('#app')
```

## Individual Imports

For better tree-shaking performance, we recommend importing components individually:

```vue
<script setup>
import { BButton } from '@bestiary-ui/components'
import '@bestiary-ui/style/reset.css'
import '@bestiary-ui/style/tokens.css'
</script>
```