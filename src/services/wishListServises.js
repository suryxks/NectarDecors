import axios from "axios";
export const addToWishListService = async (token, product) => {
    try {
        const response = await axios.post("/api/user/wishlist", { product },
            {
            headers: {
                authorization: token
            }
        });
        return response.data;
    } catch (error) {
        console.error(error)
    }

}
export const deleteFromWishListService = async (token, id) => {
    try {
        const response = await axios.delete(`/api/user/wishlist/${id}`, {
            headers: {
                authorization: token,
            },
        });
        return response.data
    } catch (error) {
        console.error(error)
    }
}