export type AuthUserType = {
    user: {
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        role: string;
        image: string;
        gender: string;
    },
    isLoggedIn: boolean
}