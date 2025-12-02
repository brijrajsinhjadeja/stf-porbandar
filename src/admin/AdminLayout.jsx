import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function AdminLayout() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/admin");
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* ✅ SIDEBAR */}
      <aside
        style={{
          width: 260,
          background: "linear-gradient(180deg, #0f4c81, #1fbf75)",
          color: "white",
          padding: "30px 20px",
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          boxShadow: "4px 0 15px rgba(0,0,0,0.25)",
        }}
      >
        {/* LOGO / TITLE */}
        <h2
          style={{
            textAlign: "center",
            marginBottom: 40,
            fontWeight: "700",
            letterSpacing: 1,
          }}
        >
          Admin Panel
        </h2>

        {/* NAV LINKS */}
        <NavItem to="/admin/dashboard" label="📊 Dashboard" />
        <NavItem to="/admin/members" label="👥 Users" />
        <NavItem to="/admin/events" label="📅 Events" />
        <NavItem to="/admin/gallery" label="🖼 Gallery" />
        <NavItem to="/admin/donations" label="💰 Donations" />

        {/* PUSH LOGOUT TO BOTTOM */}
        <div style={{ flex: 1 }} />

        <button
          onClick={logout}
          style={{
            background: "linear-gradient(45deg, #ff7a00, #ff3d00)",
            border: "none",
            borderRadius: 10,
            padding: "12px",
            color: "white",
            fontWeight: 600,
            cursor: "pointer",
            marginTop: 20,
          }}
        >
          🔓 Logout
        </button>
      </aside>

      {/* ✅ MAIN CONTENT AREA */}
      <main
        style={{
          marginLeft: 260,
          flex: 1,
          padding: 30,
          background: "#f4f7fb",
          minHeight: "100vh",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}

/* ✅ STYLED NAV ITEM */
function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
         background: "white",
    padding: 30,
    borderRadius: 18,
    boxShadow: "0 12px 35px rgba(0,0,0,0.15)",
    animation: "fadeUp 0.5s ease",
        textDecoration: "none",
        fontWeight: 600,
        color: "white",
        background: isActive
          ? "rgba(255,255,255,0.25)"
          : "transparent",
        transition: "0.3s",
      })}
    >
      {label}
    </NavLink>
  );
}
