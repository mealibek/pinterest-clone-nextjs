import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/v1";

type SignUpRequestType = {
    crd_token: string;
    email: string;
}

type SignInRequestType = {
    email: string;
    password: string;
}


type SignUpVerifyRequestType = {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
}

export const signUpVerificationVerify = (email: string) => {
    return axios.get(`${BASE_URL}/auth/signup/verification/verify?email=${email}`);
}

export const signUpVerificationSend = (data: SignUpVerifyRequestType) => {
    return axios.post(`${BASE_URL}/auth/signup/verification/send/`, data);
}

export const signUpVerificationResend = (email: string) => {
    return axios.post(`${BASE_URL}/auth/signup/verification/resend/`, {
        email,
    });
}

export const signUpVerificationDelete = (email: string) => {
    return axios.post(`${BASE_URL}/auth/signup/verification/delete/`, {
        email,
    })
}

export const signInRequest = (data: SignInRequestType) => {
    return fetch(`${BASE_URL}/auth/`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    })
}

export const signUpRequest = (data: SignUpRequestType) => {
    return axios.post(`${BASE_URL}/auth/signup/`, data)
}

export const forgotPasswordRequest = (data: { email: string }) => {
    return axios.post(`${BASE_URL}/auth/forgot-password/`, data)
}
export const emailCheckRequest = (data: { email: string }) => {
    return axios.post(`${BASE_URL}/auth/email-check/`, data)
}

export const signUpCrdTokenAndEmailVirication = (email: string, crd_token: string) => {
    return axios.get(`${BASE_URL}/auth/signup/verification/verify-email-crd-token?crd_token=${crd_token}&email=${email}`);
}

export const validateResetPasswordUserAndToken = (user: string, token: string) => {
    return axios.get(`${BASE_URL}/auth/reset-password?user=${user}&token=${token}`);
}

export const resetPasswordRequest = (user: string, token: string, password: string) => {
    return axios.post(`${BASE_URL}/auth/reset-password/`, {
        password,
        token,
        user,
    });
}

export const getAuthCredentialsByAccessToken = (access: string) => {
    return axios.get(`${BASE_URL}/auth/credentials/`, {
        headers: {
            "Authorization": `Bearer ${access}`,
            "Content-Type": "application/json"
        }
    })
}