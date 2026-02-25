
const RestaurantCard = (props) => {
    // Object inside PROPS
    const {resData} = props;
    const {name, rating, deliveryTime} = resData;
    return (
        <div className="res-card">
            <img src="https://placehold.co/400x200"></img>
            <div>
                <div className="res-name">{name}</div>
                <div className="res-rating">{rating}</div>
                <div className="res-delivery-time">{deliveryTime}</div>
            </div>
        </div>
    )
}

export default RestaurantCard;