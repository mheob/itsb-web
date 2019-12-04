import React from "react";
import Typed from "react-typed";

const Hero: React.FC = () => {
  return (
    <section className="Hero">
      <a className="btn btn-primary-outline" href="#contact">
        Let's talk
      </a>
      <a className="to-about" href="#about">
        <span>About me</span>
        <span></span>
      </a>
      <div className="content">
        <div className="overlay"></div>
        <header>
          <h1>IT Service Böhm</h1>
          <h2>
            <Typed
              strings={[
                "Ich erstelle für Sie Ihren Webauftritt",
                "Ich nutze dafür WordPress",
                "Sie entscheiden über den Umfang",
                "Nehmen Sie Kontakt mit mir auf"
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
