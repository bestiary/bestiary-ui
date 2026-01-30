import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(() => {
    return {
        plugins: [vue()],
        resolve: {
            alias: {
                "@bestiary-ui/components": resolve(__dirname, "../packages/components/src"),
                "@bestiary-ui/utils": resolve(__dirname, "../packages/utils/src"),
                "@bestiary-ui/style": resolve(__dirname, "../packages/style/src/index.css"),
                "@bestiary-ui/icons": resolve(__dirname, "../packages/icons/generated")
            }
        }
    }
})
