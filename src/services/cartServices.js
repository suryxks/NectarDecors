import axios from "axios";

export const getCartService = async (token) => {
    try {
        const response = await axios.get("/api/user/cart", {
            headers: {
                authorization: token,
            },
        })
        return response.data;
    } catch (error) {
        console.log(error)
    }
}
export const addToCartService = async (token, product) => {
    try {
        const response = await axios.post(
            "/api/user/cart", {
                product
            }, {
                headers: {
                    authorization: token,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error(error)
    }
}
export const removeFromCartService = async (token, id) => {
    try {
        const response = await axios.delete(`/api/user/cart/${id}`, {
            headers: {
                authorization: token,
            },
        })
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
export const updateProductQuantityService = async (token, id, type) => {
    try {
        const response = await axios.post(`/api/user/cart/${id}`, {
            action: {
                type,
            },
        }, {
            headers: {
                authorization: token,
            },
        }, )
        return response.data
    } catch (error) {
        console.error(error)
    }
}