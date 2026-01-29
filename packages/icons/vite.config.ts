import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    plugins: [
        vue(),
        dts({
            insertTypesEntry: true,
            cleanVueFileName: true,
            include: ["generated/**/*.ts", "generated/**/*.vue"],
            outDir: resolve(__dirname, "../../packages/bestiary-ui/icons"),
            entryRoot: resolve(__dirname, "generated")
        })
    ],
    build: {
        outDir: resolve(__dirname, "../../packages/bestiary-ui/icons"),
        lib: {
            entry: resolve(__dirname, "generated/index.ts"),
            name: "BestiaryIcons",
            formats: ["es"],
            fileName: "index"
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                preserveModules: true,
                preserveModulesRoot: resolve(__dirname, "generated"),
                entryFileNames: "[name].js"
            }
        },
        emptyOutDir: true
    }
});
