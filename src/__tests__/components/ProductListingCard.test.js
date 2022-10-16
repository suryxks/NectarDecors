import React from "react";
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent  from "@testing-library/user-event";
import {ProductListingCard} from '../../components'
import { appRender } from '../.././test-utils';
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
const onWishListAdd = jest.fn();
const onWishListRemove = jest.fn();
beforeAll(()=>localStorage.setItem('token',JSON.stringify(token)))
afterAll(() => localStorage.clear())
describe('Product Listing card', () => {
    test('Card renders with all the required feilds', () => {
        const { rerender} =appRender(<ProductListingCard
            _id={product._id}
            onAddtocart={onAddToCart}
            onWishListAdd={onWishListAdd}
            onWishListRemove={onWishListRemove}
            isPresentInWishList={false}
            product={product}
        />)
        const addToCartBtn = screen.getByText(/add to cart/i)
        const productTitile = screen.getByText(product.title);
        const price = screen.getByText(`₹${product.price}`);
        expect(addToCartBtn).toBeInTheDocument();
        expect(productTitile).toBeInTheDocument();
        expect(price).toBeInTheDocument();
        expect(screen.getByTestId('notAddedToWishlist')).toBeInTheDocument();
        expect(screen.queryByTestId('addedToWishlist')).toBeNull()
        rerender(
            <ProductListingCard
            _id={product._id}
            onAddtocart={onAddToCart}
            onWishListAdd={onWishListAdd}
            onWishListRemove={onWishListRemove}
            isPresentInWishList={true}
            product={product}
        />
        )
        expect(screen.queryByTestId('notAddedToWishlist')).toBeNull();
        expect(screen.getByTestId('addedToWishlist')).toBeInTheDocument()
    })
    test('add and remove from wishlist functions called with required arguments',async () => {
        const user = userEvent.setup();
        const { rerender } = appRender(<ProductListingCard
            _id={product._id}
            onAddtocart={onAddToCart}
            onWishListAdd={onWishListAdd}
            onWishListRemove={onWishListRemove}
            isPresentInWishList={false}
            product={product}
        />)
        
        const addToWishListBtn=screen.getByTestId('notAddedToWishlist')
        await user.click(addToWishListBtn);
        expect(onWishListAdd).toHaveBeenCalledTimes(1);
        rerender(
            <ProductListingCard
            _id={product._id}
            onAddtocart={onAddToCart}
            onWishListAdd={onWishListAdd}
            onWishListRemove={onWishListRemove}
            isPresentInWishList={true}
            product={product}
        />
        )
        const removeFromWishlistBtn=screen.getByTestId('addedToWishlist')
        await user.click(removeFromWishlistBtn);
        expect(onWishListRemove).toHaveBeenCalledTimes(1);        
    })
    test('add to cart works',async () => {
        const user = userEvent.setup();
        appRender(<ProductListingCard
            _id={product._id}
            onAddtocart={onAddToCart}
            onWishListAdd={onWishListAdd}
            onWishListRemove={onWishListRemove}
            isPresentInWishList={false}
            product={product}
        />)
        const addToCartBtn = screen.getByText(/add to cart/i)
        await user.click(addToCartBtn);
        expect(onAddToCart).toHaveBeenCalledTimes(1);
    })
})