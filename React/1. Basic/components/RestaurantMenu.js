import { useEffect, useState } from "react";
// import { RES_URL } from "../utils/constants";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import { MENU_ITEM_IMG_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const {resId} = useParams()
    console.log(resId)

    const [resInfo, resName] = useRestaurantMenu(resId);
    const onlineStatus = useOnlineStatus();

    if(onlineStatus==false) return (
        <h1>Please check your internet connnection!!</h1>
    )

    if (resInfo === null) return <Shimmer />

    return(
        <div className="res-container">
            <h1>{resName}</h1>
            <ul className="menu-item-list"> 
                {resInfo.itemCards.map(item=> <li key={item.card.info.id}>
                    <div>
                    <h1>{item.card.info.name}</h1>
                    <h2>Rs.{item.card.info.price/100}</h2>
                    </div>
                    <img src={MENU_ITEM_IMG_URL+item.card.info.imageId}></img>
            </li>)}
            </ul>
            {/* <img src={MENU_ITEM_IMG_URL+imageId}></img> */}
            <img src="https://placehold.co/150x100/png"></img>

        </div>
    )
}

export default RestaurantMenu;