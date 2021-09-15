import { NotFound, ProtectedRoute } from "components/common";
import LoginPage from "features/auth/pages/login-page.component";
import { Route, Switch, Redirect } from "react-router-dom";
import AdminPage from "features/admin/admin-page.component";

const App: React.FC = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/admin" />
        </Route>

        <Route path="/login">
          <LoginPage />
        </Route>

        <ProtectedRoute path="/admin">
          <AdminPage />
        </ProtectedRoute>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
};

export default App;
