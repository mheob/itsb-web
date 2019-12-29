import React from "react";
import ReactDOM from "react-dom";
import { MatomoProvider, createInstance } from "@datapunt/matomo-tracker-react";
import { HelmetProvider } from "react-helmet-async";

import "./styles/css/index.css";
import App from "./components/App";
import Seo from "./components/shared/Seo";

ReactDOM.render(
  <MatomoProvider value={createInstance({ urlBase: "https://stats.its-boehm.de/", siteId: 1 })}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </MatomoProvider>,
  document.getElementById("root")
);
