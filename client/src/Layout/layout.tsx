import { Outlet } from "react-router-dom"
import Header from "./header"
import Sidebar from "./sidebar"
import Footer from "./footer"

function Layout() {
    return (
        <div className="w-3/4 mx-auto">
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
            
            <Footer />
        </div>
    )
}

export default Layout