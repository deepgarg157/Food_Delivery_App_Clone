import { useContext, useState,} from "react";
import { LOGO_LINK } from "../utils/constants";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Sign In")

  const onlineStatus = useOnlineStatus()

  // const { loggedInUser } = useContext(UserContext)

  // Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items)

  return (
    <div className="flex bg-orange-200 justify-between shadow-lg">
      <div>
        <Link to="/"><img className="w-[100px] h-[100px] rounded-lg ml-[100px] mt-1" src={LOGO_LINK}></img></Link>
      </div>
      <div className="">
        <ul className="flex">
          <li className="p-4 my-6">
            Online: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="p-4 my-6 hover:bg-red-100 rounded-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 my-6 hover:bg-red-100 rounded-lg">
            <Link to="/about">About US</Link>
          </li>
          <li className="p-4 my-6 hover:bg-red-100 rounded-lg">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-4 my-6 hover:bg-red-100 rounded-lg">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-4 my-6 hover:bg-red-100 rounded-lg font-bold text-lg">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>

          <Link to="/register"><button className="p-4 my-6 hover:bg-slate-800 hover:text-white rounded-lg mx-2" >{btnNameReact}
          </button></Link>

        </ul>
      </div>

    </div>
  )
}

export default Header;