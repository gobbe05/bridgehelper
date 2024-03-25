import { useContext } from 'react'
import { colorcontext } from '../main'

function Introduction() {
    const color = useContext(colorcontext)

    return (
        <div className={`flex items-center rounded ${color?.colorMode == "light" ? "sm:bg-poker sm:text-white" : "sm:bg-white sm:text-gray-700"}`}>
            <div className={`sm:w-1/2  sm:p-8 transition-all`}>
                <h1 className="text-3xl font-bold">Kom Igång</h1>
                <p className="text-xl font-semibold">Kom igång med att repetera dina Bridgekunskaper med hjälp av BridgeHelper, som består av 30 klickbara temaavsnitt syftande till att spegla Bridgefundamenta.</p>
            </div>
            <div className="sm:w-1/2">
                <img className="hidden sm:block h-48 mx-auto rounded" src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/5626618/deck-of-cards-clipart-sm.png"/>
            </div>
        </div>
    )
}

export default Introduction
