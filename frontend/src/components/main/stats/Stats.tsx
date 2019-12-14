import React from "react";

import { statData } from "./stat.data";
import Stat from "./Stat";
import SectionHeader from "../../shared/SectionHeader";
import GoNext from "../../shared/GoNext";

const Stats: React.FC = () => {
  return (
    <section className="Stats" id="stats">
      <SectionHeader mainText="Ein paar Zahlen über mich" smallText="Statistiken" bgText="Stats" />

      <section className="content">
        {statData.map((props, index) => {
          return (
            <Stat
              key={index}
              upperTitle={props.upperTitle}
              lowerTitle={props.lowerTitle}
              target={props.target}
              startAt={props.startAt}
              speed={props.speed}
              delay={props.delay}
              prefix={props.prefix}
              suffix={props.suffix}
            />
          );
        })}
      </section>

      <GoNext anchor="testimonials" text="Meinungen" />
    </section>
  );
};

export default Stats;
