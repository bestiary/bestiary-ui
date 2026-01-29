import { execSync } from "child_process";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs-extra";
import glob from "fast-glob";
import { transform } from "esbuild";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const root = resolve(__dirname, "..");
const pkgDir = resolve(root, "packages");
const distDir = resolve(pkgDir, "bestiary-ui");

const args = process.argv.slice(2);
const buildAll = args.length === 0;

async function clean(path: string) {
    if (await fs.pathExists(path)) {
        await fs.remove(path);
    }
}

async function fixPackageJson(pkgPath: string, destPath: string) {
    const pkg = await fs.readJSON(pkgPath);

    // 1. Fix paths (remove ../bestiary-ui/xxx/ prefix)
    const fixPath = (p: string) => p ? p.replace(/\.\.\/bestiary-ui\/[^/]+\//, "./") : p;

    if (pkg.main) pkg.main = fixPath(pkg.main);
    if (pkg.module) pkg.module = fixPath(pkg.module);
    if (pkg.types) pkg.types = fixPath(pkg.types);
    if (pkg.exports) {
        Object.keys(pkg.exports).forEach(key => {
            const entry = pkg.exports[key];
            if (typeof entry === "string") {
                pkg.exports[key] = fixPath(entry);
            } else if (typeof entry === "object") {
                if (entry.types) entry.types = fixPath(entry.types);
                if (entry.import) entry.import = fixPath(entry.import);
                if (entry.require) entry.require = fixPath(entry.require);
            }
        })
    }

    // 2. Fix dependencies (replace workspace:*)
    if (pkg.dependencies) {
        for (const dep of Object.keys(pkg.dependencies)) {
            if (pkg.dependencies[dep].startsWith("workspace:")) {
                // Find the package in the workspace to get its version
                // Assuming standard naming convention @bestiary-ui/<name> -> packages/<name>
                const depName = dep.replace("@bestiary-ui/", "");
                const depPkgPath = resolve(pkgDir, depName, "package.json");
                if (await fs.pathExists(depPkgPath)) {
                    const depPkg = await fs.readJSON(depPkgPath);
                    pkg.dependencies[dep] = `^${depPkg.version}`;
                }
            }
        }
    }

    // 3. Fix files (allow all files in the root)
    delete pkg.files;

    await fs.writeJSON(destPath, pkg, { spaces: 4 });
}

async function buildUtils() {
    console.log("🛠 Building Utils...");
    const dest = resolve(distDir, "utils");
    await clean(dest);
    execSync("vite build", { stdio: "inherit", cwd: resolve(pkgDir, "utils") });
    console.log("📦 Finalizing Utils...");
    await fixPackageJson(resolve(pkgDir, "utils/package.json"), resolve(dest, "package.json"));
}

async function buildStyle() {
    console.log("🎨 Building Style...");
    const dest = resolve(distDir, "style");
    await clean(dest);
    const styleSrc = resolve(pkgDir, "style/src");
    await fs.ensureDir(dest);
    await fs.copy(styleSrc, dest);

    const files = await glob("**/*.css", { cwd: dest, absolute: true });
    for (const file of files) {
        const content = await fs.readFile(file, "utf-8");
        const { code } = await transform(content, { loader: "css", minify: true, legalComments: "none" });
        await fs.writeFile(file, code);
    }

    await fixPackageJson(resolve(pkgDir, "style/package.json"), resolve(dest, "package.json"));
}

async function buildComponents() {
    console.log("🧱 Building Components...");
    const dest = resolve(distDir, "components");
    await clean(dest);
    execSync("vite build", { stdio: "inherit", cwd: resolve(pkgDir, "components") });
    console.log("📦 Finalizing Components...");
    await fixPackageJson(resolve(pkgDir, "components/package.json"), resolve(dest, "package.json"));
}

async function buildIcons() {
    console.log("✨ Building Icons...");
    const dest = resolve(distDir, "icons");
    await clean(dest);

    // 1. Generate Vue components from SVGs
    console.log("🏃 Generating components...");
    execSync("tsx scripts/generate-icons.ts", { stdio: "inherit", cwd: root });

    // 2. Build with Vite
    execSync("vite build", { stdio: "inherit", cwd: resolve(pkgDir, "icons") });

    console.log("📦 Finalizing Icons...");
    await fixPackageJson(resolve(pkgDir, "icons/package.json"), resolve(dest, "package.json"));
}

async function build() {
    if (buildAll) {
        console.log("🧹 Cleaning All...");
        await clean(distDir);
        await fs.ensureDir(distDir);
    } else {
        await fs.ensureDir(distDir);
    }

    if (buildAll || args.includes("--utils")) {
        await buildUtils();
    }

    if (buildAll || args.includes("--style")) {
        await buildStyle();
    }

    if (buildAll || args.includes("--icons")) {
        await buildIcons();
    }

    if (buildAll || args.includes("--components")) {
        await buildComponents();
    }

    console.log("✅ Build complete!");
}

build().catch(err => {
    console.error(err);
    process.exit(1);
});
