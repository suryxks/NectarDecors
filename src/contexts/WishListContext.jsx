import { createContext, useContext, useState } from 'react';
import axios from 'axios';
const WishListContext = createContext(null);
export const WishListProvider = ({ children }) => {
    const [wishList, setWishList] = useState([]);
    const addToWishList = async (token, product) => {
        try {
            const { data } = await axios.post(
                "/api/user/wishlist",
                { product },
                {
                    headers: {
                        authorization: token,
                    },
                }
            );
            setWishList(data.wishlist);
        } catch (error) {
            console.log(error);
        }
    }
    const deleteFromWishlist=async(token,id)=>{
        try {
            const { data } = await axios.delete(`/api/user/wishlist/${id}`, {
                headers: {
                    authorization: token,
                },
            });
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