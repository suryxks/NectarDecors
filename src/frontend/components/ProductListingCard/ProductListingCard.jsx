import React from "react";
import "./ProductListingCard.css";
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
      <img src={imageUrl} alt={description} />
      <div className="details">
        <h3 className="heading-sm">{title}</h3>
        <div className="price">
          <h4 className="heading-sm">{`Rs.${
            Number(price) -
            (Number(price) * Number(discount.replace("%", ""))) / 100
          }`}</h4>
          <h4 className="strike">{`Rs.${price}`}</h4>
        </div>
        <div className="horizontal-card-btn">
          <button className="btn-cta-vertical">Add to cart</button>
        </div>
      </div>
    </div>
  );
};