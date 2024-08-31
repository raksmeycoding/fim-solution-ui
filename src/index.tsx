import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client'
import App from "./App";
import "../src/components/css/sotoshi.css";
import "./index.css"; // Ensure this path matches your CSS file location
import "../src/components/css/fimstyle.css";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { Provider } from "react-redux";
import { store } from "./redux/app/store";
// Get the root element from the HTML
const container = document.getElementById("root");

// Create a root.
const root = ReactDOM.createRoot(container!);

// Initial render
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
