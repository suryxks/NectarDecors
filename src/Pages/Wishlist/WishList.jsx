import React, {useEffect} from 'react'
import {ProductListingCard} from '../../components'
import {useWishList} from '../../contexts/WishListContext'
import {useCart} from '../../contexts/CartContext'
import toast, {Toaster} from 'react-hot-toast'
const WishList = () => {
  const {wishList, addToWishList, deleteFromWishlist, getWishList} =
    useWishList()
  const {addToCart} = useCart()
  const token = JSON.parse(localStorage.getItem('token'))
  useEffect(() => {
    getWishList(token)
  }, [])
  return (
    <div>
      <h1 data-testid="wishlist-heading">My WishList({wishList.length})</h1>
      <Toaster />
      <div className="product-listing">
        {wishList.map(product => {
          const {_id} = product
          const addProductToCart = () => {
            addToCart(token, product)
            toast.success('Item added to Cart')
          }
          const isPresentInWishList = wishList.find(item => item._id === _id)
            ? true
            : false
          const addProductToWishList = () => {
            addToWishList(token, product)
            toast.success('item added to wishlist')
          }
          const removeFromWishList = () => {
            deleteFromWishlist(token, _id)
            toast.success('item removed from wishlist')
          }
          return (
            <ProductListingCard
              _id={_id}
              key={_id}
              product={product}
              onAddtocart={addProductToCart}
              onWishListAdd={addProductToWishList}
              onWishListRemove={removeFromWishList}
              isPresentInWishList={isPresentInWishList}
            />
          )
        })}
      </div>
    </div>
  )
}
export default WishList
