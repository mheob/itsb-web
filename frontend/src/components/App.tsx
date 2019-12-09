import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Navigation from "./mobileNavigation/Navigation";
import Aside from "./aside/Aside";
import Home from "./main/Home";
import Impress from "./main/Impress";
import Privacy from "./main/Privacy";
import ScrollToTop from "./shared/ScrollToTop";
import ScrollUpButton from "./shared/ScrollTopButton";
import { Waypoint } from "react-waypoint";

type ScrollUpButtonState = {
  isVisibleButton: boolean;
};

const App: React.FC = () => {
  const [visibility, setVisibility] = useState<ScrollUpButtonState>({ isVisibleButton: false });

  const scrollUpButtonHandler = (isEntered: boolean) => {
    setVisibility({ isVisibleButton: isEntered });
  };

  return (
    <Router>
      <Waypoint
        topOffset={-600}
        onEnter={scrollUpButtonHandler.bind(null, false)}
        onLeave={scrollUpButtonHandler.bind(null, true)}
      />
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
      <ScrollUpButton isVisible={visibility.isVisibleButton} />
    </Router>
  );
};

export default App;
