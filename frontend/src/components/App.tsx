import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Navigation from "./mobileNavigation/Navigation";
import Aside from "./aside/Aside";
import Home from "./main/Home";
import Impress from "./main/Impress";
import Privacy from "./main/Privacy";
import ScrollToTop from "./shared/ScrollToTop";

const App: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <Aside />
      <ScrollToTop>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/impressum" exact>
            <Impress />
          </Route>
          <Route path="/datenschutz" exact>
            <Privacy />
          </Route>
          <Redirect to="/" />
        </Switch>
      </ScrollToTop>
    </Router>
  );
};

export default App;
