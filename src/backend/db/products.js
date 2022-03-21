import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Decorly",
    description: "Set Of 4 Green & White Decorative Bonsai Plants With Pots",
    Originalprice: "499",
    price: "450",
    categoryName: "Plants",
    discount: "10%",
    Stockquantity: "10",
    featured: true,
    rating: "4.5",
    imageUrl:
      "https://res.cloudinary.com/dxdefqayz/image/upload/c_scale,w_210/v1647232619/NectarDecors/Plants/2a60d462-66b8-42d0-b940-d2a768d9c4431634735175699DekorlySetOf4GreenWhiteDecorativeBonsaiPlantsWithPots1_qyhyis.jpg"
  },
  {
    _id: uuid(),
    title: "Amflix",
    description: "Green Bonsai Artificial Flowers & Plants With Pot",
    Originalprice: "1000",
    price: "750",
    categoryName: "Plants",
    discount: "25%",
    Stockquantity: "10",
    featured: false,
    rating: "4.3",
    imageUrl:
      "https://res.cloudinary.com/dxdefqayz/image/upload/c_scale,w_210/v1647235257/NectarDecors/Plants/5b20ab5b-9212-4311-840d-d6b879db981a1645262721968ArtificialFlowersandPlants1_pes1hg.jpg"
  },
  {
    _id: uuid(),
    title: "Decorly",
    description:
      "Green & Gold-Toned Artificial Wild Decorative Bonsai Plant With Pot",
    Originalprice: "299",
    price: "255",
    categoryName: "Plants",
    discount: "15%",
    Stockquantity: "10",
    featured: false,
    rating: "4.1",
    imageUrl:
      "https://res.cloudinary.com/dxdefqayz/image/upload/c_scale,w_210/v1647235334/NectarDecors/Plants/e5967ea8-741c-4ae9-900e-8e8ba58ca80b1634654664140ArtificialFlowersandPlants1_rznzzn.jpg"
  },

  {
    _id: uuid(),
    title: "OddCraft",
    description: "Green & Brown Artificial Bonsai Tree",
    Originalprice: "2500",
    price: "2250",
    categoryName: "Plants",
    discount: "10%",
    Stockquantity: "10",
    featured: true,
    rating: "4.7",
    imageUrl:
      "https://res.cloudinary.com/dxdefqayz/image/upload/c_scale,w_210/v1647235377/NectarDecors/Plants/08862805-1da6-4407-8486-436e4d20b6541535625407814-OddCroft-Green--Brown-Artificial-Bonsai-Tree-with-Pot-5981535625407632-1_qltckn.jpg"
  },

  {
    _id: uuid(),
    title: "Decorly",
    description: "Orange & Green Pack of 2 Artificial Flower & Plant With Pot",
    Originalprice: "999",
    price: "800",
    categoryName: "Plants",
    discount: "20%",
    Stockquantity: "10",
    featured: false,
    rating: "3.5",
    imageUrl:
      "https://res.cloudinary.com/dxdefqayz/image/upload/c_scale,w_210/v1647235513/NectarDecors/Plants/3764547c-04b5-41e4-a523-7902558eebea1640244339392Green_Orange_Hansraj1_q65cyf.jpg"
  },
  {
    _id: uuid(),
    title: "Art Street",
    description: "Black Solid Set Of 6 Wall Photo Frames",
    Originalprice: "2000",
    price: "600",
    categoryName: "Wall decors",
    discount: "70%",
    Stockquantity: "10",
    featured: false,
    rating: "4",
    imageUrl:
      "https://res.cloudinary.com/dxdefqayz/image/upload/c_scale,w_210/v1647225202/NectarDecors/2b9a2f00-7844-478f-acbc-a58457937bfb1528792670861-na-421528792670697-1_vrxhhj.jpg"
  },
  {
    _id: uuid(),
    title: "Golden Peacock",
    description: "White Circular LED Table-Top Photo Frame",
    Originalprice: "2999",
    price: "1500",
    categoryName: "Wall decors",
    discount: "50%",
    Stockquantity: "10",
    featured: false,
    rating: "1",
    imageUrl:
      "https://res.cloudinary.com/dxdefqayz/image/upload/c_scale,w_210/v1647225459/NectarDecors/9e406c0a-9ee6-407d-a297-d59dafd63a341628394846675-Golden-Peacock-White-Circular-LED-Table-Top-Photo-Frame-6891-1_rntnmu.jpg"
  },
  {
    _id: uuid(),
    title: "Halos",
    description: "White & Blue Printed Fancy Individual Photo Frames",
    Originalprice: "999",
    price: "800",
    categoryName: "Wall decors",
    discount: "20%",
    Stockquantity: "10",
    featured: false,
    rating: "3.5",
    imageUrl:
      "https://res.cloudinary.com/dxdefqayz/image/upload/c_scale,w_210/v1647225609/NectarDecors/Photo%20frames/74130dc1-e094-4086-97b9-e8ccbabb4b631616665873132-1_yip29b.jpg"
  },
  {
    _id: uuid(),
    title: "Art Street",
    description: "White Flower Table Photo Frame",
    Originalprice: "1000",
    price: "800",
    categoryName: "Wall decors",
    discount: "20%",
    Stockquantity: "10",
    featured: true,
    rating: "4.6",
    imageUrl:
      "https://res.cloudinary.com/dxdefqayz/image/upload/c_scale,w_210/v1647225695/NectarDecors/Photo%20frames/37ca6ef4-34ef-4fc9-bd48-4528d3d345941538821628857-Art-Street-White-Flower-Table-Photo-Frame-4331538821628766-1_rzv6ub.jpg"
  },
  {
    _id: uuid(),
    title: "Random",
    description:
      "Random Set of 6 Black Solid Photo Frames With Heart Shaped Plaques",
    Originalprice: "1500",
    price: "1200",
    categoryName: "Wall decors",
    discount: "20%",
    Stockquantity: "10",
    featured: false,
    rating: "4.1",
    imageUrl:
      "https://res.cloudinary.com/dxdefqayz/image/upload/c_scale,w_210/v1647229290/NectarDecors/Photo%20frames/b5fc076f-b094-4956-8679-d962eba8eeb61527509319846-Random-Set-of-06-photo-frames-WITH-MDF-flowers-plaque-4X6-4PCS--5x7-2pcs-BLACK-2611527509319705-1_eva4xo.jpg"
  },
  {
    _id: uuid(),
    title: "Home Sparkle",
    description: "Black MDF Basic Wall Shelf",
    Originalprice: "2500",
    price: "1000",
    categoryName: "Wall shelves",
    discount: "60%",
    Stockquantity: "10",
    featured: false,
    rating: "2.5",
    imageUrl:
      "https://res.cloudinary.com/dxdefqayz/image/upload/c_scale,w_210/v1647232373/NectarDecors/Wall%20decors/11521266748993-na-6971521266748832-1_ulvwhi.webp"
  },
  {
    _id: uuid(),
    title: "Random",
    description: "Black MDF round Wall Shelf",
    Originalprice: "2000",
    price: "1400",
    categoryName: "Wall shelves",
    discount: "30%",
    Stockquantity: "10",
    featured: false,
    rating: "4.5",
    imageUrl:
      "https://res.cloudinary.com/dxdefqayz/image/upload/c_scale,w_210/v1647232333/NectarDecors/Wall%20decors/1c4d229c-5fd4-4b63-8dc5-4e01c9103ab61600992839880-1_fbcom5.jpg"
  },
  {
    _id: uuid(),
    title: "Brown Sparkle",
    description: "Brown Set of 9 MDF Basic Wall Shelf",
    Originalprice: "3000",
    price: "1500",
    categoryName: "Wall shelves",
    discount: "50%",
    Stockquantity: "10",
    featured: false,
    rating: "3.8",
    imageUrl:
      "https://res.cloudinary.com/dxdefqayz/image/upload/c_scale,w_210/v1647232419/NectarDecors/Wall%20decors/4e3ae2a2-7acc-4654-a8c8-142ff4feb61f1621861667598-1_jvzfyd.jpg"
  },
  {
    _id: uuid(),
    title: "Brown leaves",
    description: "Set of 4 Coffee Brown MDF leaf Wall Shelves",
    Originalprice: "3000",
    price: "1800",
    categoryName: "Wall shelves",
    discount: "40%",
    Stockquantity: "10",
    featured: true,
    rating: "4.6",
    imageUrl:
      "https://res.cloudinary.com/dxdefqayz/image/upload/c_scale,w_210/v1647232462/NectarDecors/Wall%20decors/72da154c-ee29-46ea-80f8-b611a3e8e06d1621925018933-1_pgil2o.jpg"
  },
  {
    _id: uuid(),
    title: "Akriti Art Creations",
    description: "Brown & Black Wood Wall Shelf & 3 Warli Pots",
    Originalprice: "2100",
    price: "1260",
    categoryName: "Wall shelves",
    discount: "40%",
    Stockquantity: "10",
    featured: false,
    rating: "3.6",
    imageUrl:
      "https://res.cloudinary.com/dxdefqayz/image/upload/c_scale,w_210/v1647232503/NectarDecors/Wall%20decors/dbd349e7-1ed5-4dbc-b982-473f0e21fd171632234015927WallDecor1_a3zgok.jpg"
  },

  {
    _id: uuid(),
    title: "ZANIBO",
    description: "Maroon & White Textured Vintage Wall Clock",
    Originalprice: "999",
    price: "700",
    categoryName: "Clocks",
    discount: "30%",
    Stockquantity: "10",
    featured: false,
    rating: "4.3",
    imageUrl:
      "https://res.cloudinary.com/dxdefqayz/image/upload/c_scale,w_210/v1647229400/NectarDecors/Clocks/99d0d859-79d4-4a23-9213-c6b3787344121634990179319ZANIBOUnisexMaroonSolid1_iddcrn.jpg"
  },
  {
    _id: uuid(),
    title: "TIED RIBBONS",
    description: "White Round Solid Analogue Wall Clock with 2 Mirrors",
    Originalprice: "1999",
    price: "1599",
    categoryName: "Clocks",
    discount: "20%",
    Stockquantity: "10",
    featured: false,
    rating: "4.1",
    imageUrl:
      "https://res.cloudinary.com/dxdefqayz/image/upload/c_scale,w_210/v1647229744/NectarDecors/Clocks/10908c1a-3da9-4d4b-9358-d9fe938a1a511569703005970-1_r6hr9f.jpg"
  },
  {
    _id: uuid(),
    title: "Pink Analogue",
    description: "Pink & White Round Printed Analogue Wall Clock",
    Originalprice: "1499",
    price: "749",
    categoryName: "Clocks",
    discount: "50%",
    Stockquantity: "10",
    featured: false,
    rating: "4.0",
    imageUrl:
      "https://res.cloudinary.com/dxdefqayz/image/upload/c_scale,w_210/v1647229833/NectarDecors/Clocks/698efd38-2dcb-4ab5-bb17-d4b33c0c815e1617082495951-1_hmadux.jpg"
  },
  {
    _id: uuid(),
    title: "MARKET99",
    description: "Blue & Black Solid Round Contemporary Wall Clock 30cm",
    Originalprice: "999",
    price: "849",
    categoryName: "Clocks",
    discount: "15%",
    Stockquantity: "10",
    featured: false,
    rating: "3.4",
    imageUrl:
      "https://res.cloudinary.com/dxdefqayz/image/upload/c_scale,w_210/v1647229894/NectarDecors/Clocks/95ce1c3a-628b-4fc5-a481-e5ffaa3032561644848018446MARKET99UnisexBlueSolid1_k7gnm3.jpg"
  },
  {
    _id: uuid(),
    title: "RANDOM",
    description: "Brown Round Textured Analogue Wall Clock",
    Originalprice: "1799",
    price: "899",
    categoryName: "Wall decors",
    discount: "50%",
    Stockquantity: "10",
    featured: false,
    rating: "2.6",
    imageUrl:
      "https://res.cloudinary.com/dxdefqayz/image/upload/c_scale,w_210/v1647229937/NectarDecors/Clocks/7ae2b062-dba7-4f65-8c6a-a7489705a6661599605137922-1_fxithi.jpg"
  }
];
