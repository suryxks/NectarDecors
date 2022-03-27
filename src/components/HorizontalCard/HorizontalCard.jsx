import React from "react";
import { useCart } from "../../contexts/CartContext";
import {useWishList} from "../../contexts/WishListContext"
import "./HorizontalCard.css";
const HorizontalCard = ({ product }) => {
  const {imageUrl, title, price, description,Originalprice,discount}=product;
  const {addToCart}=useCart();useWishList
  const {wishList,addToWishList,deleteFromWishlist }=useWishList();
  const token=JSON.parse(localStorage.getItem('token'));
  return (
    <div class="horizontal-card">
      <img src={imageUrl} />
      <div class="product-details">
        <h3 class="heading-md active">{title}</h3>
        <p class="text-md fw-light fw-bold">{description}</p>
        <div class="price">
        <h4 className="heading-sm">{`₹${price}`}</h4>
          <h4 className="strike heading-sm">{`₹${Originalprice}`}</h4>
          <h4 className="discount heading-sm">{`(${discount})`}</h4>
        </div>
        <div class="horizontal-card-btn">
          <button class="btn-cta" onClick={()=>{
            addToCart(token,product);
          }}>Add to cart</button>
          <button class="btn-cta-outline" onClick={()=>{
            addToWishList(token,product);
          }}>Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};
export default HorizontalCard;
