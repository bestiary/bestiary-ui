import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { BestiaryUI } from "@bestiary-ui/components";
import "./custom.css";
import IconGallery from "./components/IconGallery.vue";

const theme: Theme = {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.use(BestiaryUI)
        app.component("IconGallery", IconGallery)
    }
};

export default theme;