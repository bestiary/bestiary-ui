import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import glob from "fast-glob";

import { libInjectCss } from "vite-plugin-lib-inject-css";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Find all entry points: index.ts, plugin.ts, and all components' index.ts
const entries = glob.sync(["src/index.ts", "src/plugin.ts", "src/**/index.ts"], {
    cwd: __dirname,
    absolute: true,
});

// Map entries to entry names (e.g. 'button/index' or 'index')
const input = entries.reduce((acc, file) => {
    const name = file.replace(/\\/g, "/").split("/src/")[1].replace(".ts", "")
    acc[name] = file
    return acc
}, {} as Record<string, string>);

export default defineConfig({
    plugins: [
        vue(),
        libInjectCss(),
        dts({
            outDir: resolve(__dirname, "../../packages/bestiary-ui/components"),
            cleanVueFileName: true,
            tsconfigPath: resolve(__dirname, "tsconfig.json"),
            entryRoot: resolve(__dirname, "src")
        })
    ],
    build: {
        outDir: resolve(__dirname, "../../packages/bestiary-ui/components"),
        emptyOutDir: true,
        cssCodeSplit: true,
        lib: {
            entry: input,
            formats: ["es", "cjs"]
        },
        rollupOptions: {
            external: ["vue", "@bestiary-ui/utils", "@bestiary-ui/style", "@bestiary-ui/icons"],
            output: [
                {
                    format: "es",
                    exports: "named",
                    preserveModules: true,
                    preserveModulesRoot: "src",
                    entryFileNames: (chunkInfo: any) => {
                        if (chunkInfo.name.includes("node_modules")) {
                            return "vendors/[name].js";
                        }
                        // Remove .vue from the name to avoid Button.vue.js or Button.vue2.js
                        const name = chunkInfo.name.replace(/\.vue$/, "");
                        return `${name}.js`;
                    }
                },
                {
                    format: "cjs",
                    exports: "named",
                    preserveModules: true,
                    preserveModulesRoot: "src",
                    entryFileNames: (chunkInfo: any) => {
                        if (chunkInfo.name.includes("node_modules")) {
                            return "vendors/[name].cjs";
                        }
                        // Remove .vue from the name
                        const name = chunkInfo.name.replace(/\.vue$/, "");
                        return `${name}.cjs`;
                    }
                }
            ]
        }
    }
});
