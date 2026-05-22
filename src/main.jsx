import React from "react";
import ReactDOM from "react-dom/client";
import AOS from "aos";
import "aos/dist/aos.css";
import App from "./App";
import "./index.css";

AOS.init({
  duration: 900,
  once: false,
  offset: 80,
  easing: "ease-out-cubic"
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
