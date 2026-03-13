import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux"; // For reading from the store

const Header = () => {
    const homeList=[
        "Home", "First", "Top", "Up"
    ]
    let homeListIndex=0
    useEffect(()=>{

        // const timer = setInterval(() => {
        //                 // setAnimation(true)
        //                 setTimeout(() => {
        //                     setAnimation(false) 
        //                 }, 300);
        //                 setHome(homeList[homeListIndex])
        //                 homeListIndex += 1
        //                 if (homeListIndex==homeList.length) homeListIndex = 0
        //             },1200);
                    
        //   return () => {
        //     // cleanup code
        //         clearInterval(timer)
        //     };

    },[])
    const [name, setName] = useState(["Swiggy"]);
    const [home, setHome] = useState(["Home"]);
    const [animation, setAnimation] = useState(false);

    const {loggedinUser} = useContext(UserContext)

    const cartItems = useSelector((store)=>store.cart.items) // read from the store // Subscribed to the cart store
    console.log(cartItems)

    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://placehold.co/100"></img>
            </div>
            <h1 onMouseOver={()=>{
                if(name=="Swiggy")
                setName("Zomato");
                else setName("Swiggy")
            }}>{name}</h1>
            <div className="nav-items">
                <ul>
                    <li className={animation? "slide-li" : ""}><Link to="/">{home}</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart({cartItems.length} items)</li>
                    <li>{loggedinUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;