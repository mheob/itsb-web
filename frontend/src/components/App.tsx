import { FC, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Waypoint } from 'react-waypoint';
import Aside from './aside/Aside';
import Home from './main/Home';
import Impress from './main/Impress';
import Privacy from './main/Privacy';
import Navigation from './mobileNavigation/Navigation';
import ScrollUpButton from './shared/ScrollTopButton';
import Spinner from './shared/Spinner';

type ScrollUpButtonState = {
  isVisible: boolean;
};

type PreloaderState = boolean;

const App: FC = () => {
  const [scrollUpButtonState, setScrollUpButtonState] = useState<ScrollUpButtonState>({ isVisible: false });
  const [preloaderState, setPreloaderState] = useState<PreloaderState>(true);

  useEffect(() => {
    setPreloaderState(false);
  }, [preloaderState]);

  const scrollUpButtonHandler = (isEntered: boolean) => {
    setScrollUpButtonState({ isVisible: isEntered });
  };

  const routes = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/impressum', name: 'Impressum', Component: Impress },
    { path: '/datenschutz', name: 'Datenschutz', Component: Privacy },
  ];

  return (
    <Router>
      <Spinner preload={preloaderState} />
      <Waypoint
        topOffset={-1000}
        onEnter={scrollUpButtonHandler.bind(null, false)}
        onLeave={scrollUpButtonHandler.bind(null, true)}
      />
      <Navigation />
      <Aside />
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <>
                {/* {({ match }) => ( */}
                {/* <CSSTransition in={match != null} timeout={1200} classNames="Main" unmountOnExit> */}
                <section className="Main">
                  <Component />
                </section>
                {/* </CSSTransition> */}
                {/* )} */}
              </>
            }
          />
        ))}
        {/* <Navigate to="/" /> */}
      </Routes>
      <ScrollUpButton isVisible={scrollUpButtonState.isVisible} />
    </Router>
  );
};

export default App;
