import type { App, Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin;

export const withInstall = <T>(comp: T) => {
    (comp as SFCWithInstall<T>).install = (app: App) => {
        const name = (comp as any).name || (comp as any).__name;
        if (name) {
            app.component(name, comp as any);
        } else {
            console.warn(`[Bestiary UI] Component is missing a name and couldn't be registered globally.`);
        }
    }
    return comp as SFCWithInstall<T>;
}