import fs from "fs-extra";
import { execSync } from "child_process";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const pkgDir = resolve(root, "packages/icons");
const destDir = resolve(root, "build/icons");

async function buildIcons() {
    try {
        console.log("✨ Building Icons...");
        await fs.emptyDir(destDir);

        console.log("🏃 Generating components...");
        execSync("npx tsx scripts/generate-icons.ts", { stdio: "inherit", cwd: root });

        console.log("📦 Compiling with Vite...");
        execSync("pnpm exec vite build --logLevel warn", { stdio: "inherit", cwd: pkgDir });

        console.log("📄 Copying metadata...");
        await fs.copy(resolve(pkgDir, "README.md"), resolve(destDir, "README.md"));
        await fs.copy(resolve(pkgDir, "LICENSE"), resolve(destDir, "LICENSE"));

        console.log("🔧 Fixing package.json...");
        await fixPackageJson(resolve(pkgDir, "package.json"), resolve(destDir, "package.json"));

        console.log("✅ Icons build complete.");
    } catch (error) {
        console.error("❌ Build failed:", error);
        process.exit(1);
    }
}

async function fixPackageJson(srcPath: string, destPath: string) {
    const pkg = await fs.readJSON(srcPath);

    // Спрощуємо шляхи, оскільки файли тепер лежать поруч із package.json
    pkg.main = "./index.js";
    pkg.module = "./index.js";
    pkg.types = "./index.d.ts";

    pkg.exports = {
        ".": {
            types: "./index.d.ts",
            import: "./index.js"
        },
        "./*": "./*"
    };

    // Резолв залежностей workspace:*
    const dependencyTypes = ['dependencies', 'peerDependencies'];
    for (const type of dependencyTypes) {
        if (!pkg[type]) continue;

        for (const[dep, version] of Object.entries(pkg[type] as Record<string, string>)) {
            if (version.startsWith("workspace:")) {
                const depName = dep.replace("@bestiary-ui/", "");
                const depPkgPath = resolve(root, "packages", depName, "package.json");

                if (await fs.pathExists(depPkgPath)) {
                    const depPkg = await fs.readJSON(depPkgPath);
                    pkg[type][dep] = type === 'peerDependencies' ? `>=${depPkg.version}` : `^${depPkg.version}`;
                }
            }
        }
    }

    // Очищення сміття перед публікацією
    delete pkg.files;
    delete pkg.scripts;
    delete pkg.devDependencies;

    await fs.writeJSON(destPath, pkg, { spaces: 2 });
}

buildIcons();