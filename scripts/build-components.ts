import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs-extra";
import glob from "fast-glob";
import { build, normalizePath } from "vite";
import { getCommonConfig } from "../packages/components/vite.config.common";

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

    const viteConfig = await getCommonConfig(compDir, distDir);

    await build({
        configFile: false,
        root: compDir,
        logLevel: "warn",
        ...viteConfig,
    });

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

    await generateGlobalTypes(componentNames);

    console.log("✅ Build complete! All configs and types generated.");
}

buildComponents().catch(console.error);