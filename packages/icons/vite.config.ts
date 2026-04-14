import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
    plugins:[
        dts({
            tsconfigPath: resolve(__dirname, "tsconfig.json"),
            outDir: resolve(__dirname, "../../build/icons"),
            entryRoot: resolve(__dirname, "generated"),
            insertTypesEntry: true,
        })
    ],
    build: {
        outDir: resolve(__dirname, "../../build/icons"),
        emptyOutDir: false,
        lib: {
            entry: resolve(__dirname, "generated/index.ts"),
            formats: ["es"],
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                preserveModules: true,
                preserveModulesRoot: resolve(__dirname, "generated"),
                entryFileNames: "[name].js",
            }
        }
    }
});