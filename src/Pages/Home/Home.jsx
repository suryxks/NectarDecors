import React, { useEffect} from "react";
import "./Home.css";
import {  HorizontalCard } from "../../components";
import { Link } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { useData } from "../../contexts/DataContext";
// import { useProducts } from "../../contexts/ProductContext";
import {getCategoriesService} from '../../services'
const Home = () => {
  const { categories, setCategories,products,dispatch,getProducts} = useData();
 
  useEffect(() => {
    getProducts()
    getCategories();
    
  }, []);
  const getCategories = async () => {
    try {
     const data= await getCategoriesService()
      setCategories([...data.categories]);
    } catch (err) {
      console.error(err);
    }
  };
  const featuredProdcts = products.filter((item) => item.featured === true)
  
  return (
    <div>
      <Toaster/>
      <section className="hero-sec">
        <div className="hero-txt">
          <h2 className="heading-lg text-center">
            Beautify your living space with
          </h2>
          <h2 className="heading-lg hero-brand text-center">Nectar Decors</h2>
          <Link to="/products" className="text-center">
            <button className="btn-cta">Shop now</button>
          </Link>
        </div>
      </section>
      <h1 className="heading-lg">Categories</h1>
      <section className="categories">
        {categories.map((category) => {
          let TYPE = "";
          if (category.categoryName == 'Plants') {
            TYPE = "CATEGORY_PLANTS";
          }
          if (category.categoryName == 'Wall decors') {
            TYPE = "CATEGORY_WALLDECOR";
          }
          if (category.categoryName == 'Clocks') {
            TYPE = "CATEGORY_CLOCKS";
          }
          if (category.categoryName == 'Wall shelves') {
            TYPE = "CATEGORY_WALLSHELVES";
          }
          return (
            <Link
              to='/products'
              key={category._id}
              className="category-link"
              onClick={() => {
                dispatch({ type: "CLEAR" })
                dispatch({ type: TYPE })
              }}>
            <div className="categories-card">
              <a href="">
                <img src={category.bannerImage} alt="plant" className="catrgory-image" />
              </a>
              <p className="text-md fw-semibold">
                {category.categoryName}
              </p>
            </div>
          </Link>)
        }
        )}
      </section>
      <h1 className="heading-xl text-center">Featured Products</h1>
      <section className="special">
        {featuredProdcts.map((product) => (
          <HorizontalCard
           product={product}
            key={product._id}
          />
        ))}
      </section>
    </div>
  );
};
export default Home;
