/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react'
import {render} from '@testing-library/react'
import {BrowserRouter as Router} from 'react-router-dom'
import {
  AuthProvider,
  DataProvider,
  ProductsProvider,
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
              <ProductsProvider>{children}</ProductsProvider>
            </DataProvider>
          </WishListProvider>
        </CartProvider>
      </AuthProvider>
    </Router>
  )
}
// export const createRouterWrapper = (history) => ({ children }) => (
// <Router history={history}>{children}</Router>
// );
const appRender = (ui, options) =>
  render(ui, {wrapper: AllTheProviders, ...options})

export * from '@testing-library/react'
export {appRender}
