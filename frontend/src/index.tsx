import React from "react";
import ReactDOM from "react-dom";
import { MatomoProvider, createInstance } from "@datapunt/matomo-tracker-react";

import "./styles/css/index.css";
import App from "./components/App";

ReactDOM.render(
  <MatomoProvider value={createInstance({ urlBase: "https://stats.its-boehm.de/", siteId: 1 })}>
    <App />
  </MatomoProvider>,
  document.getElementById("root")
);
