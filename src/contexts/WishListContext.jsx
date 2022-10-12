/* eslint-disable react/prop-types */
import React,{ createContext, useContext, useState } from 'react';
import { addToWishListService ,deleteFromWishListService,getWishListService} from '../services';
const WishListContext = createContext(null);
export const WishListProvider = ({ children }) => {
    const [wishList, setWishList] = useState([]);
    const addToWishList = async (token, product) => {
        try {
            const data = await addToWishListService(token, product)
            setWishList(data.wishlist);
        } catch (error) {
            console.log(error);
        }
    }
    const deleteFromWishlist=async(token,id)=>{
        try {
           const data=await deleteFromWishListService(token,id)
            setWishList(data.wishlist);
        } catch (error) {
            console.error(error.message);

        }
    }
    const getWishList = async (token) => {
        try {
            const data = await getWishListService(token)
            setWishList(data.wishlist);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <WishListContext.Provider value={{ wishList,addToWishList,deleteFromWishlist,getWishList,setWishList}}>
            {children}
        </WishListContext.Provider>
    )
}

export const useWishList=()=>useContext(WishListContext)