import fs from "fs-extra";
import glob from "fast-glob";
import { resolve, dirname, basename, extname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const root = resolve(__dirname, "..");
const iconsPkgDir = resolve(root, "packages/icons");
const srcDir = resolve(iconsPkgDir, "src/24");
const genDir = resolve(iconsPkgDir, "generated");

function toPascalCase(str: string) {
    return str
        .replace(/(?:^|-)([a-z0-9])/g, (_, char) => char.toUpperCase())
        .replace(/[^a-zA-Z0-9]/g, "");
}

async function generateIcons() {
    console.log("🚀 Generating Bestiary Icons (Functional TS Mode)...");

    await fs.remove(genDir);
    await fs.ensureDir(genDir);

    const svgFiles = await glob("**/*.svg", { cwd: srcDir });
    const allComponents: string[] = [];

    for (const file of svgFiles) {
        const fullPath = resolve(srcDir, file);
        const relativeDir = dirname(file);
        const styleSuffix = toPascalCase(relativeDir);
        const name = basename(file, extname(file));
        const pascalName = toPascalCase(name) + styleSuffix;

        let svgContent = await fs.readFile(fullPath, "utf-8");

        // Очищення кольорів
        svgContent = svgContent.replace(/fill="#[a-zA-Z0-9]+"/g, 'fill="currentColor"');
        svgContent = svgContent.replace(/stroke="#[a-zA-Z0-9]+"/g, 'stroke="currentColor"');

        // Витягуємо вміст всередині <svg> та viewBox
        const innerSVG = svgContent.match(/<svg[^>]*>([\s\S]*)<\/svg>/)?.[1] || "";
        const viewBox = svgContent.match(/viewBox="([^"]*)"/)?.[1] || "0 0 24 24";

        // Генеруємо чистий TS код компонента
        const componentContent = `
import { h, defineComponent } from 'vue'

export default defineComponent({
  name: '${pascalName}',
  props: {
    size: { 
      type: [String, Number], 
      default: '1em' 
    },
    color: { 
      type: String, 
      default: undefined 
    }
  },
  setup(props, { attrs }) {
    return () => h('svg', {
      ...attrs,
      width: props.size,
      height: props.size,
      viewBox: '${viewBox}',
      fill: 'none',
      'aria-hidden': 'true',
      style: { color: props.color },
      innerHTML: \`${innerSVG.trim()}\`
    })
  }
})
`;

        await fs.writeFile(resolve(genDir, `${pascalName}.ts`), componentContent);
        allComponents.push(pascalName);
    }

    // index.ts з іменованими експортами
    const indexContent = allComponents
        .sort()
        .map(c => `export { default as ${c} } from "./${c}"`)
        .join('\n');

    await fs.writeFile(resolve(genDir, "index.ts"), indexContent);

    console.log(`✨ Generated ${allComponents.length} functional TS icons.`);
}

generateIcons().catch(console.error);