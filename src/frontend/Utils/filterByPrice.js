export const filterByPrice = (products, filter) => {
  const { priceRangeSlider } = filter;
  return products.filter(
    (product) => Number(product.price) <= priceRangeSlider
  );
};
