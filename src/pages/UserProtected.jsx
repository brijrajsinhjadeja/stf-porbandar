import { Navigate } from "react-router-dom";

export default function UserProtected({ children }) {
  const isUser = localStorage.getItem("userAuth");

  if (!isUser) return <Navigate to="/login" />;

  return children;
}
