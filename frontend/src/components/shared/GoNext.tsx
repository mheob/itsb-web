// TODO #43: Remove GoNext components because they do not work properly in Firefox.
import React from "react";

type GoNextProps = {
  anchor: string;
  text: string;
};

const GoNext: React.FC<GoNextProps> = ({ anchor, text }) => {
  return (
    <a className="go-next" href={`#${anchor}`}>
      <span>{text}</span>
      <span></span>
    </a>
  );
};

export default GoNext;
