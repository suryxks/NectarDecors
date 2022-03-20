import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App.js";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "../src/frontend/contexts/DataContext.jsx";
import { ProductsProvider } from "../src/frontend/contexts/ProductContext.jsx";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DataProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </DataProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);