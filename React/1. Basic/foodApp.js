import React from "react";
import ReactDOM from "react-dom/client"


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://placehold.co/100"></img>
            </div>
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

const RestaurantCard = () => {
    return (
        <div className="res-card">
            <img src="https://placehold.co/400x200"></img>
            <div>
                <div className="res-name">A restaurant</div>
                <div className="res-rating">4.2</div>
                <div className="res-delivery-time">30 mins</div>
            </div>    
        </div>
    )
}

const Body = () => {
    return (
        <div className="main-body">
            <div className="search-container"></div>
            <div className="restaurant-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="footer"> Footer</div>
    )
}


const AppLayout = () => {
    return (
        <div className="app">
            <Header></Header>
            <Body></Body>
            <Footer></Footer>
        </div>
        
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout></AppLayout>)