import React from "react";

import Hero from "./Hero";
import About from "./About";

const Main: React.FC = () => {
  return (
    <main className="Main">
      <Hero />
      <About />
    </main>
  );
};

export default Main;
