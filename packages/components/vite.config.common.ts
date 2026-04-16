import { resolve, relative } from "path";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import glob from "fast-glob";
import { normalizePath, type UserConfig } from "vite"; // Додали UserConfig

export const getCommonConfig = async (currentDir: string, outDir: string): Promise<UserConfig> => {
    const srcDir = resolve(currentDir, "src");
    const entries = await glob(["src/index.ts", "src/plugin.ts", "src/**/index.ts"], {
        cwd: currentDir,
        absolute: true,
    });

    const input = entries.reduce((acc, file) => {
        const name = relative(srcDir, file).replace(/\.ts$/, "");
        acc[name] = normalizePath(file);
        return acc;
    }, {} as Record<string, string>);

    return {
        plugins: [
            vue(),
            dts({
                outDir,
                entryRoot: "src",
                cleanVueFileName: true,
                insertTypesEntry: true,
                tsconfigPath: resolve(currentDir, "tsconfig.json"),
            }),
            {
                name: 'strip-css-imports',
                transform(code: string) {
                    return {
                        code: code.replace(/import\s+['"].*\.(css|scss|less|sass)['"];?/g, ''),
                        map: null
                    };
                }
            }
        ],
        build: {
            outDir,
            emptyOutDir: false,
            lib: {
                entry: input,
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
                        preserveModules: true,
                        preserveModulesRoot: "src",
                        entryFileNames: "[name].js",
                        exports: "named",
                    },
                    {
                        format: "cjs",
                        preserveModules: true,
                        preserveModulesRoot: "src",
                        entryFileNames: "[name].cjs",
                        exports: "named",
                    }
                ]
            }
        }
    } as UserConfig; // Явне приведення в кінці
};