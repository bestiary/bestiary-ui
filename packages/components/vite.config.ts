import { defineConfig } from "vite";
import { resolve, dirname } from "path";
import { getCommonConfig } from "./vite.config.common";

const __dirname = dirname(__filename);

export default defineConfig(async () => {
    return await getCommonConfig(__dirname, resolve(__dirname, "dist"));
});