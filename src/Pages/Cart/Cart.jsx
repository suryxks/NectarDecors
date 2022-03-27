import React, { useEffect } from 'react'
import { Navbar } from '../../components'
import { useCart } from '../../contexts/CartContext'
import CartCard from '../../components/HorizontalCard/CartCard'
import './Cart.css'
const Cart = () => {
    const { cart: cartList, addToCart, updateQuantityOfProduct, removeProduct } = useCart();
    const priceDetails = cartList.reduce((acc, current) => {

        return { price: acc.price + Number(current.price), Originalprice: acc.Originalprice + Number(current.Originalprice), discount: acc.discount + (Number(current.Originalprice) - Number(current.price)) }
    },{price:0,Originalprice:0,discount:0})

    return (
        <div>
            <Navbar />
            <h1 class="heading-xl text-center">{`My Cart (${cartList.length})`}</h1>
            <div class="cart">
                <div>{cartList.map(product => {

                    return (
                        <CartCard product={product} updateQuantityOfProduct={updateQuantityOfProduct} removeProduct={removeProduct} />
                    )
                })}</div>


                <div class="bill">
                    <h3 class="heading-md text-center"> Price Details</h3>
                    <hr />
                    <div class="bill-item">
                        <p class="text-sm">Price</p>
                        <p class="text-sm">{`₹${priceDetails.Originalprice}`}</p>

                    </div>
                    <div class="bill-item">
                        <p class="text-sm">Discount</p>
                        <p class="text-sm">{`- ₹${priceDetails.discount}`}</p>

                    </div>
                    <hr />
                    <div class="bill-item">
                        <h3 class="heading-sm">Total</h3>
                        <h3 class="heading-sm">{`₹${priceDetails.price}`}</h3>

                    </div>
                    <hr />
                    <p class="text-sm">You will save {` ₹${priceDetails.discount} `}in This order</p>
                    <button class="btn-cta">Place order</button>
                </div>
            </div>
        </div>
    );

}
export default Cart;