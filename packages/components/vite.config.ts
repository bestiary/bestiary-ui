import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import glob from 'fast-glob'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig(async () => {
    // Find all entry points: index.ts, plugin.ts, and all components' index.ts
    const entries = await glob(['src/index.ts', 'src/plugin.ts', 'src/**/index.ts'], {
        cwd: __dirname,
        absolute: true,
    })

    // Map entries to entry names (e.g. 'button/index' or 'index')
    const input = entries.reduce((acc, file) => {
        const name = file.split('/src/')[1].replace('.ts', '')
        acc[name] = file
        return acc
    }, {} as Record<string, string>)

    return {
        plugins: [
            vue(),
            dts({
                outDir: resolve(__dirname, '../../packages/bestiary-ui/components'),
                cleanVueFileName: true,
                tsconfigPath: resolve(__dirname, 'tsconfig.json'),
                entryRoot: resolve(__dirname, 'src')
            })
        ],
        build: {
            outDir: resolve(__dirname, '../../packages/bestiary-ui/components'),
            emptyOutDir: true,
            lib: {
                entry: input,
                formats: ['es', 'cjs']
            },
            rollupOptions: {
                external: ['vue', '@bestiary-ui/utils', '@bestiary-ui/style'],
                output: [
                    {
                        format: 'es',
                        exports: 'named',
                        preserveModules: true,
                        preserveModulesRoot: 'src',
                        entryFileNames: (chunkInfo) => {
                            if (chunkInfo.name.includes('node_modules')) {
                                return 'vendors/[name].js'
                            }
                            return '[name].js'
                        }
                    },
                    {
                        format: 'cjs',
                        exports: 'named',
                        preserveModules: true,
                        preserveModulesRoot: 'src',
                        entryFileNames: (chunkInfo) => {
                            if (chunkInfo.name.includes('node_modules')) {
                                return 'vendors/[name].cjs'
                            }
                            return '[name].cjs'
                        }
                    }
                ]
            }
        }
    }
})
