import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
    plugins: [
        vue(),
        dts({
            insertTypesEntry: true,
            cleanVueFileName: true,
            include: ['generated/**/*.ts', 'generated/**/*.vue'],
            outDir: resolve(__dirname, '../../packages/bestiary-ui/icons'),
            entryRoot: resolve(__dirname, 'generated')
        })
    ],
    build: {
        outDir: resolve(__dirname, '../../packages/bestiary-ui/icons'),
        lib: {
            entry: {
                '16/solid/index': resolve(__dirname, 'generated/16/solid/index.ts'),
                '20/solid/index': resolve(__dirname, 'generated/20/solid/index.ts'),
                '24/solid/index': resolve(__dirname, 'generated/24/solid/index.ts'),
                '24/outline/index': resolve(__dirname, 'generated/24/outline/index.ts'),
                'index': resolve(__dirname, 'generated/index.ts')
            },
            formats: ['es']
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                preserveModules: true,
                preserveModulesRoot: resolve(__dirname, 'generated'),
                entryFileNames: '[name].js',
                globals: {
                    vue: 'Vue'
                }
            }
        },
        emptyOutDir: true
    }
})
