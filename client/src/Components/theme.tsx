import { useContext } from "react"
import { colorcontext } from "../main"
import { IoArrowDownOutline } from "react-icons/io5";

function Theme({tema, heading, file} : {tema: string, heading: string, file: string}) {
    const color = useContext(colorcontext)
    return (
        <>
            <a href={file} className={`flex items-center border-b ${color?.colorMode == "light" ? "border-white" : "border-poker"} py-2 mt-2 group cursor-pointer`}>
                <p className="text-lg">{heading}</p>
                <div className="flex flex-col justify-center ml-auto ">
                    <div className={`flex justify-center items-center border-2 mx-auto w-12 aspect-square rounded-full ${color?.colorMode == "dark" ? "border-poker group-hover:bg-poker group-hover:text-white" : "border-white group-hover:bg-white group-hover:text-poker"} transition-all`}>
                        <IoArrowDownOutline size={32}/>
                    </div>
                    <p className="text-center text-sm">{tema}</p>
                </div>
            </a>
        </>
    )
}

export default Theme