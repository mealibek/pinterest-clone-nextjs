import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/v1";

export type SignUpType = {
    email: string,
    password: string;
    firstName: string;
    lastName: string;
}
export const signUpRequest = async (data: SignUpType) => {
    return axios.post(`${BASE_URL}/auth/create/`, data)
};

export const signInRequest = (data: {
    email: string,
    password: string
}) => {
    return fetch(`${BASE_URL}/auth/`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    })
}

export const emailCheckRequest = async (email: string) => {
    return axios.post(`${BASE_URL}/auth/email-check/`, { email });
};
