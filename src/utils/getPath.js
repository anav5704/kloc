import { execSync } from 'child_process'
import path from 'path'

export const getPath = (item) => {
    let prefix

    prefix = execSync('npm config get prefix', { encoding: 'utf8' }).trim()

    return path.resolve(prefix, 'node_modules', 'kloc', item)
}