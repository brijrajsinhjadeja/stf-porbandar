import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    alert("Invalid Email or Password");
    return;
  }

  // ✅ SAVE FULL USER OBJECT
localStorage.setItem("userAuth", "true");
localStorage.setItem("userData", JSON.stringify(user));
 const savedUser = JSON.parse(localStorage.getItem("userData"));
if (!savedUser) {
  alert("No account found. Please register.");
  navigate("/register");
  return;
}

navigate("/user/home");
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
