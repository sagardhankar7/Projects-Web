
const RestaurantCard = (props) => {
    const {name, rating, deliveryTime} = props;
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