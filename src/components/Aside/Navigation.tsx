import React from "react";

const Navigation: React.FC = () => {
  return (
    <nav className="main-menu">
      <ul>
        <li className="active">
          {/* TODO: Set ACTIVE class dynamic */}
          <a href="#banner">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
