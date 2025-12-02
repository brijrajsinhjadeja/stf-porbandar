import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
  if (localStorage.getItem("adminAuth")) {
    navigate("/admin/dashboard");
  }
},[]);

  const handleLogin = (e) => {
    e.preventDefault();

    // TEMP LOGIN (we'll secure with backend later)
    if (email === "admin@seva.com" && password === "123456") {
      localStorage.setItem("adminAuth", "true");
      navigate("/admin/dashboard");
    } else {
      alert("Invalid Admin Credentials");
    }
  };

  return (
    <div className="section">
      <h2 className="section-title">Admin Login</h2>

      <div className="form-box">
        <input
          type="email"
          placeholder="Admin Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
