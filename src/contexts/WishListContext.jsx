/* eslint-disable react/prop-types */
import React,{ createContext, useContext, useState } from 'react';
import { addToWishListService ,deleteFromWishListService} from '../services';
const WishListContext = createContext(null);
export const WishListProvider = ({ children }) => {
    const [wishList, setWishList] = useState([]);
    const addToWishList = async (token, product) => {
        try {
            const data = await addToWishListService(token, product)
            console.log(data)
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
    return (
        <WishListContext.Provider value={{ wishList,addToWishList,deleteFromWishlist }}>
            {children}
        </WishListContext.Provider>
    )
}

export const useWishList=()=>useContext(WishListContext)