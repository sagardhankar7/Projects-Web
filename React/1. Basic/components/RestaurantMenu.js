import { useEffect, useState } from "react";
// import { RES_URL } from "../utils/constants";
import { useParams } from "react-router";
import LunchBox from "../utils/LunchBox.json"
import Chaayos from "../utils/Chaayos.json"
import Shimmer from "./Shimmer";
import { MENU_ITEM_IMG_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestaurantMenu = () => {
    const {resId} = useParams()
    const [resInfo, setResInfo] = useState(null)
    const [resName, setResName] = useState(null)
    console.log(resId)

    useEffect(()=>{
        fetchRestaurant();
    },[])

    const fetchRestaurant = async () => {
        const json = LunchBox;
        const list = json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        setResInfo(list)

        const arrForName = json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards
        const name = arrForName[arrForName.length-1].card.card.name
        setResName(name)
    }   
    
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