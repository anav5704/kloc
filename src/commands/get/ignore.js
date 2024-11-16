import { KLOC_IGNORE } from "../../utils/constants.js"
import { getPath } from "../../utils/getPath.js"

export const klocIgnore = () => {
    console.log("")
    console.log(`"${getPath(KLOC_IGNORE)}"`)
}

