import { useEffect } from "react";
import Restaurant from "../utils/Restaurant.json"

const useRestaurantMenu = () => {
    useEffect(()=>{
        fetchRestaurant();
    },[])

    const fetchRestaurant = async () => {
        console.log("Res details")
        
        
        // const arr = Restaurant1.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
        // console.log(arr[0].card.info.name)

        console.log(Restaurant1.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.categories[0].itemCards)
        // console.log(Restaurant2.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card)
        const arr = Restaurant1.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.categories[0].itemCards
        
    }
    
}

export default useRestaurantMenu;