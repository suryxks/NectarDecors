export const sortByPrice = (products, filter) => {
  const { price } = filter;
  const copy = [...products];
  if (price.lowToHigh) {
    return copy.sort((a, b) => a.price - b.price);
  }
  if (price.highToLow) {
    return copy.sort((a, b) => b.price - a.price);
  }
  return copy;
};
