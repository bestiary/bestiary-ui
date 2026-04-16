import { spawn } from "child_process";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = resolve(__dirname, "..");

const cyan = (text: string) => `\x1b[36m${text}\x1b[0m`;
const green = (text: string) => `\x1b[32m${text}\x1b[0m`;
const gray = (text: string) => `\x1b[90m${text}\x1b[0m`;
const bold = (text: string) => `\x1b[1m${text}\x1b[0m`;

/**
 * Runs a script as a child process.
 * Set 'silent' to true if you want to manage output manually.
 */
async function runScript(scriptPath: string, name: string): Promise<void> {
    return new Promise((resolve, reject) => {
        console.log(`\n${bold(cyan('●'))} ${bold(name)} ${gray('building...')}`);

        const command = `pnpm exec tsx ${scriptPath}`;

        const child = spawn(command, {
            cwd: root,
            stdio: "pipe",
            shell: true,
            env: {
                ...process.env,
                NPM_CONFIG_LOGLEVEL: "error"
            }
        });

        child.stdout.on("data", (data) => {
            const line = data.toString().trim();
            if (!line) return;
            if (line.includes("building for production") || line.includes("modules transformed")) return;
            console.log(`  ${gray('│')} ${line}`);
        });

        child.stderr.on("data", (data) => {
            const line = data.toString().trim();
            if (line.includes("Outside emitted")) return;
            console.error(`  \x1b[31m│\x1b[0m ${line}`);
        });

        child.on("close", (code) => {
            if (code === 0) {
                console.log(`  ${green('✓')} ${gray('Done')}`);
                resolve();
            } else {
                reject(new Error(`${name} failed`));
            }
        });
    });
}

async function main() {
    const startTime = Date.now();

    console.log(`\n${bold('📦 BESTIARY UI')}`);
    console.log(gray('—————————————————————————————————————————————————'));

    try {
        await runScript("scripts/build-style.ts", "Style System");
        await runScript("scripts/build-icons.ts", "Icon Library");
        await runScript("scripts/build-components.ts", "Vue Components");

        if (process.argv.includes("--pack")) {
            await runScript("scripts/pack.ts", "Packaging");
        }

        const duration = ((Date.now() - startTime) / 1000).toFixed(2);

        console.log(gray('\n—————————————————————————————————————————————————'));
        console.log(`${green('✨ Success!')} ${bold('Build completed in ' + duration + 's')}\n`);

    } catch (error) {
        console.error(`\n\x1b[31m\x1b[1mFAILED\x1b[0m ${error instanceof Error ? error.message : ''}`);
        process.exit(1);
    }
}

main();