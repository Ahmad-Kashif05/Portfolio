import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { initScrollReveal } from "./utils/scrollReveal";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Run after the initial paint so all sections exist in the DOM.
requestAnimationFrame(() => requestAnimationFrame(initScrollReveal));
