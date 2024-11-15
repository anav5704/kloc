import { validateFile, validateDir } from "../utils/validateItem.js"
import { readFileSync, readdirSync, statSync } from "fs"
import { config } from "../../src/utils/tableConfig.js"
import { table } from 'table'
import { join } from "path"

const formattedTableData = [["Language", "Loc"]]
let tableData = {}

const countKloc = (path) => {
    const root = readdirSync(path)

    root.forEach((item) => {
        const itemPath = join(path, item)

        if (statSync(itemPath).isDirectory() && validateDir(item)) {
            countKloc(itemPath)
        }

        else {
            if (validateFile(item)) {
                const file = readFileSync(itemPath, "utf8").toString()
                const extension = item.split(".").pop()

                if (!tableData[extension]) tableData[extension] = 0
                tableData[extension] += file.split("\n").length
            }
        }
    })

}

export const klocTable = () => {
    countKloc(process.cwd())

    const sortedTableData = Object.entries(tableData).sort(([, locA], [, locB]) => locB - locA)

    sortedTableData.forEach(([language, loc]) => {
        formattedTableData.push([language, loc])
    })

    console.table(table(formattedTableData, config))
}

