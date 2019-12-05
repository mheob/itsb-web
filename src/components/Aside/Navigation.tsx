import React from "react";

import { removeBodyClassHandler } from "../../utils/bodyHandler";

// TODO: Refactor the li elements to its own component.
// TODO: Set the ACTIVE class dynamic

const Navigation: React.FC = () => {
  return (
    <nav className="main-menu">
      <ul>
        <li className="active">
          <a href="#hero" onClick={removeBodyClassHandler.bind(null, "offcanvas")}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={removeBodyClassHandler.bind(null, "offcanvas")}>
            About
          </a>
        </li>
        <li>
          <a href="#services" onClick={removeBodyClassHandler.bind(null, "offcanvas")}>
            Services
          </a>
        </li>
        <li>
          <a href="#contact" onClick={removeBodyClassHandler.bind(null, "offcanvas")}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
