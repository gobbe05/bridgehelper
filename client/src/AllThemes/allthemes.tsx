import { useContext, useEffect } from "react"
import Theme from "../Components/theme"
import { colorcontext } from "../main"
import { useState } from "react"

function AllThemes() {
    const color = useContext(colorcontext)
    const [themes, setThemes] = useState<Array<any>>([])

    async function GetThemes() {
        const response = await fetch("/getthemes")
        const data = await response.json()
        setThemes(data);
    }

    useEffect(() => {
        GetThemes()
    }, [])
    if(themes.length > 0) {
        return (
            <>
                <div className={`flex flex-col justify-center gap-2 p-8 lg:p-16 rounded mb-24 ${color && color.colorMode == "light" ? "bg-poker text-white" : "bg-white text-gray-700"} transition-all`}>
                    <h1 className="text-3xl font-bold">Alla Teman</h1>
                    {themes.map((theme) => (
                      <div>
                        <Theme pdf={theme.Pdf} tema={theme.Theme} heading={theme.Name} file={theme.File}/>  
                      </div>
                    ))}
                </div>
            </>
        )
    }
    return <></>
}

export default AllThemes
