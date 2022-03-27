import React from 'react'
import {Navbar ,ProductListingCard}from '../../components'
import {useWishList} from '../../contexts/WishListContext';
import { useCart } from '../../contexts/CartContext';
const WishList=()=>{
    const {wishList}=useWishList();
    const {addToCart}=useCart();
    const token=JSON.parse(localStorage.getItem('token'));
    return(
        <div>
         <Navbar/>
         <h1>My WishList ({wishList.length})</h1>
         <div className='product-listing'>
             {wishList.map(product=>{
                const {
                    _id:id,
                    title,
                    description,
                    price,
                    discount,
                    imageUrl,
                    rating,
                    Originalprice
                  } = product;
                  const addProductToCart=()=>{
                  addToCart(token, product);
                  }
                  return (
                    <ProductListingCard
                      _id={id}
                      imageUrl={imageUrl}
                      title={title}
                      price={price}
                      discount={discount}
                      description={description}
                      Originalprice={Originalprice}
                      rating={rating}
                      onAddtocart={addProductToCart}
                    />)
             })}
         </div>
        </div>
    )

}
export default WishList;