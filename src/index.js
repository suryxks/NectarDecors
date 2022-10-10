import React from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {App} from './App.js'
import {makeServer} from './server'
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from '../src/contexts/DataContext.jsx'
import {AuthProvider} from '../src/contexts/AuthContext'
import {CartProvider} from '../src/contexts/CartContext'
import {WishListProvider} from '../src/contexts/WishListContext'
// Call make Server
makeServer()
const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <CartProvider>
          <WishListProvider>
            <DataProvider>
              <App />
            </DataProvider>
          </WishListProvider>
        </CartProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
)
