import fs from "fs-extra";
import glob from "fast-glob";
import { resolve, dirname, basename, extname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const root = resolve(__dirname, "..");
const iconsPkgDir = resolve(root, "packages/icons");
const srcDir = resolve(iconsPkgDir, "src");
const genDir = resolve(iconsPkgDir, "generated");

function toPascalCase(str: string) {
    return str
        .replace(/(?:^|-)([a-z0-9])/g, (_, char) => char.toUpperCase())
        .replace(/[^a-zA-Z0-9]/g, "");
}

async function generateIcons() {
    console.log("🚀 Generating Icon Components...");

    await fs.remove(genDir);
    await fs.ensureDir(genDir);

    // Find all svg files
    const svgFiles = await glob("**/*.svg", { cwd: srcDir });

    const entries: Record<string, string[]> = {};

    for (const file of svgFiles) {
        const fullPath = resolve(srcDir, file);
        const relativeDir = dirname(file); // e.g., 16/solid
        const name = basename(file, extname(file));
        const pascalName = toPascalCase(name) + "Icon";

        let svgContent = await fs.readFile(fullPath, "utf-8");
        svgContent = svgContent.replace(/fill="#[a-zA-Z0-9]+"/g, 'fill="currentColor"');
        svgContent = svgContent.replace(/stroke="#[a-zA-Z0-9]+"/g, 'stroke="currentColor"');
        svgContent = svgContent.replace(
            '<svg',
            '<svg :width="size || \'1em\'" :height="size || \'1em\'" :style="{ color }" v-bind="$attrs" aria-hidden="true"'
        );

        const vueComponent = `<template>${svgContent}</template>
        <script setup lang="ts">
        /**
         * Bestiary UI Icon: ${pascalName}
         */
        interface IconProps {
            size?: string | number
            color?: string
        }
        defineProps<IconProps>()
        </script>`;

        const targetDir = resolve(genDir, relativeDir);
        await fs.ensureDir(targetDir);
        await fs.writeFile(resolve(targetDir, `${pascalName}.vue`), vueComponent);

        // Collect for index.ts
        if (!entries[relativeDir]) entries[relativeDir] = [];
        entries[relativeDir].push(pascalName);
    }

    // Generate index.ts for each subdirectory
    for (const [dir, components] of Object.entries(entries)) {
        const indexContent = components
            .map(c => `export { default as ${c} } from "./${c}.vue"`)
            .join('\n');
        await fs.writeFile(resolve(genDir, dir, "index.ts"), indexContent);
    }

    // Root index.ts (optional, but good to have)
    const rootIndexContent = Object.keys(entries)
        .map(dir => `export * from "./${dir}"`)
        .join('\n');
    await fs.writeFile(resolve(genDir, "index.ts"), rootIndexContent);

    console.log(`✨ Generated ${svgFiles.length} icons in ${genDir}`);
}

generateIcons().catch(console.error);
