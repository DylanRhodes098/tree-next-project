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
    <div className="mx-auto mt-24 w-full max-w-sm px-4">
      <h1 className="mb-6 text-3xl font-semibold tracking-tight">Create account</h1>

      {/* Error message */}
      {err ? (
        <div
          role="alert"
          aria-live="polite"
          className="mb-4 rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700"
        >
          {err}
        </div>
      ) : null}

      <form onSubmit={onSubmit} className="space-y-3">
        <div>
          <label htmlFor="full_name" className="sr-only">
            Full Name
          </label>
          <input
            id="full_name"
            placeholder="Full Name"
            value={full_name}
            onChange={(e) => setFullName(e.target.value)}
            autoComplete="name"
            className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700"
          />
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700"
          />
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700"
          />
        </div>

        <button
          type="submit"
          className="mt-2 w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          disabled={!full_name || !email || !password}
        >
          Register
        </button>
      </form>

      <p className="mt-4 text-sm text-gray-600">
        Have an account?{" "}
        <Link to="/login" className="font-medium text-blue-600 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}