import { NotFound, PrivateRoute, RedirectRoute } from "components/common";
import { Route, Switch } from "react-router-dom";
import React, { Suspense } from "react";

const LoginPage = React.lazy(() => import("features/auth/pages/login-page.component"));
const AdminPage = React.lazy(() => import("features/admin/admin-page.component"));

const App: React.FC = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <RedirectRoute to="/admin" />
        </Route>

        <Route path="/login">
          <Suspense fallback={<div>Loading...</div>}>
            <LoginPage />
          </Suspense>
        </Route>

        <PrivateRoute path="/admin">
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPage />
          </Suspense>
        </PrivateRoute>

        <PrivateRoute path="*">
          <NotFound />
        </PrivateRoute>
      </Switch>
    </>
  );
};

export default App;
