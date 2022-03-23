export const filterByRating = (products, filter) => {
  const { rating } = filter;

  const { fourStars, threeStars, twoStars, oneStar } = rating;
  if (oneStar) {
    return products;
  }
  if (twoStars) {
    return products.filter((product) => Number(product.rating) >= 2);
  }
  if (threeStars) {
    return products.filter((product) => Number(product.rating) >= 3);
  }
  if (fourStars) {
    return products.filter((product) => Number(product.rating) >= 4);
  }
  return products;
};
