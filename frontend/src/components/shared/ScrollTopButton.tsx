import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const ScrollTopButton: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  return (
    <Link className={`ScrollTopButton${isVisible ? " visible" : ""}`} to="/">
      <FontAwesomeIcon icon={faChevronUp} />
    </Link>
  );
};

export default ScrollTopButton;
