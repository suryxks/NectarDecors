import { createContext, useState, useContext, useEffect } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [featured, setFeatured] = useState([]);
    const [products,setProducts]=useState([]);
    const [err,setErr]=useState('');
    useEffect(() => {
        (async () => {
           try{
            const { data: categoriesdata } = await axios.get("/api/categories");

            setCategories(categoriesdata.categories);
            const { data: productsData } = await axios.get("/api/products");
            setProducts(productsData);
            setFeatured(productsData.products.filter((item) => item.featured === true));
           }catch(e){
                 setErr(e);  
           }
        })();
    }, []);

    return (
        <DataContext.Provider value={{categories,featured,products}}>
            {children}
        </DataContext.Provider>
    )
}
const useData=()=>useContext(DataContext);

export {DataProvider,useData};