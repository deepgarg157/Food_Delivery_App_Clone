import { useState } from "react";
import ItemsList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex}) => {

    const handlerClick = ()=>{
        setShowIndex()
    }
    
    return (
        <div>

            {/* header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">

                <div className="flex justify-between cursor-pointer" onClick={handlerClick}>
                    <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                    <span>👇</span>
                </div>

                {/* accordion */}
                { showItems && <ItemsList items={data.itemCards} />}

            </div>

        </div>
    )
}

export default RestaurantCategory;