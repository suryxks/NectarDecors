import React, { useEffect } from 'react'
import { Navbar } from '../../components'
import { useCart } from '../../contexts/CartContext'
import CartCard from '../../components/HorizontalCard/CartCard'
import { useWishList } from '../../contexts/WishListContext';
import toast, { Toaster } from 'react-hot-toast';
import './Cart.css'
const Cart = () => {
    const { cart: cartList, addToCart, updateQuantityOfProduct, removeProduct } = useCart();
    const{wishList,addToWishList}=useWishList();
    const priceDetails = cartList.reduce((acc, current) => {

        return { price: acc.price + Number(current.price), Originalprice: acc.Originalprice + Number(current.Originalprice), discount: acc.discount + (Number(current.Originalprice) - Number(current.price)) }
    },{price:0,Originalprice:0,discount:0})

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
            </div>
        </div>
    );

}
export default Cart;