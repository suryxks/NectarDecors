export const filterByCategory = (products, filter) => {
  const { category } = filter;

  const { plants, wallDecor, clocks, wallShelves } = category;

  const PlantsContainer = products.filter(
    (product) => product.categoryName === "Plants"
  );
  const WallDecorContainer = products.filter(
    (product) => product.categoryName === "Wall decors"
  );
  const ClocksContainer = products.filter(
    (product) => product.categoryName === "Clocks"
  );
  const WallShelvesContainer = products.filter(
    (product) => product.categoryName === "Wall shelves"
  );

  let filteredList = [];
  if (
    plants === false &&
    wallDecor === false &&
    wallShelves === false &&
    clocks === false
  ) {
    return [
      ...PlantsContainer,
      ...WallDecorContainer,
      ...WallShelvesContainer,
      ...ClocksContainer
    ];
  }
  if (plants === true) {
    filteredList = filteredList.concat(PlantsContainer);
  }
  if (wallDecor === true) {
    filteredList = filteredList.concat(WallDecorContainer);
  }
  if (wallShelves === true) {
    filteredList = filteredList.concat(WallShelvesContainer);
  }
  if (clocks === true) {
    filteredList = filteredList.concat(ClocksContainer);
  }
  return filteredList;
};
