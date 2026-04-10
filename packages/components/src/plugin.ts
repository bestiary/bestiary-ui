import { App, Plugin } from "vue";
import * as components from "./components";

export const BestiaryUI: Plugin = {
    install(app: App) {
        Object.values(components).forEach((component: any) => {
            // Перевіряємо сам компонент
            if (component && typeof component.install === "function") {
                app.use(component);
            }
            // Іноді в ESM значення може бути загорнуте в .default
            else if (component?.default && typeof component.default.install === "function") {
                app.use(component.default);
            }
        });
    }
};

export default BestiaryUI;