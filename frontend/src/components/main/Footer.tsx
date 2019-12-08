import React from "react";

import { socialData } from "../shared/social.data";
import Social from "../shared/Social";

const Footer: React.FC = () => {
  return (
    <footer className="Footer">
      <p className="logo">
        <a href="/">ITSB</a>
      </p>
      <Social links={socialData.links.map((link, _) => link)} />
      <p className="legal">
        <a href="#!">Impressum</a>
        <span> | </span>
        <a href="#!">Datenschutz</a>
      </p>
      <p className="copyright">Copyright &copy; {new Date().getFullYear()} All rights reserved</p>
    </footer>
  );
};

export default Footer;
