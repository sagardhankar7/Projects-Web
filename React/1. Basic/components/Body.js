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
    return (
        <div className="main-body">
            <div className="search-container">
                <button onClick={()=>{
                    resList = resList.filter((restaurant)=>restaurant.rating>4.0)
                    console.log(resList)
                }}>
                    Top Rated Restaurant
                </button>
            </div>

            <div className="restaurant-container">
                {/* PROPS Structure is better */}
                {resList.map((restaurant)=>(
                    <RestaurantCard resData={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default Body;