/* eslint-disable react/prop-types */
import React from "react";
import "./ProductFilters.css";
import { constants } from "../../Utils/constants";
export const ProductFilters = ({ filterValues, dispatch }) => {
  const { category, rating, priceRangeSlider } = filterValues;
  const { category_plants,
    category_walldecor,
    category_clocks,
    category_wallshelves,
    rating_four,
    rating_three,
    rating_two,
    rating_one,
    price_slider,
    clear
  }=constants
  return (
    <aside className="filters">
      <div className="filter-header">
        <h2 className="heading-md text-left ">Filters</h2>
        <button
          className="clear-btn text-sm"
          onClick={() => dispatch({ type: clear })}
        >
          Clear
        </button>
      </div>
      <div className="filter-wrapper" role="form">
        <h3 className="heading-md text-left active">Category</h3>
        <div className="filter-value filter">
          <label htmlFor="plants">
            <input
              type="checkbox"
              name="plants"
              id="plants"
              checked={category.plants}
              onChange={() => dispatch({ type: category_plants })}
            />{" "}
            Plants
          </label>
          <label htmlFor="wallDecor">
            <input
              type="checkbox"
              id="wallDecor"
              name="wallDecor"
              checked={category.wallDecor}
              onChange={() => dispatch({ type: category_walldecor })}
            />{" "}
            Wall decor
          </label>
          <label htmlFor="clocks">
            <input
              type="checkbox"
              id="clocks"
              name="clocks"
              checked={category.clocks}
              onChange={() => dispatch({ type: category_clocks })}
            />{" "}
            Clocks
          </label>
          <label htmlFor="wallShelves">
            <input
              type="checkbox"
              name="wallShelves"
              id="wallShelves"
              checked={category.wallShelves}
              onChange={() => dispatch({ type: category_wallshelves })}
            />{" "}
            Wall shelves
          </label>
        </div>
      </div>

      <div className="filter-wrapper">
        <h3 className="heading-md text-left active">Rating</h3>
        <div className="filter-value filter">
          <label htmlFor="four-rating">
            <input
              type="radio"
              name="rating"
              id="four-rating"
              checked={rating.fourStars}
              onChange={() => dispatch({ type: rating_four })}
            />{" "}
            4 and above
          </label>
          <label htmlFor="three-rating">
            <input
              type="radio"
              name="rating"
              id="three-rating"
              checked={rating.threeStars}
              onChange={() => dispatch({ type: rating_three })}
            />{" "}
            3 and above
          </label>
          <label htmlFor="two-rating">
            <input
              type="radio"
              name="rating"
              id="two-rating"
              checked={rating.twoStars}
              onChange={() => dispatch({ type: rating_two })}
            />{" "}
            2 and above
          </label>
          <label htmlFor="one-rating">
            <input
              type="radio"
              name="rating"
              id="one-rating"
              checked={rating.oneStars}
              onChange={() => dispatch({ type: rating_one })}
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
                  type: price_slider,
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
