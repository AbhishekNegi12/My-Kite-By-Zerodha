import React from "react";
import { Navigate } from "react-router-dom";

// This is a simple example. In a real app, check auth state or token validity.
const isAuthenticated = () => {
  // Example: check for a token in localStorage
  return !!localStorage.getItem("token");
};

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
