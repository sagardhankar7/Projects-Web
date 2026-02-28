import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import About from "./components/About";
import Error from "./components/Error";




const AppLayout = () => {
    return (
        <div className="app">
            <Header></Header>
            <Body></Body>
            <Footer></Footer>
        </div>
        
    )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />
  },
  {
    path: "/about",
    element: <About />,
  },
  
]);


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={router} />)