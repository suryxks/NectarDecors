import React, { useEffect, useState } from 'react';
import './Home.css';
import { Navbar, HorizontalCard } from '../../components';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useData } from '../../contexts/DataContext';
const Home = () => {
    // const [categories, setCategories] = useState([]);
    // const [featured, setFeatured] = useState([]);
    // useEffect(() => {
    //     (async () => {
    //         const { data: categoriesdata } = await axios.get("/api/categories");

    //         setCategories(categoriesdata.categories);
    //         const { data: productsData } = await axios.get("/api/products");
    //         setFeatured(
    //             productsData.products.filter((item) => item.featured === true)
    //         );
    //     })();
    // }, []);
  const {categories,featured}=useData();
    return (
        <div>
            <Navbar />
            <section className="hero-sec">
                <div className="hero-txt">
                    <h2 className="heading-lg text-center">Beautify your living space with</h2>
                    <h2 className="heading-lg hero-brand text-center">Nectar Decors</h2>
                    <Link to="/products" className="text-center"><button className="btn-cta">Shop now</button></Link>
                </div>

            </section>
            <h1 className='heading-lg'>Categories</h1>
            <section className="categories">
                {categories.map((category) => (
                    <div class="categories-card">
                        <a href="">
                            <img src={category.bannerImage} alt="plant" />
                        </a>
                        <p className="text-sm fw-semibold text-over">
                            {category.categoryName}
                        </p>
                    </div>
                ))}
            </section>
            <h1 class="heading-xl text-center">Featured Products</h1>
            <section class="special">
                {featured.map((product) => (
                    <HorizontalCard imageUrl={product.imageUrl} price={product.price} title={product.title} description={product.description} />
                ))}
            </section>
        </div>
    )
}
export default Home;