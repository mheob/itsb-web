import React from "react";
import Scrollspy from "react-scrollspy";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

import { removeBodyClassHandler } from "../../utils/domHandler";

const Navigation: React.FC = () => {
  const clickHandler = () => {
    removeBodyClassHandler("offcanvas");
  };

  return (
    <nav className="main-menu">
      <Scrollspy items={["home", "about", "services", "contact"]} currentClassName="active">
        <li>
          <HashLink to="/#root" onClick={clickHandler}>
            Home
          </HashLink>
        </li>
        <li>
          <HashLink to="/#about" onClick={clickHandler}>
            That's me
          </HashLink>
        </li>
        <li>
          <HashLink to="/#services" onClick={clickHandler}>
            Angebot
          </HashLink>
        </li>
        <li>
          <HashLink to="/#stats" onClick={clickHandler}>
            Statistiken
          </HashLink>
        </li>
        <li>
          <HashLink to="/#contact" onClick={clickHandler}>
            Kontakt
          </HashLink>
        </li>
        <hr />
        <li>
          <NavLink to="/impressum" onClick={clickHandler}>
            Impressum
          </NavLink>
        </li>
        <li>
          <NavLink to="/datenschutz" onClick={clickHandler}>
            Datenschutz
          </NavLink>
        </li>
      </Scrollspy>
    </nav>
  );
};

export default Navigation;
