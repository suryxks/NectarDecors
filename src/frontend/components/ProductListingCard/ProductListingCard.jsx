import React from "react";
import "./ProductListingCard.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
export const ProductListingCard = ({
  _id,
  imageUrl,
  title,
  price,
  discount,
  description
}) => {
  return (
    <div className="vertical-card" key={_id}>
      <img src={imageUrl} alt={description} className="product-image" />
      <FavoriteBorderIcon className="wishlist-icon" />
      <div className="details">
        <h3 className="heading-sm active">{title}</h3>

        <div className="price">
          <h4 className="heading-xs">{`₹${
            Number(price) -
            Math.floor(
              (Number(price) * Number(discount.replace("%", ""))) / 100
            )
          }`}</h4>
          <h4 className="strike heading-xs">{`₹${price}`}</h4>
          <h4 className="discount heading-xs">{`(${discount})`}</h4>
        </div>

        <div className="horizontal-card-btn">
          <button className="btn-cta-vertical">Add to cart</button>
        </div>
      </div>
    </div>
  );
};
