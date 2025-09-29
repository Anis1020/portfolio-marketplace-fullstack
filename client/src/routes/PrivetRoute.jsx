import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) return <h2>Thinking.....</h2>;
  if (user) return children;

  return <Navigate state={location.pathname} to={"/login"} replace={true} />;
};

export default PrivetRoute;
