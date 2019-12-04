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
      <section className="About">
        <Waypoint
          onEnter={() => this.handleWaypoint("image", true)}
          onLeave={() => this.handleWaypoint("image", false)}
        >
          <Animated
            className="column image-box"
            animationIn="fadeInLeft"
            animationOut="fadeOut"
            isVisible={this.state.isVisibleImage}
          >
            <div className="design-bg"></div>
          </Animated>
        </Waypoint>
        <Waypoint
          onEnter={() => this.handleWaypoint("welcome", true)}
          onLeave={() => this.handleWaypoint("welcome", false)}
        >
          <Animated
            className="column welcome-box"
            animationIn="fadeInRight"
            animationOut="fadeOut"
            isVisible={this.state.isVisibleWelcome}
          >
            <div></div>
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
