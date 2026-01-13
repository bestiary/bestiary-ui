import { createApp } from 'vue'
import App from './App.vue'
import '@bestiary-ui/style' // Global styles
import '@bestiary-ui/components/style.css' // Component styles (bundled for now)

const app = createApp(App)
app.mount('#app')
