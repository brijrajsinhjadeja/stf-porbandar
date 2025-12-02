import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const register = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const alreadyExists = users.find((u) => u.email === form.email);
    if (alreadyExists) {
      return alert("User already registered");
    }

    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful");
    navigate("/login");
  };

  return (
    <div style={box}>
      <h2>User Registration</h2>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <button onClick={register}>Register</button>
    </div>
  );
}

const box = {
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
};
