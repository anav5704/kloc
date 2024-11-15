import { KLOC_CONFIG } from "../../utils/constants.js"
import { execSync } from 'child_process'
import path from 'path'

export const klocConfig = () => {
    let prefix

    try {
        prefix = execSync('npm config get prefix', { encoding: 'utf8' }).trim()
    }

    catch (err) {
        console.error("An error occurred while getting the config path")
        process.exit(1)
    }

    console.log("")
    console.log(`"${path.resolve(prefix, 'node_modules', 'kloc', KLOC_CONFIG)}"`)
}
