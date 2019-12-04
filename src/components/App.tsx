import React from "react";

import Navigation from "./MobileNavigation/Navigation";
import Aside from "./Aside/Aside";
import Main from "./Main/Main";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigation />
      <Aside />
      <Main />
    </div>
  );
};

export default App;
