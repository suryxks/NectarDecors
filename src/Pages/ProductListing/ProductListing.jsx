import React from "react";
import "./ProductListing.css";
import { Navbar } from "../../components";
import { useProducts } from "../../contexts/ProductContext";
import { ProductListingCard } from "../../components/ProductListingCard/ProductListingCard";
import { ProductFilters } from "./ProductFilters";
import { useCart } from "../../contexts/CartContext";
import toast, { Toaster } from "react-hot-toast";
const ProductListing = () => {
  const { dispatch, filter, filterdProducts } = useProducts();
  const {  addToCart } = useCart();
  const token = JSON.parse(localStorage.getItem("token"));

  return (
    <div className="products-page">
      <Navbar className="nav-bar" />
      <ProductFilters
        className="filters"
        filterValues={filter}
        dispatch={dispatch}
      />
      <Toaster />
      <div className="products-container">
        <div className="products-header">
          <h3 className="products-count">{`${filterdProducts.length} Items`}</h3>
          <form className="sort-form">
            <h3>Sort By Price</h3>
            <select
              name="sort"
              id="sort"
              className="sort-select"
              onChange={(event) => {
                if (event.target.value === "High to Low") {
                  dispatch({ type: "PRICE_HIGH_TO_LOW" });
                }
                if (event.target.value === "Low to High") {
                  dispatch({ type: "PRICE_LOW_TO_HIGH" });
                }
              }}
            >
              <option value={""}>--Sort By--</option>
              <option value={"Low to High"}>Low to high</option>
              <option value={"High to Low"}>High to Low</option>
            </select>
          </form>
        </div>
        <div className="product-listing">
          {filterdProducts.map((product) => {
            const {
              _id,
              title,
              description,
              price,
              discount,
              imageUrl,
              rating,
              Originalprice,
            } = product;
            const addProductToCart = () => {
              addToCart(token, product);
              toast.success("Item added to Cart");
            };
            return (
              <ProductListingCard
                _id={_id}
                key={_id}
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
    </div>
  );
};
export default ProductListing;
