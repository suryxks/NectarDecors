import axios from "axios";

export const loginService =async (Logincredentials) => {
    try {
        const response = await axios.post("/api/auth/login", Logincredentials);
        return response.data;
    } catch (e) {
        console.error(e);
    }
}
