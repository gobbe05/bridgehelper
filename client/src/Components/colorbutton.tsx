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
        <div className="absolute right-0 top-16  sm:right-16">
            <button className="sm:hover:scale-125 transition-transform" onClick={toggleColorMode}>{color && color.colorMode == "light" ? <BsSunFill size={32}/> : <BsMoonStarsFill size={32} />}</button>
        </div>
    )   
}

export default ColorButton