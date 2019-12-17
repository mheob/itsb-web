import React from "react";

import Footer from "./Footer";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Aside: React.FC = () => {
  return (
    <aside className="Aside">
      <div>
        <Logo />
        <Navigation />
      </div>
      <Footer />
    </aside>
  );
};

export default Aside;
