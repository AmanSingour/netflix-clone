import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

import { _routes } from "../utils/data";

//* ALL PUBLIC ROUTES RENDER FROM HERE...

export const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const user = useSelector((state) => state.user);

  const loggedIn = user ? user.loggedIn : false;

  return (
    //? IF USER LOGGED IN AND SOME ONE TRY TO
    //? LOGIN AGAIN IT WILL REDIRECT T0 LOGIN PAGE

    <Route
      {...rest}
      render={(props) =>
        loggedIn && restricted ? (
          <Redirect to={_routes.DASHBOARD} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
