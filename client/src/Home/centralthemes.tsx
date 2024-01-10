import { useContext } from "react"
import { colorcontext } from "../main"
import { BsArrowRightShort } from "react-icons/bs"
import Theme from "../Components/theme"
import { Link } from "react-router-dom"

function CentralThemes() {
    const color = useContext(colorcontext)
    return (
        <div className={`flex flex-col px-8 lg:px-16 py-8 rounded mb-24 ${color && color.colorMode == "light" ? "bg-poker text-white" : "bg-white text-poker"}`}>
            <h1 className="text-3xl font-bold">Centrala Teman</h1>
            
            <div className="flex flex-col justify-center gap-2 ">
                <Theme tema="Tema 4b" heading="Mer o NT-givar"/>
                <Theme tema="Tema 4b" heading="Mer o NT-givar"/>
                <Theme tema="Tema 4b" heading="Mer o NT-givar"/>
                <Theme tema="Tema 4b" heading="Mer o NT-givar"/>
                <Theme tema="Tema 4b" heading="Mer o NT-givar"/>
            </div>
 

            <Link to="/allateman" className={`flex items-center text-xl border-b ml-auto mt-8 sm:hover:px-2 ${color && color.colorMode == "light" ? "text-blue-300 border-blue-300" : "text-blue-500 border-blue-500"} transition-all`}>Visa alla teman <BsArrowRightShort /></Link>
        </div>
    )
}

export default CentralThemes