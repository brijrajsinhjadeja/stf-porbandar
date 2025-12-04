import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import './App.css';

import UserProtected from "./pages/UserProtected";
import UserLayout from "./layouts/UserLayout";

import AdminRoutes from "./admin/AdminRoutes";

export default function App() {
  return (
    <Routes>
      {/* ✅ FIRST PAGE = LOGIN */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* ✅ USER AUTH */}
    <Route path="/" element={<Navigate to="/login" replace />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/forgot-password" element={<ForgotPassword />} /> 
     
     {/* ✅ USER SIDE (PROTECTED + LAYOUT) */}
      <Route element={<UserProtected />}>
        <Route element={<UserLayout />}>
          <Route path="/user/home" element={<Home />} />
          <Route path="/user/about" element={<About />} />
          <Route path="/user/events" element={<Events />} />
          <Route path="/user/gallery" element={<Gallery />} />
          <Route path="/user/donate" element={<Donate />} />
          <Route path="/user/contact" element={<Contact />} />
          <Route path="/user/profile" element={<Profile />} />
        </Route>
      </Route>
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
      {/* ✅ ADMIN PANEL */}
      <Route path="/admin/*" element={<AdminRoutes />} />

      {/* ✅ FALLBACK */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

