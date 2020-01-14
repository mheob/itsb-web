import React from "react";
import Carousel from "nuka-carousel";

import { testimonialData } from "./testimonial.data";
import Testimonial from "./Testimonial";
import SectionHeader from "../../shared/SectionHeader";

const Testimonials: React.FC = () => {
  return (
    <section className="Testimonials" id="testimonials">
      <div className="overlay" />

      <SectionHeader mainText="Was Kunden über meine Arbeit sagen" smallText="Kundenstimmen" bgText="Zitate" />

      <Carousel withoutControls enableKeyboardControls swiping wrapAround autoplay autoplayInterval={4000} speed={800}>
        {testimonialData.map((props, index) => {
          return (
            <Testimonial
              key={index}
              quote={props.quote}
              name={props.name}
              company={props.company}
              imgSource={props.imgSource}
            />
          );
        })}
      </Carousel>
    </section>
  );
};

export default Testimonials;
