import React from "react";
import "./HorizontalCard.css";
const HorizontalCard = ({ imageUrl, title, price, description }) => {
  return (
    <div class="horizontal-card">
      <img src={imageUrl} />
      <div class="details">
        <h3 class="heading-md">{title}</h3>
        <p class="text-md fw-light">{description}</p>
        <div class="price">
          <h4 class="heading-sm">₹{price}</h4>
          <h4 class="strike">₹599</h4>
        </div>
        <div class="horizontal-card-btn">
          <button class="btn-cta">Add to cart</button>
          <button class="btn-cta-outline">Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};
export default HorizontalCard;
