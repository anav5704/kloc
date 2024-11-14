import { readFileSync, readdirSync, statSync} from "fs"
import { basename, join } from "path"

const countKloc = (path, loc = 0) => {
    const root = readdirSync(path)
    
    root.forEach((item) => {
        if(item == "node_modules") return
        if(item.startsWith(".")) return

        const itemPath = join(path, item)

        if(statSync(itemPath).isDirectory()) {
            countKloc(itemPath, loc)
        } 

        else {
            const file = readFileSync(itemPath, "utf8").toString()
            loc += file.split("\n").length
        }
    })

    return loc 
}

export const klocOneline = () => {
    const koc = countKloc(process.cwd())
    const name = basename(process.cwd())
    console.log("Loc for " + name, koc)
}
