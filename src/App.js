import "./App.scss";
import AppRoute from "./routes/AppRoute";
import { routes } from "./routes/routes";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./pages/Template/_setup.scss";

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
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
