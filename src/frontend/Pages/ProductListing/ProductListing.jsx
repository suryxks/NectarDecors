import React from "react";
import "./ProductListing.css";
import { Navbar } from "../../components";
import { useProducts } from "../../contexts/ProductContext";
import { ProductListingCard } from "../../components/ProductListingCard/ProductListingCard";
import { ProductFilters } from "./ProductFilters";

const ProductListing = () => {
  const { dispatch, filter, filterdProducts } = useProducts();

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
            />
          );
        })}
      </div>
    </div>
  );
};
export default ProductListing;
