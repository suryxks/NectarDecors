import React from "react";
import { screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import 'whatwg-fetch';
import { setupServer } from "msw/node";
import { rest } from 'msw';
import { appRender } from "../../test-utils";
import { WishList } from "../../Pages";

const wishListData= [
    {
        _id: '1',
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
        _id: '2',
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
    }
]
const server = setupServer(
    rest.get('/api/user/wishlist', (req, res, ctx) => {
        return res(ctx.json({wishlist:[...wishListData]}))
    })
)
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
beforeEach(() => {
    console.error = jest.fn();
})
afterAll(() => server.close());
afterEach(() => server.resetHandlers())

test('wish list page renders with products added to wishlist', async () => {
    appRender(<WishList />)
    const wishListheading = screen.getByTestId("wishlist-heading");
    const wishListItems = await screen.findAllByTestId('product-card')
    expect(wishListItems).toHaveLength(wishListData.length)
    expect(wishListheading).toHaveTextContent(`My WishList(${wishListData.length})`)

})