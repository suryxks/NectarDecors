import React, { useEffect } from 'react'
import { Navbar } from '../../components'
import { useCart } from '../../contexts/CartContext'
import CartCard from '../../components/HorizontalCard/CartCard'
import './Cart.css'
const Cart = () => {
    const { cart: cartList, addToCart, updateQuantityOfProduct, removeProduct } = useCart();


    return (
        <div>
            <Navbar />
            <h1 class="heading-xl text-center">{`My Cart (${cartList.length})`}</h1>
            <div class="cart">
                <div>{cartList.map(product => {
                    
                    return (
                        <CartCard product={product} updateQuantityOfProduct={updateQuantityOfProduct}  removeProduct={removeProduct} />
                    )
                })}</div>


                <div class="bill">
                    <h3 class="heading-md text-center"> Price Details</h3>
                    <hr />
                    <div class="bill-item">
                        <p class="text-sm">Price</p>
                        <p class="text-sm">Rs.1198</p>

                    </div>
                    <div class="bill-item">
                        <p class="text-sm">Discount</p>
                        <p class="text-sm">-Rs.200</p>

                    </div>
                    <hr />
                    <div class="bill-item">
                        <h3 class="heading-sm">Total</h3>
                        <h3 class="heading-sm">Rs.998</h3>

                    </div>
                    <hr />
                    <p class="text-sm">You will save Rs.200 in This order</p>
                    <button class="btn-cta">Place order</button>
                </div>
            </div>
        </div>
    );

}
export default Cart;