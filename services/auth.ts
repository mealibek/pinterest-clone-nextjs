import axios, { AxiosResponse } from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/v1";

export type SignUpType = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
};

const handleRequest = async <T>(request: Promise<AxiosResponse<T>>) => {
    try {
        const response = await request;
        return response.data;
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            // Handle specific HTTP error codes or other error conditions
            console.error("Request failed with status", error.response?.status);
            throw error;
        } else {
            // Handle other types of errors
            console.error("Request failed with error", error?.message);
            throw error;
        }
    }
};

export const signUpRequest = async (data: SignUpType) => {
    return handleRequest(axios.post(`${BASE_URL}/auth/create/`, data));
};

export const signInRequest = async (data: { email: string; password: string }) => {
    return handleRequest(axios.post(`${BASE_URL}/auth/`, data));
};

export const emailCheckRequest = async (email: string) => {
    return handleRequest(axios.post(`${BASE_URL}/auth/email-check/`, { email }));
};