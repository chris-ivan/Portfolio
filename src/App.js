import "./App.scss";
import AppRoute from "./routes/AppRoute";
// import { AnimatePresence } from "framer-motion";
import { routes } from "./routes/routes";
import {
  // BrowserRouter as Router,
  Switch,
  Redirect,
  useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./pages/Template/_setup.scss";
import { Navbar } from "./components/Navbar/Navbar";
import { SocialMedia } from "./components/SocialMedia/SocialMedia";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {/* <Router> */}
      <Navbar />
      <SocialMedia />
      {/* <AnimatePresence> */}
      <Switch location={location} key={location.pathname}>
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
      {/* </AnimatePresence> */}
      {/* </Router> */}
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
