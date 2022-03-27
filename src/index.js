import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App.js";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "../src/contexts/DataContext.jsx";
import { ProductsProvider } from "../src/contexts/ProductContext.jsx";
import { AuthProvider } from "../src/contexts/AuthContext";
import { CartProvider } from "../src/contexts/CartContext"
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <CartProvider>
          <DataProvider>
            <ProductsProvider>

              <App />

            </ProductsProvider>
          </DataProvider>
        </CartProvider>
      </AuthProvider>

    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
