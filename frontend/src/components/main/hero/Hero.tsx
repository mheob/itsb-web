import { FC } from 'react';
import Typed from 'react-typed';

const Hero: FC = () => {
  return (
    <section className="Hero" id="home">
      <a className="btn btn-primary-outline" href="#contact">
        Let's talk
      </a>

      <div className="content">
        <div className="overlay"></div>

        <header>
          <h1>IT Service Böhm</h1>
          <h2>
            <Typed
              strings={[
                'Neuer Webauftritt benötigt?',
                'Alter Webauftritt ist nicht mehr zeitgemäß?',
                'Interaktive Webapplikation gefällig?',
                'Google zeigt nur die Konkurrenz?',
              ]}
              typeSpeed={50}
              backSpeed={25}
              loop
            />
          </h2>
        </header>
      </div>
    </section>
  );
};

export default Hero;
