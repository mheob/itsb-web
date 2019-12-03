import React from "react";

import Aside from "./Aside/Aside";
import Navigation from "./MobileNavigation/Navigation";

const App: React.FC = () => {
  return (
    <div className="App">
      <Aside />
      <Navigation />
    </div>
  );
};

export default App;
