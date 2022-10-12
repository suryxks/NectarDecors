/* eslint-disable react/prop-types */
import React, {createContext, useState, useContext, useReducer} from 'react'
import {getproductsService} from '../services'
import {productsFilterReducer} from '../Reducers/productsFilterReducer'

const DataContext = createContext()

const DataProvider = ({children}) => {
  const initialFilterState = {
    category: {
      plants: false,
      wallDecor: false,
      clocks: false,
      wallShelves: false,
    },
    rating: {
      fourStars: false,
      threeStars: false,
      twoStars: false,
      oneStar: false,
    },
    price: {
      lowToHigh: false,
      highToLow: false,
    },
    priceRangeSlider: 2500,
  }
  const [filter, dispatch] = useReducer(
    productsFilterReducer,
    initialFilterState,
  )
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  
  const getProducts = async () => {
    try {
      const data = await getproductsService()
      setProducts(data.products)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <DataContext.Provider
      value={{
        filter,
        dispatch,
        categories,
        setCategories,
        setProducts,
        products,
        getProducts,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
const useData = () => useContext(DataContext)

export {DataProvider, useData}
