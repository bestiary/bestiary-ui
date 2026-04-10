import {defineConfig, UserConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { resolve, dirname, relative } from "path";
import { fileURLToPath } from "url";
import glob from "fast-glob";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(async () => {
    const srcDir = resolve(__dirname, "src");
    const entries = await glob(["src/index.ts", "src/plugin.ts", "src/**/index.ts"], {
        cwd: __dirname,
        absolute: true,
    });

    const input = entries.reduce((acc, file) => {
        const name = relative(srcDir, file).replace(/\.ts$/, "");
        acc[name] = file;
        return acc;
    }, {} as Record<string, string>);

    const outDir = resolve(__dirname, "dist");

    const config: UserConfig = {
        plugins: [
            vue(),
            dts({
                outDir,
                entryRoot: "src",
                cleanVueFileName: true,
                insertTypesEntry: true,
                tsconfigPath: resolve(__dirname, "tsconfig.json"),
            }),
            {
                name: 'strip-css-imports',
                transform(code) {
                    return {
                        code: code.replace(/import\s+['"].*\.(css|scss|less|sass)['"];?/g, ''),
                        map: null
                    };
                }
            }
        ],
        build: {
            outDir,
            emptyOutDir: true,
            lib: {
                entry: input,
                formats: ["es", "cjs"]
            },
            rollupOptions: {
                external: [
                    "vue",
                    /^@bestiary-ui\/utils/,
                    /^@bestiary-ui\/style/,
                    /^@bestiary-ui\/icons/
                ],
                output: [
                    {
                        format: "es",
                        dir: resolve(outDir),
                        preserveModules: true,
                        preserveModulesRoot: "src",
                        entryFileNames: "[name].js",
                        exports: "named"
                    },
                    {
                        format: "cjs",
                        dir: resolve(outDir),
                        preserveModules: true,
                        preserveModulesRoot: "src",
                        entryFileNames: "[name].cjs",
                        exports: "named"
                    }
                ]
            }
        }
    };
    return config;
});
