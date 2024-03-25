import { useContext } from "react"
import { colorcontext } from "../main"

function InformationTema() {
    const color = useContext(colorcontext)

    return (
        <div className={`flex items-center rounded ${color?.colorMode == "light" ? "sm:bg-poker sm:text-white" : "sm:bg-white sm:text-gray-700"}`}>
            <div className={`sm:p-8 rounded`}>
                <h1 className="text-3xl font-bold">Så här kan du använda Bridgehelper</h1>
                <p className="text-xl mt-8 font-semibold">Varje tema innehåller en kortversion om 2 till 3 sidor innehållande några rubrikrader och en koncentrerad genomgång av innehållet i temat. Därefter följer en del 2 med en mer omfattande redovisning om behov skulle föreligga.</p>
                <p className="text-xl mt-4 font-bold">Början av denna del 2 är markerad med gul färg</p>
            </div>
        </div>
    )
}

export default InformationTema
