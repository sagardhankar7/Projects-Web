import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import { Outlet } from "react-router";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import reduxStore from "./reduxStore";

// import About from "./components/About";
const About = lazy(()=> import("./components/About"))


const AppLayout = () => {
    const [userName, setUserName] = useState()

    useEffect(()=>{
    // let say , we receive data from backend API
        const data = {
            name: "Sagar Dhankar",
        }
        setUserName(data.name)
    },[])

    return (
        <div className="app">
            <Provider store={reduxStore}>
            <UserContext.Provider value={{loggedinUser: userName, setUserName}}>
                <Header />
                <Outlet />
                <Footer />
            </UserContext.Provider>
            </Provider>
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
        element: (
            <Suspense fallback={<h1>Loading...</h1>}>
                <About />
            </Suspense>
        ),
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