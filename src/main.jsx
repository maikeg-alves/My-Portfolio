import React from "react";
import ReactDOM from "react-dom/client";
import './fonts/malgunGothic.ttf';
import "./index.css";
import './components/themes/responsive.css'
import App from "./App";  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
