import { useState, useEffect } from "react";
import Res242354 from "./LunchBox.json"
import Res242352 from "./GoodBowl.json"
import Res242347 from "./Faasos.json"
import Res242351 from "./SweetTruth.json"
import Res242353 from "./TBL.json"
import Res242348 from "./BB.json"
import Res518623 from "./OmSweets.json"
import Res1028293 from "./BurgerKing.json"

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null)
    const jsonData = {
        Res1028293,
        Res518623,
        Res242354,
        Res242352,
        Res242347,
        Res242351,
        Res242353,
        Res242348
    }

    useEffect(()=>{
        fetchRestaurant();
    },[])

    const fetchRestaurant = async () => {
        // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.3102094&lng=77.3698382&restaurantId=353657&catalog_qa=undefined&submitAction=ENTER")
        // const jsan = await data.json();
        // console.log(jsan)
        const str = "Res"+resId;
        console.log(str)
        const json = jsonData[str]; 
        // console.log(json)
        // const list = json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        const list = json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards
        setResInfo(list)
    }
    return resInfo
}

export default useRestaurantMenu;