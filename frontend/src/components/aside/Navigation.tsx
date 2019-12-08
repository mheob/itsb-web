import React from "react";
import { NavLink } from "react-router-dom";
import Scrollspy from "react-scrollspy";
import { HashLink } from "react-router-hash-link";

type pageState = {
  isHome: boolean;
};

const Navigation: React.FC = () => {
  return (
    <nav className="main-menu">
      <Scrollspy items={["home", "about", "services", "contact"]} currentClassName="active">
        <li>
          <HashLink to="/#home">Home</HashLink>
        </li>
        <li>
          <HashLink to="/#about">About</HashLink>
        </li>
        <li>
          <HashLink to="/#services">Services</HashLink>
        </li>
        <li>
          <HashLink to="/#contact">Contact</HashLink>
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
