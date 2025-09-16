import { useState } from "react";
import { register as registerUser } from "../services/auth.js";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    setErr("");
    try {
      await registerUser({ email, password });
      navigate("/", { replace: true });
    } catch (error) {
      setErr(error?.response?.data?.error || "Registration failed");
    }
  }

  return (
    <div style={{ maxWidth: 360, margin: "10vh auto" }}>
      <h1>Create account</h1>
      <form onSubmit={onSubmit}>
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
      {err && <p style={{ color: "crimson" }}>{err}</p>}
      <p style={{ marginTop: 12 }}>
        Have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}


