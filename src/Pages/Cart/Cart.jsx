import React from 'react'
import { Navbar } from '../../components'
import { useCart } from '../../contexts/CartContext'
import CartCard from '../../components/HorizontalCard/CartCard'
import { useWishList } from '../../contexts/WishListContext';
import { Toaster } from 'react-hot-toast';
import { getTotalPrice } from '../../Utils';
import './Cart.css'
const Cart = () => {
    const { cart: cartList,  updateQuantityOfProduct, removeProduct } = useCart();
    const {  addToWishList } = useWishList();
    const priceDetails = getTotalPrice(cartList);

    return (
        <div>
            <Navbar />
            <Toaster/>
            <h1 className="heading-xl text-center">{`My Cart (${cartList.length})`}</h1>
            <div className="cart">
                <div>{cartList.map(product => {

                    return (
                        <CartCard product={product} updateQuantityOfProduct={updateQuantityOfProduct} removeProduct={removeProduct} addToWishList={addToWishList} key={product._id}/>
                    )
                })}</div>

                {cartList.length===0?<h1 className='text-center'>You Dont have anything added to cart</h1>:
                    <div className="bill">
                        <h3 className="heading-md text-center"> Price Details</h3>
                        <hr />
                        <div className="bill-item">
                            <p className="text-sm">Price</p>
                            <p className="text-sm">{`₹${priceDetails.Originalprice}`}</p>

                        </div>
                        <div className="bill-item">
                            <p className="text-sm">Discount</p>
                            <p className="text-sm">{`- ₹${priceDetails.discount}`}</p>

                        </div>
                        <hr />
                        <div className="bill-item">
                            <h3 className="heading-sm">Total</h3>
                            <h3 className="heading-sm">{`₹${priceDetails.price}`}</h3>

                        </div>
                        <hr />
                        <p className="text-sm">You will save {` ₹${priceDetails.discount} `}in This order</p>
                        <button className="btn-cta">Place order</button>
                    </div>
                }
            </div>
        </div>
    );

}
export default Cart;