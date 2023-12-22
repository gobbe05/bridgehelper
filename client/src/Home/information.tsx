import { useContext} from 'react'
import { colorcontext } from '../main'

function Information() {
    const color = useContext(colorcontext)

    return (
        <div className="flex items-center">
            <div className="sm:w-1/2">
                <img className="hidden sm:block h-48 mx-auto rounded" src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/5626618/deck-of-cards-clipart-sm.png"/>
            </div>
            <div className={`sm:w-1/2 ${color?.colorMode == "light" ? "sm:bg-poker sm:text-white" : "sm:bg-white sm:text-poker"} sm:p-8 rounded`}>
                <h1 className="text-3xl font-bold">Information</h1>
                <p className="text-lg">Hjälpredan består av 30 klickbara temaavsnitt syftande till att spegla Bridgefundamenta.</p>
                <p className="font-light">(Fundera över om presentation på papper ev. kam vara ett bättre alternativ till läsning på skärm för inlärning – skriv då ut materialet).</p>
            </div>
        </div>
    )
}

export default Information