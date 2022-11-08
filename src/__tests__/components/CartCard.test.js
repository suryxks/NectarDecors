import React from "react";
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CartCard  from '../../components/HorizontalCard/CartCard';
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
const updateQuantityOfProduct = jest.fn();
const removeProduct = jest.fn();
const addToWishList = jest.fn();
const token='abcd'
beforeAll(()=>localStorage.setItem('token',JSON.stringify(token)))
afterAll(()=>localStorage.clear())
describe('Cart card', () => {
    beforeEach(() => {
        appRender(<CartCard
            product={product}
            updateQuantityOfProduct={updateQuantityOfProduct}
            removeProduct={removeProduct}
            addToWishList={addToWishList}
        />)
    })
  
    test('increments when + is clicked', async () => {
        const user = userEvent.setup();
    
        //increments when + is clicked
        const incrementbutton = screen.getByText('+');
        expect(incrementbutton).toBeInTheDocument()
        await user.click(incrementbutton)
        expect(updateQuantityOfProduct).toHaveBeenCalledTimes(1)
        expect(updateQuantityOfProduct).toHaveBeenCalledWith(token, product._id, 'increment')
    })
    
    test('function callled to decrement when - is clicked', async () => {
        const user = userEvent.setup()
        const decrementButton = screen.getByText('-');
        await user.click(decrementButton);
        expect(updateQuantityOfProduct).toHaveBeenCalledTimes(1)
        expect(updateQuantityOfProduct).toHaveBeenCalledWith(token, product._id, 'decrement')
    })
    test('removeProduct and addtoWishList called when Move to wishlist is clicked', async() => {
        const moveToWishListButton = screen.getByText(/move to wishlist/i);
        await userEvent.click(moveToWishListButton);
        expect(removeProduct).toHaveBeenCalledTimes(1)
        expect(removeProduct).toHaveBeenCalledWith(token, product._id);
        expect(addToWishList).toHaveBeenCalledTimes(1)
        expect(addToWishList).toHaveBeenCalledWith(token, product)
        
    })
    
})
