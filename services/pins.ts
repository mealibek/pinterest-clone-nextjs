import axios from "axios"

const BASE_URL = "http://127.0.0.1:8000/api/v1";

export const getPins = async () => {
    return axios.get(`${BASE_URL}/pins/`);
} 