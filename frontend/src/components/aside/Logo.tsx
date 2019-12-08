import React from "react";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <h1 className="logo">
      <Link to="/">ITSB</Link>
    </h1>
  );
};

export default Logo;
