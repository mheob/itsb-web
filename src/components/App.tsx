import React from "react";

import Navigation from "./mobileNavigation/Navigation";
import Aside from "./aside/Aside";
import Main from "./main/Main";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Aside />
      <Main />
    </React.Fragment>
  );
};

export default App;
