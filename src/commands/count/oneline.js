import { validateFile, validateDir } from "../../utils/validateItem.js"
import { readFileSync, readdirSync, statSync } from "fs"
import { basename, join } from "path"

const countKloc = (path) => {
    let loc = 0
    const root = readdirSync(path)

    root.forEach((item) => {
        const itemPath = join(path, item)

        if (statSync(itemPath).isDirectory() && validateDir(item)) {
            loc += countKloc(itemPath)
        }

        else {
            if (validateFile(item)) {
                const file = readFileSync(itemPath, "utf8").toString()
                loc += file.split("\n").length
            }
        }
    })

    return loc
}

export const klocOneline = () => {
    const koc = countKloc(process.cwd())
    const name = basename(process.cwd())
    console.log("\nLoc for " + name, koc)
}
