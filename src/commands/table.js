import { readFileSync, readdirSync, statSync} from "fs"
import { config } from "../../src/utils/tableConfig.js"
import { table } from 'table'
import { join } from "path"

const formattedTableData = [["Language", "Loc"]]
let tableData = {}

const countKloc = (path) => {
    const root = readdirSync(path)

    root.forEach((item) => {
        if(item == "node_modules") return
        if(item.startsWith(".")) return

        const itemPath = join(path, item)

        if(statSync(itemPath).isDirectory()) {
            countKloc(itemPath)
        } 

        else {
            const file = readFileSync(itemPath, "utf8").toString()
            const extension = item.split(".").pop()

            if (!tableData[extension]) tableData[extension] = 0
            tableData[extension] += file.split("\n").length
        }
    })

}

export const klocTable = () => {
    countKloc(process.cwd())

    Object.entries(tableData).forEach(([language, loc]) => {
        formattedTableData.push([language, loc])
    })

    console.table(table(formattedTableData, config))
}

