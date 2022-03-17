import { createContext, useState, useContext, useEffect } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [featured, setFeatured] = useState([]);
    const [products,setProducts]=useState([]);
  

    return (
        <DataContext.Provider value={{categories,setCategories,setFeatured,setProducts,featured,products}}>
            {children}
        </DataContext.Provider>
    )
}
const useData=()=>useContext(DataContext);

export {DataProvider,useData};