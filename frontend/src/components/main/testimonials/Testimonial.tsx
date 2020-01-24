import React from "react";

import { TestimonialModel } from "./testimonial.model";

const Testimonial: React.FC<TestimonialModel> = props => {
  const imgPathWithOutExt = `${process.env.PUBLIC_URL}/images/${props.imgSource}`;

  return (
    <div className="Testimonial">
      <picture>
        <source srcSet={`${imgPathWithOutExt}.webp`} type="image/webp" />
        <source srcSet={`${imgPathWithOutExt}.jp2`} type="image/jp2" />
        <img src={`${imgPathWithOutExt}.jpg `} alt={`${props.name} - ${props.company}`} />
      </picture>
      <div className="quote">
        <span>&bdquo;</span>
        {" " + props.quote + " "}
        <span>&ldquo;</span>
      </div>
      <div className="cite-holder">
        <span className="name">{props.name}</span>
        <span className="company">{props.company}</span>
      </div>
    </div>
  );
};

export default Testimonial;
