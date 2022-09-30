import { createContext, useContext, useReducer, useEffect, useState } from 'react';
import { useAuth } from './AuthContext'
import axios from 'axios';

const CartContext = createContext(null);


export const CartProvider = ({ children }) => {
    const { isAuthenticated} = useAuth();
  
    const token = localStorage.getItem('token');
    const [cart, setCart] = useState([]);
  
 
    const getCart = async (token) => {
        try {
            const { data } = await axios.get("/api/user/cart", {
                headers: {
                    authorization: token,
                },
            });
          
            return data.cart;
        } catch (e) {
            console.log(e);
        }
    }


  
    const addToCart = async (token, product) => {
        
            try {
                const { data } = await axios.post(
                    "/api/user/cart",
                    {product} ,
                    {
                        headers: {
                            authorization: token,
                        },
                    }
                );
                
                setCart(data.cart);
                
               
            } catch (error) {
                console.log(error);

            }
        
    }
    const removeProduct = async (token, id) => {
        try {
            const { data } = await axios.delete(`/api/user/cart/${id}`, {
                headers: {
                    authorization: token,
                },
            });
            setCart(data.cart);
        } catch (error) {
            console.error(error.message);

        }
    };
    const updateQuantityOfProduct = async (token, id, type) => {
        try {
            const { data } = await axios.post(
                `/api/user/cart/${id}`,
                {
                    action: {
                        type,
                    },
                },
                {
                    headers: {
                        authorization: token,
                    },
                }
            );
            setCart(data.cart);
        } catch (error) {
            console.error(error.message);
            return;
        }
    };
    return (
        < CartContext.Provider value={{ cart, addToCart, removeProduct, updateQuantityOfProduct }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);
