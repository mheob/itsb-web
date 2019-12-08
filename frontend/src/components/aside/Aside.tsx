import React from "react";

import Footer from "./Footer";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Aside: React.FC = () => {
  return (
    <aside className="Aside">
      <Logo />
      <Navigation />
      <Footer />
    </aside>
  );
};

export default Aside;
