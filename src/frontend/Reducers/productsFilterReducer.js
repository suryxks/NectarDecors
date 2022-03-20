export const productsFilterReducer = (state, action) => {
  const { category, rating, price } = state;
  switch (action.type) {
    case "PRICE_LOW_TO_HIGH":
      return {
        category,
        rating,
        price: { lowToHigh: true, highToLow: false }
      };
    case "PRICE_HIGH_TO_LOW": {
      return {
        category,
        rating,
        price: { lowToHigh: false, highToLow: true }
      };
    }
    case "CATEGORY_PLANTS": {
      return {
        category: { ...category, plants: !category.plants },
        rating,
        price
      };
    }
    case "CATEGORY_WALLDECOR": {
      return {
        category: { ...category, wallDecor: !category.wallDecor },
        rating,
        price
      };
    }
    case "CATEGORY_CLOCKS": {
      return {
        category: { ...category, clocks: !category.clocks },
        rating,
        price
      };
    }
    case "CATEGORY_WALLSHELVES": {
      return {
        category: { ...category, wallShelves: !category.wallShelves },
        rating,
        price
      };
    }
    case "RATING_FOUR_STARS": {
      return {
        ...state,
        rating: {
          fourStars: true,
          threeStars: false,
          twoStars: false,
          oneStar: false
        }
      };
    }
    case "RATING_THREE_STARS": {
      return {
        ...state,
        rating: {
          fourStars: false,
          threeStars: true,
          twoStars: false,
          oneStar: false
        }
      };
    }
    case "RATING_TWO_STARS": {
      return {
        ...state,
        rating: {
          fourStars: false,
          threeStars: false,
          twoStars: true,
          oneStar: false
        }
      };
    }
    case "RATING_ONE_STAR": {
      return {
        ...state,
        rating: {
          fourStars: false,
          threeStars: false,
          twoStars: false,
          oneStar: true
        }
      };
    }
    default:
      return { ...state };
  }
};
