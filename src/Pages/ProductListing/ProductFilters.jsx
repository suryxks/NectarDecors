import React, { useState } from "react";
import "./ProductFilters.css";
export const ProductFilters = ({ filterValues, dispatch }) => {
  const { category, rating, price, priceRangeSlider } = filterValues;

  return (
    <aside className="filters">
      <div className="filter-header">
        <h2 className="heading-md text-left ">Filters</h2>
        <button
          className="clear-btn text-sm"
          onClick={() => dispatch({ type: "CLEAR" })}
        >
          Clear
        </button>
      </div>
      <div className="filter-wrapper">
        <h3 className="heading-md text-left active">Category</h3>
        <div className="filter-value filter">
          <label htmlFor="category">
            <input
              type="checkbox"
              name="category"
              checked={category.plants}
              onChange={() => dispatch({ type: "CATEGORY_PLANTS" })}
            />{" "}
            Plants
          </label>
          <label htmlFor="category">
            <input
              type="checkbox"
              name="category"
              checked={category.wallDecor}
              onChange={() => dispatch({ type: "CATEGORY_WALLDECOR" })}
            />{" "}
            Wall decor
          </label>
          <label htmlFor="category">
            <input
              type="checkbox"
              name="category"
              checked={category.clocks}
              onChange={() => dispatch({ type: "CATEGORY_CLOCKS" })}
            />{" "}
            Clocks
          </label>
          <label htmlFor="category">
            <input
              type="checkbox"
              name="category"
              checked={category.wallShelves}
              onChange={() => dispatch({ type: "CATEGORY_WALLSHELVES" })}
            />{" "}
            Wall shelves
          </label>
        </div>
      </div>

      <div className="filter-wrapper">
        <h3 className="heading-md text-left active">Rating</h3>
        <div className="filter-value filter">
          <label htmlFor="rating">
            <input
              type="radio"
              name="rating"
              checked={rating.fourStars}
              onChange={() => dispatch({ type: "RATING_FOUR_STARS" })}
            />{" "}
            4 and above
          </label>
          <label htmlFor="rating">
            <input
              type="radio"
              name="rating"
              checked={rating.threeStars}
              onChange={() => dispatch({ type: "RATING_THREE_STARS" })}
            />{" "}
            3 and above
          </label>
          <label htmlFor="rating">
            <input
              type="radio"
              name="rating"
              checked={rating.twoStars}
              onChange={() => dispatch({ type: "RATING_TWO_STARS" })}
            />{" "}
            2 and above
          </label>
          <label htmlFor="rating">
            <input
              type="radio"
              name="rating"
              checked={rating.oneStars}
              onChange={() => dispatch({ type: "RATING_ONE_STAR" })}
            />{" "}
            1 and above
          </label>
        </div>
      </div>
      <div className="filter-wrapper">
        <h3 className="heading-md text-left active">Price Range</h3>
        <div className="filter-value filter">
          <label>
            <label htmlFor="price">{`₹1 to ₹${priceRangeSlider}`}</label>
            <input
              type="range"
              id="price"
              name="price"
              min="1"
              max="2500"
              value={priceRangeSlider}
              onChange={(e) => {
                dispatch({
                  type: "PRICE_SLIDER",
                  payload: e.target.value
                });
              }}
            />
          </label>
        </div>
      </div>
    </aside>
  );
};
