import React from "react";

import Footer from "./Footer";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Container: React.FC = () => {
  return (
    <aside className="Aside">
      <Logo />
      <Navigation />
      <hr />
      <Footer />
    </aside>
  );
};

export default Container;
