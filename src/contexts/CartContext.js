/* eslint-disable react/prop-types */
import React, {createContext, useContext, useState} from 'react'
import {getCartService, addToCartService,removeFromCartService,updataProductQuantityService} from '../services'
const CartContext = createContext(null)

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])

  const getCart = async token => {
    try {
      const data = await getCartService(token)
      return data.cart
    } catch (e) {
      console.error(e)
    }
  }

  const addToCart = async (token, product) => {
    try {
      const data = await addToCartService(token, product)
      setCart(data.cart)
    } catch (error) {
      console.log(error)
    }
  }
  const removeProduct = async (token, id) => {
    try {
        const data = await removeFromCartService(token, id); 
      setCart(data.cart)
    } catch (error) {
      console.error(error.message)
    }
  }
  const updateQuantityOfProduct = async (token, id, type) => {
    try {
        const data = await updataProductQuantityService(token, id, type);
      setCart(data.cart)
    } catch (error) {
        console.error(error);
    }
  }
  return (
    <CartContext.Provider
      value={{cart, addToCart, removeProduct, updateQuantityOfProduct, getCart}}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
