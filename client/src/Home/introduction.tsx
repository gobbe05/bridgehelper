import { useContext } from 'react'
import { colorcontext } from '../main'

function Introduction() {
    const color = useContext(colorcontext)

    return (
        <div className="flex items-center">
            <div className={`sm:w-1/2 ${color?.colorMode == "light" ? "sm:bg-poker sm:text-white" : "sm:bg-white sm:text-poker"} sm:p-8 rounded`}>
                <h1 className="text-3xl font-bold">Introduktion</h1>
                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et ante non eros venenatis maximus. Donec ut libero non dolor fermentum cursus ac nec nisl.</p>
            </div>
            <div className="sm:w-1/2">
                <img className="hidden sm:block h-48 mx-auto rounded" src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/5626618/deck-of-cards-clipart-sm.png"/>
            </div>
        </div>
    )
}

export default Introduction