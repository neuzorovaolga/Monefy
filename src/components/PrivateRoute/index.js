import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUser } from "../../redux/user/selectors";

export const PrivateRoute = ({ children }) => {
  const user = useSelector(getUser);
  return user ? children : <Navigate to="/" />;
};
