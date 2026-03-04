import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import { Outlet } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";



const AppLayout = () => {
    return (
        <div className="app">
            <Header></Header>
            <Outlet />
            <Footer></Footer>
        </div>
        
    )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
        {
        path: "/",
        element: <Body />,
        },
        {
        path: "/about",
        element: <About />,
        },
        {
        path: "/contact",
        element: <Contact />,
        },
        {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
        },
        
    ],
    errorElement: <Error />
  },
  
  
  
]);


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={router} />)