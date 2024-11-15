import { validateFile, validateDir } from "../utils/validateItem.js"
import { readFileSync, readdirSync, statSync } from "fs"
import { basename, join } from "path"

const printKloc = (path, level, prefix = "") => {
    const root = readdirSync(path)

    root.forEach((item, index) => {
        const itemPath = join(path, item)
        const isLastItem = index == root.length - 1

        const branch = isLastItem ? "└── " : "├── "
        const newPrefix = prefix + (isLastItem ? "    " : "│   ")

        if (statSync(itemPath).isDirectory() && validateDir(item)) {
            console.log(prefix + branch + item);
            printKloc(itemPath, level + 1, newPrefix)
        }

        else {
            if (validateFile(item)) {
                const file = readFileSync(itemPath, "utf8").toString()
                const loc = file.split("\n").length
                console.log(prefix + branch + item, loc)
            }
        }
    })
}

export const klocFile = () => {
    console.log(basename(process.cwd()))
    printKloc(process.cwd(), 0)
}
