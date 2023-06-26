import React from "react";
import { Navigate, Route, RouteProps } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export const PrivateRoute = ({ ...props }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Route {...props} />;
};
