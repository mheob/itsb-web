import React, { useEffect } from "react";
import { useMatomo } from "@datapunt/matomo-tracker-react";

import Hero from "./hero/Hero";
import About from "./about/About";
import Services from "./services/Services";
import Stats from "./stats/Stats";
import Testimonials from "./testimonials/Testimonials";
import Contact from "./contact/Contact";
import Footer from "../shared/Footer";

const Home: React.FC = () => {
  const { trackPageView } = useMatomo();

  useEffect(() => {
    if (!window._paq) {
      window._paq.push(["disableCookies"]);
    }
    trackPageView({});
  }, [trackPageView]);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
