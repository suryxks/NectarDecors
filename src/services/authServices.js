import axios from "axios";

export const loginService = async (Logincredentials)=> {
    try {
        const response = await axios.post("/api/auth/login", Logincredentials);
        return response.data;
    } catch (e) {
        console.error(e);
    }
}
export const signUpService = async ({email,password}) => {
    try {
        const response=await axios.post(`/api/auth/signup`, {
            email: email,
            password: password,
        });
        return response.data
    } catch (error) {
        console.error(error);
    }
}
    