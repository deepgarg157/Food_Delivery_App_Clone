import { useEffect } from "react"

const Contact=()=>{

    return(
        <div className="text-center">
            <h1 className="font-bold text-3xl p-5 mx-5">This is a Contact us Page</h1>
            <form>
                <input type="text" className="border border-black m-2 p-1" placeholder="Enter the name"></input>
                <input type="email" className="border border-black m-2 p-1" placeholder="Enter the email"></input>
                <button className="border border-black m-2 p-1 bg-black text-white rounded-lg">Submit</button>
            </form>
        </div>
    )
}

export default Contact;