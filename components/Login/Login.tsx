import { LoginApi } from "@/utils/apis/Auth/LoginApi";
import Link from "next/link";
import { useState, FormEvent } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await LoginApi({ email, password });
      console.log("Login Success:", res);

      if (res.token) localStorage.setItem("token", res.token);

      setEmail("");
      setPassword("");
    } catch (err: any) {
      console.error("Login Error:", err);
      alert(err.message || "Login failed");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: "#000000" }} 
    >
      <div
        className="shadow-lg rounded-xl p-8 w-full max-w-md"
        style={{ backgroundColor: "#1A1A1A" }} 
      >
        <h1
          className="text-2xl font-bold text-center mb-6"
          style={{ color: "#FFFFFF" }} 
        >
          Login to Your Account
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              className="block mb-1 font-medium"
              style={{ color: "#9CA3AF" }} // text-secondary
            >
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={{
                width: "100%",
                borderRadius: "0.5rem",
                padding: "0.5rem 1rem",
                border: "1px solid #9CA3AF", // gray
                backgroundColor: "#2A2A2A", // bg-hover
                color: "#FFFFFF", // text-primary
              }}
            />
          </div>

          <div>
            <label
              className="block mb-1 font-medium"
              style={{ color: "#9CA3AF" }} // text-secondary
            >
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={{
                width: "100%",
                borderRadius: "0.5rem",
                padding: "0.5rem 1rem",
                border: "1px solid #9CA3AF", // gray
                backgroundColor: "#2A2A2A", // bg-hover
                color: "#FFFFFF", // text-primary
              }}
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "0.5rem 1rem",
                borderRadius: "0.5rem",
                backgroundColor: "#00D1D1", // teal
                color: "#FFFFFF", // text-primary
                fontWeight: 500,
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#00B8B8") // teal-dark
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#00D1D1") // teal
              }
            >
              Login
            </button>
          </div>
        </form>

        <p
          className="text-center mt-6"
          style={{ color: "#9CA3AF" }} // text-secondary
        >
          Don’t have an account?{" "}
          <Link
            href="/auth/signup"
            style={{ color: "#FFD166", fontWeight: 600 }} // yellow accent
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
