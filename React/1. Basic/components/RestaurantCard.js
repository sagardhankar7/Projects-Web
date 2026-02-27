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
                {/* <div className="res-delivery-time">{deliveryTime}</div> */}
            </div>
        </div>
    )
}

export default RestaurantCard;