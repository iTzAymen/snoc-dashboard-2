import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { checkAuthority } from "../js/Login";

const ProtectedRoute = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkUserToken = () => {
    if (!checkAuthority()) {
      setIsLoggedIn(false);
      window.location.href = "/login";
    }
    setIsLoggedIn(true);
  };
  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);
  return <React.Fragment>{isLoggedIn ? props.children : null}</React.Fragment>;
};
export default ProtectedRoute;
