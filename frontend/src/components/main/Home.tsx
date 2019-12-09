import React from "react";

import Hero from "./hero/Hero";
import About from "./about/About";
import Services from "./services/Services";
import Contact from "./contact/Contact";
import Footer from "../shared/Footer";

const Home: React.FC = () => {
  return (
    <main className="Main">
      <Hero />
      <About />
      <Services />
      {
        // TODO: Add the skills section
        // TODO: Add the testimonials section
      }
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
