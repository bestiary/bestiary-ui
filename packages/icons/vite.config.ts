import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
    plugins: [
        dts({
            // Вказуємо шлях до локального tsconfig
            tsconfigPath: resolve(__dirname, 'tsconfig.json'),
            insertTypesEntry: true,
            include: ['generated/**/*.ts'],
            outDir: resolve(__dirname, '../../packages/bestiary-ui/icons'),
            entryRoot: resolve(__dirname, 'generated')
        })
    ],
    build: {
        outDir: resolve(__dirname, '../../packages/bestiary-ui/icons'),
        lib: {
            entry: resolve(__dirname, 'generated/index.ts'),
            name: 'BestiaryIcons',
            formats: ['es'],
            fileName: 'index'
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                preserveModules: true,
                preserveModulesRoot: resolve(__dirname, 'generated'),
                entryFileNames: '[name].js',
            }
        },
        emptyOutDir: false
    }
})