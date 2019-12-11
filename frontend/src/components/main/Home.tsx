import React from "react";

import Hero from "./hero/Hero";
import About from "./about/About";
import Services from "./services/Services";
import Contact from "./contact/Contact";
import Footer from "../shared/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      {
        // TODO: Add the skills/stats section. See issue #1.
        // TODO: Add the testimonials section. See issue #2.
      }
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
