import React, { useState } from "react";
import { Animated } from "react-animated-css";
import { Waypoint } from "react-waypoint";

import "animate.css";

import Description from "./about/Description";
import Contact from "./about/Contact";
import Actions from "./about/Actions";
import GoNext from "../shared/GoNext";
import SectionHeader from "../shared/SectionHeader";

type VisibilityState = {
  isVisibleImage: boolean;
  isVisibleWelcome: boolean;
};

const About: React.FC = () => {
  const [visibility, setVisibility] = useState<VisibilityState>({ isVisibleImage: false, isVisibleWelcome: false });

  const handleWaypoint = (box: "image" | "welcome", isEntry: boolean) => {
    if (box === "image") {
      setVisibility({ isVisibleImage: isEntry, isVisibleWelcome: visibility.isVisibleWelcome });
    } else {
      setVisibility({ isVisibleImage: visibility.isVisibleImage, isVisibleWelcome: isEntry });
    }
  };

  return (
    <section className="About" id="about">
      <Waypoint onEnter={handleWaypoint.bind(null, "image", true)} onLeave={handleWaypoint.bind(null, "image", false)}>
        <Animated
          className="box box--image"
          animationIn="fadeInLeft"
          animationOut="fadeOut"
          animationInDuration={1500}
          isVisible={visibility.isVisibleImage}
        >
          <div className="design-bg">
            <div className="img"></div>
          </div>
        </Animated>
      </Waypoint>

      <Waypoint
        onEnter={handleWaypoint.bind(null, "welcome", true)}
        onLeave={handleWaypoint.bind(null, "welcome", false)}
      >
        <Animated
          className="box box--description"
          animationIn="fadeInRight"
          animationOut="fadeOut"
          animationInDuration={1500}
          isVisible={visibility.isVisibleWelcome}
        >
          <SectionHeader mainText="That's me" smallText="Welcome &amp; Introduce" bgText="Welcome" />
          <div className="content">
            <Description />
            <Contact />
            <Actions />
          </div>
        </Animated>
      </Waypoint>

      <GoNext anchor="services" text="Services" />
    </section>
  );
};

export default About;
