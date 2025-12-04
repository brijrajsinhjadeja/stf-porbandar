import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import UserProtected from "./pages/UserProtected";

import AdminRoutes from "./admin/AdminRoutes";

export default function App() {
  return (
    <Routes>
      {/* FIRST PAGE = LOGIN */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* AUTH */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* USER PANEL (PROTECTED) */}
      <Route
        path="/user/*"
        element={
          <UserProtected>
            <>
              <Navbar />
              <Routes>
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="events" element={<Events />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="donate" element={<Donate />} />
                <Route path="contact" element={<Contact />} />
                <Route path="profile" element={<Profile />} />
              </Routes>
              <Footer />
            </>
          </UserProtected>
        }
      />

      {/* ADMIN PANEL */}
      <Route path="/admin/*" element={<AdminRoutes />} />
    </Routes>
  );
}
