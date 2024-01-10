import { Outlet } from "react-router-dom"
import Header from "./header"
import Sidebar from "./sidebar"
import { useContext } from "react"
import { colorcontext } from "../main"

function Layout() {
    const color = useContext(colorcontext)
    return (
            <div className={`${color?.colorMode == "light" ? "bg-white text-neutral-800" : "bg-poker text-white"} transition-all`}>
                <div className={`lg:w-3/4 xl:w-2/3 px-8 md:px-16 2xl:px-32 sm:mx-auto`}>
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