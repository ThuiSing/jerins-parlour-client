import React from "react";
import { Navigate, useLocation } from "react-router-dom";
// import { Route, Redirect } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import loader from "../../Image_Icon/loader.gif";

const PrivateRoute = ({ children, redirectTo }) => {
  let location = useLocation();
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <div>
          <img src={loader} alt="loader" />
        </div>
      </div>
    );
  }

  if (user.email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
