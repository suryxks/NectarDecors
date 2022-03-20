import React from "react";
import "./ProductFilters.css";
export const ProductFilters = ({ filterValues, dispatch }) => {
  const { category, rating, price } = filterValues;
  return (
    <aside class="filters">
      <h2 class="heading-md">Filters</h2>
      <div class="filter-wrapper">
        <h3 class="heading-md">Category</h3>
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
        <h3 class="heading-md">Rating</h3>
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
        <h3 class="heading-md">Filter</h3>
        <div class="filter-value filter">
          <label for="price-filter">
            <input
              type="radio"
              name="price-filter"
              checked={price.lowToHigh}
              onChange={() => dispatch({ type: "PRICE_LOW_TO_HIGH" })}
            />{" "}
            Price - High to Low
          </label>
          <label for="price-filter">
            <input
              type="radio"
              name="price-filter"
              checked={price.highToLow}
              onChange={() => dispatch({ type: "PRICE_HIGH_TO_LOW" })}
            />{" "}
            Price - Low to High
          </label>
        </div>
      </div>
      <div class="filter-wrapper">
        <h3 class="heading-md">Price</h3>
        <div class="filter-value filter">
          <label>
            <input type="range" />
            1000
          </label>
        </div>
      </div>
    </aside>
  );
};
