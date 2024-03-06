import Introduction from "./introduction"
import Information from "./information"
import CentralThemes from "./centralthemes"
import InformationTema from "./temainformation"
import { useEffect, useState } from "react"

function Home() {
    return (
        <>
            <div className="flex flex-col gap-16">
                <Introduction />
                <Information />
                <InformationTema />
                <CentralThemes />

            </div>
        </>
    )
}

export default Home