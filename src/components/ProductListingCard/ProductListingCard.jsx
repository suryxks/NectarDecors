/* eslint-disable react/prop-types */
import React from "react";
import "./ProductListingCard.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";
import { useWishList } from "../../contexts/WishListContext";
import toast from "react-hot-toast";
export const ProductListingCard = ({
  _id,
  imageUrl,
  title,
  price,
  discount,
  description,
  rating,
  Originalprice,
  onAddtocart,
  product,
}) => {
  const { wishList, addToWishList, deleteFromWishlist } = useWishList();
  const token = JSON.parse(localStorage.getItem("token"));
  return (
    <div className="vertical-card" key={_id}>
      <img src={imageUrl} alt={description} className="product-image" />
      {wishList.find((item) => item._id === _id) ? (
        <FavoriteIcon
          className="wishlist-icon active"
          onClick={() => {
            deleteFromWishlist(token, _id);
            toast.success("item removed from wishlist");
          }}
        />
      ) : (
        <FavoriteBorderIcon
          className="wishlist-icon"
          onClick={() => {
            addToWishList(token, product);
            toast.success("item added to wishlist");
          }}
        />
      )}

      <div className="details">
        <h3 className="product-title">{title}</h3>

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
          <button className="btn-cta-vertical" onClick={onAddtocart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
