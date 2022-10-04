import React,{ createContext, useContext, useReducer } from "react";
import { useData } from "./DataContext.jsx";
import { productsFilterReducer } from "../Reducers/productsFilterReducer";
import {
  filterByCategory,
  filterByRating,
  sortByPrice,
  filterByPrice
} from "../Utils";
const ProductContext = createContext();

export const ProductsProvider = ({ children }) => {
  const initialState = {
    category: {
      plants: false,
      wallDecor: false,
      clocks: false,
      wallShelves: false
    },
    rating: {
      fourStars: false,
      threeStars: false,
      twoStars: false,
      oneStar: false
    },
    price: {
      lowToHigh: false,
      highToLow: false
    },
    priceRangeSlider: 2500
  };
  const { products } = useData();
  const [filter, dispatch] = useReducer(productsFilterReducer, initialState);
  const filteredByPrice = filterByPrice(products, filter);
  const filterdByCategory = filterByCategory(filteredByPrice, filter);
  const filteredByRating = filterByRating(filterdByCategory, filter);

  const filterdProducts = sortByPrice(filteredByRating, filter);
  return (
    <ProductContext.Provider value={{ filter, dispatch, filterdProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
