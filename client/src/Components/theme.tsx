import { useContext } from "react"
import { colorcontext } from "../main"
import { IoArrowDownOutline, IoEye } from "react-icons/io5";

function Theme({tema, heading, file, pdf} : {tema: string, heading: string, file: string, pdf?: string | undefined }) {
    const color = useContext(colorcontext)
    return (
        <>
            <div className={`flex items-center border-b ${color?.colorMode == "light" ? "border-white" : "border-gray-700"} py-2 mt-2 group`}>
                <p className="text-lg">{heading}</p>
                <div className="flex flex-col justify-center ml-auto ">
                    <div className="flex gap-2">
                    {pdf && <a href={pdf} target="__blank" className={`flex justify-center items-center border-2 mx-auto p-1 aspect-square rounded-full ${color?.colorMode == "dark" ?  "border-gray-700 hover:bg-gray-700 hover:text-white" : "border-white hover:bg-white hover:text-gray-700"} transition-all`}>
                        <IoEye size={24} />
                      </a>}
                      {file && <a href={file} target="__blank" className={`flex justify-center items-center border-2 mx-auto p-1 aspect-square rounded-full ${color?.colorMode == "dark" ? "border-gray-700 hover:bg-gray-700 hover:text-white" : "border-white hover:bg-white hover:text-gray-700"} transition-all`}>
                        <IoArrowDownOutline size={24}/>
                      </a>}
                    </div>
                    <p className="text-center text-sm text-nowrap">{tema}</p>
                </div>
            </div>
        </>
    )
}

export default Theme
