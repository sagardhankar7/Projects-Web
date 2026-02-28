import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer"
// import { resList } from "./DummyData";

const Body = () => {
    const [stateList, setStateList] = useState([]);
    const [searchText, setSearchText] = useState("")
    const [filteredRest, setFilteredRest] = useState([])
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.3102094&lng=77.3698382&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        const restaurants = json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        // console.log(restaurants);
        setStateList(restaurants)
        setFilteredRest(restaurants)
    }
    
    if(stateList.length == 0) return <Shimmer></Shimmer>

    return (
        <div className="main-body">
            <div className="search-container">
                <input type="text" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value)
                    console.log(searchText,"31")
                }}></input>
                <button onClick={()=>{
                    // console.log(filteredRest[0].info.name)
                    const filteredList = stateList.filter((rest)=> rest.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    // Whenever the State Variable Updates. React ReRender the UIComponent.
                    setFilteredRest(filteredList)
                }}>Search</button>
                <button onClick={()=>{
                    const filteredList = stateList.filter((restaurant)=>restaurant.info.avgRating>4.0)
                    // Whenever the State Variable Updates. React ReRender the UIComponent.
                    setFilteredRest(filteredList)
                }}>
                    Top Rated Restaurant
                </button>
            </div>

            <div className="restaurant-container">
                {/* PROPS Structure is better */}
                {console.log(filteredRest, "50")}
                {filteredRest.map((restaurant)=>(
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default Body;