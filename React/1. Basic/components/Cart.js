import { useSelector } from "react-redux"
import { IMG_URL } from "../utils/constants"

const Cart = () => {
    const cartItems = useSelector((store)=> store.cart.items)
    return (
        <div>
            {cartItems.map((item)=>{
                            return (<div className="menu-category-item" key={item?.card?.info?.id}>
                                <div>
                                    <p>{item?.card?.info?.name}</p>
                                    <p>Rs.{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</p> 
                                    {/* <p>{item?.card?.info?.description}</p> */}
                                </div>
                                <div>
                                    <img src={IMG_URL + item?.card?.info?.imageId}></img>
                                </div>
                            </div>)
                        })}
        </div>
    )
}

export default Cart