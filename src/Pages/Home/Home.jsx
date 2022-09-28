import React, { useEffect, useState } from "react";
import "./Home.css";
import { Navbar, HorizontalCard } from "../../components";
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { useData } from "../../contexts/DataContext";
import { useProducts } from "../../contexts/ProductContext";
const Home = () => {
  const [err, setErr] = useState("");
  const { categories, featured, setFeatured, setCategories } = useData();
  const { dispatch} = useProducts();
  useEffect(() => {
    getCategories();
    getFeatured();
  }, []);
  const getCategories = async () => {
    try {
      const { data: categoriesdata, status } = await axios.get(
        "/api/categories"
      );
      status === 200
        ? setCategories([...categoriesdata.categories])
        : setCategories([]);
    } catch (err) {
      setErr("server not responding");
    }
  };
  const getFeatured = async () => {
    try {
      const { data: productsData, status } = await axios.get("/api/products");

      status === 200
        ? setFeatured(
            productsData.products.filter((item) => item.featured === true)
          )
        : setFeatured([]);
    } catch (err) {
      setErr("server not responding");
    }
  };

  return (
    <div>
      <Navbar />
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
        {featured.map((product) => (
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
