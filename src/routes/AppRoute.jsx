import React, { Suspense } from "react";
import { Route } from "react-router-dom";

const AppRoute = ({ component: Component, path, history }) => {
  return (
    <Route
      path={path}
      history={history}
      render={(props) => (
        <Suspense fallback={""}>
          <Component {...props} />
        </Suspense>
      )}
    />
  );
};

export default AppRoute;
