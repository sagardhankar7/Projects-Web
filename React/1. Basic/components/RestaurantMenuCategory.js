import { useState } from "react"
import { IMG_URL } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addItem } from "../redux_files/cartSlice"


const RestaurantMenuCategory = ({data, show, setIndexToShow, indexToShow}) => {
    // console.log(data?.card?.card)
    // console.log("show is ",show)
    const [showItems, setShowItems] = useState(false);
    
    const handleClick = () => {
        setShowItems(showItems? false: true)
        setIndexToShow();
        console.log("index To Show " ,indexToShow)
    }

    const dispatch = useDispatch() //dispatch an action
    const handleAdd = () => {
        dispatch(addItem("pavbhaji")) // calls a reducer funsion
    }

    return (
        <div>
            {/* Rescategory */}
            <p onClick={handleClick} className="menu-category-header">{data?.card?.card?.title}({data?.card?.card?.itemCards?.length})</p>
            
            {showItems && show && data?.card?.card?.itemCards.map((item)=>{
                return (<div className="menu-category-item" key={item?.card?.info?.id}>
                    <div>
                        <p>{item?.card?.info?.name}</p>
                        <p>Rs.{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</p> 
                        {/* <p>{item?.card?.info?.description}</p> */}
                    </div>
                    <div>
                        <button onClick={()=>handleAdd()}>Add +</button>
                        <img src={IMG_URL + item?.card?.info?.imageId}></img>
                    </div>
                </div>)
            })}
            
        </div>
    )
}

export default RestaurantMenuCategory;