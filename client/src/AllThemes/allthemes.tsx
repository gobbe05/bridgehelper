import { useContext } from "react"
import Theme from "../Components/theme"
import { colorcontext } from "../main"

function AllThemes() {
    const color = useContext(colorcontext)
    return (
        <>
            <div className={`flex flex-col justify-center gap-2 p-8 lg:p-16 rounded mb-24 ${color && color.colorMode == "light" ? "bg-poker text-white" : "bg-white text-poker"} transition-all`}>
                <h1 className="text-3xl font-bold">Alla Teman</h1>
                <Theme tema="Tema 1" heading="Mer om NT givar"/>
                <Theme tema="Tema 1" heading="Mer om NT givar"/>
                <Theme tema="Tema 1" heading="Mer om NT givar"/>
                <Theme tema="Tema 1" heading="Mer om NT givar"/>
                <Theme tema="Tema 1" heading="Mer om NT givar"/>
                <Theme tema="Tema 1" heading="Mer om NT givar"/>
                <Theme tema="Tema 1" heading="Mer om NT givar"/>
                <Theme tema="Tema 1" heading="Mer om NT givar"/>
                <Theme tema="Tema 1" heading="Mer om NT givar"/>
            </div>
        </>
    )
}

export default AllThemes