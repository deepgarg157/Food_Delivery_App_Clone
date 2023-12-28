import React, { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const Register = () => {

    const [user, setUser] = useState(
        {
            fullName: "",
            email: "",
            password: "",
            rePassword: ""
        }
    )

    const [fullName, setFullName] = useState(false)
    const [email, setEmail] = useState(false)
    const [password, setPassword] = useState(false)
    const [rePassword, setRePassword] = useState(false)

    const change = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleRegister = async () => {
        let valid = true
        if (!user.fullName.trim() > 0) {
            setFullName(true)
            valid = false
        }
        else {
            setFullName(false)
        }
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
        if (!user.rePassword.trim() > 0) {
            setRePassword(true)
            valid = false
        }
        else {
            setRePassword(false)
        }

        if (user.fullName === "" || user.email === "" || user.password === "" || user.rePassword === "") {
            alert("all field is required")
        }
        // else {
        //     await axios.post("http://localhost:7000/register", user)
        //         .then((data) => alert(data.data.status))
        //         .catch((error) => console.log(error))
        // }
        setUser(
            {
                fullName: "",
                email: "",
                password: "",
                rePassword: ""
            }
        )
    }

    return (
        <div className="p-5">
            <div className="flex justify-center flex-col w-[20%] p-5 m-auto rounded-lg border-black border-2 bg-white">
                <p className="text-lg font-bold">Sign up</p>
                    <div className="mt-3 flex flex-col">
                        <label className="">FullName:</label>
                        <input type="text" name="fullName" placeholder="Name" className="px-2 mt-2 bg-slate-200 text-lg" value={user.fullName} onChange={change}></input>
                        {fullName ? <p className="text-red-600">Fill the required Field</p> : <></>}
                    </div>
                    <div className="mt-3 flex flex-col">
                        <label className="">Email:</label>
                        <input type="text" name="email" placeholder="email" className="px-2 mt-2 bg-slate-200 text-lg" value={user.email} onChange={change}></input>
                        {email ? <p className="text-red-600">Fill the required Field</p> : <></>}
                    </div>
                    <div className="mt-3 flex flex-col">
                        <label className="">Password:</label>
                        <input type="text" name="password" placeholder="Password" className="px-2 mt-2 bg-slate-200 text-lg" value={user.password} onChange={change}></input>
                        {password ? <p className="text-red-600">Fill the required Field</p> : <></>}
                    </div>
                    <div className="mt-3 flex flex-col">
                        <label className="">Re-Enter Password:</label>
                        <input type="text" name="rePassword" placeholder="re-Enter Password" className="px-2 mt-2 bg-slate-200 text-lg" value={user.rePassword} onChange={change}></input>
                        {rePassword ? <p className="text-red-600">Fill the required Field</p> : <></>}
                    </div>
                    <button className="p-2 bg-slate-900 text-white mt-4 w-full" onClick={handleRegister}>Sign up</button>
                    <p className="text-center text-lg">or</p>
                    <Link to="/login"><button className="p-2 bg-slate-900 text-white w-full">Login</button></Link>
            </div>
        </div>
    )
}

export default Register;