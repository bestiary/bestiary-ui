import { App, Plugin } from "vue";
import * as components from "./components";

export const BestiaryUI: Plugin = {
    install(app: App) {
        for (const key in components) {
            const component = (components as any)[key];
            if (component.install) {
                app.use(component);
            }
        }
    }
};

export default BestiaryUI;

// import { App, Plugin } from 'vue'
// import * as components from './components'
//
// export const BestiaryUI: Plugin = {
//     install(app: App) {
//         for (const key in components) {
//             const component = (components as any)[key]
//             if (component.install) {
//                 app.use(component)
//             }
//         }
//     }
// }
//
// export default BestiaryUI
