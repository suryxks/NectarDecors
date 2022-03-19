import React from "react";
import "./ProductFilters.css";
export const ProductFilters = () => {
  return (
    <aside class="filters">
      <h2 class="heading-md">Filters</h2>
      <div class="filter-wrapper">
        <h3 class="heading-md">Category</h3>
        <div class="filter-value filter">
          <label for="category">
            <input type="checkbox" name="category" /> Plants
          </label>
          <label for="category">
            <input type="checkbox" name="category" /> Wall decor
          </label>
          <label for="category">
            <input type="checkbox" name="category" /> Clocks
          </label>
          <label for="category">
            <input type="checkbox" name="category" /> Wall shelves
          </label>
        </div>
      </div>

      <div class="filter-wrapper">
        <h3 class="heading-md">Rating</h3>
        <div class="filter-value filter">
          <label for="rating">
            <input type="radio" name="rating" /> 4 stars
          </label>
          <label for="rating">
            <input type="radio" name="rating" /> 3 stars
          </label>
          <label for="rating">
            <input type="radio" name="rating" /> 2 stars
          </label>
          <label for="rating">
            <input type="radio" name="rating" /> 1 star
          </label>
        </div>
      </div>

      <div class="filter-wrapper">
        <h3 class="heading-md">Filter</h3>
        <div class="filter-value filter">
          <label for="price-filter">
            <input type="radio" name="price-filter" /> Price - High to Low
          </label>
          <label for="price-filter">
            <input type="radio" name="price-filter" /> Price - Low to High
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
