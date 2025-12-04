import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    dob: "",
    gender: "",
    city: "",
    state: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const registerUser = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const alreadyExists = users.find((u) => u.email === form.email);
    if (alreadyExists) {
      alert("User already registered with this email!");
      return;
    }

    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));

    localStorage.setItem("userAuth", "true");
    localStorage.setItem("userData", JSON.stringify(form));
    alert("Registration Successful!");
    navigate("/login");
  };

  return (
    <div style={container}>
      <div style={card}>
        <h2>User Registration</h2>

        <input name="name" placeholder="Full Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        <input name="phone" placeholder="Phone Number" onChange={handleChange} />
        <input name="address" placeholder="Address" onChange={handleChange} />
        <input name="dob" type="date" onChange={handleChange} />

        <select name="gender" onChange={handleChange}>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <input name="city" placeholder="City" onChange={handleChange} />
        <input name="state" placeholder="State" onChange={handleChange} />

        <button onClick={registerUser}>Register</button>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

/* ✅ STYLES */
const container = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #ff9800, #2196f3, #4caf50)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const card = {
  background: "#fff",
  padding: "30px",
  width: "350px",
  borderRadius: "15px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
  display: "flex",
  flexDirection: "column",
  gap: "12px"
};
