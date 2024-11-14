import { readFileSync, readdirSync, statSync} from "fs"
import { basename, join } from "path"

const printKloc = (path, level, prefix = "") => {
    const root = readdirSync(path)

    root.forEach((item, index) => {
        if(item == "node_modules") return
        if(item.startsWith(".")) return

        const itemPath = join(path, item)
        const isLastItem = index == root.length - 1

        const branch = isLastItem ? "└── " : "├── "
        const newPrefix = prefix + (isLastItem ? "    " : "│   ")

        if (statSync(itemPath).isDirectory()) {
            console.log(prefix + branch + item);
            printKloc(itemPath, level + 1, newPrefix)
        } 

        else {
            const file = readFileSync(itemPath, "utf8").toString()
            const loc = file.split("\n").length
            console.log(prefix + branch + item, loc)
        }
    })
}

export const klocFile = () => {
    console.log(basename(process.cwd()))
    printKloc(process.cwd(), 0)
}
