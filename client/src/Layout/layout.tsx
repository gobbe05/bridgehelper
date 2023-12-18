import { Outlet } from "react-router-dom"
import Header from "./header"
import Sidebar from "./sidebar"
import { useContext } from "react"
import { colorcontext } from "../main"

function Layout() {
    const color = useContext(colorcontext)
    return (
        <div className={`${color?.colorMode == "light" ? "bg-white" : "bg-poker"} transition-all`}>
            <div className={`sm:w-3/4 xl:w-1/2 2xl:w-2/5 mx-5 sm:mx-auto ${color?.colorMode == "light" ? "text-black" : "text-white"} transition-all`}>
                <div>
                    {/* Header */}
                    <Header />
                </div>
                <div className="flex">
                    <div className="flex-grow">
                        {/* Content */}
                        <Outlet />
                    </div>

                    <div className="hidden">
                        {/* Sidebar */}
                        <Sidebar />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Layout