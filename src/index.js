import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App.js";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "../src/contexts/DataContext.jsx";
import { ProductsProvider } from "../src/contexts/ProductContext.jsx";
import { AuthProvider } from "../src/contexts/AuthContext";
import { CartProvider } from "../src/contexts/CartContext";
import { WishListProvider } from "../src/contexts/WishListContext"
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <CartProvider>
          <WishListProvider>
            <DataProvider>
              <ProductsProvider>

                <App />

              </ProductsProvider>
            </DataProvider>
          </WishListProvider>
        </CartProvider>
      </AuthProvider>

    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
