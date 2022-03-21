import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [products, setProducts] = useState([]);
  const [err, setErr] = useState("");
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    try {
      const { data: productsData, status } = await axios.get("/api/products");

      status === 200
        ? setProducts([...productsData.products])
        : setProducts([]);
    } catch (err) {}
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
