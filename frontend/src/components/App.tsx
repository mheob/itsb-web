import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Waypoint } from "react-waypoint";
import { CSSTransition } from "react-transition-group";

import Navigation from "./mobileNavigation/Navigation";
import Aside from "./aside/Aside";
import Home from "./main/Home";
import Impress from "./main/Impress";
import Privacy from "./main/Privacy";
import Spinner from "./shared/Spinner";
import ScrollToTop from "./shared/ScrollToTop";
import ScrollUpButton from "./shared/ScrollTopButton";

type ScrollUpButtonState = {
  isVisible: boolean;
};

type PreloaderState = boolean;

const App: React.FC = () => {
  const [scrollUpButtonState, setScrollUpButtonState] = useState<ScrollUpButtonState>({ isVisible: false });
  const [preloaderState, setPreloaderState] = useState<PreloaderState>(true);

  useEffect(() => {
    setTimeout(() => {
      setPreloaderState(false);
    }, 1000);
  }, [preloaderState]);

  const scrollUpButtonHandler = (isEntered: boolean) => {
    setScrollUpButtonState({ isVisible: isEntered });
  };

  const routes = [
    { path: "/", name: "Home", Component: Home },
    { path: "/impressum", name: "About", Component: Impress },
    { path: "/datenschutz", name: "Contact", Component: Privacy }
  ];

  return (
    <Router>
      <Spinner preload={preloaderState} />
      <Waypoint
        topOffset={-600}
        onEnter={scrollUpButtonHandler.bind(null, false)}
        onLeave={scrollUpButtonHandler.bind(null, true)}
      />
      <Navigation />
      <Aside />
      <ScrollToTop>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition in={match != null} timeout={1200} classNames="Main" unmountOnExit>
                <section className="Main">
                  <Component />
                </section>
              </CSSTransition>
            )}
          </Route>
        ))}
        <Redirect to="/" />
      </ScrollToTop>
      <ScrollUpButton isVisible={scrollUpButtonState.isVisible} />
    </Router>
  );
};

export default App;
