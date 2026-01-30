import { defineConfig } from "vite";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dts from "vite-plugin-dts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "BestiaryUtils",
            fileName: "index",
            formats: ["es", "cjs"],
        },
        outDir: resolve(__dirname, "../../packages/bestiary-ui/utils"),
        emptyOutDir: true,
        rollupOptions: {
            external: ["vue"],
        },
    },
    plugins: [
        dts({
            exclude: ["vite.config.ts"],
            outDir: resolve(__dirname, "../../packages/bestiary-ui/utils"),
            cleanVueFileName: true,
            tsconfigPath: resolve(__dirname, "tsconfig.json"),
        }),
    ],
});
