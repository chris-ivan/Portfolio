import "./App.scss";
import "./pages/Template/_setup.scss";
import AppRoute from "./routes/AppRoute";
import { routes } from "./routes/routes";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map((route) => (
            <AppRoute
              exact
              path={route.path}
              key={route.path}
              component={route.component}
              afterLoggedIn={route.afterLoggedIn}
              redirect={route.redirect}
            />
          ))}
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
