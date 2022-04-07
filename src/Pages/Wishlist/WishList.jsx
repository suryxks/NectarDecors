import React from 'react'
import {Navbar ,ProductListingCard}from '../../components'
import {useWishList} from '../../contexts/WishListContext';
import { useCart } from '../../contexts/CartContext';
import toast, { Toaster } from 'react-hot-toast';
const WishList=()=>{
    const {wishList}=useWishList();
    const {addToCart}=useCart();
    const token=JSON.parse(localStorage.getItem('token'));
   
    return(
        <div>
         <Navbar/>
         <h1>My WishList ({wishList.length})</h1>
         <Toaster/>
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
                  toast.success('Item added to Cart');
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
                      key={id}
                    />)
             })}
         </div>
        </div>
    )

}
export default WishList;