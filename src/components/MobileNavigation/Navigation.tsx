import React from "react";

const toggleBodyClassHandler = () => {
  const className = "offcanvas";
  if (document.body.classList.contains(className)) {
    document.body.classList.remove(className);
  } else {
    document.body.classList.add(className);
  }
};

const Navigation: React.FC = () => {
  return (
    <a href="#!" className="nav-toggle" onClick={toggleBodyClassHandler}>
      <i />
    </a>
  );
};

export default Navigation;
