import React from "react";

import { toggleBodyClassHandler } from "../../utils/bodyHandler";

const Navigation: React.FC = () => {
  return (
    <a href="#!" className="nav-toggle" onClick={toggleBodyClassHandler.bind(null, "offcanvas")}>
      <i />
    </a>
  );
};

export default Navigation;
