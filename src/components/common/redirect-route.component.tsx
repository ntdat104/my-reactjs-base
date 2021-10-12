import React from "react";
import { Redirect, RedirectProps } from "react-router-dom";

const RedirectRoute: React.FC<RedirectProps> = (props) => {
  const isLoggedIn = Boolean(localStorage.getItem("access_token"));
  if (!isLoggedIn) return <Redirect to="/login" />;

  return <Redirect {...props} />;
};

export default RedirectRoute;
