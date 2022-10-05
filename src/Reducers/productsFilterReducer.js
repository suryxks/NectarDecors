export const productsFilterReducer = (state, action) => {
  const { category } = state;
  switch (action.type) {
    case "CLEAR": {
      return {
        category: {
          plants: false,
          wallDecor: false,
          clocks: false,
          wallShelves: false
        },
        rating: {
          fourStars: false,
          threeStars: false,
          twoStars: false,
          oneStar: false
        },
        price: {
          lowToHigh: false,
          highToLow: false
        },
        priceRangeSlider: 2500
      };
    }
    case "PRICE_LOW_TO_HIGH":
      return {
        ...state,
        price: { lowToHigh: true, highToLow: false }
      };
    case "PRICE_HIGH_TO_LOW": {
      return {
        ...state,
        price: { lowToHigh: false, highToLow: true }
      };
    }
    case "CATEGORY_PLANTS": {
      return {
        ...state,
        category: { ...category, plants: !category.plants }
      };
    }
    case "CATEGORY_WALLDECOR": {
      return {
        ...state,
        category: { ...category, wallDecor: !category.wallDecor }
      };
    }
    case "CATEGORY_CLOCKS": {
      return {
        ...state,
        category: { ...category, clocks: !category.clocks }
      };
    }
    case "CATEGORY_WALLSHELVES": {
      return {
        ...state,
        category: { ...category, wallShelves: !category.wallShelves }
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
    case "PRICE_SLIDER": {
      return { ...state, priceRangeSlider: action.payload };
    }
    default:
      return { ...state };
  }
};
