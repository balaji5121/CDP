import React from "react";
import { Redirect, Route } from "react-router-dom";

export const ProtectedRoute = (props: any) => {
  const cookie = localStorage.getItem("token");

  if (cookie) {
    return <Route {...props} />;
  }
  return <Redirect to="/login" />;
};
