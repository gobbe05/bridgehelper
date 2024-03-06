import { useContext, useEffect, useState } from "react"
import { colorcontext } from "../main"
import { BsArrowRightShort } from "react-icons/bs"
import Theme from "../Components/theme"
import { Link } from "react-router-dom"

function CentralThemes() {
    const color = useContext(colorcontext)
    const [centralThemes, setCentralThemes] = useState<Array<any>>([])

    const FetchCentralThemes = async () => {
        const response = await fetch('/getcentralthemes');
        const data = await response.json();
        setCentralThemes(data);
    }

    useEffect(() => {
        FetchCentralThemes();
    }, [])
    if(centralThemes.length > 0) {
        return (
            <div className={`flex flex-col px-8 lg:px-16 py-8 rounded mb-24 ${color && color.colorMode == "light" ? "bg-poker text-white" : "bg-white text-gray-700"} transition-all`}>
                <h1 className="text-3xl font-bold">Centrala Teman</h1>

                <div className="flex flex-col justify-center gap-2 ">
                    {centralThemes.map((theme) => (
                        <Theme tema={theme.Theme} heading={theme.Name} file={theme.File}/>
                    ))}
                </div>
                    

                <Link to="/allateman" className={`flex items-center text-xl border-b ml-auto mt-8 sm:hover:px-2 ${color && color.colorMode == "light" ? "text-blue-300 border-blue-300" : "text-blue-500 border-blue-500"} transition-all`}>Visa alla teman <BsArrowRightShort /></Link>
            </div>
        )
    }
    return <></>
}

export default CentralThemes