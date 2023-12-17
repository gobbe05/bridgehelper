import { Outlet } from "react-router-dom"
import Header from "./header"
import Sidebar from "./sidebar"
import Footer from "./footer"

function Layout() {
    return (
        <div className="bg-poker">
            <div className="w-3/4 xl:w-1/2 2xl:w-2/5 mx-auto text-white">
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