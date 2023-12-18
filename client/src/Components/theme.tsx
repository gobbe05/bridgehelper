import { useContext } from "react"
import { colorcontext } from "../main"

function Theme({tema, heading} : {tema: string, heading: string}) {
    const color = useContext(colorcontext)
    return (
        <>
            <div className="flex gap-2 items-center">
                <p className="text-lg">{heading}</p>
                <a href="#" className={`text-lg border-b ml-auto ${color && color.colorMode == "light" ? "text-blue-300 border-blue-300" : "text-blue-500 border-blue-500"}`}>{tema}</a>
            </div>
        </>
    )
}

export default Theme