import React from "react";

import Navigation from "./mobileNavigation/Navigation";
import Aside from "./aside/Aside";
import Main from "./main/Main";

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
