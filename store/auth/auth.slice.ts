import { AuthUserType } from "@/types/redux/auth";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: AuthUserType = {
    user: {
        id: 0,
        email: "",
        first_name: "",
        last_name: "",
        profile_image: "",
    }
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthentication: (state, action: PayloadAction<AuthUserType>) => {
            state.user = { ...action.payload.user };
        }
    },
});

export const { setAuthentication } = authSlice.actions;
