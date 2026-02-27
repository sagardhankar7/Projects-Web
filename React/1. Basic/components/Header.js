import { useState } from "react";

const Header = () => {
    
    const [name, setName] = useState(["Swiggy"]);
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
                    <li>Home</li>
                    <li>Orders</li>
                    <li>Profile</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;