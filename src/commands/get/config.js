import { KLOC_CONFIG } from "../../utils/constants.js"
import { getPath } from "../../utils/getPath.js"

export const klocConfig = () => {
    console.log("")
    console.log(`"${getPath(KLOC_CONFIG)}"`)
}
