import {resolve, dirname, basename} from "path";
import { fileURLToPath } from "url";
import fs from "fs-extra";
import glob from "fast-glob";
import { build } from "esbuild";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const root = resolve(__dirname, "..");
const srcDir = resolve(root, "packages/style/src");
const distDir = resolve(root, "build/style");
const pkgJsonPath = resolve(root, "packages/style/package.json");

async function buildStyle() {
    console.log("🎨 Starting Bestiary UI Style Build...");

    await fs.remove(distDir);
    await fs.ensureDir(distDir);

    // 1. MANIFEST: Copy index.css with @import for tree-shaking
    await fs.copyFile(resolve(srcDir, "index.css"), resolve(distDir, "index.css"));

    // 2. BUNDLE: Create a single production file (resolves all @imports)
    console.log("📦 Creating main bundle...");
    await build({
        entryPoints: [resolve(srcDir, "index.css")],
        outfile: resolve(distDir, "index.bundle.css"),
        bundle: true,
        minify: true,
        loader: {".css": "css"},
        legalComments: "none",
    });

    // 3. GRANULAR: Copy and minify every single file for individual imports\
    console.log("📄 Processing granular files...");

    const cssFiles = await glob("**/*.css", {cwd: srcDir});

    await Promise.all(cssFiles.map(async (file) => {
        // skip main index.css because it's already bundled
        if (file === "index.css") return;

        const fullSrcPath = resolve(srcDir, file);
        const fullDestPath = resolve(distDir, file);

        await fs.ensureDir(dirname(fullDestPath));

        // Minify individual file
        const { outputFiles } = await build({
            entryPoints: [fullSrcPath],
            bundle: false,
            minify: true,
            write: false,
            legalComments: "none"
        });

        await fs.writeFile(fullDestPath, outputFiles[0].text);
    }));

    // 4. GENERATE EXPORTS: Automatic mapping for package.json
    console.log("📑 Updating package.json exports...");

    const pkg = await fs.readJSON(pkgJsonPath);
    const exports: Record<string, string> = {
        ".": "./index.css"
    };

    cssFiles.forEach(file => {
        if (file === "index.css") return;

        const fileName = basename(file);
        const parts = file.split("/");
        const category = parts[0];

        let exportKey = "";

        if (category === "base") {
            exportKey = `./${fileName}`;
        } else if (parts.length > 1) {
            exportKey = `./${category}/${fileName}`;
        } else {
            exportKey = `./${file}`;
        }

        if (exports[exportKey]) {
            console.warn(`⚠️ Export collision: ${exportKey} already exists. Skipping ${file}`);
        } else {
            exports[exportKey] = `./${file}`;
        }
    });

    // 5. SAVE PACKAGE.JSON
    const distPkg = {
        ...pkg,
        main: "./index.css",
        exports: exports,
    };

    // Remove development-only paths
    delete distPkg.files;

    await fs.writeJson(resolve(distDir, "package.json"), distPkg, { spaces: 4 });

    console.log(`✅ Style build complete. Exported ${Object.keys(exports).length} entry points.`);
}

buildStyle().catch(console.error);