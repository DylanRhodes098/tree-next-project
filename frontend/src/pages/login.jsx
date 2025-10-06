import {useState} from "react";
import { login as loginUser} from "../services/auth";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");
    const navigate = useNavigate();

    async function onSubmit (e) {
        e.preventDefault();
        setErr("");
        try {
            await loginUser({email, password});
            navigate("/home", {replace: true} );
        } catch (error) {
            setErr(error?.response?.data?.error || "login failed" );
        }
    }

    function warningMessage () {
        if (!err) {
          return null;
        }
        else {
          return <p style={{ color: "crimson" }}>{err}</p>
        }
      }

    return (
        <> 
        <div className="h-screen w-screen flex flex-col p-1 m-1 items-center text-center">
            <h1 className="text-2xl text-red-500 "> login </h1>
            <form className="m-4 flex flex-col items-center border-2 rounded w-80" onSubmit={onSubmit}>
                <div className="p-4 flex flex-col items-center">
            <label htmlFor="email" className="">
            Email
          </label>
                <input type="text" 
                placeholder="email"
                value={email}
                onChange={(e)=>
                setEmail(e.target.value)}
                />
                </div>
                <div className="p-4 flex flex-col items-center">
                <label htmlFor="password" className="">
            Password
          </label>
                <input 
                type="password" 
                placeholder="password"
                value={password}
                onChange={(e)=>
                setPassword(e.target.value)}
                />
                </div>
                <button className="w-40 m-4 border border-black rounded-xl hover:bg-blue-200 cursor-pointer transition-all duration-300 transition-all duration-300 ease-in-out" type="submit">Submit</button>
                {warningMessage()}
            </form>
        </div>
        </> 
    )
}