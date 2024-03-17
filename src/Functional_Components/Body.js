import RestaurrentCard, { withPromotedLabel } from "./RestaurrentCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import Footer from '../Functional_Components/Footer'

const Body = () => {

  const [listRestaurrent, setListOfRestaurants] = useState([]);
  const [filterRest, setFilterRest] = useState([]);
  const [inputSearch, SetInputSearch] = useState("")
  const [locationName, setLocationName] = useState('')

  const { loggedInUser, setUserName } = useContext(UserContext);

  // const RestaurrentCardPromoted = withPromotedLabel(RestaurrentCard);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6302312&lng=77.4349177&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setLocationName(json?.data?.cards[1]?.card?.card?.header?.title)
  }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>Please check the internet connection, your are offline!!</h1>

  return listRestaurrent.length === 0 ? <Shimmer /> : (
    <div className="">
      <div className="flex mx-14 my-3">
        <div className="px-2 mx-12">

          <input className="border border-black py-2 mx-4 px-2 rounded-md" type="text" name="restName" value={inputSearch} placeholder="Search" onChange={(e) => {
            SetInputSearch(e.target.value);
          }} />

          <button className="bg-slate-300 rounded-lg p-2 font-bold" onClick={() => {
            const filterRestaurant = listRestaurrent.filter((res) => res.info.name.toLowerCase().includes(inputSearch))
            setFilterRest(filterRestaurant)
          }}>Search</button>

          <button className="bg-slate-300 rounded-lg px-2 py-2 mx-4 font-bold" onClick={() => {
            const filteredRestaurant = listRestaurrent.filter(rate => rate.info.avgRating > 4)
            setFilterRest(filteredRestaurant)
          }}>Top Rated Restaurrents</button>

        </div>


        <div >
          <label className="mx-4 font-bold">UserName :</label>
          <input className="border border-black px-2 py-2 rounded-md"
            placeholder="Name"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}></input>
        </div>

      </div>

      <h1 className="mx-32 mt-10 text-2xl font-bold">{locationName}</h1>
      <div className="flex flex-wrap mx-28">
        {filterRest.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurrentCard resName={restaurant} />
          </Link>
        ))}
      </div>
        
        <Footer />
    </div>
  )
}

export default Body;