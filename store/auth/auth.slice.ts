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
            state.user.id = action.payload.user.id
            state.user.email = action.payload.user.email
            state.user.first_name = action.payload.user.first_name
            state.user.last_name = action.payload.user.last_name
            state.user.profile_image = action.payload.user.profile_image
        }
    },
});


export const { setAuthentication } = authSlice.actions