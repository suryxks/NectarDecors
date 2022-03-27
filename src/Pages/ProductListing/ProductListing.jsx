import React from "react";
import "./ProductListing.css";
import { Navbar } from "../../components";
import { useProducts } from "../../contexts/ProductContext";
import { ProductListingCard } from "../../components/ProductListingCard/ProductListingCard";
import { ProductFilters } from "./ProductFilters";
import { useCart } from "../../contexts/CartContext";
import toast, { Toaster } from 'react-hot-toast';
const ProductListing = () => {
  const { dispatch, filter, filterdProducts } = useProducts();
  const {cart,addToCart}=useCart();
   const token= JSON.parse(localStorage.getItem('token'));
   
  return (
    <div className="products-page">
      <Navbar className="nav-bar" />
      <ProductFilters
        className="filters"
        filterValues={filter}
        dispatch={dispatch}
      />

      <div className="product-listing">
        {filterdProducts.map((product) => {
          const {
            _id,
            title,
            description,
            price,
            categoryName,
            discount,
            Stockquantity,
            featured,
            imageUrl,
            rating,
            Originalprice
          } = product;
          const addProductToCart=()=>{
              addToCart(token,product)
              console.log(product)
          }
          return (
            <ProductListingCard
              _id={_id}
              imageUrl={imageUrl}
              title={title}
              price={price}
              discount={discount}
              description={description}
              Originalprice={Originalprice}
              rating={rating}
              product={product}
              onAddtocart={addProductToCart}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ProductListing;
