import React from "react";
import { Animated } from "react-animated-css";
import { Waypoint } from "react-waypoint";

import "animate.css";

import { Autobind } from "../../utils/decorators";
import { age } from "../../utils/calculations";

type VisibilityState = {
  isVisibleImage: boolean;
  isVisibleWelcome: boolean;
};

export default class About extends React.Component<{}, VisibilityState> {
  state: VisibilityState = { isVisibleImage: false, isVisibleWelcome: false };

  render() {
    return (
      <section className="About" id="about">
        <Waypoint
          onEnter={() => this.handleWaypoint("image", true)}
          onLeave={() => this.handleWaypoint("image", false)}
        >
          <Animated
            className="box box--image"
            animationIn="fadeInLeft"
            animationOut="fadeOut"
            animationInDuration={1500}
            isVisible={this.state.isVisibleImage}
          >
            <div className="design-bg">
              <div className="img"></div>
            </div>
          </Animated>
        </Waypoint>
        <Waypoint
          onEnter={() => this.handleWaypoint("welcome", true)}
          onLeave={() => this.handleWaypoint("welcome", false)}
        >
          <Animated
            className="box box--description"
            animationIn="fadeInRight"
            animationOut="fadeOut"
            animationInDuration={1500}
            isVisible={this.state.isVisibleWelcome}
          >
            <header>
              <h4>Welcome &amp; Introduce</h4>
              <h5>Welcome</h5>
            </header>
            <h4>That's me:</h4>
            <div className="content">
              <section className="description">
                <h3>Hallo! Ich bin der Alex!</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores error ipsa ad cum. Error
                  dolore quae hic nulla natus nobis exercitationem eius temporibus quas totam quod repellendus, ratione
                  cum? Accusantium saepe tenetur, doloribus sint nisi incidunt laborum recusandae, vel itaque neque
                  molestias deserunt odio similique.
                </p>
              </section>
              <section className="contact">
                <div className="info">
                  <span>Name:</span>
                  <span>Alexander Böhm</span>
                </div>
                <div className="info">
                  <span>Alter:</span>
                  <span>{age(new Date(1982, 9, 21))}</span>
                </div>
                <div className="info">
                  <span>E-Mail:</span>
                  <span>
                    {
                      // TODO: Secure the mail adresse from spam bots.
                    }
                    <a href="mailto:ab@its-boehm.de" title="Schreib mir per E-Mail">
                      ab@its-boehm.de
                    </a>
                  </span>
                </div>
                <div className="info">
                  <span>Telefon:</span>
                  <span>
                    <a href="tel:+491608206654" title="Ruf mich einfach an">
                      +49 160 8206654
                    </a>
                  </span>
                </div>
                <div className="info">
                  <span>Job:</span>
                  <span>Freelancer</span>
                </div>
                <div className="info">
                  <span>Standort:</span>
                  <span>Neuwied, RLP</span>
                </div>
              </section>
              <section className="actions">
                <a href="#!" className="btn btn-primary-outline">
                  Download CV
                </a>
                <a href="#contact" className="btn btn-primary">
                  Beauftrage mich
                </a>
              </section>
            </div>
          </Animated>
        </Waypoint>
      </section>
    );
  }

  @Autobind
  private handleWaypoint(box: "image" | "welcome", isEntry: boolean) {
    if (box === "image") {
      this.setState({
        isVisibleImage: isEntry
      });
    } else {
      this.setState({
        isVisibleWelcome: isEntry
      });
    }
  }
}
