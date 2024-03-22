import { useContext } from "react"
import { colorcontext } from "../main"

function InformationTema() {
    const color = useContext(colorcontext)

    return (
        <div className={`flex items-center rounded ${color?.colorMode == "light" ? "sm:bg-poker sm:text-white" : "sm:bg-white sm:text-gray-700"}`}>
            <div className={`sm:p-8 rounded`}>
                <h1 className="text-3xl font-bold">Så här kan du använda Bridgehelper</h1>
                <p className="text-xl mt-8 font-semibold">Varje tema innehåller en kortversion om 2 högst 3 sidor per tema, med några rubrikrader följt av en 2:a del i form av något mer omfattande redovisning, om behov skulle föreligga.</p>
                <p className="text-xl mt-4 font-bold">Början av denna del 2 är markerad i gul</p>
            </div>
        </div>
    )
}

export default InformationTema
