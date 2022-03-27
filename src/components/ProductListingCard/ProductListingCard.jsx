import React from "react";
import "./ProductListingCard.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
export const ProductListingCard = ({
  _id,
  imageUrl,
  title,
  price,
  discount,
  description,
  rating,
  Originalprice,
  onAddtocart
}) => {
  return (
    <div className="vertical-card" key={_id}>
      <img src={imageUrl} alt={description} className="product-image" />
      <FavoriteBorderIcon className="wishlist-icon" />
      <div className="details">
        <h3 className="heading-sm active">{title}</h3>

        <div className="price">
          <h4 className="heading-xs">{`₹${price}`}</h4>
          <h4 className="strike heading-xs">{`₹${Originalprice}`}</h4>
          <h4 className="discount heading-xs">{`(${discount})`}</h4>
        </div>
        <Rating
          name="half-rating"
          defaultValue={rating}
          precision={0.1}
          readOnly
        />
        <div className="horizontal-card-btn">
          <button className="btn-cta-vertical" onClick={onAddtocart}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};
