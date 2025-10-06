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
    <div className="h-screen w-screen flex flex-col p-1 m-1 items-center text-center">
      <h1 className="text-3xl text-red-500">Create account</h1>

      {/* Error message */}
      {err ? (
        <div
          role="alert"
          aria-live="polite"
          className=""
        >
          {err}
        </div>
      ) : null}

      <form onSubmit={onSubmit} className="m-4 flex flex-col items-center border-2 rounded w-80">
        <div className="p-4 flex flex-col items-center">
          <label htmlFor="full_name" className="">
            Full Name
          </label>
          <input
            id="full_name"
            placeholder="Full Name"
            value={full_name}
            onChange={(e) => setFullName(e.target.value)}
            autoComplete="name"
            className="border-2 rounded"
          />
        </div>

        <div className="p-4 flex flex-col items-center">
          <label htmlFor="email" className="">
            Email
          </label>
          <input
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            className="border-2 rounded"
          />
        </div>

        <div className="p-4 flex flex-col items-center">
          <label htmlFor="password" className="">
            Password
          </label>
          <input
            id="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            className="border-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-40 m-4 border border-black rounded-xl hover:bg-blue-200 cursor-pointer transition-all duration-300 transition-all duration-300 ease-in-out"
          disabled={!full_name || !email || !password}
        >
          Register
        </button>
      </form>

      <p className="">
        Have an account?{" "}
        <Link to="/login" className="w-1/2 underline hover:text-blue-200 cursor-pointer transition-all duration-300 transition-all duration-300 ease-in-out">
          Login
        </Link>
      </p>
    </div>
    
  )
}