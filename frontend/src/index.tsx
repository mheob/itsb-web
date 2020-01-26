import React from "react";
import ReactDOM from "react-dom";
import TagManager from "react-gtm-module";
import { HelmetProvider } from "react-helmet-async";

import * as serviceWorker from "./serviceWorker";
import "./styles/css/index.css";
import App from "./components/App";

TagManager.initialize({
  gtmId: process.env.REACT_APP_GTM_ID!,
  auth: process.env.REACT_APP_GTM_AUTH,
  preview: process.env.REACT_APP_GTM_PREVIEW
});

ReactDOM.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>,
  document.getElementById("root")
);

serviceWorker.register();
