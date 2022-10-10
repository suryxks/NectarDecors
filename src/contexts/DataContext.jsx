/* eslint-disable react/prop-types */
import React, {createContext, useState, useContext, useReducer} from 'react'
import {getproductsService} from '../services'
import {productsFilterReducer} from '../Reducers/productsFilterReducer'
import {
  filterByCategory,
  filterByRating,
  sortByPrice,
  filterByPrice,
} from '../Utils'
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
  // useEffect(() => {
  //   getProducts();
  // }, []);
  const filteredByPrice = filterByPrice(products, filter)
  const filterdByCategory = filterByCategory(filteredByPrice, filter)
  const filteredByRating = filterByRating(filterdByCategory, filter)

  const filterdProducts = sortByPrice(filteredByRating, filter)
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
        filterdProducts,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
const useData = () => useContext(DataContext)

export {DataProvider, useData}
