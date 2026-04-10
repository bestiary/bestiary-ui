import { resolve, dirname, relative } from "path";
import { fileURLToPath } from "url";
import fs from "fs-extra";
import glob from "fast-glob";
import { build, normalizePath } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const root = resolve(__dirname, "..");
const compDir = resolve(root, "packages/components");
const compSrc = resolve(compDir, "src");
const distDir = resolve(root, "build/components");
const pkgJsonPath = resolve(compDir, "package.json");

async function buildComponents() {
    console.log("🧱 Starting Bestiary UI Components Build...");

    await fs.remove(distDir);
    await fs.ensureDir(distDir);

    const entries = await glob(["**/*.ts", "!**/*.d.ts", "!**/__tests__/**"], {
        cwd: compSrc,
        absolute: true,
    });

    const input = entries.reduce((acc, file) => {
        const name = normalizePath(relative(compSrc, file)).replace(/\.ts$/, "");
        acc[name] = normalizePath(file);
        return acc;
    }, {} as Record<string, string>);

    await build({
        configFile: false,
        root: compDir,
        plugins: [
            vue(),
            dts({
                outDir: distDir,
                entryRoot: compSrc,
                cleanVueFileName: true,
                insertTypesEntry: true,
                tsconfigPath: resolve(compDir, "tsconfig.json"),
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
            outDir: distDir,
            emptyOutDir: false,
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
                        dir: distDir,
                        preserveModules: true,
                        preserveModulesRoot: compSrc,
                        entryFileNames: "[name].js",
                        exports: "named",
                    },
                    {
                        format: "cjs",
                        dir: distDir,
                        preserveModules: true,
                        preserveModulesRoot: compSrc,
                        entryFileNames: "[name].cjs",
                        exports: "named",
                    }
                ]
            }
        }
    });

    // Викликаємо генерацію package.json та типів
    await generatePackageConfig();
}

async function generateGlobalTypes(componentNames: string[]) {
    console.log("🧬 Generating global.d.ts for Volar/IDE support...");

    const componentsDeclaration = componentNames
        .map(name => `${name}: typeof import('@bestiary-ui/components')['${name}']`)
        .join('\n    ');

    const content = `
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    ${componentsDeclaration}
  }
}

export {}
`;

    await fs.writeFile(resolve(distDir, "global.d.ts"), content);

    // Додаємо reference у головний index.d.ts
    const indexPath = resolve(distDir, "index.d.ts");
    if (await fs.pathExists(indexPath)) {
        const indexContent = await fs.readFile(indexPath, "utf-8");
        await fs.writeFile(indexPath, `/// <reference types="./global.d.ts" />\n${indexContent}`);
    }
}

async function getInternalPackageVersion(packageName: string): Promise<string> {
    const folderName = packageName.replace("@bestiary-ui/", "");
    const pkgPath = resolve(root, "packages", folderName, "package.json");

    try {
        const pkg = await fs.readJSON(pkgPath);
        return pkg.version;
    } catch (e) {
        console.error(`❌ Could not find version for ${packageName} at ${pkgPath}`);
        return "latest";
    }
}

async function generatePackageConfig() {
    console.log("📑 Generating package.json and exports...");
    const pkg = await fs.readJSON(pkgJsonPath);

    const resolveWorkspaceVersions = async (deps?: Record<string, string>) => {
        if (!deps) return;
        for (const [name, version] of Object.entries(deps)) {
            if (version.startsWith("workspace:")) {
                const realVersion = await getInternalPackageVersion(name);
                deps[name] = `^${realVersion}`;
                console.log(`   🔗 Resolved ${name} to ^${realVersion}`);
            }
        }
    };

    const exports: Record<string, any> = {
        ".": {
            "types": "./index.d.ts",
            "import": "./index.js",
            "require": "./index.cjs"
        }
    };

    const componentNames: string[] = [];
    const componentIndexes = await glob(["**/index.ts"], { cwd: compSrc });

    for (const file of componentIndexes) {
        const normalized = normalizePath(file);
        if (normalized === "index.ts") continue;

        // Збір імен компонентів для global.d.ts
        const fileContent = await fs.readFile(resolve(compSrc, normalized), "utf-8");
        const match = fileContent.match(/export const (\w+) =/);
        if (match && match[1]) {
            componentNames.push(match[1]);
        }

        const parts = normalized.split("/");
        const componentFolder = parts[parts.length - 2];
        const buildPath = normalized.replace(".ts", "");

        exports[`./${componentFolder}`] = {
            "types": `./${buildPath}.d.ts`,
            "import": `./${buildPath}.js`,
            "require": `./${buildPath}.cjs`
        };
    }

    const distPkg = {
        ...pkg,
        main: "./index.cjs",
        module: "./index.js",
        types: "./index.d.ts",
        exports: exports,
        sideEffects: false,
        files: ["*"]
    };

    await Promise.all([
        resolveWorkspaceVersions(distPkg.dependencies),
        resolveWorkspaceVersions(distPkg.peerDependencies)
    ]);

    delete distPkg.devDependencies;
    delete distPkg.scripts;

    await fs.writeJSON(resolve(distDir, "package.json"), distPkg, { spaces: 4 });

    // Генеруємо типи на основі зібраних імен
    await generateGlobalTypes(componentNames);

    console.log("✅ Build complete! All configs and types generated.");
}

buildComponents().catch(console.error);