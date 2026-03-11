import { useContext, useEffect, useState } from "react";
import RestaurantCard, { withTopLabel, withVegLabel } from "./RestaurantCard";
import ListOfRestaurant from "../utils/ListOfRestaurants.json"
import Shimmer from "./Shimmer"
import { Link } from "react-router";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [stateList, setStateList] = useState([]);
    const [searchText, setSearchText] = useState("")
    const [filteredRest, setFilteredRest] = useState([])
    const RestaurantCardPromoted = withVegLabel(RestaurantCard)
    const RestaurantCardTop = withTopLabel(RestaurantCard)
    const {loggedinUser, setUserName} = useContext(UserContext)

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.3102094&lng=77.3698382&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        // const json = await data.json();
        const json = ListOfRestaurant;

        const restaurants = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(json);
        
        setStateList(restaurants)
        setFilteredRest(restaurants)
    }
    
    if(!stateList || stateList.length == 0) return <Shimmer></Shimmer>

    return (
        <div className="main-body">
            <div className="search-container">
                <div>
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
                </div>
                <button onClick={()=>{
                    const filteredList = stateList.filter((restaurant)=>restaurant.info.avgRating>4.0)
                    // Whenever the State Variable Updates. React ReRender the UIComponent.
                    setFilteredRest(filteredList)
                }}>
                    Top Rated Restaurant
                </button>
                <div>
                    <label>Set Username</label>
                <input type="text" value={loggedinUser} onChange={(e)=>{
                    setUserName(e.target.value)
                }}></input>
                </div>
            </div>

            <div className="restaurant-container">
                {/* PROPS Structure is better */}
                {filteredRest.map((restaurant)=>(
                    <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}>
                        {/* {restaurant.info?.veg===true ? (<RestaurantCardPromoted resData={restaurant}/>) : (<RestaurantCard resData={restaurant} />)} */}
                        {restaurant.info.avgRating >=4.5 ? (<RestaurantCardTop resData={restaurant} />) : (<RestaurantCard resData={restaurant} />)}
                        
                        </Link>
                    
                ))}
            </div>
        </div>
    )
}

export default Body;