import { Routes, Route } from "react-router-dom";
import AdminLayout from "./AdminLayout";
import ProtectedRoute from "./ProtectedRoute";

import Login from "./Login";
import Dashboard from "./Dashboard";
import Members from "./Members";
import Events from "./Events";
import Gallery from "./Gallery";
import Donations from "./Donations";
import Volunteers from "./Volunteers";



export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/admin/*"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="members" element={<Members />} />
        <Route path="events" element={<Events />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="donations" element={<Donations />} />
        <Route path="volunteers" element={<Volunteers />} />
      </Route>
    </Routes>
  );
}
