/* eslint-disable react/prop-types */
import React from 'react'
import './ProductListingCard.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Rating from '@mui/material/Rating'
export const ProductListingCard = ({
  _id,
  onAddtocart,
  product,
  onWishListAdd,
  onWishListRemove,
  isPresentInWishList,
}) => {
  const {
    title,
    description,
    price,
    discount,
    imageUrl,
    rating,
    Originalprice,
  } = product
  return (
    <div className="vertical-card" key={_id}>
      <img src={imageUrl} alt={description} className="product-image" />
      {isPresentInWishList ? (
        <FavoriteIcon
          className="wishlist-icon active"
          onClick={onWishListRemove}
        />
      ) : (
        <FavoriteBorderIcon className="wishlist-icon" onClick={onWishListAdd} />
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
  )
}
