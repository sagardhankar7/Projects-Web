import { useEffect, useState } from "react";
// import { RES_URL } from "../utils/constants";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import { MENU_ITEM_IMG_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuCategory from "./RestaurantMenuCategory";

const RestaurantMenu = () => {
    const {resId} = useParams()
    // console.log(resId)

    const resInfo = useRestaurantMenu(resId);
    const onlineStatus = useOnlineStatus();
    // console.log(resInfo)
    const menuCategories = resInfo?.filter(c=> c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    console.log(menuCategories)
    if(onlineStatus==false) return (
        <h1>Please check your internet connnection!!</h1>
    )

    if (resInfo === null) return <Shimmer />

    return(
        <div className="res-container">
            {/* <h1>{resName}</h1> */}
            <ul className="menu-item-list">
                {
                menuCategories.map((c,index)=> {
                    return <RestaurantMenuCategory key={c.card.card.categoryId} data={c} show={index===0?true:false} />
                })}
            </ul>
            {/* <img src={MENU_ITEM_IMG_URL+imageId}></img> */}
            <img src="https://placehold.co/150x100/png"></img>

        </div>
    )
}

export default RestaurantMenu;