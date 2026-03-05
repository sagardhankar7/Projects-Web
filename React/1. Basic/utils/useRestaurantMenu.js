import { useEffect } from "react";
import LunchBox from "./LunchBox.json"

const useRestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null)
    const [resName, setResName] = useState(null)

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
    return [resInfo, resName]
}

export default useRestaurantMenu;