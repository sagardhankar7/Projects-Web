import { useEffect, useState } from "react";

const Header = () => {
    const homeList=[
        "Home", "First", "Top", "Up"
    ]
    let homeListIndex=0
    useEffect(()=>{

        const timer = setInterval(() => {
                        // setAnimation(true)
                        setTimeout(() => {
                            setAnimation(false) 
                        }, 300);
                        setHome(homeList[homeListIndex])
                        homeListIndex += 1
                        if (homeListIndex==homeList.length) homeListIndex = 0
                    },1200);
                    
          return () => {
            // cleanup code
                clearInterval(timer)
            };

    },[])
    const [name, setName] = useState(["Swiggy"]);
    const [home, setHome] = useState(["First"]);
    const [animation, setAnimation] = useState(false);

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
                    <li className={animation? "slide-li" : ""}>{home}</li>
                    <li>Orders</li>
                    <li>Profile</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;