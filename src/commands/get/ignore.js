import { KLOC_IGNORE } from "../../utils/constants.js"
import { execSync } from 'child_process'
import path from 'path'

export const klocIgnore = () => {
    let prefix

    try {
        prefix = execSync('npm config get prefix', { encoding: 'utf8' }).trim()
    }

    catch (err) {
        console.error("An error occurred while getting the ignore path")
        process.exit(1)
    }

    console.log("")
    console.log(`"${path.resolve(prefix, 'node_modules', 'kloc', KLOC_IGNORE)}"`)
}

