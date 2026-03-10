import { useContext } from "react";
import { IMG_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    // Object inside PROPS
    let {resData} = props;
    const {name, avgRating, cloudinaryImageId} = resData.info;
    return (
        <div className="res-card">
            <img src="https://placehold.co/400x200/png"></img>
            {/* <img src={IMG_URL+cloudinaryImageId}></img> */}
            <div>
                <div className="res-name">{name}</div>
                <div className="res-rating">{avgRating}</div>
            </div>
        </div>
    )
}

export const withTopLabel = (RestaurantCard) => {
    const context = useContext(UserContext)
    return (props) => {
        return (
            <div className="promoted-card">
                <span>Top Choice for {context.loggedinUser}</span>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export const withVegLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div className="promoted-card">
                <span>Veg Only</span>
                <RestaurantCard {...props}/>
            </div>
            
        )
    }
}

export default RestaurantCard;