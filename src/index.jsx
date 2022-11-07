import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReaduxProvider } from "react-redux";
import App from "./App";
import store from "./store";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReaduxProvider store={store}>
      <App />
    </ReaduxProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
