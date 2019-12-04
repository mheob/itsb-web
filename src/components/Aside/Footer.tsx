import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

// TODO: Refactor the li elements to its own component.

const Header: React.FC = () => {
  return (
    <footer className="footer">
      <p>Copyright &copy; 2019 All rights reserved</p>
      <ul>
        <li>
          <a href="#!">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
        </li>
        <li>
          <a href="#!">
            <FontAwesomeIcon icon={faTwitterSquare} />
          </a>
        </li>
        <li>
          <a href="#!">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li>
          <a href="#!">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Header;
