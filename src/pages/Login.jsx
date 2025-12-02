import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = () => {
    // ✅ DEMO AUTH (YOU CAN CONNECT BACKEND LATER)
    if (email && password) {
      localStorage.setItem("userAuth", JSON.stringify({ email }));
      navigate("/user/home"); // ✅ go to user panel
    } else {
      alert("Enter email & password");
    }
  };

  return (
    <div
      style={{
        maxWidth: 420,
        margin: "100px auto",
        padding: 40,
        borderRadius: 22,
        background: "rgba(255,255,255,0.18)",
        backdropFilter: "blur(15px)",
        boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      <h2 style={{ textAlign: "center", color: "#fff" }}>User Login</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={login}>Login</button>

      {/* ✅ FORGOT PASSWORD */}
      <Link
        to="/forgot-password"
        style={{
          textAlign: "center",
          marginTop: 8,
          color: "#fff",
          fontSize: 14,
          textDecoration: "underline",
        }}
      >
        Forgot Password?
      </Link>

      {/* ✅ REGISTER BUTTON */}
      <div style={{ textAlign: "center", marginTop: 10 }}>
        <span style={{ color: "#eee", fontSize: 14 }}>
          New user?{" "}
          <Link
            to="/register"
            style={{
              color: "#ff7a00",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Create Account
          </Link>
        </span>
      </div>
    </div>
  );
}
