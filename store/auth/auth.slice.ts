import { AuthUserType } from "@/types/redux/auth";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthState {
    user: {
        id: number,
        role: string,
        email: string,
        firstName: string,
        lastName: string,
        gender: string,
        image: string,
    },
    isLoggedIn: boolean
}

const initialState: AuthState = {
    user: {
        id: 0,
        role: "BUYER",
        email: "",
        firstName: "",
        lastName: "",
        gender: "",
        image: "",
    },
    isLoggedIn: false
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthentication: (state, action: PayloadAction<AuthUserType>) => {
            state.isLoggedIn = action.payload.isLoggedIn;
            state.user.id = action.payload.user.id
            state.user.email = action.payload.user.email
            state.user.firstName = action.payload.user.firstName
            state.user.lastName = action.payload.user.lastName
            state.user.image = action.payload.user.image
        }
    },
});


export const { setAuthentication } = authSlice.actions