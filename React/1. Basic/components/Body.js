import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
// import { resList } from "./DummyData";

const Body = () => {
    const [stateList, setStateList] = useState([]);
    // const [stateFilteredList, setStateFilteredList] = useState
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.3102094&lng=77.3698382&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(restaurants);
        setStateList(restaurants)
    }
    
    return (
        <div className="main-body">
            <div className="search-container">
                <input type="text"></input>
                <button>Search</button>
                <button onClick={()=>{
                    const filteredList = stateList.filter((restaurant)=>restaurant.info.avgRating>4.0)
                    // Whenever the State Variable Updates. React ReRender the UIComponent.
                    setStateList(filteredList)
                }}>
                    Top Rated Restaurant
                </button>
            </div>

            <div className="restaurant-container">
                {/* PROPS Structure is better */}
                {console.log(stateList)}
                {stateList.map((restaurant)=>(
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default Body;