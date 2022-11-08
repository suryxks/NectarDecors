/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react'
import {render} from '@testing-library/react'
import {BrowserRouter as Router} from 'react-router-dom'
import {
  AuthProvider,
  DataProvider,
  CartProvider,
  WishListProvider,
} from './contexts'

const AllTheProviders = ({children}) => {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <WishListProvider>
            <DataProvider>
              {children}
            </DataProvider>
          </WishListProvider>
        </CartProvider>
      </AuthProvider>
    </Router>
  )
}

const appRender = (ui, options) =>render(ui, {wrapper: AllTheProviders, ...options})

export * from '@testing-library/react'
export {appRender}
