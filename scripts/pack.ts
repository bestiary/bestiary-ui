import { execSync } from 'child_process'
import { resolve, dirname, join } from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs-extra'

// @ts-ignore TS1343
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const root = resolve(__dirname, '..')
const distDir = resolve(root, 'packages/bestiary-ui')
const packedDir = resolve(root, 'packed')

async function pack() {
    console.log('📦 Packing packages...')

    // Ensure packed directory exists and is empty
    await fs.remove(packedDir)
    await fs.ensureDir(packedDir)

    // List of packages to pack (order matters if we had inter-dependencies but here it's fine)
    const packages = ['utils', 'style', 'icons', 'components']

    for (const pkg of packages) {
        const pkgPath = resolve(distDir, pkg)
        if (!await fs.pathExists(pkgPath)) {
            console.error(`❌ Package ${pkg} not found in dist. Run build first.`)
            process.exit(1)
        }

        console.log(`- Packing @bestiary-ui/${pkg}...`)
        try {
            // npm pack returns the filename of the packed tarball
            const fileName = execSync('npm pack', { cwd: pkgPath, encoding: 'utf-8' }).trim()

            // Move it to packed directory
            const sourcePath = resolve(pkgPath, fileName)
            const destPath = resolve(packedDir, fileName)
            await fs.move(sourcePath, destPath)

            console.log(`  ✅ Packed to ${fileName}`)
        } catch (error) {
            console.error(`❌ Failed to pack ${pkg}:`, error)
            process.exit(1)
        }
    }

    console.log('\n✨ All packages packed into /packed directory')
    console.log('Update your playground-build/package.json to point to these files.')
}

pack()
