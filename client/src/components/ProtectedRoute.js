import { Route, Redirect } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
import { useAuth } from "../context/auth";

function ProtectedRoute({ isAuth, component: Component, ...rest }) {
  const isAuthenticated = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        );
      }}
    />
  );
}

export default ProtectedRoute;
