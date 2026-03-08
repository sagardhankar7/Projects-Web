import { IMG_URL } from "../utils/constants";

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
    return (props) => {
        return (
            <div className="promoted-card">
                <span>Top</span>
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