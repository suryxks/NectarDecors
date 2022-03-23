import React, { useState } from "react";
import "./ProductFilters.css";
export const ProductFilters = ({ filterValues, dispatch }) => {
  const { category, rating, price, priceRangeSlider } = filterValues;

  return (
    <aside class="filters">
      <div className="filter-header">
        <h2 class="heading-md text-left ">Filters</h2>
        <button
          className="clear-btn text-sm"
          onClick={() => dispatch({ type: "CLEAR" })}
        >
          Clear
        </button>
      </div>
      <div class="filter-wrapper">
        <h3 class="heading-md text-left active">Category</h3>
        <div class="filter-value filter">
          <label for="category">
            <input
              type="checkbox"
              name="category"
              checked={category.plants}
              onChange={() => dispatch({ type: "CATEGORY_PLANTS" })}
            />{" "}
            Plants
          </label>
          <label for="category">
            <input
              type="checkbox"
              name="category"
              checked={category.wallDecor}
              onChange={() => dispatch({ type: "CATEGORY_WALLDECOR" })}
            />{" "}
            Wall decor
          </label>
          <label for="category">
            <input
              type="checkbox"
              name="category"
              checked={category.clocks}
              onChange={() => dispatch({ type: "CATEGORY_CLOCKS" })}
            />{" "}
            Clocks
          </label>
          <label for="category">
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

      <div class="filter-wrapper">
        <h3 class="heading-md text-left active">Rating</h3>
        <div class="filter-value filter">
          <label for="rating">
            <input
              type="radio"
              name="rating"
              checked={rating.fourStars}
              onChange={() => dispatch({ type: "RATING_FOUR_STARS" })}
            />{" "}
            4 and above
          </label>
          <label for="rating">
            <input
              type="radio"
              name="rating"
              checked={rating.threeStars}
              onChange={() => dispatch({ type: "RATING_THREE_STARS" })}
            />{" "}
            3 and above
          </label>
          <label for="rating">
            <input
              type="radio"
              name="rating"
              checked={rating.twoStars}
              onChange={() => dispatch({ type: "RATING_TWO_STARS" })}
            />{" "}
            2 and above
          </label>
          <label for="rating">
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

      <div class="filter-wrapper">
        <h3 class="heading-md text-left active">Sort by Price</h3>
        <div class="filter-value filter">
          <label for="price-filter">
            <input
              type="radio"
              name="price-filter"
              checked={price.lowToHigh}
              onChange={() => dispatch({ type: "PRICE_LOW_TO_HIGH" })}
            />{" "}
            Low to High
          </label>
          <label for="price-filter">
            <input
              type="radio"
              name="price-filter"
              checked={price.highToLow}
              onChange={() => dispatch({ type: "PRICE_HIGH_TO_LOW" })}
            />{" "}
            High to Low
          </label>
        </div>
      </div>
      <div class="filter-wrapper">
        <h3 class="heading-md text-left active">Price Range</h3>
        <div class="filter-value filter">
          <label>
            <label for="price">{`₹1 to ₹${priceRangeSlider}`}</label>
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
