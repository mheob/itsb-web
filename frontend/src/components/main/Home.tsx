import React from "react";

import Hero from "./hero/Hero";
import About from "./about/About";
import Services from "./services/Services";
import Stats from "./stats/Stats";
import Contact from "./contact/Contact";
import Footer from "../shared/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Stats />
      {
        // TODO: Add the testimonials section. See issue #2.
      }
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
