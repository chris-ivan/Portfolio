import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import { Loading } from "../components/Loading/Loading";

const AppRoute = ({ component: Component, path }) => {
  return (
    <Route
      path={path}
      render={(props) => (
        <Suspense fallback={<Loading msg="Preparing the content..." />}>
          <Component {...props} />
        </Suspense>
      )}
    />
  );
};

export default AppRoute;
