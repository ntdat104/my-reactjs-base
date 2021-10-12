import NotFound from "components/common/not-found.component";
import PrivateRoute from "components/common/private-route.component";
import RedirectRoute from "components/common/redirect-route.component";
import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import "styles/globals.scss";

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
