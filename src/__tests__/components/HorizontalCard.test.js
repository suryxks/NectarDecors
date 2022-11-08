import React from "react";
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HorizontalCard from "../../components/HorizontalCard/HorizontalCard";
import { appRender } from '../.././test-utils'
import userEvent  from "@testing-library/user-event";
const product = {
        _id: '1',
        title: "Decorly",
        description: "Set Of 4 Green & White Decorative Bonsai Plants With Pots",
        Originalprice: "499",
        price: "450",
        categoryName: "Plants",
        discount: "10%",
        qty: 3,
        featured: true,
        rating: "4.5",
        imageUrl:
          "https://res.cloudinary.com/dxdefqayz/image/upload/c_scale,w_210/v1647232619/NectarDecors/Plants/2a60d462-66b8-42d0-b940-d2a768d9c4431634735175699DekorlySetOf4GreenWhiteDecorativeBonsaiPlantsWithPots1_qyhyis.jpg"
}
const token='abcdef'
const onAddToCart = jest.fn();
const onAddToWishList = jest.fn();
const user = userEvent.setup();
beforeAll(()=>localStorage.setItem('token',JSON.stringify(token)))
afterAll(()=>localStorage.clear())
describe('Horizontal card', () => {
    beforeEach(() => {
        appRender(<HorizontalCard
            product={product}
            onAddToCart={onAddToCart}
            onAddToWishList={onAddToWishList}
        />)
    })
    test('Product card renders with the required details', () => {
        const productTitle = screen.getByText(product.title);
        expect(productTitle).toBeInTheDocument();
        const description = screen.getByText(product.description);
        expect(description).toBeInTheDocument();
        const price = screen.getByText(`₹${product.price}`)
        expect(price).toBeInTheDocument();
        const addToCartButton = screen.getByText(/add to cart/i);
        expect(addToCartButton).toBeInTheDocument();
        const addToWishlistButton = screen.getByText(/add to Wishlist/i);
        expect(addToWishlistButton).toBeInTheDocument()
    })
    test('add to cart function called with token and product', async () => {
        const addToCartButton = screen.getByText(/add to cart/i)
        await user.click(addToCartButton);
        expect(onAddToCart).toHaveBeenCalledTimes(1);
        expect(onAddToCart).toHaveBeenCalledWith(token, product);
    })
    test('add to wishlist function called with token and product', async () => {
        
        const addToWishlistButton = screen.getByText(/add to Wishlist/i);
        await user.click(addToWishlistButton);
        expect(onAddToWishList).toHaveBeenCalledTimes(1);
        expect(onAddToWishList).toHaveBeenCalledWith(token, product);
    })
})