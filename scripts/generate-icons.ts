import fs from "fs-extra";
import glob from "fast-glob";
import { resolve, dirname, basename, extname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const iconsPkgDir = resolve(root, "packages/icons");
const srcDir = resolve(iconsPkgDir, "src/24");
const genDir = resolve(iconsPkgDir, "generated");
const srcSubDir = resolve(genDir, "src");

const toPascalCase = (str: string) =>
    str.replace(/(?:^|-)([a-z0-9])/g, (_, char) => char.toUpperCase())
        .replace(/[^a-zA-Z0-9]/g, "");

async function generateIcons() {
    console.log("🚀 Generating Bestiary Icons...");

    await fs.emptyDir(genDir);
    await fs.ensureDir(srcSubDir);

    const svgFiles = await glob("**/*.svg", { cwd: srcDir });
    const allComponents: string[] = [];
    const metadata: { name: string; type: string }[] =[];

    for (const file of svgFiles) {
        const relativeDir = dirname(file);
        const name = basename(file, extname(file));
        const pascalName = toPascalCase(name) + toPascalCase(relativeDir);

        let svgContent = await fs.readFile(resolve(srcDir, file), "utf-8");
        svgContent = svgContent
            .replace(/fill="#[a-zA-Z0-9]+"/g, 'fill="currentColor"')
            .replace(/stroke="#[a-zA-Z0-9]+"/g, 'stroke="currentColor"');

        const innerSVG = svgContent.match(/<svg[^>]*>([\s\S]*)<\/svg>/)?.[1]?.trim() || "";
        const viewBox = svgContent.match(/viewBox="([^"]*)"/)?.[1] || "0 0 24 24";

        const componentContent = `
import { h, defineComponent } from 'vue';

export default defineComponent({
  name: '${pascalName}',
  props: {
    size: { type: [String, Number], default: '1em' },
    color: { type: String, default: undefined }
  },
  setup(props, { attrs }) {
    return () => h('svg', {
      ...attrs,
      width: props.size,
      height: props.size,
      viewBox: '${viewBox}',
      fill: 'none',
      'aria-hidden': 'true',
      style: props.color ? { color: props.color } : undefined,
      innerHTML: \`${innerSVG}\`
    });
  }
});
`;

        await fs.writeFile(resolve(srcSubDir, `${pascalName}.ts`), componentContent.trim());
        allComponents.push(pascalName);
        metadata.push({ name: pascalName, type: pascalName.includes("Solid") ? "Solid" : "Outline" });
    }

    const indexContent = allComponents.sort().map(c => `export { default as ${c} } from "./src/${c}.js";`).join('\n');
    await fs.writeFile(resolve(genDir, "index.ts"), indexContent);
    await fs.writeJSON(resolve(genDir, "metadata.json"), metadata, { spaces: 2 });

    console.log(`✨ Generated ${allComponents.length} functional TS icons.`);
}

generateIcons().catch((err) => {
    console.error("❌ Generation failed:", err);
    process.exit(1);
});