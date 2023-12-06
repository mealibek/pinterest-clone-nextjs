import { PinSchemaType } from "@/validations/pin";
import axios from "axios"
import interceptors from '@/utils/axios/interceptor';

const BASE_URL = "http://127.0.0.1:8000/api/v1";

export const getPins = async () => {
    return axios.get(`${BASE_URL}/pins/`);
}


export const createPinRequest = async (data: PinSchemaType) => {
    return interceptors.post(`${BASE_URL}/pins/`, {
        title: data.title,
        description: data.description,
        image: data.image,
        origin: data.website,
        path: data.urlPath
    });
}