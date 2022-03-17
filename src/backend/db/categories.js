import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Plants",
    bannerImage:'https://res.cloudinary.com/dxdefqayz/image/upload/v1647432583/NectarDecors/plants-category-ecom_lo6wvv.jpg',
    
  },
  {
    _id: uuid(),
    categoryName: "Wall decors",
    bannerImage:'https://res.cloudinary.com/dxdefqayz/image/upload/v1647432598/NectarDecors/walldecor-ecom_tu1vsj.jpg',
   
  },
  {
    _id: uuid(),
    categoryName: "Clocks",
    bannerImage:'https://res.cloudinary.com/dxdefqayz/image/upload/v1647432566/NectarDecors/clock-ecom_yplfvs.jpg',
    
  },
  {
    _id: uuid(),
    categoryName: "Wall shelves",
    bannerImage:'https://res.cloudinary.com/dxdefqayz/image/upload/v1647432608/NectarDecors/wall-shelves_wcru5p.jpg',
    
  },
];
