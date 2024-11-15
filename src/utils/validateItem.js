import { KLOC_CONFIG, KLOC_IGNORE } from "../utils/constants.js"
import { join, extname, basename } from "path"
import { readFileSync } from "fs"

const ignoreDirs = readFileSync(join(process.cwd(), KLOC_IGNORE), "utf-8").split("\n").map((line) => line.trim())
const config = JSON.parse(readFileSync(join(process.cwd(), KLOC_CONFIG)))

export const validateFile = (item) => {
    const fileExtension = extname(item)
    const fileName = basename(item)
    return !fileName.startsWith('.') && config.count.includes(fileExtension) && !config.ignore.includes(fileExtension)
};

export const validateDir = (item) => {
    const dirName = basename(item)
    return !dirName.startsWith('.') && !ignoreDirs.some((ignoreDir) => item.includes(ignoreDir))
}