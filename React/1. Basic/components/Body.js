import { useState } from "react";
import RestaurantCard from "./RestaurantCard";

let resList = [
    {
        name: "A restaurant",
        rating: 4.2,
        deliveryTime: "30 mins"
    },
    {
        name: "B restaurant",
        rating: 4.1,
        deliveryTime: "30 mins"
    },
    {
        name: "C restaurant",
        rating: 3.8,
        deliveryTime: "30 mins"
    },
    {
        name: "D restaurant",
        rating: 4.2,
        deliveryTime: "30 mins"
    },
    {
        name: "E restaurant",
        rating: 4.2,
        deliveryTime: "30 mins"
    }
]


const Body = () => {
    const [stateList, setStateList] = useState(resList);
    return (
        <div className="main-body">
            <div className="search-container">
                <button onClick={()=>{
                    const filteredList = resList.filter((restaurant)=>restaurant.rating>4.0)
                    setStateList(filteredList)
                }}>
                    Top Rated Restaurant
                </button>
            </div>

            <div className="restaurant-container">
                {/* PROPS Structure is better */}
                {stateList.map((restaurant)=>(
                    <RestaurantCard key={restaurant.name} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default Body;