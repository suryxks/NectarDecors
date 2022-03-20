export const filterByCategory = (products, filter) => {
  console.log(products);
  const { category } = filter;

  const { plants, wallDecor, clocks, wallShelves } = category;
  console.log("plants", plants, "walldecors", wallDecor);
  console.log(category, "from filter");
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
  console.log(PlantsContainer);
  console.log(WallDecorContainer);

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
