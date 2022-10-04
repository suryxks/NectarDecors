import React from "react";
import { useCart } from "../../contexts/CartContext";
import {useWishList} from "../../contexts/WishListContext"
import "./HorizontalCard.css";
import toast from 'react-hot-toast';
const HorizontalCard = ({ product }) => {
  const {imageUrl, title, price, description,Originalprice,discount}=product;
  const {addToCart}=useCart();useWishList
  const {addToWishList }=useWishList();
  const token=localStorage.getItem('token');
  return (
    <div className="horizontal-card">
      <img src={imageUrl} />
      <div className="product-details">
        <h3 className="heading-md active">{title}</h3>
        <p className="text-md fw-light fw-bold">{description}</p>
        <div className="price">
        <h4 className="heading-sm">{`₹${price}`}</h4>
          <h4 className="strike heading-sm">{`₹${Originalprice}`}</h4>
          <h4 className="discount heading-sm">{`(${discount})`}</h4>
        </div>
        <div className="horizontal-card-btn">
          <button className="btn-cta" onClick={()=>{
            addToCart(token,product);
            toast.success('Item added to cart')
          }}>Add to cart</button>
          <button className="btn-cta-outline" onClick={()=>{
            addToWishList(token,product);
            toast.success('Item added to wish List')
          }}>Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};
export default HorizontalCard;
