import React from "react"
import { CDN_LINK } from "../utils/constants";

const RestaurrentCard = (props) => {
  const { resName } = (props);

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    aggregatedDiscountInfoV3 } = resName?.info
  return (
    <div className=" m-2 p-2 w-60 rounded-lg hover:bg-slate-200 hover:h-[470px] relative">
      <img className="w-full h-48 rounded-lg" src={CDN_LINK + cloudinaryImageId} alt="res-logo"></img>
      <div className="flex absolute top-0 mt-[170px] ml-2">
        <p className="text-xl text-white font-bold">{aggregatedDiscountInfoV3?.header}</p>
        <p className="text-xl text-white font-bold">{aggregatedDiscountInfoV3?.subHeader}</p>
      </div>
      <h3 className="w-44 px-2 text-lg font-bold my-2">{name}</h3>
      <h4 className="w-48 px-2 text-green-500 font-bold">{cuisines.join(", ")}</h4>
      <div className="flex my-2 px-1">
        <img className="w-5" src="https://cdn0.iconfinder.com/data/icons/glyphpack/37/star-512.png"></img>
        <span className="px-2 font-bold">{avgRating} Rating</span>
      </div>
      <h4 className="px-2 my-3">{costForTwo} costs</h4>
    </div>
  )
}

// high order components

// export const withPromotedLabel = (RestaurrentCard) => {
//   return (props) => {
//     return (
//       <div>
//         <label className="promoted">Promoted</label>
//         <RestaurrentCard {...props} />
//       </div>
//     )
//   }
// }

export default RestaurrentCard;