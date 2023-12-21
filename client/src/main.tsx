import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Layout from "./Layout/layout"
import React, { createContext, useState } from "react"
import './index.css'
import Home from "./Home/home"
import AllThemes from "./AllThemes/allthemes"


export const colorcontext = createContext<{colorMode: "light" | "dark", setColorMode: React.Dispatch<React.SetStateAction<"light" | "dark">>} | undefined>(undefined)
function App() {
    const [colorMode, setColorMode] = useState<"light" | "dark">("dark")

    const router = createBrowserRouter(
        createRoutesFromElements([
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}>
                    
                </Route>
                <Route path="allateman" element={<AllThemes />}>

                </Route>
            </Route>,
            <Route path="/bridgehelper" element={<Layout />}>
            <Route index element={<Home />}>
                
            </Route>
            <Route path="allateman" element={<AllThemes />}>

            </Route>
        </Route>
        ])
    )
    return (
        <>
            <React.StrictMode>
                <colorcontext.Provider value={{colorMode: colorMode, setColorMode: setColorMode}}>
                    <RouterProvider router={router} />
                </colorcontext.Provider>
            </React.StrictMode>
        </>
    )
}

export default App