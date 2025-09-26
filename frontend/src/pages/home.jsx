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

    return (
        <> 
        <h1>SUCCESS</h1>
        <div>
            <h1> login </h1>
            <form onSubmit={onSubmit}>
                <input type="text" 
                placeholder="email"
                value={email}
                onChange={(e)=>
                setEmail(e.target.value)}
                />
                <input 
                type="text" 
                placeholder="password"
                value={password}
                onChange={(e)=>
                setPassword(e.target.value)}
                />
            </form>
            <button type="submit">Submit</button>
        </div>
        </> 
    )
}