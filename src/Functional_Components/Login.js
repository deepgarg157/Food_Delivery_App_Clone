import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {

    const [user, setUser] = useState(
        {
            email: "",
            password: ""
        }
    )

    const [email, setEmail] = useState(false)
    const [password, setPassword] = useState(false)

    const change = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleLogin = async () => {
        let valid = true
        if (!user.email.trim() > 0) {
            setEmail(true)
            valid = false
        }
        else {
            setEmail(false)
        }
        if (!user.password.trim() > 0) {
            setPassword(true)
            valid = false
        }
        else {
            setPassword(false)
        }

        if (user.email === "" || user.password === "") {
            alert("all field is required")
        }
        // else {
        //     await axios.post("http://localhost:7000/login", user)
        //         .then((data) =>{
        //             alert(data.data.status)
        //         })
        //         .catch((error) => console.log(error))
        // }
        setUser(
            {
                email: "",
                password: ""
            }
        )
    }

    return (
        <div className="p-5">
            <div className="flex justify-center flex-col w-[20%] p-5 m-auto rounded-lg border-black border-2 bg-white">
                <p className="text-lg font-bold">Login Page</p>
                <div className="mt-3 flex flex-col">
                    <label className="">Email:</label>
                    <input type="text" name="email" placeholder="email" className="px-2 mt-2 bg-slate-200 text-lg" value={user.email} onChange={change}></input>
                    {email ? <p className="text-red-600">Fill the required Field</p> : <></>}
                </div>
                <div className="mt-3 flex flex-col">
                    <label className="">Password:</label>
                    <input type="text" name="password" placeholder="password" className="px-2 mt-2 bg-slate-200 text-lg" value={user.password} onChange={change}></input>
                    {password ? <p className="text-red-600">Fill the required Field</p> : <></>}
                </div>
                <button className="p-2 bg-slate-900 text-white mt-4" onClick={handleLogin}>Login</button>
                <p className="text-center text-lg">or</p>
                <Link to="/register"><button className="p-2 bg-slate-900 text-white w-full">Sign up</button></Link>
            </div>
        </div>
    )
}

export default Login;