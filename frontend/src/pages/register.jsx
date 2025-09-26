import { useState } from "react";
import { register as registerUser } from "../services/auth.js";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    setErr("");
    try {
      await registerUser({ full_name, email, password });
      navigate("/login", { replace: true });
    } catch (error) {
      setErr(error?.response?.data?.error || "Registration failed");
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
    <div style={{ maxWidth: 360, margin: "10vh auto" }}>
      <h1>Create account</h1>
      <form onSubmit={onSubmit}>
      <input
          placeholder="Full Name"
          value={full_name}
          onChange={(e)=>setFullName(e.target.value)}
          autoComplete="fullName"
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          autoComplete="email"
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          autoComplete="new-password"
        />
        <button type="submit">Register</button>
      </form>
      {warningMessage()} 
      <p style={{ marginTop: 12 }}>
        Have an account? <Link to="/login">Login</Link>
      </p>
    </div>
       </>
  );
}


