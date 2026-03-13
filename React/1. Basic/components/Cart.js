import { useDispatch, useSelector } from "react-redux"
import { IMG_URL } from "../utils/constants"
import { removeItem, clearCart } from "../redux_files/cartSlice"

const Cart = () => {
    const cartItems = useSelector((store)=> store.cart.items)
    const dispatch = useDispatch()
    const handleRemove = (item) => {
        dispatch(removeItem(item.card.info.id))
    }
    const handleClear = () => {
        dispatch(clearCart())
    }

    return (
        <div>
            <div className="clear-cart">
                <button onClick={()=>handleClear()}>Clear</button>
            </div>
            {cartItems.map((item)=>{
                            return (<div className="menu-category-item" key={item?.card?.info?.id}>
                                <div>
                                    <p>{item?.card?.info?.name}</p>
                                    <p>Rs.{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</p> 
                                    {/* <p>{item?.card?.info?.description}</p> */}
                                </div>
                                <div>
                                    <button onClick={()=>handleRemove(item)}>Remove -</button>
                                    <img src={IMG_URL + item?.card?.info?.imageId}></img>
                                </div>
                            </div>)
                        })}
        </div>
    )
}

export default Cart