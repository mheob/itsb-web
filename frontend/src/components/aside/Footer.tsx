import React from "react";

import { socialData } from "../shared/social.data";
import Social from "../shared/Social";

const Header: React.FC = () => {
  return (
    <footer className="footer">
      <Social links={socialData.links.map((link, _) => link)} />
    </footer>
  );
};

export default Header;
