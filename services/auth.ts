import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/v1";

export type SignUpType = {
    email: string,
    password: string;
    firstname: string;
    lastname: string;
    confirmPassword: string;
}
export const signUpRequest = async (data: SignUpType) => {
    return axios.post(`${BASE_URL}/auth/create/`, {
        first_name: data.firstname,
        last_name: data.lastname,
        email: data.email,
        password: data.password
    })
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

export const getAuthInfo = (token: string) => {
    return axios.post(`${BASE_URL}/auth/info/`, null, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}
