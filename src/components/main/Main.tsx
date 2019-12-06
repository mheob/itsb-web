import React from "react";

import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

const Main: React.FC = () => {
  return (
    <main className="Main">
      <Hero />
      <About />
      {
        // TODO: Add the skills section
      }
      <Services />
      <Contact />
    </main>
  );
};

export default Main;
