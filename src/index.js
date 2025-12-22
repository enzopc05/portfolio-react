import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { loadAnalytics } from "./utils/analytics";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Privacy-friendly analytics (Plausible/Umami) - only loads if REACT_APP_PLAUSIBLE_DOMAIN is set
loadAnalytics();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
