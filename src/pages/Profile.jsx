import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");

    if (!storedUser) {
      alert("Session expired. Please login again.");
      localStorage.removeItem("userAuth");
      navigate("/login");
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("userAuth");
    localStorage.removeItem("userData");
    navigate("/login");
  };

  if (!user) return null;

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>My Profile</h2>

        <div style={styles.row}><b>Full Name:</b> {user.name}</div>
        <div style={styles.row}><b>Email:</b> {user.email}</div>
        <div style={styles.row}><b>Phone:</b> {user.phone}</div>
        <div style={styles.row}><b>Address:</b> {user.address}</div>
        <div style={styles.row}><b>City:</b> {user.city}</div>
        <div style={styles.row}><b>Pincode:</b> {user.pincode}</div>
        <div style={styles.row}><b>Gender:</b> {user.gender}</div>

        <button onClick={logout} style={styles.logoutBtn}>
          Logout
        </button>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(120deg,#ff7a18,#2196f3,#2ecc71)",
    padding: "30px",
  },
  card: {
    background: "white",
    padding: "40px",
    borderRadius: "20px",
    width: "100%",
    maxWidth: "450px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
  },
  title: {
    textAlign: "center",
    marginBottom: "25px",
    color: "#2196f3",
  },
  row: {
    marginBottom: "12px",
    fontSize: "16px",
    borderBottom: "1px dashed #ddd",
    paddingBottom: "6px",
  },
  logoutBtn: {
    marginTop: "25px",
    width: "100%",
    padding: "12px",
    borderRadius: "30px",
    border: "none",
    fontSize: "18px",
    color: "white",
    cursor: "pointer",
    background: "linear-gradient(120deg,#ff7a18,#e74c3c)",
  },
};
