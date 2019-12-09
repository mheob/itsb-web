import React from "react";
import { NavLink } from "react-router-dom";
import Scrollspy from "react-scrollspy";
import { HashLink } from "react-router-hash-link";

const Navigation: React.FC = () => {
  return (
    <nav className="main-menu">
      <Scrollspy items={["home", "about", "services", "contact"]} currentClassName="active">
        <li>
          <HashLink to="/#root">Home</HashLink>
        </li>
        <li>
          <HashLink to="/#about">That's me</HashLink>
        </li>
        <li>
          <HashLink to="/#services">Angebot</HashLink>
        </li>
        <li>
          <HashLink to="/#contact">Kontakt</HashLink>
        </li>
        <hr />
        <li>
          <NavLink to="/impressum">Impressum</NavLink>
        </li>
        <li>
          <NavLink to="/datenschutz">Datenschutz</NavLink>
        </li>
      </Scrollspy>
    </nav>
  );
};

export default Navigation;
