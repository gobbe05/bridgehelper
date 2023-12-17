import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Layout from "./Layout/layout"
import React from "react"
import './index.css'
import Home from "./Home/home"

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements([
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}>
                    
                </Route>
            </Route>
        ])
    )
    return (
        <>
            <React.StrictMode>
                <RouterProvider router={router} />
            </React.StrictMode>
        </>
    )
}

export default App