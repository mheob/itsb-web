import { FC } from 'react';

import Hero from './hero/Hero';
import About from './about/About';
import Services from './services/Services';
import Stats from './stats/Stats';
import Testimonials from './testimonials/Testimonials';
import Contact from './contact/Contact';
import Seo from '../shared/Seo';
import Footer from '../shared/Footer';

const Home: FC = () => {
  return (
    <>
      <Seo
        title="IT Service Böhm >> Dein Partner rund ums Web aus Neuwied"
        // eslint-disable-next-line max-len
        description="Alexander Böhm aus Neuwied stellt sich und seine Arbeit rund um Web Design, SEO und Web Development vor."
        url="https://www.its-boehm.de"
        og={{
          image: 'https://www.its-boehm.de/images/itsb-boehm-alexander-bg.jpg',
          type: 'website',
        }}
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
