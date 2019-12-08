import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Navigation from "./mobileNavigation/Navigation";
import Aside from "./aside/Aside";
import Main from "./main/Main";

const App: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <Aside />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/impressum" exact>
          <Main />
        </Route>
        <Route path="/datenschutz" exact>
          <Main />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
