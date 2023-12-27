import { useEffect, useState } from "react";
import resList from "../utils/mock_data";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () => {

    const { resId } = useParams()

    const resInfo = useRestaurantMenu(resId)

    const [showIndex, SetShowIndex] = useState(null)


    if (resInfo === null) return <Shimmer />
    

    const { name, cuisines, avgRating, costForTwo } = resInfo?.cards[0].card.card.info

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    

    return (
        <div className="text-center">

            <h2 className="font-bold mt-5 text-2xl">{name}</h2>
            <p className="text-gray-400 my-3 font-bold">{cuisines.join(", ")} - Rs.{costForTwo / 100}</p>

            {/* Categories accordions */}

            {categories?.map((category, index) =>
                <RestaurantCategory key={category?.card?.card?.title}
                    data={category?.card?.card}
                    showItems={showIndex === index ? true : false}
                    setShowIndex={() => SetShowIndex(index)}
                />)}
                
        </div>
    )
}

export default RestaurantMenu;