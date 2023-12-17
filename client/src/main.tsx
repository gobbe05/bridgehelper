import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Layout from "./Layout/layout"
import React from "react"

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements([
            <Route path="/" element={<Layout />}>
                
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