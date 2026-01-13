import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig(({ mode }) => {
    const isBuildTest = process.env.USE_BUILD === 'true'

    return {
        plugins: [vue()],
        resolve: {
            alias: isBuildTest ? {
                '@bestiary-ui/utils': resolve(__dirname, '../packages/bestiary-ui/utils/index.js')
            } : {
                '@bestiary-ui/components/style.css': resolve(__dirname, 'src/dummy.css'),
                '@bestiary-ui/components': resolve(__dirname, '../packages/components/src'),
                '@bestiary-ui/utils': resolve(__dirname, '../packages/utils/src'),
                '@bestiary-ui/style': resolve(__dirname, '../packages/style/src/index.css')
            }
        }
    }
})
