import React, { useEffect, useState } from "react";
import "./ProductListing.css";
import { Navbar } from "../../components";
import { useData } from "../../contexts/DataContext";
import axios from "axios";
import { ProductListingCard } from "../../components/ProductListingCard/ProductListingCard";
import { ProductFilters } from "./ProductFilters";
const ProductListing = () => {
  const [err, setErr] = useState("");
  const { products, setProducts } = useData();
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    try {
      const { data: productsData, status } = await axios.get("/api/products");

      status === 200
        ? setProducts([...productsData.products])
        : setProducts([]);
    } catch (err) {
      setErr("server not responding");
    }
  };
  return (
    <div className="products-page">
      <Navbar className="nav-bar" />
      <ProductFilters className="filters" />

      <div className="product-listing">
        {products.map((product) => {
          const {
            _id,
            title,
            description,
            price,
            categoryName,
            discount,
            Stockquantity,
            featured,
            imageUrl
          } = product;

          return (
            <ProductListingCard
              _id={_id}
              imageUrl={imageUrl}
              title={title}
              price={price}
              discount={discount}
              description={description}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ProductListing;
