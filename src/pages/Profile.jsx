import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userAuth"));

  if (!user) {
    navigate("/login");
    return null;
  }

  const logout = () => {
  localStorage.removeItem("userAuth");
  navigate("/login");   // ✅ BACK TO LOGIN
};

  return (
    <div style={{ padding: 40 }}>
      <h2>User Profile</h2>
      <p><b>Name:</b> {user.name}</p>
      <p><b>Email:</b> {user.email}</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
}
