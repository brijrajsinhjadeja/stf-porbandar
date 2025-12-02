import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        background: "linear-gradient(90deg, #ff7a00, #0f4c81, #1fbf75)",
        padding: "14px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "white",
      }}
    >
      <h2 style={{ margin: 0, fontWeight: "700" }}>Seva Trust Foundation</h2>

      <div style={{ display: "flex", gap: 20 }}>
        <Link to="/user/home" style={{ color: "white" }}>Home</Link>
        <Link to="/user/about" style={{ color: "white" }}>About</Link>
        <Link to="/user/events" style={{ color: "white" }}>Events</Link>
        <Link to="/user/gallery" style={{ color: "white" }}>Gallery</Link>
        <Link to="/user/donate" style={{ color: "white" }}>Donate</Link>
        <Link to="/user/contact" style={{ color: "white" }}>Contact</Link>
        <Link to="/user/profile" style={{ color: "white" }}>Profile</Link>
      </div>
    </nav>
  );
}
