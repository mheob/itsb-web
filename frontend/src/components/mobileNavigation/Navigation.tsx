import React from "react";

import { toggleBodyClassHandler } from "../../utils/domHandler";

const Navigation: React.FC = () => {
  return (
    <div className="nav-toggle" onClick={toggleBodyClassHandler.bind(null, "offcanvas")}>
      <i />
    </div>
  );
};

export default Navigation;
