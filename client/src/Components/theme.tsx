import { useContext } from "react"
import { colorcontext } from "../main"
import { IoArrowDownOutline } from "react-icons/io5";

function Theme({tema, heading} : {tema: string, heading: string}) {
    const color = useContext(colorcontext)
    return (
        <>
            <div className={`flex items-center border-b ${color?.colorMode == "light" ? "border-white" : "border-poker"} py-4 mt-2 group cursor-pointer`}>
                <p className="text-lg">{heading}</p>
                <div className={`flex justify-center items-center border-2  w-12 h-12 rounded-full ml-auto ${color?.colorMode == "dark" ? "border-poker group-hover:bg-poker group-hover:text-white" : "border-white group-hover:bg-white group-hover:text-poker"} transition-all`}>
                    <IoArrowDownOutline size={32}/>
                </div>
            </div>
        </>
    )
}

export default Theme