import React from "react";

import { TestimonialModel } from "./testimonial.model";

const Testimonial: React.FC<TestimonialModel> = props => {
  return (
    <>
      <img src={process.env.PUBLIC_URL + "/images/" + props.imgSource} alt={`${props.name} - ${props.company}`} />
      <div className="quote">
        <span>&bdquo;</span>
        {" " + props.quote + " "}
        <span>&ldquo;</span>
      </div>
      <div className="cite-holder">
        <span className="name">{props.name}</span>
        <span className="company">{props.company}</span>
      </div>
    </>
  );
};

export default Testimonial;
