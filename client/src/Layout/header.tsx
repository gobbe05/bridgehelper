import { useContext, useEffect, useState } from "react"
import ColorButton from "../Components/colorbutton"
import { colorcontext } from "../main"

function Header({ visitorCount } : {visitorCount: number | undefined}) {
    const color = useContext(colorcontext)
    return (
        <div className="flex flex-col gap-2 text-gray-700 lg:justify-center items-center h-64 lg:h-96">
            
            <div className={`relative lg:static header-text w-full text-center py-16 ${color?.colorMode == "light" ? "bg-poker text-white" : "bg-white text-gray-900"} rounded transition-all`}>
                <ColorButton />
                <h1 className="sm:text-6xl text-4xl font-bold">BridgeHelper</h1>
                <p className="sm:text-2xl text-xl">För dig som vill ha en uppfräschning från grunden</p>
            </div>
            <p className="mr-auto text-black text-xs font-light bg-white p-1 px-2 rounded">Tidigare Besökare: {visitorCount}</p>
        </div>
    )
}

export default Header