import { Navigate, Outlet } from "react-router-dom";

export default function UserProtected() {
  const user = localStorage.getItem("userAuth");

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
