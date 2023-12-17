import { Outlet } from "react-router-dom"

function Layout() {
    return (
        <>
            <div>
                {/* Header */}   
            </div>
            <div>
                <div>
                    {/* Content */}
                    <Outlet />
                </div>
                
                <div>
                    {/* Sidebar */}
                </div>

            </div>
            
        
        </>
    )
}

export default Layout