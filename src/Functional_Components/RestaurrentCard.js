import { CDN_LINK } from "../utils/constants";

const RestaurrentCard = (props) => {
  const { resName } = (props);

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo } = resName?.info
  return (
    <div className="bg-slate-200 m-2 p-2 w-56 rounded-lg">
      <img className="w-12/12 rounded-lg" src={CDN_LINK + cloudinaryImageId} alt="res-logo"></img>
      <h3 className="w-44 px-2 font-bold my-2">{name}</h3>
      <h4 className="w-48 px-2 text-green-500 font-bold">{cuisines.join(", ")}</h4>
      <div className="flex my-2 px-1">
        <img className="w-5" src="https://cdn0.iconfinder.com/data/icons/glyphpack/37/star-512.png"></img>
        <span className="px-2">{avgRating} Rating</span>
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