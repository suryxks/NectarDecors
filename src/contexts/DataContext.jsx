import React,{ createContext, useState, useContext, useEffect } from "react";
import { getproductsService } from "../services";
const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    try {
      const data = await getproductsService();
      setProducts(data.products);
    } catch (err) {
      console.error(err)
    }
  };

  return (
    <DataContext.Provider
      value={{
        categories,
        setCategories,
        setFeatured,
        setProducts,
        featured,
        products
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
const useData = () => useContext(DataContext);

export { DataProvider, useData };
