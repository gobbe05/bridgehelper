import { useContext } from "react"
import ColorButton from "../Components/colorbutton"
import { colorcontext } from "../main"

function Header() {
    const color = useContext(colorcontext)
    return (
        <div className="flex lg:justify-center items-center h-64 lg:h-96">
            
            <div className={`relative lg:static header-text w-full text-center py-16 ${color?.colorMode == "light" ? "bg-poker text-white" : "bg-white text-gray-900"} rounded transition-all`}>
                <ColorButton />
                <h1 className="sm:text-6xl text-4xl font-bold ">Bridgehelper.</h1>
                <p className="sm:text-2xl text-xl">Lär dig att spela Bridge</p>
            </div>
        </div>
    )
}

export default Header