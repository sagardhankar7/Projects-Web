import { createBrowserRouter, Outlet, RouterProvider } from "react-router"
import Header from "./component/Header"
import Footer from "./component/Footer"
import Body from "./component/Body"
import Error from "./component/Error"

import React from "react";
import ReactDOM from "react-dom/client"

const App = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />
            }
        ],
        errorElement: <Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={router} />)