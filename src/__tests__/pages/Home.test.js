import React from "react";
import 'whatwg-fetch'
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { screen,waitFor} from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { appRender } from '../../test-utils'
import { Home } from "../../Pages";
const categories = [
    {
      _id: '1',
      categoryName: "Plants",
      bannerImage:'https://res.cloudinary.com/dxdefqayz/image/upload/v1647432583/NectarDecors/plants-category-ecom_lo6wvv.jpg',
      
    },
    {
      _id: '2',
      categoryName: "Wall decors",
      bannerImage:'https://res.cloudinary.com/dxdefqayz/image/upload/v1647432598/NectarDecors/walldecor-ecom_tu1vsj.jpg',
     
    },
    {
      _id: '3',
      categoryName: "Clocks",
      bannerImage:'https://res.cloudinary.com/dxdefqayz/image/upload/v1647432566/NectarDecors/clock-ecom_yplfvs.jpg',
      
    },
    {
      _id: '4',
      categoryName: "Wall shelves",
      bannerImage:'https://res.cloudinary.com/dxdefqayz/image/upload/v1647432608/NectarDecors/wall-shelves_wcru5p.jpg',
      
    },
  ];
const fakeProducts = [
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
      },
]
const server = setupServer(
    rest.get('/api/products', (req, res, ctx) => {
        return res(ctx.json({products:[...fakeProducts]}))
    }),
    rest.get('/api/categories', (req, res, ctx) => {
        return res(ctx.json({categories:[...categories]}))
    })
)

describe('Check if the page renders with hero section ,categoreis and featured products', () => {
    const original = console.error;
    beforeAll(() => server.listen({onUnhandledRequest: 'error'}))
    afterAll(() => server.close())
    afterEach(() => server.resetHandlers())
    beforeEach(() => {
        console.error = jest.fn()
    })
  
    
    test('Hero section', async () => {
        appRender(<Home />)
        const user = userEvent.setup();
        const heroHeading = screen.getByText(/beautify your living space with/i);
        expect(heroHeading).toBeInTheDocument();
        const shopButton = screen.getByText(/shop now/i);
        await user.click(shopButton);
        await waitFor(()=>expect(window.location.pathname).toBe("/products"))
    })
    test('renders categories card and featured products card', async() => {
        appRender(<Home />);
        const categoriesHeading = screen.getByText(/categories/i);
        expect(categoriesHeading).toBeInTheDocument();
        const featuredHeading=screen.getByText(/featured products/i)
        expect(featuredHeading).toBeInTheDocument();
        const categoriesList = await screen.findAllByTestId('categories-card');
        expect(categoriesList).toHaveLength(4)
        const featuredList =await screen.findAllByTestId('featured')
        expect(featuredList).toHaveLength(1);
    })
})