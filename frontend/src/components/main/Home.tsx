import React, { useEffect } from "react";
import { useMatomo } from "@datapunt/matomo-tracker-react";

import Hero from "./hero/Hero";
import About from "./about/About";
import Services from "./services/Services";
import Stats from "./stats/Stats";
import Testimonials from "./testimonials/Testimonials";
import Contact from "./contact/Contact";
import Seo from "../shared/Seo";
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
      <Seo
        title="IT Service Böhm >> Dein Partner rund ums Web aus Neuwied"
        description="IT Service Böhm >> Alexander Böhm aus Neuwied stellt sich und seine Arbeit rund um Web Design, SEO und Web Development vor."
        url="https://its-boehm.de"
        og={{ image: "https://its-boehm.de/images/itsb-boehm-alexander-bg.jpg", type: "website" }}
      />
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
