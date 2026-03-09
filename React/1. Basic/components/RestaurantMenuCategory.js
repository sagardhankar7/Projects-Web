import { useState } from "react"
import { IMG_URL } from "../utils/constants"

const RestaurantMenuCategory = (data) => {
    console.log(data?.data?.card?.card)
    const [showItems, setShowItems] = useState(false);
    
    const handleClick = () => {
        setShowItems(showItems? false: true)
    }

    return (
        <div>
            {/* Rescategory */}
            <p onClick={handleClick} className="menu-category-header">{data?.data?.card?.card?.title}({data?.data?.card?.card?.itemCards?.length})</p>
            
            {showItems && data?.data?.card?.card?.itemCards.map((item)=>{
                return (<div className="menu-category-item" key={item?.card?.info?.id}>
                    <div>
                        <p>{item?.card?.info?.name}</p>
                        <p>Rs.{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</p> 
                        {/* <p>{item?.card?.info?.description}</p> */}
                    </div>
                    <div>
                        <button>Add +</button>
                        <img src={IMG_URL + item?.card?.info?.imageId}></img>
                    </div>
                </div>)
            })}
            
        </div>
    )
}

export default RestaurantMenuCategory;