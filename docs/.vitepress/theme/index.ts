import {Theme, useData} from "vitepress";
import DefaultTheme from "vitepress/theme";
import { BestiaryUI } from "@bestiary-ui/components";
import "@bestiary-ui/style";
import "./custom.css";
import IconGallery from "./components/IconGallery.vue";
import DocTabs from "./components/doc-tab/DocTabs.vue";
import DocTabPane from "./components/doc-tab/DocTabPane.vue";
import {onMounted, watch} from "vue";

const theme: Theme = {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.use(BestiaryUI)
        app.component("IconGallery", IconGallery)
        app.component("DocTabs", DocTabs)
        app.component("DocTabPane", DocTabPane)
    },
    setup() {
        const { isDark } = useData()

        // Функція для синхронізації теми
        const syncTheme = (dark: boolean) => {
            if (typeof document !== 'undefined') {
                document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
            }
        }

        // Стежимо за зміною теми у VitePress
        watch(isDark, (val) => syncTheme(val))

        // Встановлюємо початкове значення при завантаженні
        onMounted(() => syncTheme(isDark.value))
    }
};

export default theme;