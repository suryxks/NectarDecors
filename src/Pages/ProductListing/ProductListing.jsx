import React, { useEffect } from "react";
import "./ProductListing.css";
import {useCart,useWishList, useData} from "../../contexts"
import { ProductListingCard } from "../../components/ProductListingCard/ProductListingCard";
import { ProductFilters } from "./ProductFilters";
import {
  filterByCategory,
  filterByRating,
  sortByPrice,
  filterByPrice,
} from '../../Utils'
import toast, { Toaster } from "react-hot-toast";
const ProductListing = () => {
  const { dispatch, filter,getProducts,products} = useData();
  const {  addToCart } = useCart();
  const token = JSON.parse(localStorage.getItem("token"));
  const { wishList, addToWishList, deleteFromWishlist } = useWishList();
  const filteredByPrice = filterByPrice(products, filter)
  const filterdByCategory = filterByCategory(filteredByPrice, filter)
  const filteredByRating = filterByRating(filterdByCategory, filter)

  const filterdProducts = sortByPrice(filteredByRating, filter)
  useEffect(() => {
    getProducts(); 
  },[])
  return (
    <div className="products-page">
      
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
            const {_id} = product;
            const addProductToCart = () => {
              addToCart(token, product);
              toast.success("Item added to Cart");
            };
            const isPresentInWishList = wishList.find((item) => item._id === _id) ? true : false;
            const addProductToWishList=() => {
              addToWishList(token, product);
              toast.success("item added to wishlist");
              
            }
            const removeFromWishList = () => {
              deleteFromWishlist(token, _id)
              toast.success("item removed from wishlist");
            }
            return (
              <ProductListingCard
                _id={_id}
                key={_id}
                product={product}
                onAddtocart={addProductToCart}
                onWishListAdd={addProductToWishList}
                onWishListRemove={removeFromWishList}
                isPresentInWishList={isPresentInWishList}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ProductListing;
