import React from "react";
import ReactDOM from "react-dom";
import { MatomoProvider, createInstance } from "@datapunt/matomo-tracker-react";

import "./styles/css/index.css";
import App from "./components/App";

const matomoInstance = createInstance({
  urlBase: "https://stats.its-boehm.de/",
  siteId: 3,
  trackerUrl: "https://stats.its-boehm.de/piwik.php",
  srcUrl: "https://stats.its-boehm.de/piwik.js"
});

ReactDOM.render(
  <MatomoProvider value={matomoInstance}>
    <App />
  </MatomoProvider>,
  document.getElementById("root")
);
