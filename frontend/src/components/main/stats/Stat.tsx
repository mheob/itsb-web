import React, { useState } from "react";
import CountUp from "react-countup";
import { Waypoint } from "react-waypoint";

import { StatModel } from "./stat.model";

type CounterState = {
  isFired: boolean;
};

const Stat: React.FC<StatModel> = props => {
  const [counterState, setCounterState] = useState<CounterState>({ isFired: false });

  const waypointEnterHandler = (start: () => void) => {
    if (!counterState.isFired) {
      start();
      setCounterState({ isFired: true });
    }
  };

  const waypointLeaveHandler = () => {
    if (!counterState.isFired) {
      setCounterState({ isFired: true });
    }
  };

  return (
    <div className="stat-item">
      <div className="upper-title">{props.upperTitle}</div>
      <CountUp
        end={props.target}
        start={props.startAt}
        duration={props.speed || 2.5}
        separator="."
        decimal=","
        delay={props.delay}
        prefix={props.prefix}
        suffix={props.suffix}
        onStart={() => {
          setCounterState({ isFired: true });
        }}
      >
        {({ countUpRef, start }) => (
          // TODO: Only run once
          <Waypoint onEnter={waypointEnterHandler.bind(null, start!)} onLeave={waypointLeaveHandler}>
            <div className="counter" ref={countUpRef} />
          </Waypoint>
        )}
      </CountUp>
      <div className="lower-title">{props.lowerTitle}</div>
    </div>
  );
};

export default Stat;
