export const filterByRating = (filterdByCategory, filter) => {
  const { rating } = filter;
  const { fourStars, threeStars, twoStars, oneStar } = rating;
  if (oneStar) {
    return filterdByCategory;
  }
  if (twoStars) {
    return filterdByCategory.filter((product) => Number(product.rating) >= 2);
  }
  if (threeStars) {
    return filterdByCategory.filter((product) => Number(product.rating) >= 3);
  }
  if (fourStars) {
    return filterdByCategory.filter((product) => Number(product.rating) >= 4);
  }
};
