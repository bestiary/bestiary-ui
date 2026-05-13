import {Theme, useData} from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./custom.css";
import "@bestiary-ui/style";
import { BestiaryUI } from "@bestiary-ui/components";
import VersionBadge from "./components/VersionBadge.vue";
import IconGallery from "./components/IconGallery.vue";
import PaletteGenerator from "./components/PaletteGenerator.vue";
import DocTabs from "./components/doc-tab/DocTabs.vue";
import DocTabPane from "./components/doc-tab/DocTabPane.vue";
import {onMounted, watch} from "vue";

const theme: Theme = {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.use(BestiaryUI)
        app.component("VersionBadge", VersionBadge);
        app.component("IconGallery", IconGallery);
        app.component("PaletteGenerator", PaletteGenerator);
        app.component("DocTabs", DocTabs);
        app.component("DocTabPane", DocTabPane);
    },
    setup() {
        const { isDark } = useData()

        const syncTheme = (dark: boolean) => {
            if (typeof document !== 'undefined') {
                const html = document.documentElement;

                html.setAttribute("data-color-mode", dark ? "dark" : "light");

                if(!html.hasAttribute("data-theme")) {
                    html.setAttribute("data-theme", "forest");
                }
                if(!html.hasAttribute("data-essence")) {
                    html.setAttribute("data-essence", "leaf");
                }
            }
        }

        watch(isDark, (val) => syncTheme(val));

        onMounted(() => syncTheme(isDark.value));
    }
};

export default theme;