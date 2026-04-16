import { spawn } from "child_process";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = resolve(__dirname, "..");

/**
 * Runs a script as a child process.
 * Set 'silent' to true if you want to manage output manually.
 */
async function runScript(scriptPath: string, name: string): Promise<void> {
    return new Promise((resolve, reject) => {
        console.log(`[${name}] 🚀 Started...`);

        const child = spawn("npx", ["tsx", scriptPath], {
            cwd: root,
            stdio: "inherit",
            shell: true
        });

        child.on("close", (code) => {
            if (code === 0) {
                console.log(`[${name}] ✅ Finished successfully.`);
                resolve();
            } else {
                reject(new Error(`[${name}] ❌ Failed with code ${code}`));
            }
        });
    });
}

async function main() {
    const startTime = Date.now();

    try {
        console.log("🚀 Starting Parallel Bestiary UI Build...\n");

        const tasks = [
            // runScript("scripts/build-utils.ts", "UTILS"),
            runScript("scripts/build-style.ts", "STYLE"),
            runScript("scripts/build-icons.ts", "ICONS"),
            runScript("scripts/build-components.ts", "COMPONENTS")
        ];

        await Promise.all(tasks);

        // Пакування запускаємо тільки після успішного завершення всіх білдів
        if (process.argv.includes("--pack")) {
            await runScript("scripts/pack.ts", "PACKAGING");
        }

        const duration = ((Date.now() - startTime) / 1000).toFixed(2);
        console.log(`\n✨ ✨ ✨ ✨ ✨ ✨ ✨ ✨ ✨ ✨ ✨ ✨ ✨ ✨`);
        console.log(`✅ FULL BUILD COMPLETED IN ${duration}s`);
        console.log(`✨ ✨ ✨ ✨ ✨ ✨ ✨ ✨ ✨ ✨ ✨ ✨ ✨ ✨\n`);

    } catch (error) {
        console.error("\n💥 BUILD FAILED:");
        console.error(error instanceof Error ? error.message : error);
        process.exit(1);
    }
}

main();