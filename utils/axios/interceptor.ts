// Import necessary libraries
import axios from 'axios';
import { getSession } from 'next-auth/react';

// Function to refresh tokens
const refreshTokens = async () => {
    // Fetch the refresh token from the session
    const session = await getSession();
    const refresh = session?.user.refresh;

    // Make a request to your refresh token endpoint
    const response = await axios.post<{ access: string }>('/api/v1/auth/refresh/', {
        refresh,
    });

    // Update the access token in the session
    const access = response.data.access;
    return access;
};

// Response interceptor for API calls
axios.interceptors.response.use((response) => {
    return response
}, async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
        originalRequest._retry = true;
        const access_token = await refreshTokens();
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
        return axios(originalRequest);
    }
    return Promise.reject(error);
});


export default axios;
