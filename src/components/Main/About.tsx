import React from "react";
import { Animated } from "react-animated-css";
import { Waypoint } from "react-waypoint";

import "animate.css";

import { Autobind } from "../../utils/Decorators";

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
            className="box"
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
            className="box"
            animationIn="fadeInRight"
            animationOut="fadeOut"
            animationInDuration={1500}
            isVisible={this.state.isVisibleWelcome}
          >
            <div className="welcome"></div>
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
