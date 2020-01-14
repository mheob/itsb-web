import React from "react";
import ReactDOM from "react-dom";
import { MatomoProvider, createInstance } from "@datapunt/matomo-tracker-react";
import { HelmetProvider } from "react-helmet-async";

import "./styles/css/index.css";
import App from "./components/App";

ReactDOM.render(
  // TODO #42: Switch from Matomo to Google Analytics.
  <MatomoProvider value={createInstance({ urlBase: "https://stats.its-boehm.de/", siteId: 1 })}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </MatomoProvider>,
  document.getElementById("root")
);
