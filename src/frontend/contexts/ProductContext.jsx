import { createContext, useContext, useReducer } from "react";
import { useData } from "./DataContext.jsx";
import { productsFilterReducer } from "../Reducers/productsFilterReducer";
import { filterByCategory } from "../Utils/filterByCategory";
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
    }
  };
  const { products } = useData();
  const [filter, dispatch] = useReducer(productsFilterReducer, initialState);
  const filterdByCategory = filterByCategory(products, filter);
  console.log(filterdByCategory, "from context", products, filter);
  return (
    <ProductContext.Provider
      value={{ filter, dispatch, products, filterdByCategory }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
