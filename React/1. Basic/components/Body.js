import RestaurantCard from "./RestaurantCard";

const resList = [
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
            <div className="search-container"></div>
            <div className="restaurant-container">
                {/* <RestaurantCard name="A restaurant" rating="4.2" deliveryTime="30 mins"  /> */}
                {resList.map((restaurant)=>(
                    <RestaurantCard name={restaurant.name} rating={restaurant.rating} deliveryTime={restaurant.deliveryTime} />
                ))}
            </div>
        </div>
    )
}

export default Body;