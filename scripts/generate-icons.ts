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
    console.log("🚀 Generating Icon Components (24x24 Only)...");

    await fs.remove(genDir);
    await fs.ensureDir(genDir);

    // Find only 24px svg files
    const svgFiles = await glob("24/**/*.svg", { cwd: srcDir });

    const allExports: string[] = [];

    for (const file of svgFiles) {
        const fullPath = resolve(srcDir, file);
        const relativeDir = dirname(file); // e.g., 24/solid
        const style = toPascalCase(basename(relativeDir)); // Solid or Outline
        const name = basename(file, extname(file));
        const pascalName = toPascalCase(name) + style;

        let svgContent = await fs.readFile(fullPath, "utf-8");

        // Clean up SVG
        svgContent = svgContent.trim();
        // Remove width and height if present in the tag
        svgContent = svgContent.replace(/<svg[^>]*>/, (match) => {
            return match
                .replace(/\s+(width|height)=["'][^"']*["']/g, "")
                .replace("<svg", '<svg :width="size || \'1em\'" :height="size || \'1em\'" :style="{ color }" v-bind="$attrs" aria-hidden="true"');
        });

        svgContent = svgContent.replace(/fill="#[a-zA-Z0-9]+"/g, 'fill="currentColor"');
        svgContent = svgContent.replace(/stroke="#[a-zA-Z0-9]+"/g, 'stroke="currentColor"');

        const vueComponent = `<template>
    ${svgContent}
</template>

<script setup lang="ts">
/**
 * Bestiary UI Icon: ${pascalName}
 */
interface IconProps {
    size?: string | number
    color?: string
}
defineProps<IconProps>()
</script>
`;

        const targetDir = resolve(genDir, relativeDir);
        await fs.ensureDir(targetDir);
        await fs.writeFile(resolve(targetDir, `${pascalName}.vue`), vueComponent);

        // Collect for root index.ts
        allExports.push(`export { default as ${pascalName} } from "./${relativeDir.replace(/\\/g, '/')}/${pascalName}.vue"`);
    }

    // Generate root index.ts with flat exports
    await fs.writeFile(resolve(genDir, "index.ts"), allExports.sort().join('\n'));

    console.log(`✨ Generated ${svgFiles.length} icons in ${genDir}`);
}

generateIcons().catch(console.error);
