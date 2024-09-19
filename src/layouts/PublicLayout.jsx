import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const PublicLayout = () => {
  const { isAuthenticated } = useContext(AppContext);

  return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};

export default PublicLayout;
