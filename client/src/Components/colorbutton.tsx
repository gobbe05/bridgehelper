import { useContext } from "react"
import { colorcontext } from "../main"
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs"

function ColorButton() {
    const color = useContext(colorcontext)

    function toggleColorMode() {
        if(!color) return
        const {colorMode, setColorMode} = color
        colorMode == "dark" && setColorMode("light")
        colorMode == "light" && setColorMode("dark")
    }

    return (
        <div className="absolute right-4 top-4 sm:right-8 sm:top-8 lg:top-16 lg:right-16 z-20 rounded-full">
            <button className={`sm:hover:scale-125 transition-transform ${color && color.colorMode == "light" ? "text-white lg:text-black" : "text-black lg:text-white"} transition-all`} onClick={toggleColorMode}>{color && color.colorMode == "light" ? <BsSunFill size={32}/> : <BsMoonStarsFill size={32} />}</button>
        </div>
    )   
}

export default ColorButton