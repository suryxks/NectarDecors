import axios from "axios";

export const getproductsService = async () => {
    try {
        const response = await axios.get("/api/products");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getCategoriesService = async () => {
    try {
        const response = await axios.get("/api/categories");
        return response.data;
    }catch (error) {
        console.error(error)
      }
}