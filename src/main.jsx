import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "hooks-for-redux";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
