import type { App } from "vue";

export type SFCWithInstall<T> = T & { install(app: App): void };

export const withInstall = <T>(comp: T): SFCWithInstall<T> => {
    (comp as any).install = (app: App) => {
        const name = (comp as any).name || (comp as any).__name;
        if (name) {
            app.component(name, comp as any);
        }
    }
    return comp as SFCWithInstall<T>;
}
