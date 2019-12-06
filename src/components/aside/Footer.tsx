import React from "react";

import { socialData } from "../shared/social.data";
import Social from "../shared/Social";

const Header: React.FC = () => {
  return (
    <footer className="footer">
      <p>Copyright &copy; {new Date().getFullYear()} All rights reserved</p>
      <Social links={socialData.links.map((link, _) => link)} />
    </footer>
  );
};

export default Header;
